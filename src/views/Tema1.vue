<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Algoritmo

    .row.justify-content-center.align-items-center
      .col-lg-8
        .row.justify-content-center.p-4.bg-5
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 90px").m-auto
          .col-lg-10 
            p.p-1 Es un conjunto finito de pasos o reglas lógicas y precisas que se deben seguir para dar solución a un problema o realizar una tarea determinada. Los algoritmos se componen por reglas de entrada, de proceso y de salida, que se ejecutan en forma ordenada. Su construcción debe ser clara y exacta, sin dejar espacio a las ambigüedades, tampoco puede ser infinita y se desarrolla para dar una solución útil (Mancilla et al., 2016). Las reglas lógicas pueden ir desde describir los pasos para preparar un almuerzo, cruzar por un semáforo, vestirse para ir al colegio, hasta procedimientos más elaborados como aparecer en los primeros lugares en los buscadores en la web, entre otros ejemplos.
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 400px").m-auto

    p.mt-4 Para poder familiarizarse con los algoritmos, se comparten dos ejemplos desde la cotidianidad del ser humano:

    .row.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 400px").m-auto

      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Ejemplo 1. Algoritmo para hacer una empanada costeña")
            .col-12.mb-4.mb-md-0.px-5

              p.px-3 Inicio

              p.px-4.mb-0 Preparar ingredientes: harina, agua, sal, carne, cebolla, aceite, condimentos
              p.px-4.mb-0 Mezclar harina, agua y sal para formar masa
              p.px-4.mb-0 Amasar la mezcla hasta lograr una buena masa
              p.px-4.mb-0 Cocinar carne con cebolla y condimentos para el relleno
              p.px-4.mb-0 Dividir masa en porciones pequeñas y homogéneas
              p.px-4.mb-0 Para cada porción hacer:
              p.px-5.mb-0 Formar un círculo con rodillo
              p.px-5.mb-0 Colocar relleno en el centro
              p.px-5.mb-0 Doblar el círculo para formar media luna
              p.px-5.mb-0 Sellar bordes con los dedos o tenedor
              p.px-4.mb-0 Fritar las empanadas en aceite caliente
              p.px-4.mb-0 Revisar que las empanadas logren su punto dorado
              p.px-4.mb-0 Sacar empanadas y dejar escurrir 
              p.px-4 Poner las empanadas en la vitrina para la venta

              p.px-3.mb-0 Fin


          div(titulo="Ejemplo 2. Algoritmo para asistir al colegio")
            p.px-5.mb-0  Despertar a las 5:00 A.M. 
            p.px-5.mb-0  Levantarse de la cama
            p.px-5.mb-0  Ir al baño y asearse (lavar cara, cepillar dientes, bañarse)
            p.px-5.mb-0  Ponerse el uniforme del colegio
            p.px-5.mb-0  Desayunar
            p.px-5.mb-0  Cepillarse nuevamente los dientes
            p.px-5.mb-0  Preparar la mochila con los libros y demás útiles escolares
            p.px-5.mb-0  Verificar que todo esté en la mochila (libros, lápices, cuadernos, calculadora)
            p.px-5.mb-0  Despedirse de los padres
            p.px-5.mb-0  Salir de casa hacia el colegio

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Características de los algoritmos

    p Las principales características con las que tiene que contar un algoritmo para ser de utilidad (Revolledo, 2021) son:

    .row.bg-7
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Precisos

                    p Indica el orden de los pasos para llegar correctamente al final, no puede tener espacio para dudas ni ambigüedades. 

                    p #[b Ejemplo:] En vez de escribir “Haga la suma”, se escribe “Suma A + B”.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img4.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Definidos

                    p  Su entrada, proceso y salida tienen que estar bien definidas; un mismo algoritmo debe arrojar el mismo resultado cuando se alimenta con los mismos datos. 

                    p #[b Ejemplo:] Si el número es 4 y el algoritmo lo multiplica por 2, siempre debe dar 8.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Finitos

                    p  El proceso para el cual fue diseñado el algoritmo debe tener un fin, no puede quedarse funcionando en un ciclo infinito. Esto demuestra que cuenta con una serie de pasos determinados para cumplir y arrojar un resultado. 

                    p #[b Ejemplo:] Contar del 1 al 5 y luego finalizar el proceso. No tiene que seguir contando infinitamente.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Legibles

                    p Lo escrito en el algoritmo debe ser claro y ordenado, para que pueda ser comprendido fácilmente por otras personas. 

                    p #[b Ejemplo:] No usar frases como “llega a los usuarios con nuevas ofertas”, sino redactar correctamente como “sumar los precios de los productos vendidos”.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Concretos

                    p Cada instrucción o paso lógico debe indicar exactamente qué se debe hacer, sin ambigüedades. 

                    p #[b Ejemplo:]  En vez de escribir el paso “ordenar los objetos”, se debe escribir “ordenar los objetos de menor a mayor utilizando el método de burbuja”.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='')

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Tipos de algoritmos


    p Según la forma en que se resuelven los problemas, existe una variedad de tipos de algoritmos, los cuales manejan una lógica determinada, que pueden ser utilizados según naturaleza para seguir pasos fijos, tomar decisiones o repetir acciones. Según la necesidad se puede apoyar en uno de esos tipos para construir una solución más eficiente y adaptada a la situación. A continuación se describen los diferentes tipos de algoritmos: 

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 1.
      span Tipos de algoritmos

    .table-responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th IA Gen
            th Contenido generado
            th Descripción
            th Acceso
        tbody(style="background-color: #F6F6F6")
          tr
            td Secuencial
            td.text-start Es el tipo de algoritmo tradicional, y se encarga de ejecutar una instrucción tras otra, cumpliendo al pie de la letra cada una de las órdenes escritas, en el estricto orden en que están organizadas.
            td Tareas simples y lineales.
            td Calcular el área de un triángulo
          tr
            td Condicional o de decisión
            td.text-start Se diseñan para tomar decisiones con base a unas condiciones ya descritas. Por cada condición se realiza una acción.
            td Validar edades, permisos, opciones.
            td Determinar si un estudiante del SENA aprueba o no la formación.
          tr
            td Repetitivo o cíclico
            td.text-start Repita las instrucciones, mientras la condición que esté dando esa orden, se esté cumpliendo. Es recomendable cuando las tareas tienen que hacerse varias veces.
            td Contadores, bucles, procesos automáticos.
            td Contar del 1 al 5.
          tr
            td Recursivo
            td.text-start Su nombre se da, porque se llama asimismo para resolver el mismo problema en versiones más pequeñas. Necesita apoyarse en una condición para ser detenida.
            td Factorial, Fibonacci, problemas divisibles.
            td Calcular la factorial de un número
          tr
            td Aleatorio o probabilístico
            td.text-start Se apoya en decisiones al azar basadas en probabilidad. A diferencia de otros tipos, aquí una misma entrada no llevará a la misma salida.
            td Juegos, simulaciones, IA.
            td Obtener el número de la rifa que se puso a jugar.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Representación de algoritmos

    .bloque-texto-g.bg-8.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los algoritmos pueden ser representados de diferentes formas, según la necesidad o el nivel de conocimiento de la persona. Las formas más conocidas para representar un algoritmo son: 


    .titulo-tres.mt-5: h3 Lenguaje natural estructurado

    .row.justify-content-center.mt-4
      .col-lg-8
        p Es la forma más simple de representar un algoritmo, y su forma consiste en usar frases cortas en un lenguaje cotidiano, con una estructura lógica, que indique en cada línea que es lo que tiene que ir haciendo el algoritmo. Esta representación es fácil de entender y estructurar por personas sin conocimiento, pero también puede ser ambigua, sino se redacta con claridad. Ejemplo: 

        p #[b Ejemplo 3.] Sumar dos números en lenguaje natural  

        figure
          img(src='@/assets/curso/tema1/img10.svg', alt='', style="width: 820px").m-auto
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img11.png', alt='', style="width: 400px").m-auto

    .titulo-tres.mt-5: h3 Pseudocódigo

    .row.justify-content-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img12.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p Es un formato más avanzado al lenguaje natural estructurado ya que se utiliza el lenguaje natural, pero en una forma más técnica, llevando la estructura de la codificación de los lenguajes de programación, respetando la lógica computacional. Es de gran ayuda para el análisis de los programadores, sin estresarse o afanarse por la sintaxis de un lenguaje de programación en particular. Se recomienda mucho para el diseño de soluciones antes de programar en un lenguaje; aunque se requiere de entender la lógica de programación para aprovechar sus bondades. Ejemplo:

        p #[b Ejemplo 4.] Sumar dos números en pseudocódigo

        figure
          img(src='@/assets/curso/tema1/img13.svg', alt='', style="width: 820px").m-auto

    .titulo-tres.mt-5: h3 Diagrama de flujo

    p.mt-4 Es una representación gráfica o visual de un algoritmo, que se apoya en recursos como símbolos ya estandarizados que presentan el flujo de un proceso o los pasos que se siguen para dar solución a un problema. Cada uno de los símbolos o gráficos utilizados representan un tipo de acción (inicio, proceso, decisión, etc.) y las flechas indican el orden que se va siguiendo en la ejecución de los pasos. Ejemplo: 

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 1. 
      span Representación gráfica de un diagrama de flujo 

    figure
      img(src='@/assets/curso/tema1/img14.svg', alt='Diagrama de flujo que representa un algoritmo para sumar dos números. Incluye los pasos: inicio, lectura de valores A y B, cálculo de la suma, muestra del resultado y fin. ', style="width: 1240px").m-auto

    .row.align-items-center.justify-content-center.mt-4.bg-9.p-3
      .col-lg-1.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema1/img15.svg", alt="", style="width: 90px").m-auto
      .col-lg-11
        p Estos símbolos son esenciales en la elaboración de diagramas de flujo, ya que indican claramente las acciones, decisiones y secuencias que conforman un proceso. A continuación, se describen los símbolos más comunes utilizados en los diagramas de flujo:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 2.
      span Símbolos más utilizados en el diagrama de flujo

    .table-responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th Símbolo
            th Nombre
            th Función
        tbody(style="background-color: #F6F6F6")
          tr
            td 
              img(src="@/assets/curso/tema1/img16.svg", alt=" Elipse: símbolo de inicio o fin. ", style="width: 104px").m-auto
            td Inicio / Final
            td.text-start Simboliza el inicio y/o el final del algoritmo o de un proceso.

          tr
            td 
              img(src="@/assets/curso/tema1/img17.svg", alt=" Flecha horizontal: línea de flujo que indica la secuencia de pasos. ", style="width: 104px").m-auto
            td Línea de flujo
            td.text-start Simboliza el orden de que se va ejecutando el algoritmo. La flecha indica hacía donde se va a seguir o cual es el siguiente paso. 


          tr
            td 
              img(src="@/assets/curso/tema1/img18.svg", alt="Paralelogramo inclinado: símbolo de entrada o salida para lectura o impresión de datos. ", style="width: 104px").m-auto
            td Entrada / Salida
            td.text-start Simboliza la lectura y/o el ingreso de los datos y la visualización del resultado obtenido de una operación o proceso.


          tr
            td 
              img(src="@/assets/curso/tema1/img19.svg", alt="Flecha horizontal: línea de flujo que indica la secuencia de pasos. ", style="width: 104px").m-auto
            td Proceso
            td.text-start Representa cualquier tipo de operación o acción dentro del algoritmo.


          tr
            td 
              img(src="@/assets/curso/tema1/img20.svg", alt="Rectángulo: símbolo de proceso que representa una operación. ", style="width: 104px").m-auto
            td Decisión
            td.text-start Permite evaluar una condición que puede tener respuesta verdadera o falsa.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Estructura básica de un algoritmo

    p Lo invitamos a consultar el siguiente contenido en formado podcast sobre la estructura básica de un algoritmo, detallando sus componentes fundamentales: entrada, proceso y salida, con ejemplos que facilitan su comprensión.

    .row.mt-4.align-items-center
      .col-lg-7
        .row.align-items-center.bg-11.p-4
          .col-lg-5.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema1/img23.png', alt='', style="width: 270px").m-auto
          .col-lg-7
            p(style="color:#1BEBF5")
              b ¿Sabías qué?

            TarjetaAudio.color-secundario.mb-3.bg-10.p-3(
              texto="Estructura básica de un algoritmo "
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img22.png', alt='', style="width: 500px").m-auto

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Importancia de los algoritmos

    p La importancia de los algoritmos radica en que constituyen uno de los pilares fundamentales de la informática. Son esenciales para la resolución sistemática y eficiente de problemas complejos, y forman la base sobre la cual se construye la lógica de programación y el desarrollo de software. Su relevancia se manifiesta en múltiples dimensiones, tanto técnicas como prácticas.

    .row.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img24.png', alt='', style="width: 400px").m-auto

      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Marco lógico para la resolución de problemas")
            .col-12.mb-4.mb-md-0.px-5

              p Permiten descomponer cualquier problema en pasos organizados, claros y secuenciales, facilitando su análisis, diseño y solución. Esto simplifica problemas complejos mediante procesos más manejables.


          div(titulo="Base del desarrollo de <em>software</em>")
            p.px-5.mb-0  Todo programa o sistema es la implementación práctica de uno o varios algoritmos. Un software funcional depende de algoritmos bien definidos que aseguren un comportamiento predecible y correcto.

          div(titulo="Optimización de recursos computacionales")
            p.px-5.mb-0  Un buen algoritmo mejora el uso del hardware, como el tiempo de ejecución y la memoria, lo que es crucial en contextos de alta demanda, como en la inteligencia artificial o los videojuegos.

          div(titulo="Reutilización y modularidad")
            p.px-5.mb-0  Los algoritmos pueden ser diseñados para ser reutilizados en distintas partes de un programa o en diferentes proyectos, lo que promueve el modularidad, las #[b buenas prácticas] y facilita el mantenimiento del software.

          div(titulo="Prevención de errores y ambigüedades")
            p.px-5.mb-0  Un algoritmo bien estructurado asegura el #[b orden lógico] de las aplicaciones, evitando errores lógicos y ambigüedades que afectan la confiabilidad del #[i software].

          div(titulo="Mejora de la comunicación técnica")
            p.px-5.mb-0  Sirven como lenguaje común entre programadores, analistas y diseñadores, favoreciendo la #[b colaboración efectiva] dentro de los equipos de desarrollo.

    p.mt-4 Estas funciones resaltan el valor de los algoritmos como herramientas estructurales clave dentro del desarrollo de software y la ingeniería informática. Sin embargo, su utilidad trasciende lo técnico, alcanzando un impacto más amplio en la vida cotidiana, los negocios y la innovación tecnológica.
      
    .row.bg-1
      .col-12 
        .p-5 
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img26.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Adaptabilidad a diferentes lenguajes
                    p.text-center.mb-0 El dominio en la creación de algoritmos permite a los programadores #[b adaptarse fácilmente a distintos lenguajes de programación] y estilos de desarrollo.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img27.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Aplicabilidad en procesos cotidianos
                    p.text-center.mb-0 Más allá del software, los algoritmos son herramientas útiles para describir y organizar #[b procesos personales y empresariales] de forma eficiente.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img28.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Automatización y toma de decisiones
                    p.text-center.mb-0 Son fundamentales en el desarrollo de #[b máquinas autónomas], capaces de ejecutar tareas repetitivas o tomar decisiones basadas en reglas predefinidas, potenciando la automatización en múltiples sectores.


                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img29.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Impulso a la innovación tecnológica
                    p.text-center.mb-0 Contribuyen a la creación de productos y servicios más sofisticados, esenciales para #[b ser competitivos] y mantener el progreso en contextos empresariales y científicos.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img30.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Base de la inteligencia artificial
                    p.text-center.mb-0 Los modelos de IA se sustentan en algoritmos avanzados que permiten el #[b procesamiento, análisis y predicción] a partir de grandes volúmenes de datos. Sin ellos, sería imposible el desarrollo de sistemas inteligentes que aprendan y se adapten automáticamente.
              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema1/img25.png", alt="alt", style="width: 305px").m-auto

    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Diferencia entre algoritmo y programa

    .row.justify-content-center
      .col-lg-10
        p Aunque a menudo se utilizan de manera indistinta, #[b algoritmo] y #[b programa (software)] son conceptos distintos que cumplen funciones complementarias dentro del desarrollo informático. El #[b algoritmo] es la base lógica y conceptual que describe cómo resolver un problema paso a paso, mientras que el #[b programa] es la implementación práctica y codificada de uno o varios algoritmos, capaz de ser ejecutado por una computadora. La siguiente tabla compara ambos términos según distintos criterios, destacando sus diferencias clave:
      
      .col-lg-2.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema1/img31.svg", alt="", style="width: 295px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 3.
      span Diferencia entre algoritmo y software 

    .table.responsive
      table
        thead
          tr(style="background-color:#F8E32A")
            th IA Gen
            th Algoritmo
            th #[i Software]
        tbody(style="background-color: #F6F6F6")
          tr
            td Definición

            td.text-start Conjunto de instrucciones organizadas que siguen un orden lógico para resolver un problema o realizar una tarea.

            td.text-start Conjunto de instrucciones codificadas, datos y documentación para resolver un problema o una tarea en un computador.


          tr
            td Naturaleza

            td.text-start Conceptual, abstracto y lógico.

            td.text-start Concreto, físico (código ejecutable) y visible en el computador.


          tr
            td Representación

            td.text-start Se puede representar el lenguaje natural, pseudocódigo y en diagramas de flujo, etc.

            td.text-start Se representa por medio de código según el lenguaje de programación en que se está trabajando, y puede incluir interfaces, gráficas, archivos, entre otros elementos.


          tr
            td Ejecutabilidad

            td.text-start No puede ejecutarse en la computadora. Para conocer su funcionamiento, pueden utilizarse técnicas como la prueba de escritorio.

            td.text-start Se ejecuta directamente en una computadora o cualquier otro dispositivo informático que soporte un lenguaje de programación.

          tr
            td Dependencia

            td.text-start Su escritura es independiente de cualquier lenguaje de programación, dispositivo electrónico o plataforma tecnológica. 

            td.text-start Es dependiente del lenguaje de programación en que sea escrito o de la plataforma tecnológica en que sea ejecutado. 



          tr
            td Complejidad

            td.text-start Su escritura es más sencilla, ya que por lo general se limita a la resolución de un problema o tarea en particular. 

            td.text-start Es más complejo, ya que sus particularidades conllevan a usar más recursos de los que se podrían utilizar para transcribir literalmente el algoritmo; además pueden incluir múltiples algoritmos, adicionarles otros recursos para robustecer su funcionalidad y relevancia.


          tr
            td Propósito

            td.text-start Describir cómo se puede solucionar un problema o realizar una tarea de forma lógica.

            td.text-start Proporcionar una solución completa que pueda ser implementada para que el usuario final u otro sistema puedan usarla.


          tr
            td Modificación
            td.text-start Puede ser modificada a nivel lógico o a nivel conceptual.
            td.text-start Puede ser modificada a nivel código, configuración y documentación.

    separador
    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7 Aplicación de los algoritmos

    .row.justify-content-center
      .col-lg-10
        p Una vez comprendida la naturaleza y estructura de los algoritmos, puede afirmarse que su aplicación es fundamental en una amplia variedad de áreas, tanto en el campo de la informática como en diversos sectores de la vida cotidiana y de la industria. Su capacidad para resolver problemas de manera eficiente y sistemática los convierte en herramientas indispensables para el desarrollo tecnológico, organizacional y social. A continuación, se presentan algunas de las principales áreas donde los algoritmos juegan un papel clave: 
      
      .col-lg-2.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema1/img32.svg", alt="", style="width: 295px").m-auto

    .row.bg-7.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img33.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Desarrollo de aplicaciones y #[i software]

                    p Todo programa parte de una base algorítmica que define su comportamiento y funcionalidad, desde sistemas simples hasta plataformas complejas.
                    
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img34.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Inteligencia artificial y #[i machine learning]

                    p Permiten a las máquinas aprender de los datos, identificar patrones, tomar decisiones y realizar predicciones. Aplicaciones comunes incluyen reconocimiento de voz, visión artificial y sistemas de recomendación.

                  
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img35.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Sistemas de búsqueda y navegación

                    p Plataformas como Google, sistemas de GPS y redes sociales utilizan algoritmos para proporcionar resultados relevantes, rutas óptimas y conexiones entre usuarios de manera eficiente.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img36.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Automatización industrial y robótica

                    p Mediante algoritmos, se controla el funcionamiento de máquinas y procesos automatizados, asegurando precisión, seguridad y eficiencia en entornos industriales.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img37.png', alt='')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Análisis de datos y Big Data

                    p Posibilitan el procesamiento de grandes volúmenes de datos, facilitando la identificación de tendencias y la toma de decisiones estratégicas en distintas áreas.
                    
    p.mt-4 Estas aplicaciones evidencian cómo los algoritmos no solo son fundamentales en el desarrollo tecnológico, sino que también se integran en múltiples contextos donde su uso contribuye a optimizar procesos, incrementar la seguridad y personalizar la experiencia del usuario.

    .row.bg-12
      .col-12 
        .p-5
          .row.justify-content-center.mb-5
            .col-lg-4.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema1/img38.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center Criptografía y seguridad informática
                p.text-center.mb-0 Garantizan la confidencialidad, integridad y autenticidad de la información mediante técnicas de cifrado y autenticaciones robustas.
            .col-lg-4.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema1/img39.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center Sistemas financieros y bancarios
                p.text-center.mb-0 Se utilizan para controlar transacciones, detectar fraudes, calcular riesgos, gestionar inversiones y fortalecer la seguridad en un sector altamente sensible.
            .col-lg-4.mb-4.mb-lg-0
              .crd.crd--grayGrad(data-aos="flip-left")
                .bottomCircle.mb-3
                  figure
                    img(src="@/assets/curso/tema1/img40.svg", alt="alt", style="width: 92px").m-auto
                h4.text-center Educación y entretenimiento
                p.text-center.mb-0 Son clave en el diseño de juegos, simuladores y plataformas educativas, que se adaptan al estilo de aprendizaje y preferencias del usuario, ofreciendo experiencias personalizadas e interactivas.
                  

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
