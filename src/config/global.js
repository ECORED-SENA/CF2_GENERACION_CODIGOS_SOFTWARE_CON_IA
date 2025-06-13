export default {
  global: {
    Name: 'Fundamentos de algoritmos, lógica y lenguajes de programación',
    Description:
      'Este componente formativo está orientado a fortalecer las bases lógico-computacionales que son necesarias poder comprender y aportar soluciones. Se exploran temas que llevan a entender los fundamentos de algoritmos, estructuras lógicas y paradigmas de programación, con relativo énfasis en la aplicación práctica generada a través de entornos de inteligencia artificial. Su propósito es brindar una comprensión generalizada de los contenidos tratados, con la finalidad de poder entender, analizar, modificar y aplicar los códigos que se puedan ir generando con la inteligencia artificial generativa. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Algoritmo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de los algoritmos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de algoritmos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Representación de algoritmos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructura básica de un algoritmo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Importancia de los algoritmos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Diferencia entre algoritmo y programa',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Aplicación de los algoritmos',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Lógica de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia de la lógica en el desarrollo de software',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos fundamentales de la programación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructuras de control',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Funciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Lenguaje de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Paradigma de programación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Lenguajes más utilizados',
            hash: 't_3_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
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
  complementario: [
    {
      tema: 'Algoritmos, estructuras y operaciones',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA [@EcosistemaSENAVirtual]. (2023). Algoritmos, estructuras y operaciones. [Archivo de video] Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=aICQGTU4Dm8',
    },
    {
      tema: '¿Qué es un algoritmo?',
      referencia:
        'Markers, M. [@MagicMarkersPro].(2015). ¿Qué es un algoritmo? [Archivo de video] Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=U3CGMyjzlvM',
    },
    {
      tema: 'Pseudocódigos en PSeInt para principiantes',
      referencia:
        'Rayito, M. [@MaestraRayito]. (2021). Pseudocódigos en PSeInt para principiantes. [Archivo de video] Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=70eFuMVEuxg',
    },
    {
      tema:
        'Como hacer diagramas de flujo con Inteligencia Artificial - ChatGPT',
      referencia:
        'Lagos, F. [@fredislagos22]. (2024). Como hacer diagramas de flujo con Inteligencia Artificial - ChatGPT | fredislagos. [Archivo de video] Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=mWcPAGMx8Ic',
    },
    {
      tema: 'Lenguajes de programación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA [@EcosistemaSENAVirtual]. (2022). Lenguajes de programación. [Archivo de video] Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=QpaLtzMsIFw',
    },
    {
      tema: 'Los 10 lenguajes de programación más usados en 2025.',
      referencia:
        'Maldonado, R. (2025). Los 10 lenguajes de programación más usados en 2025. KeepCoding Bootcamps.',
      tipo: 'Sitio web',
      link: 'https://keepcoding.io/blog/lenguajes-de-programacion-mas-usados/',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'es una secuencia de pasos lógicos y finitos que describen cómo resolver un problema o realizar una tarea específica. Cada paso debe ser claro y estar definido de manera precisa. Los algoritmos son la base de cualquier programa de computadora.',
    },
    {
      termino: 'Estructuras de control',
      significado:
        'Las estructuras de control son instrucciones que permiten modificar el flujo de ejecución de un programa. Pueden ser condicionales (como if, else) o iterativas (como bucles for, while), y son esenciales para tomar decisiones o repetir tareas.',
    },
    {
      termino: 'Funciones',
      significado:
        'es un bloque de código que realiza una tarea específica, recibe parámetros (opcionalmente), y devuelve un valor (o no). Las funciones permiten modularizar el código, facilitando su reutilización y mantenimiento.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'es un conjunto de reglas y sintaxis que los programadores usan para escribir instrucciones que la computadora pueda entender y ejecutar. Ejemplos incluyen Python, Java, C++ y JavaScript.',
    },
    {
      termino: 'Lógica de programación',
      significado:
        'se refiere al enfoque racional y ordenado que se utiliza para resolver problemas mediante un programa. Implica tomar decisiones, hacer cálculos, manipular datos y controlar el flujo de ejecución del código.',
    },
    {
      termino: 'Paradigma de programación',
      significado:
        'es un enfoque o estilo que define cómo organizar y estructurar el código para resolver problemas. Algunos paradigmas comunes son el imperativo, orientado a objetos, funcional y de programación lógica.',
    },
    {
      termino: 'Programa',
      significado:
        'es un conjunto de instrucciones escritas en un lenguaje de programación que le dice a la computadora cómo realizar una tarea específica. Los programas permiten automatizar procesos, resolver problemas y manipular datos. Estos programas pueden variar desde simples scripts que realizan cálculos, hasta complejas aplicaciones que interactúan con bases de datos o usuarios.',
    },
    {
      termino: 'Pseudocódigo',
      significado:
        'es una forma de describir algoritmos utilizando un lenguaje que se asemeja al lenguaje humano, pero estructurado de manera similar a los lenguajes de programación. No sigue reglas estrictas de sintaxis, pero presenta de forma clara y lógica los pasos necesarios para resolver un problema. El pseudocódigo es útil para planificar y diseñar programas antes de escribir el código real en un lenguaje de programación.',
    },
    {
      termino: 'Variables',
      significado:
        'son espacios de memoria con nombre donde se almacenan valores que pueden cambiar durante la ejecución de un programa. Las variables permiten almacenar datos como números, texto y otros tipos de información que el programa necesita.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, A. (2014). <em>Programación y Lógica Proposicional</em>. IT Campus Academy.',
      link: '',
    },
    {
      referencia:
        'Crack The Code. (2023). <em>Lógica de Programación: ¿Qué es y Como Mejorarla?</em> Crack The Code. ',
      link: 'https://blog.crackthecode.la/logica-de-programacion',
    },
    {
      referencia:
        'Mancilla, A., Capacho, J. R., &amp; Ebratt, J. (2016). <em>Diseño y construcción de algoritmos</em>. Universidad del Norte.',
      link: '',
    },
    {
      referencia:
        'Revolledo, A. O. (2021, septiembre 3). <em>Características de un algoritmo, elementos y más: ¡Lo que debes saber para construir el tuyo!</em> ',
      link:
        'https://www.crehana.com/blog/transformacion-digital/caracteristicas-de-un-algoritmo/',
    },
    {
      referencia:
        '<em>The importance of logic in learning to code</em>. (2024). Algocademy.com.',
      link:
        'https://algocademy.com/blog/the-importance-of-logic-in-learning-to-code/',
    },
    {
      referencia:
        'Whitney, T. (2023). <em>Funciones (C++)</em>. Microsoft.com.',
      link:
        'https://learn.microsoft.com/es-es/cpp/cpp/functions-cpp?view=msvc-170',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
