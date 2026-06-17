import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  ImageRun,
  Header,
  Footer,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  HeightRule
} from 'docx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Definición de __dirname para entornos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de archivos
const logoPath = path.join(__dirname, '../public/logo3.2.png');
const outputPath = path.join(__dirname, '../Nexus_Rise_Hoja_Membretada.docx');

console.log('Iniciando la generación de la hoja membretada en Word...');

// 1. Cargar el logotipo
let logoImageRun = null;
try {
  if (fs.existsSync(logoPath)) {
    const logoBuffer = fs.readFileSync(logoPath);
    logoImageRun = new ImageRun({
      data: logoBuffer,
      transformation: {
        width: 55,
        height: 55,
      },
    });
    console.log('Logotipo cargado correctamente.');
  } else {
    console.warn(`Advertencia: No se encontró el logo en la ruta: ${logoPath}. Se generará el documento sin imagen.`);
  }
} catch (error) {
  console.error('Error al cargar el logotipo:', error);
}

// 2. Estilo y bordes comunes
const borderNone = { style: BorderStyle.NONE, size: 0, color: "auto" };
const noBorders = {
  top: borderNone,
  bottom: borderNone,
  left: borderNone,
  right: borderNone,
};

// 3. Crear cabecera
// Tabla invisible para estructurar: Logo a la izquierda, Texto descriptivo a la derecha
const headerTable = new Table({
  width: {
    size: 100,
    type: WidthType.PERCENTAGE,
  },
  borders: noBorders,
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: { size: 50, type: WidthType.PERCENTAGE },
          borders: noBorders,
          children: [
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: logoImageRun ? [logoImageRun] : [
                new TextRun({
                  text: "[Logo Nexus Rise]",
                  bold: true,
                  color: "00F2FE",
                  font: "Arial",
                  size: 24,
                })
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 50, type: WidthType.PERCENTAGE },
          borders: noBorders,
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "NEXUS RISE\n",
                  bold: true,
                  color: "070A13",
                  font: "Arial",
                  size: 28, // 14pt
                }),
                new TextRun({
                  text: "Elevando el estándar digital corporativo",
                  color: "718096",
                  font: "Arial",
                  size: 16, // 8pt
                  italics: true,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

// Línea decorativa bicolor (Cyan y Púrpura) que simula el degradado corporativo de Nexus Rise
const decorLineTable = new Table({
  width: {
    size: 100,
    type: WidthType.PERCENTAGE,
  },
  borders: noBorders,
  rows: [
    new TableRow({
      height: {
        value: 40, // 40 dxa = 2 pt
        rule: HeightRule.EXACTLY,
      },
      children: [
        new TableCell({
          width: { size: 50, type: WidthType.PERCENTAGE },
          borders: noBorders,
          shading: {
            fill: "00F2FE", // Cyan
          },
          children: [new Paragraph({ children: [] })],
        }),
        new TableCell({
          width: { size: 50, type: WidthType.PERCENTAGE },
          borders: noBorders,
          shading: {
            fill: "A855F7", // Púrpura
          },
          children: [new Paragraph({ children: [] })],
        }),
      ],
    }),
  ],
});

// Contenedor de cabecera con espacio inferior
const documentHeader = new Header({
  children: [
    headerTable,
    new Paragraph({ children: [], spacing: { after: 120 } }), // Pequeño espacio de separación
    decorLineTable,
  ],
});

// 4. Crear pie de página
// Línea divisoria gris claro
const footerDivider = new Table({
  width: {
    size: 100,
    type: WidthType.PERCENTAGE,
  },
  borders: noBorders,
  rows: [
    new TableRow({
      height: {
        value: 10, // Muy delgada
        rule: HeightRule.EXACTLY,
      },
      children: [
        new TableCell({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: noBorders,
          shading: {
            fill: "E2E8F0", // Gris claro
          },
          children: [new Paragraph({ children: [] })],
        }),
      ],
    }),
  ],
});

// Datos de contacto en una sola línea centrada con separadores estilizados
const contactParagraph = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 120 }, // Espacio después de la línea divisoria
  children: [
    new TextRun({
      text: "📞 +51 915 910 002  ",
      color: "4A5568",
      font: "Arial",
      size: 18, // 9pt
    }),
    new TextRun({
      text: " • ",
      color: "A855F7", // Separador en púrpura
      bold: true,
      font: "Arial",
      size: 18,
    }),
    new TextRun({
      text: "  ✉ contacto@nexusrise.com  ",
      color: "4A5568",
      font: "Arial",
      size: 18,
    }),
    new TextRun({
      text: " • ",
      color: "00F2FE", // Separador en cyan
      bold: true,
      font: "Arial",
      size: 18,
    }),
    new TextRun({
      text: "  📍 Juliaca, Perú  ",
      color: "4A5568",
      font: "Arial",
      size: 18,
    }),
    new TextRun({
      text: " • ",
      color: "A855F7",
      bold: true,
      font: "Arial",
      size: 18,
    }),
    new TextRun({
      text: "  🌐 www.nexusrise.com",
      color: "4A5568",
      font: "Arial",
      size: 18,
    }),
  ],
});

const documentFooter = new Footer({
  children: [
    footerDivider,
    contactParagraph,
  ],
});

