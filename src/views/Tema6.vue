<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Elaboración de quesos

    img(data-aos="fade-up", src="@/assets/curso/tema6/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-primario-p5.shadow-sm.p-4.mb-5
          p.mb-0 La transformación de la leche en queso es uno de los procesos más representativos de la industria láctea y permite obtener productos con características muy diferentes de textura, sabor, aroma y consistencia.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para lograr un buen resultado es necesario cuidar desde la calidad de la leche utilizada hasta las condiciones de higiene, temperatura, tiempo y manipulación durante cada etapa. Pequeñas variaciones en estos factores pueden modificar considerablemente las características del producto final. 

    separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Etapas básicas de elaboración  

    .bg-primario-p5.p-4.py-3.rounded-4.mb-5
      p.mb-0 La elaboración de quesos comprende una serie de operaciones mediante las cuales los principales componentes de la leche, especialmente las proteínas y la grasa, se concentran y organizan para formar una estructura sólida o semisólida. Durante este proceso se favorece la coagulación de las proteínas, principalmente de las caseínas, lo que permite separar una parte líquida, conocida como lactosuero, de una parte, más consistente denominada cuajada. 

    .fullwidth-bg.fullwidth-bg--1
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 4.
      span Proceso de elaboración de quesos
    img.z-2(data-aos="fade-up", src="@/assets/curso/tema6/3.png", alt="La figura presenta de manera secuencial el proceso general de elaboración de quesos. A través de imágenes de un entorno productivo real, se muestran momentos relacionados con la preparación de la materia prima, el control de las condiciones del proceso, la formación de la estructura del producto y su manejo posterior. En conjunto, la figura permite comprender que esta elaboración requiere higiene, control de temperatura, manipulación y conservación para obtener un alimento con características apropiadas de calidad y textura.")

    separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Tipos de quesos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-secundario.p-4.py-3.rounded-4.mb-3
          p.mb-0 Los quesos pueden presentar grandes diferencias en textura, humedad, sabor, aroma y tiempo de conservación. Estas características dependen de factores como el tipo de leche, la forma de coagulación, la cantidad de suero retirado, el contenido de grasa, el salado y los tratamientos posteriores.  
        p.mb-0 En Colombia es común encontrar quesos frescos, blandos, semiblandos, hilados, untables y madurados, utilizados tanto para consumo directo como para preparaciones gastronómicas; entre los más representativos, tenemos: 

    .bg-slider-2.p-4.p-xl-5.rounded-4.z-2.mb-5
      SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5.slider-custom
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Queso campesino o fresco 
            p.mb-0 Presenta alta humedad, textura blanda, sabor suave y generalmente no requiere maduración. Debe conservarse refrigerado. 
            p.mb-4.mb-lg-0 #[strong Ejemplo de uso]: consumo directo, desayunos, arepas y preparaciones caseras 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema6/5.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Cuajada 
            p.mb-0 Producto fresco, de sabor suave y textura húmeda. Se obtiene mediante coagulación de la leche y separación parcial del lactosuero. 
            p.mb-4.mb-lg-0 #[strong Ejemplo de uso]: consumo directo, acompañada con miel, panela o preparaciones tradicionales. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema6/6.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Queso doble crema 
            p.mb-0 Queso semiblando, de textura elástica y buen contenido de grasa. Durante su elaboración se desarrolla una masa que puede ser trabajada o hilada. 
            p.mb-4.mb-lg-0 #[strong Ejemplo de uso]: sándwiches, comidas rápidas, panadería y preparaciones calientes. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema6/7.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Queso crema 
            p.mb-0 Producto blando, cremoso y fácil de untar, elaborado con leche y componentes grasos que favorecen su textura característica. 
            p.mb-4.mb-lg-0 #[strong Ejemplo de uso]: panes, galletas, repostería, salsas y preparaciones frías. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema6/8.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Queso mozzarella 
            p.mb-0 Queso de pasta hilada, textura elástica y buena capacidad de fundido. 
            p.mb-4.mb-lg-0 #[strong Ejemplo de uso]: pizzas, lasañas y otras preparaciones calientes. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema6/9.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Queso costeño 
            p.mb-0 Queso fresco o semiduro, generalmente más salado y firme que otros quesos frescos. 
            p.mb-4.mb-lg-0 #[strong Ejemplo de uso]: bollos, arepas, fritos y preparaciones típicas de la región Caribe. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema6/10.png", alt="")

    .row.justify-content-center.z-2
      .col-lg-10.col-xl-8
        .bg-audio.rounded-4.p-4
          .row.align-items-center.justify-content-center
            .col-8.col-sm-5.d-none.d-sm-block
              figure
                img.imgw-190.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="")
            .col-sm-6.col-lg-6
              p A continuación, lo invitamos a consultar el siguiente pódcast:
              TarjetaAudio.mb-3(
                texto="Cuando la leche se transforma: fermentación, yogur y queso"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
