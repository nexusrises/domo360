import React, { useMemo, useState } from 'react';
import * as THREE from 'three';
import { Html, Line } from '@react-three/drei';

/**
 * Función para calcular la extrusión multicapa de volumen 3D, contorno y sombra nítida
 */
const build3DTextShadow = ({ volumen3D = 4, direccion3D = 45, colorCanto = '#020617', strokeGrosor = 1, colorStroke = '#000000', sombra = true }) => {
  const shadows = [];
  const vol = Number(volumen3D) || 0;
  const stroke = Number(strokeGrosor) || 0;
  const angleDeg = Number(direccion3D ?? 45);
  const angleRad = (angleDeg * Math.PI) / 180;
  const cosA = Math.cos(angleRad);
  const sinA = Math.sin(angleRad);

  if (stroke > 0) {
    for (let x = -stroke; x <= stroke; x++) {
      for (let y = -stroke; y <= stroke; y++) {
        if (x !== 0 || y !== 0) shadows.push(`${x}px ${y}px 0 ${colorStroke}`);
      }
    }
  }
  if (vol > 0) {
    for (let i = 1; i <= vol; i++) {
      const offsetX = (i * cosA).toFixed(2);
      const offsetY = (i * sinA).toFixed(2);
      shadows.push(`${offsetX}px ${offsetY}px 0 ${colorCanto}`);
    }
  }
  if (sombra) {
    const offset = vol > 0 ? vol + 3 : 4;
    const shadowX = (offset * cosA).toFixed(2);
    const shadowY = (offset * sinA).toFixed(2);
    const blurRadius = (offset * 1.5).toFixed(1);
    shadows.push(`${shadowX}px ${shadowY}px ${blurRadius}px rgba(0, 0, 0, 0.75)`);
  }
  return shadows.length > 0 ? shadows.join(', ') : 'none';
};

/**
 * Triangula un polígono 3D arbitrario proyectándolo sobre su plano óptimo
 */
