<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Reconocimientos de aspectos de algoritmos, lógica de programación y lenguajes de programación',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer los conocimientos relacionados con algoritmos, lógica de programación y lenguajes de programación',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un algoritmo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un conjunto de instrucciones que el programa debe seguir para resolver un problema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de datos estructurados en un formato comprensible para las computadoras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un tipo de software para la gestión de bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un programa que ayuda a crear otros programas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué característica define a un algoritmo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe ser ambiguo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Debe ser finito y tener un conjunto de pasos definidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Puede tener pasos indefinidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No necesita ser claro ni preciso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué paradigma de programación se basa en escribir instrucciones detalladas sobre cómo realizar las tareas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Funcional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Imperativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Declarativo..',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Orientado a objetos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'En un lenguaje de programación, ¿qué es una variable?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un espacio de memoria donde se almacenan valores o datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un tipo de función matemática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un conjunto de instrucciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un valor fijo que no cambia durante el programa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de operador permite comparar dos valores y devolver un valor booleano?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Operador aritmético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Operador lógico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Operador de relación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Operador de asignación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es una estructura de control en programación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una forma de organizar el código fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de herramientas para hacer pruebas de software.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un tipo de archivo que contiene datos estructurados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una instrucción que permite modificar el flujo de ejecución del programa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué hace un operador aritmético en un programa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realiza operaciones de comparación entre valores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manipula valores booleanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Realiza operaciones matemáticas como suma, resta, multiplicación y división.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modifica el valor de las variables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'En un algoritmo, ¿qué se entiende por expresión?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una combinación de valores, operadores y variables que produce un resultado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un conjunto de instrucciones condicionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un bloque de código que se repite varias veces.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una instrucción que define el flujo de control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la principal ventaja de utilizar funciones en programación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitan la escritura de código sin necesidad de declarar variables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permiten reutilizar código y simplificar la estructura del programa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentan la complejidad del código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Requieren que el código sea ejecutado de forma secuencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué lenguaje de programación es conocido por su uso en ciencia de datos e inteligencia artificial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'C++',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'JavaScript',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Python',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'PHP',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
