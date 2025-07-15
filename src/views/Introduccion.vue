<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    p Los algoritmos y la lógica de programación representan los principales fundamentos para entender cómo se resuelven los problemas, de forma estructurada y eficiente, a nivel computacional. Aunque este componente no busca enseñar programación en una forma tradicional y profunda, sí persigue dar a conocer las bases conceptuales, de tal manera, que puedan identificar, interpretar y evaluar el código que las herramientas de inteligencia artificial generativa produzcan. Este conocimiento es clave para que puedan aprovechar al máximo las capacidades que las IA Gen ponen a disposición de la humanidad.

    .row.bg-1
      .col-12
        .p-5
          .row.align-items-center.justify-content-center
            .col-lg-9
              .row.justify-content-center.mt-4
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
                    .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex
                        img(src='@/assets/curso/intro/img1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                    .col-lg.d-flex 
                      p La IA Gen se encuentra cada vez más presente en el desarrollo de soluciones tecnológicas; es por ello que comprender la lógica que está detrás de los algoritmos y los lenguajes de programación es primordial para lograr una mayor y mejor interacción con estas herramientas. Esto permite que entiendan cómo se descomponen los problemas en pasos lógicos, cómo se toman las decisiones y las repeticiones en los procesos, cómo los lenguajes de programación logran transformar y traducir todas las ideas en instrucciones, lo que va materializándose a través del computador.

              p.mt-4 En este componente formativo se hace un recorrido por los conceptos de algoritmos, estructuras de control, lógica de programación y lenguajes de programación, con la finalidad de construir una base sólida que facilite la interacción con las IA Gen y el análisis y aplicación del código generado por ellas, de tal forma que puedan generar soluciones concretas a desafíos planteados. Para una mejor comprensión, se proporcionarán ejemplos prácticos y representaciones gráficas que faciliten el entendimiento, lo que es ideal para facilitar el entorno de trabajo, en donde cada vez más, será más estrecha la interacción y colaboración conjunta entre la inteligencia artificial y el ser humano. 

            .col-lg-3.d-lg-block.d-none
              figure
                img(src='@/assets/curso/intro/img2.png', alt='', style="width: 295px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