function createPolygonGeometry(vertices3D) {
  if (!vertices3D || vertices3D.length < 3) return null;

  const points3D = vertices3D.map(v => new THREE.Vector3(v[0], v[1], v[2]));

  // Calcular centroide
  const center = new THREE.Vector3();
  points3D.forEach(p => center.add(p));
  center.divideScalar(points3D.length);

  // Calcular vector normal promedio del polígono
  const normal = new THREE.Vector3();
  for (let i = 0; i < points3D.length; i++) {
    const current = points3D[i];
    const next = points3D[(i + 1) % points3D.length];
    normal.x += (current.y - next.y) * (current.z + next.z);
    normal.y += (current.z - next.z) * (current.x + next.x);
    normal.z += (current.x - next.x) * (current.y + next.y);
  }
  normal.normalize();

  // Crear base ortogonal para proyectar 3D a 2D
  let u = new THREE.Vector3(1, 0, 0);
  if (Math.abs(normal.dot(u)) > 0.9) {
    u = new THREE.Vector3(0, 1, 0);
  }
  const vAxis = new THREE.Vector3().crossVectors(normal, u).normalize();
  const uAxis = new THREE.Vector3().crossVectors(vAxis, normal).normalize();

  // Proyectar a 2D
  const points2D = points3D.map(p => {
    const rel = new THREE.Vector3().subVectors(p, center);
    return new THREE.Vector2(rel.dot(uAxis), rel.dot(vAxis));
  });

  // Triangular con Earcut de Three.js
  const triangles = THREE.ShapeUtils.triangulateShape(points2D, []);

  // Construir BufferGeometry
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const uvs = [];

  // Añadir vértices según índices de triángulos
  for (let i = 0; i < triangles.length; i++) {
    const tri = triangles[i];
    for (let j = 0; j < 3; j++) {
      const p = points3D[tri[j]];
      positions.push(p.x, p.y, p.z);
      
      // UVs normalizadas aproximadas
      const p2 = points2D[tri[j]];
      uvs.push((p2.x + 10) / 20, (p2.y + 10) / 20);
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();

  return geometry;
}

/**
 * Componente interactivo para polígonos y líneas 3D sobre la esfera
 */
export default function Polygon3D({
  vertices = [],
  color = '#22c55e',
  opacidad = 0.45,
  colorBorde = '#ffffff',
  grosorBorde = 2,
  esLinea = false,
  isLinea = false,
  isSelected = false,
  isEditor = false,
  mostrarEtiqueta = true,
  fontSize,
  colorTexto,
  colorFondo,
  fondoTransparente,
  fuente,
  mostrarTextoSiempre = true,
  negrita,
  cursiva,
  posicionTipo = '2d',
  escalaZoom = false,
  escala = 1.0,
  sombra = true,
  rotacion = 0,
  inclinacion = 0,
  medidasLados = [],
  medidasEstilo = {},
  onSelect,
  onVertexDragStart,
  datosLote = {},
  texto,
  manzana,
  lote,
  estado,
  precio,
  area,
  index
}) {
  const [hovered, setHovered] = useState(false);
  const lineaActiva = esLinea || isLinea;
  const infoLote = {
    texto,
    manzana,
    lote,
    estado,
    precio,
    area,
    ...datosLote
  };

  // Geometría del polígono relleno
  const polygonGeometry = useMemo(() => {
    if (lineaActiva || !vertices || vertices.length < 3) return null;
    try {
      return createPolygonGeometry(vertices);
    } catch (e) {
      console.warn('Error triangulando polígono 3D:', e);
      return null;
    }
  }, [vertices, lineaActiva]);

  // Puntos 3D para la línea perimétrica con Line de Drei (soporta linewidth en px real y uniones limpias)
  const linePoints = useMemo(() => {
    if (!vertices || vertices.length < 2) return null;
    // Elevar 0.3% hacia el centro de la cámara (0,0,0) para garantizar que el trazo se dibuje limpio sobre el relleno
    const pts = vertices.map(v => new THREE.Vector3(v[0] * 0.997, v[1] * 0.997, v[2] * 0.997));
    if (!lineaActiva && pts.length >= 3) {
      pts.push(pts[0].clone()); // Cerrar bucle continuo
    }
    return pts;
  }, [vertices, lineaActiva]);

  // Geometría de tubo para líneas gruesas reales visibles en WebGL
  const tubeGeometry = useMemo(() => {
    if (!lineaActiva || !vertices || vertices.length < 2) return null;
    try {
      const pts = vertices.map(v => new THREE.Vector3(v[0], v[1], v[2]));
      const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.0);
      const radio = Math.max(0.04, ((grosorBorde || 3) * 0.025));
      return new THREE.TubeGeometry(curve, Math.max(16, pts.length * 10), radio, 8, false);
    } catch (e) {
      console.warn("Error creando tubo de línea 3D:", e);
      return null;
    }
  }, [vertices, lineaActiva, grosorBorde]);

  // Centroide para ubicar tooltip o etiqueta
  const centerPos = useMemo(() => {
    if (!vertices || vertices.length === 0) return [0, 0, 0];
    const c = new THREE.Vector3();
    vertices.forEach(v => c.add(new THREE.Vector3(v[0], v[1], v[2])));
    c.divideScalar(vertices.length);
    // Levantar sutilmente hacia la cámara para evitar z-fighting
    return [c.x * 0.99, c.y * 0.99, c.z * 0.99];
  }, [vertices]);

  const activeLineColor = infoLote?.color || color || colorBorde || '#f59e0b';
  const fillColor = infoLote?.color || color;
  const fillOpacity = isSelected ? Math.min(1.0, opacidad + 0.2) : (hovered ? Math.min(1.0, opacidad + 0.15) : opacidad);
  const borderColor = lineaActiva 
    ? activeLineColor 
    : (colorBorde || (isSelected ? '#fbbf24' : (hovered ? '#ffffff' : '#ffffff')));

  // Calcular las medidas perimetrales (textos en cada lado del polígono)
  const medidasCalculadas = useMemo(() => {
    if (!vertices || vertices.length < 2 || !medidasLados || !Array.isArray(medidasLados)) {
      return [];
    }

    const points3D = vertices.map(v => new THREE.Vector3(v[0], v[1], v[2]));
    const numPoints = points3D.length;
    const numEdges = lineaActiva ? numPoints - 1 : numPoints;

    // Centroide del polígono
    const center = new THREE.Vector3();
    points3D.forEach(p => center.add(p));
    center.divideScalar(numPoints);

    // Normal del polígono
    const normal = new THREE.Vector3();
    for (let i = 0; i < points3D.length; i++) {
      const current = points3D[i];
      const next = points3D[(i + 1) % points3D.length];
      normal.x += (current.y - next.y) * (current.z + next.z);
      normal.y += (current.z - next.z) * (current.x + next.x);
      normal.z += (current.x - next.x) * (current.y + next.y);
    }
    if (normal.lengthSq() < 0.0001) normal.set(0, 1, 0);
    normal.normalize();

    // Asegurar que la normal apunte hacia el interior de la esfera (hacia el punto de vista 0,0,0)
    if (normal.dot(center) > 0) {
      normal.negate();
    }

    const results = [];
    const offsetBase = typeof medidasEstilo?.offset === 'number' ? medidasEstilo.offset : 0.35;

    for (let i = 0; i < numEdges; i++) {
      const configLado = medidasLados[i];
      if (!configLado || !configLado.texto || !configLado.texto.trim()) {
        continue; // Si no tiene texto, no se dibuja nada
      }

      const pA = points3D[i];
      const pB = points3D[(i + 1) % numPoints];

      // Punto medio del lado
      const mid = new THREE.Vector3().addVectors(pA, pB).multiplyScalar(0.5);

      // Tangente (vector a lo largo de la línea del lado)
      const tangent = new THREE.Vector3().subVectors(pB, pA);
      if (tangent.lengthSq() < 0.0001) continue;
      tangent.normalize();

      // Perpendicular en el plano del polígono apuntando al EXTERIOR
      let outVec = new THREE.Vector3().crossVectors(tangent, normal).normalize();
      const fromCenter = new THREE.Vector3().subVectors(mid, center);
      if (outVec.dot(fromCenter) < 0) {
        outVec.negate();
      }

      // Si el usuario configuró 'interior', invertimos la dirección
      if (configLado.lado === 'interior') {
        outVec.negate();
      }

      // Separación individual de este lado (o fallback al estilo general)
      const offsetLado = typeof configLado.offset === 'number' ? configLado.offset : offsetBase;

      // Posición final del texto en el espacio 3D
      const textPos = mid.clone().addScaledVector(outVec, offsetLado);
      // Elevar sutilmente hacia el centro de la escena para evitar superposición con el piso
      textPos.multiplyScalar(0.995);

      // Dirección de lectura del texto
      let xDir = tangent.clone();
      let yDir = outVec.clone();

      if (configLado.invertido) {
        xDir.negate();
        yDir.negate();
      }

      const zDir = new THREE.Vector3().crossVectors(xDir, yDir).normalize();

      // Matriz ortonormal perfecta
      const m = new THREE.Matrix4().makeBasis(xDir, yDir, zDir);
      const quat = new THREE.Quaternion().setFromRotationMatrix(m);

      // Tamaño individual de este lado (o fallback al estilo general)
      const fontSizeLado = typeof configLado.fontSize === 'number' ? configLado.fontSize : (medidasEstilo?.fontSize || 14);

      // Estilo 3D idéntico al solicitado
      const style = {
        color: medidasEstilo?.colorTexto || '#fbff00',
        fontSize: `${fontSizeLado}px`,
        fontWeight: medidasEstilo?.negrita !== false ? 'bold' : 'normal',
        fontFamily: medidasEstilo?.fuente ? `'${medidasEstilo.fuente}', sans-serif` : "'Montserrat', sans-serif",
        whiteSpace: 'pre-line',
        textAlign: 'center',
        width: 'max-content',
        textShadow: build3DTextShadow({
          volumen3D: medidasEstilo?.volumen3D ?? 5,
          strokeGrosor: medidasEstilo?.strokeGrosor ?? 1,
          colorCanto: medidasEstilo?.colorCanto || '#020617',
          colorStroke: medidasEstilo?.colorStroke || '#000000',
          sombra: medidasEstilo?.sombra !== false
        }),
        letterSpacing: (medidasEstilo?.volumen3D > 0) ? '0.05em' : 'normal'
      };

      results.push({
        index: i,
        texto: configLado.texto,
        posicion: [textPos.x, textPos.y, textPos.z],
        quaternion: quat,
        estilo: style
      });
    }

    return results;
  }, [vertices, medidasLados, medidasEstilo, lineaActiva]);

  // Renderizar la etiqueta con orientación 3D y estilos cuando aplica
  const renderLabel = () => {
    const hasLabelText = infoLote?.lote || infoLote?.manzana || infoLote?.texto;
    if (!hasLabelText || mostrarEtiqueta === false) return null;

    if (lineaActiva) {
      const isTransform = posicionTipo === 'piso' || posicionTipo === 'muro';
      const labelText = infoLote?.texto || 'Tramo de calle';
      
      const labelStyle = {
        color: colorTexto || '#ffffff',
        backgroundColor: fondoTransparente ? 'transparent' : (colorFondo || '#f59e0b'),
        boxShadow: sombra ? '0 12px 24px rgba(0,0,0,0.5)' : 'none',
        fontSize: `${fontSize || 16}px`,
        fontWeight: negrita !== false ? 'bold' : 'normal',
        fontStyle: cursiva ? 'italic' : 'normal',
        fontFamily: fuente ? `'${fuente}', sans-serif` : "'Montserrat', sans-serif",
        opacity: opacidad ?? 1.0,
        transform: isTransform ? undefined : `scale(${escala ?? 1.0}) rotateZ(${inclinacion ?? 0}deg) rotateX(${rotacion ?? 0}deg)`,
        whiteSpace: 'pre-line'
      };

      return (
        <group position={centerPos}>
          <Html 
            center 
            distanceFactor={20} 
            zIndexRange={[45, 0]}
            transform={isTransform}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (onSelect) onSelect(index);
              }}
              style={labelStyle}
              className={`px-3 py-1.5 rounded-xl border border-white/20 backdrop-blur-md text-center pointer-events-auto cursor-pointer select-none whitespace-nowrap shadow-xl leading-tight ${
                isSelected ? 'ring-2 ring-amber-400' : ''
              }`}
            >
              <span>{labelText}</span>
            </div>
          </Html>
        </group>
      );
    }

    // Polígono clásico (Lote)
    return (
      <group position={centerPos}>
        <Html center distanceFactor={22} zIndexRange={[40, 0]}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (onSelect) onSelect(index);
            }}
            className={`px-2 py-1 rounded-xl backdrop-blur-md border text-center transition-all duration-200 pointer-events-auto cursor-pointer select-none whitespace-nowrap shadow-xl ${
              isSelected
                ? 'bg-amber-500 text-slate-950 border-amber-300 scale-110 font-bold'
                : 'bg-slate-900/85 text-white border-white/20 hover:border-amber-400/50'
            }`}
          >
            {infoLote?.manzana && infoLote?.lote ? (
              <div className="text-[10px] font-bold leading-tight">
                <span>Mz {infoLote.manzana} - Lte {infoLote.lote}</span>
                {infoLote.estado && (
                  <span className="block text-[8px] font-medium mt-0.5" style={{ color: isSelected ? '#000000' : (infoLote.color || '#22c55e') }}>
                    ● {infoLote.estado}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-[10px] font-semibold">{infoLote?.texto || `Polígono #${index + 1}`}</span>
            )}
          </div>
        </Html>
      </group>
    );
  };

  return (
    <group>
      {/* 1. Malla 3D del Polígono con Relleno Translúcido */}
      {!lineaActiva && polygonGeometry && (
        <mesh
          geometry={polygonGeometry}
          onClick={(e) => {
            e.stopPropagation();
            if (onSelect) onSelect(index);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
        >
          <meshBasicMaterial
            color={fillColor}
            transparent={true}
            opacity={fillOpacity}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* 2. Línea perimétrica con grosor en px real y esquinas perfectamente unidas */}
      {lineaActiva && tubeGeometry ? (
        <mesh
          geometry={tubeGeometry}
          onClick={(e) => {
            e.stopPropagation();
            if (onSelect) onSelect(index);
          }}
        >
          <meshBasicMaterial
            color={activeLineColor}
            transparent={true}
            opacity={0.98}
            depthTest={true}
          />
        </mesh>
      ) : (
        linePoints && (
          <Line
            points={linePoints}
            color={borderColor}
            lineWidth={Math.max(1, isSelected ? ((Number(grosorBorde) || 2) + 1.5) : (Number(grosorBorde) || 2))}
            transparent={true}
            opacity={0.95}
            depthTest={true}
          />
        )
      )}

      {/* 3. Vértices Editables / Tiradores en Modo Editor (cuando está seleccionado) */}
      {isEditor && isSelected && vertices.map((v, vIdx) => (
        <group key={vIdx} position={[v[0], v[1], v[2]]}>
          <Html center distanceFactor={18} zIndexRange={[60, 0]}>
            <div
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onVertexDragStart) onVertexDragStart(index, vIdx);
              }}
              className="w-5 h-5 rounded-full bg-amber-400 hover:bg-amber-300 border-2 border-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.8)] cursor-grab active:cursor-grabbing flex items-center justify-center select-none group/pin pointer-events-auto"
              title={`Vértice #${vIdx + 1} (Arrastra con el ratón para ubicar en la calle/terreno)`}
            >
              <span className="text-[9px] font-mono font-black text-slate-950">{vIdx + 1}</span>
            </div>
          </Html>
        </group>
      ))}

      {/* 4. Etiqueta / Tooltip informativo en el Centroide */}
      {renderLabel()}

      {/* 5. Textos de Medidas Perimetrales anclados directamente al suelo */}
      {medidasCalculadas.map((medida) => (
        <group key={`medida-${medida.index}`} position={medida.posicion} quaternion={medida.quaternion}>
          <Html
            center
            transform
            distanceFactor={20}
            zIndexRange={[45, 0]}
          >
            <div
              className="flex items-center justify-center select-none pointer-events-none"
              style={medida.estilo}
            >
              <span className="inline-block">{medida.texto}</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
