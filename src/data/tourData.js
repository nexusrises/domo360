export const tourData = {
  sala: {
    nombre: "Sala de Exhibición Premium",
    imagen: "/tour/sala.jpg",
    descripcion: "Nuestra sala principal interactiva con acabados de lujo y diseño contemporáneo.",
    hotspots: [
      {
        posicion: [12, -3, -8],
        destino: "cocina",
        texto: "Ir a la Cocina Tecnológica",
        tipo: "hotspot",
        icono: "ArrowRight",
        color: "#00f2fe",
        posicionTipo: "2d",
        escalaZoom: true,
        sombra: true
      },
      {
        posicion: [0, 8, -15],
        texto: "Iluminación Inteligente LED Integrada",
        tipo: "texto",
        colorTexto: "#ffffff",
        colorFondo: "rgba(15, 23, 42, 0.85)",
        posicionTipo: "2d",
        escala: 1.1,
        escalaZoom: true,
        sombra: true
      },
      {
        posicion: [-14, -6, -10],
        tipo: "imagen",
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop",
        ancho: 160,
        alto: 120,
        posicionTipo: "2d",
        escala: 1.0,
        escalaZoom: true,
        sombra: true
      }
    ]
  },
  cocina: {
    nombre: "Cocina / Laboratorio Tecnológico",
    imagen: "/tour/cocina.jpg",
    descripcion: "Un espacio culinario y tecnológico integrado con los más altos estándares modernos.",
    hotspots: [
      {
        posicion: [-12, -3, 8],
        destino: "sala",
        texto: "Volver a la Sala de Exhibición",
        tipo: "hotspot",
        icono: "ArrowLeft",
        color: "#8b5cf6",
        posicionTipo: "2d",
        escalaZoom: true,
        sombra: true
      },
      {
        posicion: [10, -5, -12],
        texto: "Mesada de Cuarzo Importado de Alta Resistencia",
        tipo: "texto",
        colorTexto: "#ffffff",
        colorFondo: "rgba(15, 23, 42, 0.85)",
        posicionTipo: "2d",
        escala: 1.1,
        escalaZoom: true,
        sombra: true
      },
      {
        posicion: [3, 7, -18],
        tipo: "imagen",
        url: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=400&auto=format&fit=crop",
        ancho: 160,
        alto: 120,
        posicionTipo: "2d",
        escala: 1.0,
        escalaZoom: true,
        sombra: true
      }
    ]
  }
};
