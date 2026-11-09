<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La calidad de los derivados lácteos depende en gran medida de las condiciones de la leche utilizada como materia prima y de los controles aplicados antes de iniciar su transformación.  
        .bg-secundario-s10.p-4.py-3.rounded-4
          p.mb-0 Por esta razón, evaluar la leche fresca mediante análisis físico-químicos y pruebas como alcohol, acidez titulable, detección de harinas o féculas y reductasa permite obtener información sobre su estado, estabilidad y aptitud para el procesamiento.  
    
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-8
        .bg-primario-p5.p-4.py-3.mb-3.rounded-4
          p.mb-2 Estas actividades requieren, además, aplicar procedimientos seguros y buenas prácticas durante el trabajo en laboratorio. 
          p.mb-0 Una vez verificada la calidad de la materia prima, su adecuada conservación resulta fundamental para limitar el deterioro y mantener sus características hasta el momento de la transformación. Para ello se emplean diferentes métodos y tratamientos, junto con prácticas de higiene, limpieza, manipulación y almacenamiento.  
        p.mb-4.mb-lg-0 Estas condiciones cobran especial importancia durante la elaboración de leches fermentadas, yogures y productos con probióticos y prebióticos, en los que el control de los microorganismos, la temperatura y el tiempo contribuye directamente a obtener las características esperadas. 
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/intro/2.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-secundario.p-4.py-3.mb-3.rounded-4
          p.mb-0 En este contexto, el componente formativo Control de calidad, conservación y elaboración de derivados lácteos busca que el aprendiz integre los controles aplicados a la leche con las condiciones necesarias para su conservación y transformación.  
        p.mb-0 Asimismo, permitirá reconocer los principios de fermentación, coagulación y elaboración de productos como yogur, queso doble crema, cuajada y queso crema, aplicando Buenas Prácticas de Manufactura durante cada etapa. De esta manera, podrá relacionar la calidad de la materia prima con la obtención de derivados lácteos seguros y con características adecuadas para su consumo. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
