<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Lógica de programación

    .row.align-items-center.justify-content-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p Muchas personas tienden a confundir la programación con la lógica de programación. Por ello, es importante aclarar que esta última se enfoca en el diseño organizado de soluciones a problemas identificados, sin depender de un lenguaje de programación específico. Esto significa que no se requiere conocimiento previo de un lenguaje en particular para trabajar la lógica de programación. Su aprendizaje y dominio proporcionan una base sólida que facilita la comprensión de cualquier lenguaje y la resolución estructurada de problemas computacionales.

        .row.align-items-center.p-4.bg-2
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema2/img2.svg", alt="", style="width: 90px").m-auto
          .col-lg-10
            p.mb-0 En el apartado anterior se abordó el concepto de algoritmo. La lógica de programación se conecta directamente con este tema, ya que representa la técnica que permite diseñar algoritmos, es decir, crear sentencias lógicas compuestas por pasos claros, organizados y ordenados para resolver problemas concretos. Esta técnica combina dos principios esenciales: la computación y la lógica matemática (Arias, 2014).

    .row.bg-13
      .col-12 
        .p-5
          .titulo-tres.mt-5: h3 ¿Qué permite la lógica de programación?

          p.mt-4 La lógica de programación, como habilidad, permite #[b estructurar ideas y organizar instrucciones de manera coherente], con el fin de encontrar la solución más eficiente a un problema. En otras palabras, se trata de la #[b capacidad para identificar un problema, analizarlo y encontrar una solución precisa], basada en reglas y procesos consistentes que posteriormente se traducen en código. Esta lógica es la base para el desarrollo de todo tipo de programas, desde aplicaciones simples hasta sistemas complejos como navegadores web, calculadoras científicas, sistemas operativos o modelos de inteligencia artificial (Crack The Code, 2023).

          .row.mt-4.align-items-center
            .col-lg-8
              .titulo-tres.mt-4: h3 Una forma de entenderla: la receta de cocina

              p.mt-4 Para comprenderla mejor, se puede #[b comparar con una receta de cocina:] cada paso debe estar bien definido, en orden, sin omitir instrucciones. La computadora, como ejecutora de instrucciones, necesita que cada orden esté escrita con absoluta claridad para evitar confusiones. Así, la lógica de programación organiza un plan paso a paso que guiará a la máquina para que #[b cumpla con precisión lo que se le ha indicado].

              .titulo-tres.mt-4: h3 Aplicación práctica

              p.mt-4 La lógica de programación permite #[b solucionar problemas mediante reglas claras y definidas], y se apoya en ciertos elementos (como estructuras de control, variables, operadores y funciones) que #[b organizan y conectan esas reglas]. Luego, este conjunto estructurado se convierte en código, el cual será #[b interpretado por la computadora] para ejecutar y materializar soluciones a los distintos desafíos o necesidades planteadas.

              p Para mayor claridad, se comparten unas analogías sencillas, que les ayudarán a tener una mayor idea de lo que es la lógica de programación: 

            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 400px").m-auto

    .row.bg-12
      .col-12 
        .p-5
          .row.justify-content-center.mb-5
            .col-lg-4.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema2/img4.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center 01
                p.text-center.mb-0 En un #[b rompecabezas], las piezas encajan en un solo lugar y con unas en específico, para que la figura tenga sentido; así es con la lógica, como un reloj cuando engrana sus ruedas dentadas. Cuando se razona sin lógica, las cosas pueden perder el sentido.
            .col-lg-4.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema2/img5.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center 02
                p.text-center.mb-0 Deseas cocinar un suculento platillo guajiro, para ello sigues la #[b receta] al pie de la letra, sin alterar sus ingredientes, ni el orden, respetando sus cortes, adobos y tiempos de cocción. En la lógica de programación es igual, tienes que seguir un proceso ordenado para lograr el resultado deseado.
            .col-lg-4.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema2/img6.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center 03
                p.text-center.mb-0 Tomas el mapa, ubicas el lugar de salida y de llegada, visualizas las diferentes rutas y tomas el camino más corto y menos congestionado, para llegar a tu destino. La lógica te ayuda a encontrar los mejores caminos, razonablemente hablando, para resolver un problema, tomar una decisión, o desarrollar una idea.
    

    .row.align-items-center.justify-content-center.mt-4.bg-9.p-3
      .col-lg-1.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema1/img15.svg", alt="", style="width: 90px").m-auto
      .col-lg-11
        p Con todo lo anteriormente explicado, se puede concluir que la lógica de programación, representa la capacidad de estructurar el pensamiento de forma coherente, precisa y sistemática, para trabajar en la construcción de soluciones computacionales sólidas. Es una competencia para la vida, que combina análisis, abstracción, matemáticas y creatividad, lo cual en conjunto brinda destrezas al hombre para trabajar en el desarrollo de #[i software], de manera confiable y eficaz.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Importancia de la lógica en el desarrollo de #[i software]

    .row.align-items-center.justify-content-center
      .col-lg-8
        p.p-5.bg-14 La lógica de programación es importante, porque representa la base para aprender a programar, fortalecer el razonamiento, generar las habilidades y destrezas para programar con eficacia, brindando recursos para que las personas puedan entender problemas complejos, identificar patrones y buscar soluciones. Incluso, desarrollar esta habilidad, ayuda tanto a niños como a adultos a programar más fácil y más rápido, desarrollando en el camino pensamiento crítico, mejorando capacidades como la resolución de problemas de todo tipo de situaciones que se les vayan presentando en su aprendizaje (Crack The Code, 2023).

        p.mt-4 La lógica es el corazón de la programación, por eso, más allá de codificar o escribir simples líneas de código, lo que busca es llevar a la persona a pensar de forma clara, eficiente y bien estructurada, para que logre dar soluciones a los problemas. De ahí que dominar la lógica no solo representa mejorar en la habilidad para programar, sino que fortalece el pensamiento crítico, facilita la adaptación a nuevas tecnologías y brinda ayudas para enfrentar diferentes tipos de retos, dentro y fuera del mundo digital (The importance of logic in learning to code, 2024). A continuación se comparten 5 puntos clave sobre la importancia de la lógica en el desarrollo de #[i software]:

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img7.png', alt='', style="width: 400px").m-auto

    .row.align-items-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 400px").m-auto

      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Habilidades para resolver problemas")
            .col-12.mb-4.mb-md-0.px-5

              p Brinda las herramientas para analizar y resolver los problemas paso a paso, anticipando errores y realizando una depuración cuidadosa. Es como armar un rompecabezas: se observa cada pieza, se analiza su forma y se construye la solución poco a poco.


          div(titulo="Escritura de código fuerte")
            p.px-5.mb-0  Pensar de forma lógica contribuye a redactar un código más claro, ágil, ordenado y fácil de mantener. Es similar a organizar un dormitorio siguiendo un orden práctico que evita retrabajos y mantiene todo bajo control.

          div(titulo="Comprensión de conceptos de programación")
            p.px-5.mb-0  Tener una base sólida en lógica facilita el aprendizaje de estructuras, algoritmos y paradigmas complejos. Es como contar con una caja de herramientas bien equipada: permite construir desde lo más simple hasta lo más sofisticado.

          div(titulo="Depuración y solución de errores")
            p.px-5.mb-0  El pensamiento lógico proporciona recursos útiles para identificar fallos y aplicar pruebas que permitan corregirlos. Es como estar perdido en un laberinto y usar el razonamiento para hallar la salida paso a paso.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Elementos fundamentales de la programación

    p Dentro de la lógica de programación, los elementos fundamentales vienen a ser los recursos y las piezas básicas que se necesitan para poder construir cualquier aplicación o sistema. Aquí se habla de los bloques que hacen que el código cobre vida y que permiten que una computadora pueda leerlos, entenderlos y ejecutar las órdenes dadas en las diferentes líneas. Se había hablado de los algoritmos, pero no se habían tratado estos elementos. Ahora, para poder complementar y poder engranar todos los recursos que se necesitan para convertir todas esas ideas en soluciones tecnológicas reales, se van a conocer los principales elementos que intervienen en la programación:

    .row
      .col-12
        .bg-19.p-3
          figure
            img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
      .col-12
        .bg-20.p-2.p-md-4
          .carousel-bg
            .row.justify-content-center.align-items-center
              .col-xl-8
                SlyderF.custom(columnas="col-lg-6")
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img10.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Variables
                    p.text-center.mb-0 Son espacios donde se guarda información que puede cambiar.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img11.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Tipos de datos
                    p.text-center.mb-0 Son las distintas formas de información que puede manejar un programa.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img12.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Operadores
                    p.text-center.mb-0 Son símbolos que permiten hacer cálculos o comparaciones.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img13.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Estructuras de control
                    p.text-center.mb-0 Son símbolos que permiten hacer cálculos o comparaciones.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img14.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Funciones o procedimientos
                    p.text-center.mb-0 Son bloques de código que se pueden reutilizar para realizar tareas específicas.
              .col-lg-3.d-none.d-xl-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema2/img9.png", alt="alt", style="width: 305px").m-auto

    .titulo-tres.mt-5: h3 Variables

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-8
        p Las variables son como contenedores que guardan información o datos, que a su vez se almacenan en la memoria del computador. Cada una de dichas variables es identificada por un nombre, y el valor o dato que este almacena, puede cambiar a lo largo del tiempo, mientras se esté ejecutando el algoritmo o el programa. En otras palabras, pueden ser como las cajas en donde se almacenan cosas en la casa, solo que a cada una de esas cajas se le da un nombre y en vez de almacenar ropa, zapatos o juguetes, se almacenan datos como la edad, el nombre, la ciudad, etc.).

        .row.p-4.bg-2
          p Las variables cumplen con unas características particulares:

          ul.lista-ul--color
            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Se identifican con un nombre único, eso quiere decir que no puede haber dos variables con el mismo nombre.

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 El valor o dato que se almacena en la variable puede cambiar.


            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 A la variable, cuyo valor no cambia, se le conoce como constante.


            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Las variables, según el lenguaje de programación en donde se estén utilizando, pueden necesitar ser declaradas. Las declaraciones se dan según el tipo de datos que manejará la variable.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img15.png', alt='', style="width: 400px").m-auto          

    .row.mt-4.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img16.png', alt='', style="width: 400px").m-auto  

      .col-lg-8
        p A continuación, se presentan dos ejemplos que presentan cómo utilizar variables en un algoritmo:

        p #[b Ejemplo 5.] Asignación de variables
        
        .row
          .col-12
            .bg-19.p-3
              figure
                img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
          .col-12
            .bg-20.px-5.py-4
              pre
                code.text-white
                  | Inicio
                  |
                  |   // Asignar valores directamente
                  |   edad = 18
                  |   nombre = "Carlos"
                  |
                  |   // Mostrar los valores
                  |   Mostrar "La edad de", nombre, "es", edad
                  |
                  | Fin

    .row.mt-4.align-items-center 

      .col-lg-8
        
        p #[b Ejemplo 6.] Declaración de variables

        .row
          .col-12
            .bg-19.p-3
              figure
                img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
          .col-12
            .bg-20.px-5.py-4
              pre
                code.text-white
                  | Inicio
                  |
                  |   // Declarar variables
                  |   Definir edad como entero
                  |   Definir nombre como texto
                  |
                  |   // Asignar valores
                  |   edad = 18
                  |   nombre = "Carlos"
                  |
                  |   // Mostrar los valores
                  |   Mostrar "La edad de", nombre, "es", edad
                  |
                  | Fin

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img19.png', alt='', style="width: 400px").m-auto 

    .titulo-tres.mt-5: h3 Tipos de datos

    p.mt-4 Los tipos de datos son los que determinan la clase de información que se almacenará dentro de una variable. Los tipos de datos son fundamentales para programar, ya que según su naturaleza, es que se puede saber qué tipo de operaciones se pueden hacer con las variables, por ejemplo, si la variable es numérica, se podrán hacer sumas o multiplicaciones con ella.  Entre los principales tipos de datos se tienen: 

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 4.
      span  Tipos de #[i datas] 

    .table-responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th IA Gen
            th Contenido generado
            th Descripción
        tbody(style="background-color: #F6F6F6")
          tr
            td Enteros (int)


            td.text-start  Número sin decimales

            td.text-start 8, 1000, 1200000, -55 


          tr
            td Flotantes (float)
            td.text-start  Números con decimales

            td.text-start 3.14, -0.5, 2.75


          tr
            td Cadenas de texto (string)

            td.text-start  Secuencia de caracteres

            td.text-start “Luis”, “Finca La Costa”, “La Jagua del Pilar”


          tr
            td Booleanos (bool)
            td.text-start  Solo dos valores: verdadero o falso
            td.text-start True, false

    .row.mt-4.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img20.png', alt='', style="width: 400px").m-auto

      .col-lg-8
        p #[b Ejemplo 7.] Declarando tipo de datos

        p Este ejemplo muestra cómo se declaran variables especificando el tipo de dato que almacenarán, y luego se les asignan valores correspondientes:

        .row
          .col-12
            .bg-19.p-3
              figure
                img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
          .col-12
            .bg-20.px-5.py-4
              pre
                code.text-white
                  | Inicio
                  |
                  |   Definir edad como entero
                  |   Definir nombre como texto
                  |   edad = 16
                  |
                  |   nombre = "Juan"
                  |   Mostrar "La edad de", nombre, "es", edad
                  |
                  | Fin

    .titulo-tres.mt-5: h3 Operadores

    .row.mt-4.align-items-center
      .col-lg-8
        
        p.mt-3 Un operador es un símbolo (+, -, <,  %)  que se utiliza en la programación para realizar las operaciones sobre los datos, los cuales toman el nombre de operandos (valores, variables, expresiones). De acuerdo a la operación que se quiera realizar, se utiliza el o los operadores más apropiados; por ejemplo, si se desea hacer una suma, se utiliza el operador + para sumar dos o más números.

        .row.align-items-center.p-4.bg-2
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema2/img22.svg", alt="", style="width: 90px").m-auto
          .col-lg-10 
            p Para entender mejor la funcionalidad de los operadores, se pueden imaginar cómo las herramientas que se tienen en casa: Se desea cortar un papel, se utilizan las tijeras (operador resta); se desea mirar si una ventana es más ancha que otra, se puede utilizar una regla (operador de comparación) y si se desean pegar dos piezas, se puede usar gota mágica (operador lógico).

        p.mt-4 Para complementar y entender mejor parte de la jerga que se utiliza en el medio, tener en cuenta esta información: 

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img23.png', alt='', style="width: 480px").m-auto

    .row.bg-1
      .col-12 
        .p-5 
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema2/img24.png", alt="alt", style="width: 305px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-5
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img25.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Variable
                    p.text-center.mb-0 Espacio de almacenamiento identificado con un nombre, donde se guarda un valor que puede cambiar o no con el tiempo. Ejemplo: en x = 105, x es la variable.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img26.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Valor
                    p.text-center.mb-0 Es el dato que se le asigna a una variable. Ejemplo: en x = 105, 105 es el valor asignado a la variable x.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img27.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Declaración
                    p.text-center.mb-0 Instrucción para que el programa reserve espacio para una variable e indique su tipo. Ejemplo: Definir x como entero declara la variable x como tipo entero.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img28.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Operandos
                    p.text-center.mb-0 Son variables, constantes o valores involucrados en una operación. Ejemplo: en x + 105, x y 105 son los operandos.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img29.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Expresión
                    p.text-center.mb-0 Combinación de operandos y operadores que produce un resultado. Ejemplo: (x + 105) * (y - 30) es una expresión completa; (x + 105) y (y - 30) son subexpresiones.

          p.mt-4 En la figura 2 se presenta el ejemplo de una expresión y cómo está conformada, para que la identifiquen mucho mejor.   

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2. 
      span Vista de una expresión  

    .row.mt-4.bg-18.justify-content-center.p-4
      figure
        img(src='@/assets/curso/tema2/img30.svg', alt='Esquema sobre la estructura de una expresión matemática. Incluye la expresión completa (a + 5) * (b - 2) y señala los componentes: valores, operadores, variables y la expresión en su totalidad.', style="width: 658px").m-auto

    .titulo-tres.mt-5: h3 Operadores aritméticos

    p.mt-4 Los operadores aritméticos permiten realizar operaciones matemáticas básicas como suma, resta, multiplicación y división. Son fundamentales en todo algoritmo que incluya cálculos numéricos.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 5.
      span Operadores aritméticos

    .table-responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th Operador
            th Denominación
            th Descripción
            th Ejemplo
        tbody(style="background-color: #F6F6F6")
          tr
            td +
            td.text-start  Suma

            td.text-start Suma dos valores

            td a + b

          
          tr
            td -
            td.text-start  Resta

            td.text-start Le resta un valor a otro

            td a - b


          tr
            td *
            td.text-start  Multiplicación

            td.text-start Multiplica dos valores

            td a * b


          tr
            td /
            td.text-start  División

            td.text-start Divide un valor entre otro

            td a / b

          tr
            td %
            td.text-start  Módulo

            td.text-start Devuelve el residuo de la división

            td a % b



          tr
            td ^
            td.text-start Potenciación 
            td.text-start Eleva un valor a la potencia de otro
            td a ^ b

    .titulo-tres.mt-5: h3 Operadores relacionales

    p.mt-4 Los operadores relacionales se utilizan para comparar dos valores. El resultado de estas comparaciones siempre será un valor booleano: verdadero (true) o falso (false). Son esenciales para tomar decisiones en estructuras condicionales.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 6.
      span Operadores relacionales

    .table-responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th Operador
            th Denominación
            th Descripción
            th Ejemplo
        tbody(style="background-color: #F6F6F6")
          tr
            td ==

            td.text-start  Igual a

            td.text-start Compara si dos valores son iguales.

            td a == b

    
          tr
            td !=

            td.text-start  Distinto de

            td.text-start Compara si dos valores son distintos.

            td a != b



          tr
            td <

            td.text-start  Menor que

            td.text-start Compara si el primer valor es menor que el segundo.

            td a < b



          tr
            td >

            td.text-start  Mayor que

            td.text-start Compara si el primer valor es mayor que el segundo.

            td a > b


          tr
            td <=

            td.text-start  Menor o igual que

            td.text-start Compara si el primer valor es menor o igual que el segundo.

            td a <= b




          tr
            td >=
            td.text-start Mayor o igual que 
            td.text-start Compara si el primer valor es mayor o igual que el segundo.
            td a >= b

    .titulo-tres.mt-5: h3 Operadores de asignación

    p.mt-4 Los operadores de asignación se utilizan para almacenar valores dentro de variables. Además del operador de asignación simple (=), existen combinaciones que permiten realizar una operación y asignar el resultado en una sola línea.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 7.
      span Operadores de asignación

    .table-responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th Operador
            th Denominación
            th Descripción
            th Ejemplo
        tbody(style="background-color: #F6F6F6")
          tr
            td =
            td.text-start  Asignación simple

            td.text-start Asigna un valor a una variable.

            td a = 10


          tr
            td +=
            td.text-start  Asignación de suma

            td.text-start Suma un valor a la variable y asigna el resultado.

            td a += 5


          tr
            td -=

            td.text-start  Asignación de resta

            td.text-start Resta un valor a la variable y asigna el resultado.

            td a -= 3

          tr
            td *=

            td.text-start  Asignación de multiplicación

            td.text-start Multiplica la variable por un valor y asigna el resultado.

            td a *= 4

          tr
            td /=

            td.text-start  Asignación de división

            td.text-start Divide la variable por un valor y asigna el resultado.

            td a /= 2

          tr
            td %=
            td.text-start  Asignación de módulo
            td.text-start Obtiene el residuo de la división de la variable y asigna el resultado.
            td a %= 3

    .titulo-tres.mt-5: h3 Operadores lógicos

    p.mt-4 Los operadores lógicos permiten combinar condiciones y evaluar expresiones booleanas. Son esenciales en estructuras de decisión y bucles, ya que permiten establecer reglas más complejas para ejecutar ciertas instrucciones.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 8.
      span Operadores lógicos

    .table-responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th Operador
            th Denominación
            th Descripción
            th Ejemplo
        tbody(style="background-color: #F6F6F6")
          tr
            td &&

            td.text-start  AND (Y)

            td.text-start Devuelve verdadero si ambos operando son verdaderos.

            td a && b

          tr
            td ||

            td.text-start  OR (O)

            td.text-start Devuelve verdadero si al menos uno de los operando es verdadero.

            td a || b


          tr
            td !

            td.text-start  NOT (NO)

            td.text-start Devuelve el valor contrario del operando (invierte el valor booleano).

            td !a

          tr
            td XOR
            td.text-start  XOR (O exclusivo)
            td.text-start Devuelve verdadero si solo uno de los operando es verdadero, pero no ambos.
            td a XOR b

    p.mt-4 En los siguientes ejemplos se comparten algunas aplicaciones de los operadores:

    .row.mt-4.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Ejemplo 8. Asignación de variables")
            .col-12.mb-4.mb-md-0.px-5

              p Este ejemplo muestra el uso más básico de los operadores de asignación, donde se asignan valores a variables y se muestra la salida. No se realizan operaciones matemáticas, pero sirve como punto de partida para entender cómo se almacenan y utilizan los datos.

              .row
                .col-12
                  .bg-19.p-3
                    figure
                      img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
                .col-12
                  .bg-20.px-5.py-4
                    pre
                      code.text-white
                        | Inicio
                        |
                        |   // Asignar valores directamente
                        |   edad = 18
                        |   nombre = "Carlos"
                        |
                        |   // Mostrar los valores
                        |   Mostrar "La edad de", nombre, "es", edad
                        |
                        | Fin

          div(titulo="Ejemplo 9. Trabajando expresión por expresión")
            p.px-5 Aquí se utiliza una estructura paso a paso, ideal para principiantes, que permite observar con claridad cómo se realizan los cálculos intermedios. Se aplican operadores aritméticos para obtener subtotales, calcular impuestos y descuentos, y finalmente el total a pagar. También se hace uso de operadores de asignación para almacenar resultados intermedios.

            .row
              .col-12
                .bg-19.p-3
                  figure
                    img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
              .col-12
                .bg-20.px-5.py-4
                  pre
                    code.text-white
                      | Inicio
                      |
                      |   Escribir "Cantidad de guacharaca:"
                      |   Leer cg
                      |   Escribir "Precio por guacharaca:"   
                      |   Leer pg
                      |   Escribir "Cantidad de acordeón:"
                      |   Leer ca
                      |   Escribir "Precio por acordeón:"   
                      |   Leer pa
                      |   subg = cg * pg
                      |   subp = ca * pa
                      |   sub = subg + subp   
                      |   iva = sub * 0.19
                      |   desc = sub * 0.10
                      |   total = sub + iva - desc
                      |   Escribir "Subtotal:", sub
                      |   Escribir "IVA:", iva
                      |   Escribir "Descuento:", desc
                      |   Escribir "Total a pagar:", total
                      |
                      | Fin

          div(titulo="Ejemplo 10. Trabajando todo en una sola expresión")
            p.px-5  Este ejemplo muestra una versión más condensada del cálculo, utilizando una única línea para calcular el total a pagar. Es útil para comprender cómo combinar varias operaciones aritméticas dentro de una sola expresión, respetando el orden de operaciones mediante el uso de paréntesis.

            .row
              .col-12
                .bg-19.p-3
                  figure
                    img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
              .col-12
                .bg-20.px-5.py-4
                  pre
                    code.text-white
                      | Inicio
                      |
                      |   Escribir "Cantidad de guacharaca:"
                      |   Leer cg
                      |   Escribir "Precio por guacharaca:"  
                      |   Leer pg
                      |   Escribir "Cantidad de acordeón:"
                      |   Leer ca
                      |   Escribir "Precio por acordeón:"   
                      |   Leer pa
                      |   total = (cg*pg+ca*pa) + (cg*pg+ca*pa) * 0.19 - (cg*pg+ca*pa) * 0.10
                      |   Escribir "Total a pagar:", total
                      |
                      | Fin


    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Estructuras de control

    .row.align-items-center
      .col-lg-8
        p Hasta este punto se ha venido trabajando con un flujo secuencial, trabajando dentro del algoritmo línea a línea, en forma vertical, de arriba hacia abajo. En la forma en que se ha venido trabajando, se tiene una sola ruta, y es ideal para problemas sencillos, los cuales necesitan una solución directa, pero cuando ya se habla de tener múltiples caminos, o de poder tomar múltiples rutas, marcadas por las probabilidades que dan la complejidad del problema y la cantidad de datos que intervienen en ella, entonces es recomendable mirar otro tipo de estructuras, para optimizar el algoritmo y atender problemas más complejos.

        .row.mt-4.align-items-center.p-4.bg-3
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema2/img34.svg", alt="", style="width: 90px").m-auto

          .col-lg-10
            p Cuando el problema es mayor, se necesita tener control de las sentencias que se van a ejecutar y en qué momento se ejecutarán, para ello se echa mano de las estructuras de control.
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img35.png', alt='', style="width: 400px").m-auto


    .row.align-items-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img36.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p Las estructuras de control están representadas por recursos o mecanismos que permiten dirigir la ruta o el flujo de la ejecución de un programa. Con las estructuras de control los programas desarrollan la capacidad de tomar decisiones, de poder repetir acciones, de poder ejecutar un sinnúmero de líneas o bloques de código según las condiciones que se tengan planteadas y que se vayan cumpliendo para ir redirigiendo el flujo o simplemente seguir con la ejecución de las instrucciones en forma secuencial. 


        p.p-5.bg-14 Estas estructuras permiten que los programas se vuelvan manejables, dinámicos, flexibles y aumenten la capacidad de hacer frente y solucionar problemas con mayor complejidad. Las estructuras de control con las que se trabajan son las condicionales y las iterativas.

    
    .titulo-tres.mt-5: h3 Estructura de control condicional
    
    p.mt-4 Dentro de las estructuras de control, se tienen las condicionales, las cuales son un tipo de estructura que les permite a los programas tomar decisiones y ejecutar diferentes líneas o bloques de código, mientras que se esté cumpliendo una condición. Dentro de este tipo de estructuras se encuentran: 

    .row.mt-4.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Condicional simple")
            .col-12.px-5

              p Ejecuta una línea de código o un bloque completo, si y solo si se cumple una condición, en otras palabras, si la condición es verdadera.
              p #[b Ejemplo 11.]

              .row
                .col-12
                  .bg-19.p-3
                    figure
                      img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
                .col-12
                  .bg-20.px-5.py-4
                    pre
                      code.text-white
                        | Inicio
                        |
                        |   Definir edad como entero
                        |   edad = 20
                        |
                        |   Si edad >= 18 Entonces
                        |     Mostrar "Eres mayor de edad"
                        |   Fin Si
                        |
                        | Fin

          .row(titulo="Condicional alternativo (Si...Sino)")
            .col-12.px-5
              
              p Ejecuta una línea de código o un bloque de código si la condición es verdadera, y si la condición es falsa, ejecuta una línea o un bloque de código diferente.
              p #[b Ejemplo 12.]

              .row
                .col-12
                  .bg-19.p-3
                    figure
                      img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
                .col-12
                  .bg-20.px-5.py-4
                    pre
                      code.text-white
                        | Inicio
                        |
                        |   Definir nota como decimal
                        |   nota = 2.8
                        |
                        |   Si nota >= 3.0 Entonces
                        |     Mostrar "Aprobado"
                        |   Sino
                        |     Mostrar "Reprobado"
                        |   Fin Si
                        |
                        | Fin

          .row(titulo="Condicional múltiple (Si...Sino Si...Sino)")
            .col-12.px-5

            p Esta estructura condicional analiza y evalúa varias condiciones secuenciales y ejecuta la línea o el bloque de código que cumple con la primera condición deseada, o sea, la primera que devuelve un valor verdadero.
            p #[b Ejemplo 13.]

            .row
              .col-12
                .bg-19.p-3
                  figure
                    img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
              .col-12
                .bg-20.px-5.py-4
                  pre
                    code.text-white
                      | Inicio
                      |
                      |   Definir nota como decimal
                      |   nota = 3.5
                      |
                      |   Si nota >= 4.5 Entonces
                      |     Mostrar "Excelente"
                      |   Sino Si nota >= 3.0 Entonces
                      |     Mostrar "Aprobado"
                      |   Sino 
                      |     Mostrar "Reprobado"
                      |   Fin Si
                      |
                      | Fin

    .titulo-tres.mt-5: h3 Estructura de control iterativa

    .row.mt4.align-items-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img40.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        .row.align-items-center.p-4.bg-5
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema2/img41.svg", alt="", style="width: 90px").m-auto
          .col-lg-10
            p Las iterativas, también se conocen como bucle o ciclo. Estas le permiten al algoritmo o programa repetir una instrucción o un conjunto de instrucciones varias veces, ya sea porque se está cumpliendo una condición o porque se ha especificado el número de repeticiones.

        p.mt-4 Muchas veces se da la necesidad de que una tarea necesite realizarse varias veces, como contar números o productos, procesar una lista, o mantener la ejecución de una acción hasta que se desarrolle un evento. De no contar con una estructura como esta, se tendría escribir la instrucción el número de veces que se haría necesario, por ejemplo, al solicitarle al algoritmo que imprima los números del 1 al 100, se tendría que escribir la orden 100 veces, lo cual no es práctico y además es propenso a errores. Dentro de este tipo de estructuras se encuentran:

    TabsB.color-acento-contenido.mt-4
      .py-4.py-md-5.bg-15(titulo="Bucle controlado por contador (Para)" :icono="require('@/assets/curso/tema2/img42.svg')")
        .row.align-items-center.px-5
          .col-md-7
            h4 Bucle controlado por contador (Para)
            p Se utiliza cuando se necesita que la acción se repita un número determinado de veces.

            .row
              .col-12
                .bg-19.p-3
                  figure
                    img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
              .col-12
                .bg-20.px-5.py-4
                  pre
                    code.text-white
                      | Inicio
                      |
                      |   Para i desde 1 hasta 5 hacer
                      |   Mostrar "Número:", i
                      |   Fin Para
                      |
                      | Fin

          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/img44.png', style="width:480px").m-auto

      .py-4.py-md-5.bg-15(titulo="Bucle controlado por condición (Mientras)" :icono="require('@/assets/curso/tema2/img42.svg')")
        .row.align-items-center.px-5
          .col-md-7
            h4 Bucle controlado por condición (Mientras)
            p Se utiliza cuando se necesita que la acción se repita siempre y cuando la condición se esté cumpliendo, o sea cuando la condición sea verdadera.

            .row
              .col-12
                .bg-19.p-3
                  figure
                    img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
              .col-12
                .bg-20.px-5.py-4
                  pre
                    code.text-white
                      | Inicio
                      |
                      |   Definir contador como entero
                      |   contador = 1
                      |   Mientras contador <= 5 Hacer
                      |   Mostrar "Contador es:", contador
                      |   contador = contador + 1
                      |   Fin Mientras
                      |
                      | Fin

          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/img46.png', style="width:480px").m-auto

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Funciones 

    .row.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img47.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p.bg-2.p-4 Una función está representada por un bloque de código que ha sido diseñado para que ejecute una tarea en particular y que pueda ser reutilizada a lo largo de un algoritmo o de un programa. Dentro de un programa las funciones reciben entradas (argumentos o parámetros), ejecutan el bloque o conjunto de instrucciones, y por lo general, devuelven un resultado, aunque esto último no siempre lo hacen.

        p.mt-4 No existe un límite que fije la longitud de una función, pero dentro de las buenas prácticas de diseño se recomienda que las funciones cumplan con una sola tarea bien definida; entendiéndose con eso que los algoritmos complejos tendrían que ser divididos en funciones más pequeñas o más sencillas y comprensibles, en la medida de lo posible (Whitney, 2023). La importancia de las funciones dentro de la lógica de programación radica en: 

    .row.bg-7.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Abstracción

                    p Permite mostrar únicamente lo necesario para usar una función, ocultando los detalles internos y complejos del proceso.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img48.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Claridad

                    p  Contribuye a que el algoritmo sea más legible, lo cual facilita su comprensión y mantenimiento.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img49.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Organización

                    p  Permite dividir programas complejos en partes más pequeñas, facilitando su manejo y haciendo el código más flexible.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img50.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Reutilización

                    p Las funciones se escriben una sola vez pero pueden usarse muchas veces, lo que evita repeticiones innecesarias, reduce errores, mejora el mantenimiento y optimiza el consumo de recursos del programa.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img51.png', alt='')

    p.mt-4 Las funciones están conformadas por unos componentes que les permiten mantener una estructura para su aprovechamiento dentro del código. Entre sus componentes están: 


    .row.bg-12
      .col-12 
        .p-5
          .row.justify-content-center.mb-5
            .col-lg-3.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema2/img52.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center Nombre
                p.text-center.mb-0 Es la identificación de la función, y para su uso dentro del código, la función es llamada por el nombre, lo que lo hace imprescindible.
            .col-lg-3.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema2/img53.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center Parámetros
                p.text-center.mb-0 Son las variables o los valores que recibe la función para hacer su trabajo y así cumplir con la tarea para la cual fue creada.
            .col-lg-3.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema2/img54.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center Cuerpo
                p.text-center.mb-0 Es el conjunto de instrucciones que hacen el trabajo por el cual fue creada la función.

            .col-lg-3.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema2/img55.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center Valor de retorno
                p.text-center.mb-0 Es el resultado que devuelve la función, después de procesarse, o sea, después de hacer su trabajo. Hay que tener en cuenta que la función no siempre devolverá un valor o un resultado.

    p.mt-4 A continuación se presentan  dos ejemplos comparativos, en donde se puede evidenciar  una de las ventajas del uso de funciones:

    p #[b Ejemplo 11:] código redundante vs uso de funciones

    .row.mt-4.justify-content-center
      .col-lg-6.p-4
        .row
          .col-12
            .bg-19.p-3
              figure
                img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
          .col-12
            .bg-20.px-5.py-4
              pre
                code.text-white
                  | Inicio
                  |
                  |   a = 5
                  |   b = 3
                  |   c = a + b
                  |   Mostrar c
                  |
                  |   a = 7
                  |   b = 2
                  |   c = a + b
                  |   Mostrar c
                  |
                  | Fin
      .col-lg-6.p-4
        .row
          .col-12
            .bg-19.p-3
              figure
                img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
          .col-12
            .bg-20.px-5.py-4
              pre
                code.text-white
                  | Inicio
                  |
                  |   Definir función sumar(a, b)
                  |   Devolver a + b
                  |   Fin función
                  |
                  |   c = sumar(5, 3)
                  |   Mostrar c
                  |
                  |   c = sumar(7, 2)
                  |   Mostrar c
                  |
                  | Fin

    .row.mt-4.align-items-center
      .col-lg-8
        .row.align-items-center.p-4.bg-3
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema2/img58.svg", alt="", style="width: 90px").m-auto
          .col-lg-10
            p Como se puede ver en el ejemplo 12, al utilizar las funciones, se elimina la necesidad de estar repitiendo el mismo bloque de código para sumar dos números. Aquí se está mostrando un algoritmo corto, pero a medida que este vaya creciendo y aumenten la cantidad de líneas de código y se dé la necesidad de estar utilizando la suma de dos números, no habría que repetir nuevamente el mismo bloque de código, sino llamar la función sumar. Esto hace que el código se mantenga más limpio.
        
        p.mt-4 A continuación se presentan en los ejemplos 12 y 13 un comparativo de dos algoritmos, para visualizar como se ve una función cuando retorna un valor en contraste con la que no: 

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img59.png', alt='', style="width: 400px").m-auto


    .row.mt-4.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img60.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p #[b Ejemplo 12.] Función con retorno

        .row
          .col-12
            .bg-19.p-3
              figure
                img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
          .col-12
            .bg-20.px-5.py-4
              pre
                code.text-white
                  | Inicio
                  |
                  |   // Declarar la función con retorno
                  |   Definir función calcularAreaCirculo(radio)
                  |     Definir area como decimal
                  |     area = 3.14 * radio * radio
                  |     Devolver area  // Retorna el valor calculado
                  |   Fin función
                  |
                  | Fin

        p.mt-4 #[b Ejemplo 13.]  Función sin retorno

        .row
          .col-12
            .bg-19.p-3
              figure
                img(src='@/assets/curso/tema1/img41.svg', alt='', style="width: 70px")
          .col-12
            .bg-20.px-5.py-4
              pre
                code.text-white
                  | Inicio
                  |
                  |   // Declarar una función sin retorno
                  |   Definir función mostrarMensaje(mensaje)
                  |     Mostrar mensaje
                  |
                  |   // La función muestra el mensaje, pero no devuelve nada
                  |   Fin función
                  |
                  |   // Llamada a la función
                  |   mostrarMensaje("¡Hola, estudiantes!")
                  |
                  | Fin

    .tarjeta.color-primario.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema2/img63.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #1BEBF5 !important") Algoritmos 
              p.text-small.mb-0 Para una mejor comprensión de los temas vistos hasta el momento, se comparte un listado de algoritmos desarrollados, en donde podrán evidenciar los temas tratados (Anexo 1). 
    
            .col-sm-auto
              a.boton.color-acento-botones(href="downloads/anexos/Algoritmos_en_pseudocodigo.pdf" target="_blank")
                span.text-white Descargar
                i.fas.fa-file-download.text-white
    

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
  updated() {
    this.$aosRefresh()
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
}
</script>

<style lang="sass"></style>
