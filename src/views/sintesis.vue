<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo Control de calidad, conservación y elaboración de derivados lácteos integra conocimientos orientados a verificar las condiciones de la leche, aplicar pruebas de calidad y desarrollar prácticas seguras en el laboratorio. Asimismo, aborda métodos de conservación, higiene y manipulación durante el procesamiento y almacenamiento. El contenido explica la transformación de la leche mediante fermentación, el uso de cultivos, la obtención de yogures y productos con componentes funcionales. Finalmente, presenta los fundamentos para la elaboración de quesos, considerando la coagulación, el desuerado, el moldeado, el salado, la refrigeración y las características de diferentes productos representativos del sector lácteo.
    

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura muestra la organización jerárquica del componente formativo “Control de calidad, conservación y elaboración de derivados lácteos”. La estructura permite visualizar de manera ordenada la secuencia temática que orienta el estudio de la leche, su manejo, conservación y transformación en diferentes productos. Asimismo, muestra la integración entre actividades de control, prácticas de higiene, procesos de fermentación y elaboración de derivados. En conjunto, la figura facilita la comprensión de cómo se articulan los conocimientos necesarios para desarrollar procesos lácteos seguros, organizados y orientados a la calidad del producto final. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
