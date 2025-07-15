<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Lenguaje de programación

    .row.align-items-center
      .col-lg-8
        .row.p-4.bg-2
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img1.svg", alt="", style="width: 90px").m-auto
          .col-lg-10
            p Son programas que sirven como herramientas para que los desarrolladores puedan crear otros programas, los cuales organizan los algoritmos y procesos lógicos que se ejecutarán en el computador, controlando el comportamiento y comunicación con el usuario. Se componen de símbolos, de reglas semánticas y sintácticas, con las cuales se construye el código fuente que da vida a otros programas o aplicaciones; además, los lenguajes de programación facilitan el trabajo a los desarrolladores y el equipo de desarrolladores, ya que imitan la lógica de los humanos (Concepto, 2020). Son herramientas que permiten a los programadores darle instrucciones precisas a las computadoras (UNIR, 2024). 

        p.mt-4 Los lenguajes de programación se clasifican en tres tipos de lenguajes (Concepto, 2020):

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 400px").m-auto


    TabsB.color-acento-contenido.mt-4
      .py-4.py-md-5.bg-15(titulo="Lenguajes de bajo nivel" :icono="require('@/assets/curso/tema2/img42.svg')")
        .row.align-items-center.px-5
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/img2.png', style="width:480px").m-auto

          .col-md-7
            h4 Lenguajes de bajo nivel
            p Diseñados para interactuar directamente con <em>hardware</em> específico. No pueden ser utilizados en otros equipos, ya que son exclusivos de un sistema. Su principal ventaja es el aprovechamiento máximo del sistema para el que fueron creados; su mayor desventaja, la falta de compatibilidad con otros sistemas.


      .py-4.py-md-5.bg-15(titulo="Lenguajes de alto nivel" :icono="require('@/assets/curso/tema2/img42.svg')")
        .row.align-items-center.px-5
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/img3.png', style="width:480px").m-auto

          .col-md-7
            h4 Lenguajes de alto nivel
            p Son universales y compatibles con múltiples sistemas, sin depender de la arquitectura del <em>hardware</em>. Incluyen lenguajes de propósito general y otros con fines específicos.


      .py-4.py-md-5.bg-15(titulo="Lenguajes de nivel medio" :icono="require('@/assets/curso/tema2/img42.svg')")
        .row.align-items-center.px-5
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/img4.png', style="width:480px").m-auto

          .col-md-7
            h4 Lenguajes de nivel medio
            p Se ubican entre los lenguajes de alto y bajo nivel, aunque no todos los autores reconocen esta categoría. Permiten operaciones de alto nivel y, al mismo tiempo, el manejo de aspectos locales de la arquitectura del sistema.

    p.mt-4 Los siguientes lenguajes de programación se ubican según su tipo en los siguientes niveles: 

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-3
            figure
              img(src="@/assets/curso/tema3/img6.svg", alt="alt", style="width: 92px").m-auto
          h4.text-center Lenguajes de bajo nivel
          ul.lista-ul--color.px-5
            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Assembler
            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Lenguaje máquina

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Ensamblador (x86, ARM)

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 AVR Assembly

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 PIC Assembly

      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-3
            figure
              img(src="@/assets/curso/tema3/img7.svg", alt="alt", style="width: 92px").m-auto
          h4.text-center Lenguajes de alto nivel
          ul.lista-ul--color.px-5
            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Python

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Java


            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 JavaScript


            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Ruby


            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Swift

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Kotlin

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Go


      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-3
            figure
              img(src="@/assets/curso/tema3/img8.svg", alt="alt", style="width: 92px").m-auto
          h4.text-center Lenguajes de nivel medio
          ul.lista-ul--color.px-5
            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 C

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 C++

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Rust

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Objective-C

    p.mt-4 Los lenguajes de programación pueden tener otro tipo de clasificaciones según su naturaleza (Volpe, 2021): 

    .row.mt-4.justify-content-center
      .col-lg-8
        .row.align-items-center.bg-16.p-3
          .col-lg-6

            ul.lista-ul--color.px-5
              li.d-flex
                i.fa-solid.fa-circle-check
                .contenido
                  p.mb-0 #[b Por su compilación:]
              li
                ul
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Compilado
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Interpretado


              li.d-flex
                i.fa-solid.fa-circle-check
                .contenido
                  p.mb-0 #[b Por el paradigma:]
              li
                ul
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Multiparadigma
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Orientado a objeto (POO)
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Funcional
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Reactivo
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Imperativo


              li.d-flex
                i.fa-solid.fa-circle-check
                .contenido
                  p.mb-0 #[b Por el propósito:]
              li
                ul
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Propósito general
                  li.d-flex.align-items-center.mb-0
                    i.fa-solid.fa-circle(style="font-size: 6px;")
                    span.mb-0.text-small Propósito específico (DSL)

          .col-lg-5.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema3/img9.png', alt='', style="width: 400px").m-auto

    p.mt-4 Los lenguajes de programación, para funcionar, se apoyan en diferentes componentes (UNIR, 2024), entre los cuales se pueden citar:

    .row.bg-1
      .col-12 
        .px-5
          .row.align-items-center.mt-4
            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema3/img10.png', alt='', style="width: 400px").m-auto

            .col-lg-8
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
                .row(titulo="Instrucciones")
                  .col-12.mb-4.mb-md-0.px-5

                    p Son los comandos, por medio de los cuales, se les dan las indicaciones a los computadores. Dentro de estas instrucciones pueden estar las operaciones lógicas, aritméticas, las condiciones y los ciclos.


                div(titulo="Compiladores e intérpretes")
                  ul.lista-ul--color.px-5
                    li.d-flex
                      i.fa-solid.fa-circle-check
                      .contenido
                        p.mb-0 Lenguajes compilados: son los que se encargan de convertir la totalidad del código fuente que se ha elaborado en un programa a código máquina antes de que este sea ejecutado.
                        
                    li.d-flex
                      i.fa-solid.fa-circle-check
                      .contenido
                        p.mb-0 Lenguajes interpretados: se encargan de leer y ejecutar el código línea a línea. Este procedimiento, aunque ventajoso por un lado, afecta la velocidad y el método en que se ejecutan los programas.


                div(titulo="Funciones y estructuras")
                  p.px-5.mb-0  Le permite a los programadores o desarrolladores definir funciones en las cuales se pueden encapsular bloques de códigos que se pueden seguir reutilizando a lo largo de la escritura del programa. También permiten la organización del código en estructuras de clases, lo que es aprovechable en los lenguajes orientados a objetos. Estos componentes facilitan la modularidad y el mantenimiento que se hace al #[i software], para mantenerlo activo y optimizado.

          p.mt-4 Los lenguajes de programación también poseen unas características claves que determinan su utilidad y eficacia en el desarrollo del #[i software]. A continuación se exponen algunas de ellas (UNIR, 2024):
          .carousel-bg
            .row.justify-content-center.align-items-center
              .col-lg-8
                SlyderF.custom(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img11.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Legibilidad
                    p.text-center.mb-0 El lenguaje debe ser comprensible para cualquier desarrollador, lo que facilita el mantenimiento del #[i software] y el trabajo colaborativo.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img12.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Eficiencia
                    p.text-center.mb-0 Permite realizar tareas rápidamente y optimizar el uso de recursos del sistema.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img13.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Portabilidad
                    p.text-center.mb-0 El código puede ejecutarse en distintas plataformas sin necesidad de modificaciones importantes.


                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img14.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Comunidad y soporte
                    p.text-center.mb-0 Una comunidad activa y con recursos facilita el aprendizaje, la actualización del lenguaje y la resolución de problemas. Lenguajes con baja adopción tienden a desaparecer.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img15.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Paradigma de programación
                    p.text-center.mb-0 Define el enfoque del lenguaje (funcional, imperativo, orientado a objetos, entre otros), lo cual influye en su adecuación a distintos tipos de proyectos.

              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema3/img16.png", alt="alt", style="width: 305px").m-auto

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Paradigma de programación

    .row.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img17.png', alt='', style="width: 400px").m-auto

      .col-lg-8
        p Es el enfoque o el estilo utilizado para desarrollar el #[i software], de tal forma, que estructura y organiza el código según unos principios específicos, para ello hay diferentes formas de diseñar un lenguaje y diferentes formas de trabajar para conseguir objetivos que necesitan los desarrolladores (Canelo, 2020). Son modelos, guías, reglas, métodos, teorías para solucionar problemas a nivel de codificación (Castro, 2021).

        p.p-5.bg-14 Se puede hablar de un paradigma como si fuese un mapa, el cual se utiliza para desplazarse de un punto X a un punto Y; para ello se tienen diferentes rutas, unas más rápidas, otras más lentas, algunas más largas, otras más cortas, pero al final todas permiten llegar al mismo destino. En el mundo de la programación es igual, y los paradigmas representan ese enfoque documentado para escribir el código, donde cada uno de ellos brinda unas características, ventajas y desventajas según el propósito, pero al final todos los lenguajes logran el objetivo del desarrollo del #[i software] (EDteam, 2020).

        p.mt-4 Los principales paradigmas de programación son:

    .titulo-tres.mt-5: h3 Paradigma imperativo

    .row.mt-4.align-items-center
      .col-lg-8
        p.p-5.bg-2 Basado en instrucciones secuenciales, donde el programador específica cómo se va a realizar la tarea, paso a paso. Este enfoque detalla un conjunto de instrucciones que transforman el estado de un programa; es decir, los programas escritos bajo este paradigma detallan lo que se debe hacer y cómo se debe hacer. Dentro de este paradigma se encuentran C, Java, Python, JavaScript.

        p.mt-4 Entre sus características resalta que trabajan con pasos detallados y secuenciales, y el flujo de control lo determinan las estructuras de control como bucles y condicionales. Entre sus principales ventajas, están la flexibilidad, el control sobre el flujo de ejecución, son más fáciles de entender y son recomendables para el desarrollo de tareas sencillas.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img18.png', alt='', style="width: 400px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 3.
      span Suma de dos números en Python 

    .row.mt-4.bg-18.justify-content-center.p-4
      figure.mt-4
        img(src='@/assets/curso/tema3/img27.png', alt='Fragmento de código en Python que declara dos variables con valores numéricos, calcula su suma y muestra el resultado en pantalla.', style="width: 610px").m-auto


    .titulo-tres.mt-5: h3 Paradigma declarativo

    .row.align-items-center.mt-4
      .col-lg-8
        .row.align-items-center.p-4.bg-14
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img20.svg", alt="", style="width: 90px").m-auto

          .col-lg-10
            p A diferencia del imperativo en donde se específica lo que se quiere hacer, aquí se declara como se quiere lograr. Este paradigma está enfocado en el resultado deseado y el sistema es el que se encarga de conseguir la mejor manera de lograrlo. Con este tipo de paradigmas  el desarrollador puede escribir programas más concisos y con una menor propensión a los errores. Dentro de este paradigma se encuentran lenguajes como SQL, Prolog.

        p.mt-4 Entre sus principales ventajas, está el facilitar la escritura con una menor incidencia de errores y su facilidad para que el programador lo entienda mejor, ya que se enfoca más en el resultado.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img21.png', alt='', style="width: 400px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 4.
      span Consulta de estudiantes mayores de edad en SQL 

    .row.mt-4.bg-18.justify-content-center.p-4
      figure.mt-4
        img(src='@/assets/curso/tema3/img28.png', alt='Consulta SQL que selecciona el nombre de los estudiantes cuya edad es mayor o igual a 18 años.', style="width: 610px").m-auto

    .titulo-tres.mt-5: h3 Paradigma Orientado a Objetos (OOP)

    .row.mt-4.align-items-center
      .col-lg-8
        p  Se centra en objetos y en clases. El objeto es la instancia de una clase, la cual agrupa los datos y comportamientos relacionados. En este paradigma, los problemas son modelados como colecciones de objetos que están interactuando entre sí. Promueve la modularidad, la reutilización de código y la abstracción. Aquí se encuentran lenguajes como Ruby, Java.

        .row.mt-4.p-4.bg-14
          p Sus 4 pilares son:

          ul.lista-ul--color
            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Encapsulamiento: agrupa los datos y los métodos en una única entidad.

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Herencia: permite la creación de nuevas clases, a partir de clases que ya existen.

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Polimorfismo: permite a objetos de diferentes clases ser tratados como objetos de una clase común.

            li.d-flex
              i.fa-solid.fa-circle-check
              .contenido
                p.mb-0 Abstracción: oculta la complejidad de los detalles internos, refiriéndose a cómo es su funcionamiento y por el contrario, muestra solo lo esencial, a quien lo necesita usar. En otras palabras, lo importante no es mostrar cómo se hace, sino lo que hace.

        p.mt-4 Entre sus principales ventajas se puede decir que mejora tanto la organización como la estructura del código, gracias a la herencia, facilita la reutilización de código. Así mismo, brinda facilidad a la hora de hacer mantenimiento, ya que se puede trabajar con un código más modular.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img23.png', alt='', style="width: 480px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 5.
      span  Definición y uso de una clase en Java 

    .row.mt-4.bg-18.justify-content-center.p-4
      figure.mt-4
        img(src='@/assets/curso/tema3/img29.png', alt='Fragmento de código en Java con una clase llamada Persona que contiene atributos de nombre y edad, un método para saludar, y una clase Main que crea un objeto Persona, asigna valores a sus atributos y ejecuta el método de saludo.', style="width: 820px").m-auto

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Lenguajes más utilizados

    .row.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img25.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p El desarrollo de #[i software] representa todo un universo, lleno de diversos lenguajes de programación, cuyas características, formas, estilos, paradigmas los hacen tan diferentes pero a la vez tan ricos, para que cualquier programador encuentre una herramienta que se ajuste a su estilo y necesidades. Eso sí, algunos lenguajes son más populares que otros, tal vez por su facilidad, su versatilidad y, ante todo, por su alta incidencia y adopción en la industria tecnológica.

        p.p-5.bg-14.mt-4 La idea de dar a conocer un listado de los lenguajes más utilizados en el mundo, permite a los programadores y a los que están comenzando en este mundo de la programación, orientarse a recursos que ofrezcan mayores oportunidades laborales, orientándole el norte a herramientas que, aparte de facilitarles la creación de soluciones modernas y eficientes, también permite volverse competitivos para aprovechar las oportunidades que brinda el mercado. Claro está, también hay que tener en cuenta que, a mayor popularidad del lenguaje, mayor será su competencia, ya que otros irán por esa estatuilla.

    .row.mt-4.align-items-center
      .col-lg-8 
        p.p-5.bg-14 El tener identificado cuáles son los lenguajes más utilizados, no solo ayuda a enfocarse, sino que también les guía para orientarse en una forma eficiente, teniendo de base las tendencias actuales que estén impulsando a las tecnologías con las que hoy en día se está innovando en las industrias, en donde sobresalen áreas como el desarrollo web, las aplicaciones móviles, sistemas empresariales, computación en la nube, internet de las cosas (IoT), realidad aumentada, blockchain, criptomonedas, biotecnología, robótica, computación cuántica  y la que viene marcando el hito en los últimos años, la inteligencia artificial.

        p.mt-4 En esta sección se comparte un listado de los lenguajes de programación más utilizados a nivel mundial, que se han tomado de fuentes actualizadas en los años 2024 y 2025:

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img26.png', alt='', style="width: 400px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 9.
      span Comparativa de lenguajes más utilizados según diferentes índices (2024–2025)

    .table-responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th Posición
            th Índice TIOBE (mayo 2025)
            th Índice PYPL (mayo 2025)
            th Encuesta Stack Overflow (mayo 2024)
            th GitHub Octoverse (2024)
        tbody(style="background-color: #F6F6F6")
          tr
            td 1
            td Python
            td Python
            td JavaScript
            td Python
          tr
            td 2
            td C++
            td Java
            td HTML/CSS
            td JavaScript
          tr
            td 3
            td C
            td JavaScript
            td Python
            td TypeScript
          tr
            td 4
            td Java
            td C/C++
            td SQL
            td Java
          tr
            td 5
            td C#
            td C#
            td TypeScript
            td C#
          tr
            td 6
            td JavaScript
            td R
            td Bash/Shell
            td C++
          tr
            td 7
            td Go
            td PHP
            td Java
            td PHP
          tr
            td 8
            td Visual Basic
            td Rust
            td C#
            td Shell (Bash)
          tr
            td 9
            td Delphi/Object Pascal
            td TypeScript
            td C++
            td C
          tr
            td 10
            td SQL
            td Objective-C
            td C
            td Go

    figcaption.mt-4 #[b Nota.] Elaboración propia con datos de (Jansen, 2025), (PYPL, 2025), (Stack Overflow, 202) y (GitHub, 2024)

    .tarjeta.color-primario.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema2/img63.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #1BEBF5 !important") Ejemplos 
              p.text-small.mb-0 Se comparten unos ejemplos para se pueda conocer la  codificación en algunos lenguajes de programación.  (Anexo 2). 
    
            .col-sm-auto
              a.boton.color-acento-botones(href="downloads/anexos/Ejemplos.pdf" target="_blank")
                span.text-white Descargar
                i.fas.fa-file-download.text-white

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
