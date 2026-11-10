export default {
  global: {
    Name: 'Control de calidad, conservación y elaboración de derivados lácteos',
    Description:
      'Este componente formativo orienta al aprendiz en la aplicación de controles básicos de calidad sobre la leche fresca y en el reconocimiento de las condiciones necesarias para su adecuada conservación y transformación. A lo largo del componente se abordan pruebas fisicoquímicas, prácticas seguras de laboratorio, métodos de conservación, higiene durante el procesamiento y principios de elaboración de productos como leches fermentadas, yogur y quesos. De esta manera, el aprendiz podrá relacionar la calidad de la materia prima con las condiciones de procesamiento y con la obtención de derivados lácteos seguros, estables y con características adecuadas para su consumo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
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
        titulo: 'Control de calidad fisicoquímico de la leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis fisicoquímico y criterios de calidad ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Pruebas de calidad: alcohol, acidez titulable, harinas o féculas y reductasa ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Laboratorio y conservación de la leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Seguridad, equipos y buenas prácticas de laboratorio ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos y tratamientos de conservación de la leche ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Higiene y cuidado de los productos lácteos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Higiene y buenas prácticas de manufactura durante el procesamiento ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Manipulación, almacenamiento y conservación de productos lácteos ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Leches fermentadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fermentación y clasificación de las leches fermentadas ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Cultivos lácticos y características de los productos fermentados ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Yogur y lácteos funcionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Proceso de elaboración del yogur y clases de yogur ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Lácteos funcionales ',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elaboración de quesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Etapas básicas de elaboración ',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de quesos ',
            hash: 't_6_2',
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
      termino: 'Acidez titulable',
      significado:
        'Medida que permite determinar la cantidad de sustancias ácidas presentes en la leche mediante una titulación. Se utiliza como indicador de calidad y ayuda a identificar cambios asociados con la fermentación o el deterioro del producto.',
    },
    {
      termino: 'Análisis fisicoquímico',
      significado:
        'Conjunto de pruebas realizadas para conocer características de la leche como acidez, pH, densidad y composición, con el propósito de verificar su calidad y aptitud para el procesamiento.',
    },
    {
      termino: 'Buenas Prácticas de Manufactura (BPM)',
      significado:
        'Conjunto de principios y procedimientos higiénicos aplicados durante la elaboración, manipulación, almacenamiento y distribución de alimentos para prevenir la contaminación y favorecer condiciones adecuadas de calidad e inocuidad.',
    },
    {
      termino: 'Cadena de frío',
      significado:
        'Mantenimiento continuo de temperaturas controladas durante el almacenamiento, transporte y distribución de productos lácteos para disminuir el crecimiento microbiano y conservar sus características de calidad.',
    },
    {
      termino: 'Caseína',
      significado:
        'Principal grupo de proteínas presentes en la leche. Participa directamente en la formación de la cuajada durante la elaboración de quesos al agruparse por efecto del cuajo o de la acidificación.',
    },
    {
      termino: 'Coagulación',
      significado:
        'Proceso mediante el cual las proteínas de la leche se agrupan y forman una estructura sólida o semisólida denominada cuajada, permitiendo posteriormente la separación del lactosuero.',
    },
    {
      termino: 'Cultivo láctico',
      significado:
        'Preparación que contiene microorganismos seleccionados, principalmente bacterias ácido-lácticas, utilizados para iniciar y controlar procesos de fermentación en productos como yogur, quesos y otras leches fermentadas.',
    },
    {
      termino: 'Cuajada',
      significado:
        'Masa sólida o semisólida formada después de la coagulación de las proteínas de la leche. Constituye la base para la elaboración de diferentes tipos de quesos.',
    },
    {
      termino: 'Desuerado',
      significado:
        'Operación que permite separar parte del lactosuero contenido en la cuajada. Influye directamente en la humedad, consistencia y características finales del queso.',
    },
    {
      termino: 'Estandarización',
      significado:
        'Operación mediante la cual se ajusta la composición de la leche, especialmente el contenido de grasa y sólidos, para obtener características uniformes en el producto que se va a elaborar.',
    },
    {
      termino: 'Fermentación',
      significado:
        'Proceso biológico controlado en el que determinados microorganismos transforman componentes de la leche, principalmente la lactosa, produciendo sustancias como ácido láctico que modifican el sabor, la acidez y la textura.',
    },
    {
      termino: 'Homogeneización',
      significado:
        'Proceso utilizado para reducir el tamaño de los glóbulos de grasa y distribuirlos de manera uniforme en la leche, favoreciendo una textura más estable y evitando la separación de la crema.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Condición que garantiza que un alimento no ocasionará daño al consumidor cuando sea preparado, manipulado y consumido de acuerdo con su uso previsto.',
    },
    {
      termino: 'Lactosa',
      significado:
        'Carbohidrato natural predominante en la leche, formado por glucosa y galactosa. Sirve como fuente de energía para los microorganismos que participan en la fermentación láctea.',
    },
    {
      termino: 'Lactosuero',
      significado:
        'Fracción líquida que se separa de la cuajada durante la elaboración del queso. Contiene agua, lactosa, proteínas solubles, minerales y otros componentes de la leche.',
    },
    {
      termino: 'Leche fermentada',
      significado:
        'Producto obtenido mediante la acción controlada de microorganismos que transforman parte de la lactosa y generan cambios en la acidez, textura, aroma y sabor de la leche.',
    },
    {
      termino: 'Pasteurización',
      significado:
        'Tratamiento térmico controlado aplicado a la leche para reducir microorganismos patógenos y disminuir parte del microbiota alterante, conservando en lo posible sus características nutricionales y sensoriales.',
    },
    {
      termino: 'Prebiótico',
      significado:
        'Componente alimentario utilizado selectivamente por determinados microorganismos del organismo y que puede generar efectos favorables cuando se consume como parte de una alimentación adecuada.',
    },
    {
      termino: 'Probiótico',
      significado:
        'Microorganismo vivo que, cuando se administra en cantidades adecuadas, puede aportar beneficios al consumidor. Se incorpora principalmente en algunos yogures y bebidas lácteas fermentadas.',
    },
    {
      termino: 'Prueba de alcohol',
      significado:
        'Ensayo rápido utilizado para evaluar la estabilidad de las proteínas de la leche. La aparición de flóculos o grumos después de mezclar la muestra con alcohol puede indicar alteraciones en su estabilidad.',
    },
    {
      termino: 'Prueba de reductasa',
      significado:
        'Método indirecto que permite estimar la actividad microbiana de la leche mediante el tiempo requerido para la decoloración del azul de metileno bajo condiciones controladas.',
    },
    {
      termino: 'Refrigeración',
      significado:
        'Método de conservación basado en la reducción y mantenimiento de la temperatura para disminuir la velocidad de crecimiento de microorganismos y retardar los procesos de deterioro.',
    },
    {
      termino: 'Salmuera',
      significado:
        'Solución de agua y sal utilizada principalmente durante la elaboración de algunos quesos para aportar sabor, favorecer su conservación y contribuir al desarrollo de determinadas características de textura.',
    },
    {
      termino: 'Termización',
      significado:
        'Tratamiento térmico moderado aplicado a la leche para reducir parte de la población microbiana antes de otros procesos. Es menos intenso que la pasteurización y no la sustituye cuando esta es requerida.',
    },
    {
      termino: 'UHT (<em>Ultra High Temperature)</em>',
      significado:
        'Tratamiento en el que la leche se somete durante pocos segundos a temperaturas muy elevadas y posteriormente se envasa de manera aséptica, permitiendo prolongar considerablemente su vida útil sin refrigeración mientras permanezca cerrada.',
    },
    {
      termino: 'Viabilidad probiótica',
      significado:
        'Capacidad de los microorganismos probióticos para permanecer vivos y activos en el producto durante su elaboración, almacenamiento y vida útil, bajo las condiciones establecidas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias Lamos, D., Montaño Díaz, L. N., Velasco Sánchez, M. A., & Martínez Girón, J. (2018). Alimentos funcionales: avances de aplicación en agroindustria. Tecnura, 22(57), 55-68.',
      link: 'https://revistas.udistrital.edu.co/index.php/Tecnura/article/view/12178/14233',
    },
    {
      referencia:
        'Bengoa, A. A. (2020). Alimentos funcionales: leches fermentadas con bacterias ácido lácticas productoras de exopolisacárido con propiedades antiinflamatorias en el tracto gastrointestinal [Tesis doctoral, Universidad Nacional de La Plata].',
      link: 'https://sedici.unlp.edu.ar/bitstream/handle/10915/90208/Documento_completo.pdf-PDFA.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Cardona Betancur, M., Giraldo Gómez, S., & Aristizábal Montoya, A. M. (2025). Caracterización de la calidad fisicoquímica y composicional de la leche de vaca comercializada en el municipio de Rionegro, Antioquia. Revista Universidad Católica de Oriente, 35(54), 90-103.',
      link: 'https://revistas.uco.edu.co/uco/article/view/624/661',
    },
    {
      referencia:
        'García G., O., & Ochoa M., I. (1987a). Elaboración de la cuajada. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/6575/modulo5_unidad3_derivados_lacteos_procesamiento.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'García G., O., & Ochoa M., I. (1987c). Preparación de la cuajada para queso campesino. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/6576/modulo5_unidad4_derivados_lacteos_procesamiento.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'García G., O., & Ochoa M., I. (1987f). Preparación de queso doble crema. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/6581/modulo6_unidad1_derivados_lacteos_procesamiento.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Navarrete Fernández, A. (2021). Manual de pruebas rápidas en laboratorios lácteos. Corporación Colombiana de Investigación Agropecuaria (AGROSAVIA).',
      link: 'https://editorial.agrosavia.co/index.php/publicaciones/catalog/view/210/192/1309',
    },
    {
      referencia:
        'Novoa Castro, C. F. (1987). Generalidades sobre elaboración de derivados lácteos. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/6590/modulo9_derivados_lacteos_recapitulacion.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2011a). Buenas prácticas de manufactura en la elaboración de productos lácteos. FAO.',
      link: 'https://openknowledge.fao.org/server/api/core/bitstreams/35d6c5d9-0fc7-408c-853d-208472d3f3af/content',
    },
    {
      referencia:
        'Organización Mundial de la Salud, & Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2011). Leche y productos lácteos (2.ª ed.). Comisión del <em>Codex Alimentarius</em>.',
      link: 'https://www.fao.org/4/i2085s/i2085s00.pdf?utm_source',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013, 22 de julio). Resolución 2674 de 2013, por la cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones. INVIMA.',
      link: 'https://www.invima.gov.co/biblioteca/resolucion-2674-2013-requisitos-sanitarios-alimentos?utm_source',
    },
    {
      referencia:
        'Teherán López, G. E., Palma Parra, C., Fonseca Correa, L. N., Gamba Castillo, C. A., Ocampo Henao, D. C., & Torres Beltrán, H. A. (2023). Conceptos, métodos y procedimientos en el procesamiento de leches fermentadas. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/8346/Conceptos_metodos_procesamiento_leches.pdf?sequence=1&isAllowed=y',
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
          nombre: 'Fabio Fonseca Arguelles',
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
