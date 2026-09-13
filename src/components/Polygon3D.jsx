import React, { useMemo, useState } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

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
  isSelected = false,
  isEditor = false,
  onSelect,
  onVertexDragStart,
  datosLote = {},
  index
}) {
  const [hovered, setHovered] = useState(false);

  // Geometría del polígono relleno
  const polygonGeometry = useMemo(() => {
    if (esLinea || !vertices || vertices.length < 3) return null;
    try {
      return createPolygonGeometry(vertices);
    } catch (e) {
      console.warn('Error triangulando polígono 3D:', e);
      return null;
    }
  }, [vertices, esLinea]);

  // Geometría de las líneas de borde
  const lineGeometry = useMemo(() => {
    if (!vertices || vertices.length < 2) return null;
    const pts = vertices.map(v => new THREE.Vector3(v[0], v[1], v[2]));
    if (!esLinea && pts.length >= 3) {
      pts.push(pts[0].clone()); // Cerrar el polígono
    }
    const geom = new THREE.BufferGeometry().setFromPoints(pts);
    return geom;
  }, [vertices, esLinea]);

  // Centroide para ubicar tooltip o etiqueta
  const centerPos = useMemo(() => {
    if (!vertices || vertices.length === 0) return [0, 0, 0];
    const c = new THREE.Vector3();
    vertices.forEach(v => c.add(new THREE.Vector3(v[0], v[1], v[2])));
    c.divideScalar(vertices.length);
    // Levantar sutilmente hacia la cámara para evitar z-fighting
    return [c.x * 0.99, c.y * 0.99, c.z * 0.99];
  }, [vertices]);

  const fillColor = datosLote?.color || color;
  const fillOpacity = isSelected ? Math.min(1.0, opacidad + 0.2) : (hovered ? Math.min(1.0, opacidad + 0.15) : opacidad);
  const borderColor = isSelected ? '#fbbf24' : (hovered ? '#ffffff' : colorBorde);

  return (
    <group>
      {/* 1. Malla 3D del Polígono con Relleno Translúcido */}
      {!esLinea && polygonGeometry && (
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

      {/* 2. Línea perimétrica de borde */}
      {lineGeometry && (
        <line geometry={lineGeometry}>
          <lineBasicMaterial
            color={borderColor}
            linewidth={isSelected ? (grosorBorde + 1) : grosorBorde}
            transparent={true}
            opacity={0.95}
            depthTest={true}
          />
        </line>
      )}

      {/* 3. Vértices Editables / Tiradores en Modo Editor (cuando está seleccionado) */}
      {isEditor && isSelected && vertices.map((v, vIdx) => (
        <group key={vIdx} position={[v[0], v[1], v[2]]}>
          <Html center distanceFactor={18} zIndexRange={[60, 0]}>
            <div
              onPointerDown={(e) => {
                e.stopPropagation();
                if (onVertexDragStart) onVertexDragStart(index, vIdx);
              }}
              className="w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-950 shadow-xl cursor-grab active:cursor-grabbing hover:scale-125 transition-transform flex items-center justify-center select-none"
              title={`Vértice #${vIdx + 1} (Arrastra para mover)`}
            >
              <span className="text-[8px] font-mono font-bold text-slate-950">{vIdx + 1}</span>
            </div>
          </Html>
        </group>
      ))}

      {/* 4. Etiqueta / Tooltip informativo en el Centroide */}
      {(datosLote?.lote || datosLote?.manzana || datosLote?.texto) && (
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
              {datosLote?.manzana && datosLote?.lote ? (
                <div className="text-[10px] font-bold leading-tight">
                  <span>Mz {datosLote.manzana} - Lte {datosLote.lote}</span>
                  {datosLote.estado && (
                    <span className="block text-[8px] font-medium mt-0.5" style={{ color: isSelected ? '#000000' : (datosLote.color || '#22c55e') }}>
                      ● {datosLote.estado}
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-[10px] font-semibold">{datosLote?.texto || `Polígono #${index + 1}`}</span>
              )}
            </div>
          </Html>
        </group>
      )}
    </group>
  );
}