// 5. Cuerpo del documento (Texto de plantilla/ejemplo)
const bodyParagraphs = [
  // Fecha
  new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { before: 360, after: 360 }, // Espacio antes y después
    children: [
      new TextRun({
        text: "Juliaca, 10 de junio de 2026",
        font: "Arial",
        size: 22, // 11pt
        color: "2D3748",
      }),
    ],
  }),

  // Destinatario
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60 },
    children: [
      new TextRun({
        text: "Señor(a):",
        bold: true,
        font: "Arial",
        size: 22,
        color: "070A13",
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60 },
    children: [
      new TextRun({
        text: "[Nombre del Destinatario]",
        bold: true,
        font: "Arial",
        size: 22,
        color: "070A13",
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60 },
    children: [
      new TextRun({
        text: "[Cargo / Empresa del Destinatario]",
        font: "Arial",
        size: 22,
        color: "4A5568",
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 240 },
    children: [
      new TextRun({
        text: "Presente.-",
        bold: true,
        font: "Arial",
        size: 22,
        color: "070A13",
      }),
    ],
  }),

  // Referencia
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 360 },
    children: [
      new TextRun({
        text: "Asunto: ",
        bold: true,
        font: "Arial",
        size: 22,
        color: "070A13",
      }),
      new TextRun({
        text: "Propuesta de Desarrollo Web Inmersivo y Recorridos Virtuales 360°",
        bold: true,
        font: "Arial",
        size: 22,
        color: "3B82F6", // Azul acento
        underline: {},
      }),
    ],
  }),

  // Saludo
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 240 },
    children: [
      new TextRun({
        text: "De mi consideración:",
        font: "Arial",
        size: 22,
        color: "2D3748",
      }),
    ],
  }),

  // Párrafo 1
  new Paragraph({
    alignment: AlignmentType.JUSTIFY,
    spacing: { after: 240 },
    lineSpacing: { before: 240, line: 360 }, // Interlineado de 1.5
    children: [
      new TextRun({
        text: "Es un placer dirigirnos a usted para saludarle cordialmente en representación de ",
        font: "Arial",
        size: 22,
        color: "2D3748",
      }),
      new TextRun({
        text: "Nexus Rise",
        bold: true,
        color: "3B82F6",
        font: "Arial",
        size: 22,
      }),
      new TextRun({
        text: ", una firma líder especializada en elevar el estándar digital de las marcas a través de experiencias web inmersivas, desarrollo de software premium a medida y recorridos virtuales interactivos en 360 grados.",
        font: "Arial",
        size: 22,
        color: "2D3748",
      }),
    ],
  }),

  // Párrafo 2
  new Paragraph({
    alignment: AlignmentType.JUSTIFY,
    spacing: { after: 240 },
    lineSpacing: { before: 240, line: 360 },
    children: [
      new TextRun({
        text: "Nuestra propuesta de valor radica en fusionar el diseño visual de primer nivel con tecnologías web de última generación. Desarrollamos soluciones interactivas que no solo atraen la atención del usuario en un primer vistazo, sino que también mejoran el engagement y optimizan los flujos de conversión de su negocio, brindando una experiencia premium en cualquier dispositivo.",
        font: "Arial",
        size: 22,
        color: "2D3748",
      }),
    ],
  }),

  // Párrafo 3
  new Paragraph({
    alignment: AlignmentType.JUSTIFY,
    spacing: { after: 360 },
    lineSpacing: { before: 240, line: 360 },
    children: [
      new TextRun({
        text: "Agradecemos de antemano el tiempo dedicado a revisar esta propuesta y quedamos a su entera disposición para agendar una demostración interactiva o resolver cualquier inquietud.",
        font: "Arial",
        size: 22,
        color: "2D3748",
      }),
    ],
  }),

  // Despedida
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 360, after: 600 }, // Espacio para la firma
    children: [
      new TextRun({
        text: "Atentamente,",
        font: "Arial",
        size: 22,
        color: "2D3748",
      }),
    ],
  }),

  // Firma
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60 },
    children: [
      new TextRun({
        text: "_______________________________________",
        color: "CBD5E0",
        font: "Arial",
        size: 22,
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60 },
    children: [
      new TextRun({
        text: "Angel Apaza",
        bold: true,
        font: "Arial",
        size: 22,
        color: "070A13",
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.LEFT,
    children: [
      new TextRun({
        text: "Director de Tecnología, Nexus Rise",
        font: "Arial",
        size: 20,
        color: "718096",
      }),
    ],
  }),
];

// 6. Crear el Documento
const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 1440, // 2.54 cm
            bottom: 1440, // 2.54 cm
            left: 1700, // ~3 cm
            right: 1700, // ~3 cm
          },
        },
      },
      headers: {
        default: documentHeader,
      },
      footers: {
        default: documentFooter,
      },
      children: bodyParagraphs,
    },
  ],
});

// 7. Empacar y escribir el archivo
Packer.toBuffer(doc)
  .then((buffer) => {
    fs.writeFileSync(outputPath, buffer);
    console.log(`¡Éxito! Hoja membretada creada correctamente en: ${outputPath}`);
  })
  .catch((err) => {
    console.error('Error al generar el documento de Word:', err);
  });
