export default {
  global: {
    Name: 'Fundamentos institucionales y gestión de información en el SENA',
    Description:
      'Este componente formativo aborda el origen, evolución, naturaleza y organización institucional del SENA; los fundamentos de la Formación Profesional Integral y su relación con el trabajo; el marco normativo y de integridad institucional; la gestión de información y la atención de requerimientos; y los elementos relacionados con calidad, seguimiento y mejora continua.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos institucionales del SENA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Origen y evolución histórica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Naturaleza jurídica y financiación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Misión, visión y valores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructura y organización institucional',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Procesos institucionales del SENA',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Formación Profesional Integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Naturaleza y concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios y características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Formación y mundo laboral',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistema educativo y productivo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Ciencia, tecnología e innovación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normativa e integridad institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Marco normativo del SENA',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estatuto de Formación Profesional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Procesos y procedimientos institucionales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Gestión documental e información',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Códigos de integridad',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de información institucional ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Información y fuentes institucionales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sistemas y aplicativos institucionales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Manejo seguro de información',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Canales y flujos informativos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Gestión de requerimientos institucionales',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Calidad y mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Sistema Integrado de Gestión',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Seguimiento, control y evaluación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Gestión del riesgo institucional',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Acciones preventivas y correctivas',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Mejora de procesos institucionales',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Medida orientada a intervenir las causas de una situación identificada que afecta el desarrollo adecuado de un proceso, con el propósito de evitar que vuelva a presentarse.',
    },
    {
      termino: 'Acción preventiva',
      significado:
        'Medida adoptada para anticipar situaciones que pueden afectar un proceso o resultado y reducir la posibilidad de que ocurran.',
    },
    {
      termino: 'Autocontrol',
      significado:
        'Capacidad de verificar las propias actuaciones y responsabilidades para asegurar el cumplimiento de procedimientos, lineamientos y resultados esperados.',
    },
    {
      termino: 'Canal de atención',
      significado:
        'Medio institucional utilizado para recibir, tramitar o comunicar información y requerimientos de acuerdo con los procedimientos establecidos.',
    },
    {
      termino: 'Estructura organizacional',
      significado:
        'Forma en que se distribuyen los niveles, dependencias, funciones y responsabilidades dentro de una entidad para desarrollar su gestión.',
    },
    {
      termino: 'Formación Profesional Integral',
      significado:
        'Proceso educativo teórico-práctico de carácter integral que articula conocimientos técnicos y tecnológicos con actitudes y valores para actuar en el mundo del trabajo y de la vida.',
    },
    {
      termino: 'Fuente institucional',
      significado:
        'Medio, documento, dependencia o sistema autorizado del cual procede información relacionada con los procesos, servicios, normas o actuaciones de la entidad.',
    },
    {
      termino: 'Gestión de información institucional',
      significado:
        'Conjunto de acciones destinadas a consultar, verificar, clasificar, utilizar, proteger y comunicar información necesaria para el desarrollo de los procesos institucionales.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Proceso mediante el cual se identifican, analizan y controlan situaciones que pueden afectar el cumplimiento de los objetivos o el desarrollo adecuado de los procesos.',
    },
    {
      termino: 'Indicador de calidad',
      significado:
        'Referente de medición que permite obtener información sobre el comportamiento o resultado de un aspecto de la gestión para apoyar su seguimiento y evaluación.',
    },
    {
      termino: 'Integridad institucional',
      significado:
        'Actuación coherente con los principios, valores, normas y responsabilidades que orientan el servicio público y la gestión de la entidad.',
    },
    {
      termino: 'Normativa institucional',
      significado:
        'Conjunto de disposiciones legales, reglamentarias e internas que establecen condiciones, responsabilidades y lineamientos para el funcionamiento de la entidad.',
    },
    {
      termino: 'Proceso institucional',
      significado:
        'Conjunto articulado de actividades y responsabilidades orientadas a generar resultados relacionados con los objetivos y funciones de la entidad.',
    },
    {
      termino: 'Procedimiento institucional',
      significado:
        'Secuencia definida de actividades que establece cómo debe desarrollarse una actuación dentro de un proceso institucional.',
    },
    {
      termino: 'Requerimiento institucional',
      significado:
        'Solicitud, consulta o necesidad de información que debe ser analizada, gestionada o direccionada de acuerdo con las competencias y procedimientos de la entidad.',
    },
    {
      termino: 'Sistema de información institucional',
      significado:
        'Conjunto organizado de recursos tecnológicos y datos que permite registrar, consultar, actualizar o gestionar información asociada con los procesos institucionales.',
    },
    {
      termino: 'Sistema Integrado de Gestión y Autocontrol',
      significado:
        'Referente institucional que articula la gestión, el seguimiento, el control y la mejora de los procesos para contribuir al cumplimiento de los objetivos de la entidad.',
    },
    {
      termino: 'Trabajo productivo',
      significado:
        'Principio de la Formación Profesional Integral que relaciona el proceso formativo con el mundo del trabajo y las necesidades de los sectores productivos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Posibilidad de identificar y seguir las actuaciones, registros o evidencias generadas durante el desarrollo de un proceso o la gestión de un requerimiento.',
    },
    {
      termino: 'Vigencia de información',
      significado:
        'Condición que permite establecer que una información, norma, procedimiento o documento continúa actualizado y aplicable al momento de su consulta o utilización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1994). Ley 119 de 1994, por la cual se reestructura el Servicio Nacional de Aprendizaje, SENA, se deroga el Decreto 2149 de 1992 y se dictan otras disposiciones. Diario Oficial No. 41.216.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=14930',
    },
    {
      referencia:
        'Congreso de Colombia. (2006). Ley 1064 de 2006, por la cual se dictan normas para el apoyo y fortalecimiento de la educación para el trabajo y el desarrollo humano establecida como educación no formal en la Ley General de Educación.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=20854',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial No. 48.587.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Congreso de Colombia. (2014). Ley 1712 de 2014, por medio de la cual se crea la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional y se dictan otras disposiciones. Diario Oficial No. 49.084.',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=56882',
    },
    {
      referencia: 'Constitución Política de Colombia [Const.]. (1991).',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1957). Decreto 118 de 1957, por el cual se decretan aumentos de salarios, se establece el subsidio familiar y se crea el Servicio Nacional de Aprendizaje, SENA.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65462',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2004). Decreto 249 de 2004, por el cual se modifica la estructura del Servicio Nacional de Aprendizaje, SENA. Diario Oficial No. 45.445.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=33418',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (1997). Acuerdo 8 de 1997, por medio del cual se adopta el Estatuto de la Formación Profesional del Servicio Nacional de Aprendizaje. Consejo Directivo Nacional.',
      link: 'https://repositorio.sena.edu.co/handle/11404/1939',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2018). Acuerdo 5 de 2018, por el cual se emiten disposiciones sobre la Política de Integridad y el Código de Integridad para el SENA y se deroga el Acuerdo 002 de 2017. Consejo Directivo Nacional.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (s. f.). Normograma del Servicio Nacional de Aprendizaje (SENA).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
