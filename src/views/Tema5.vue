<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Yogur y lácteos funcionales 

    img(data-aos="fade-up", src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 Dentro de la transformación de la leche existen productos que combinan características sensoriales agradables con procesos controlados de fermentación y, en algunos casos, con la incorporación de microorganismos o ingredientes que aportan un valor adicional.  
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Para obtenerlos adecuadamente es necesario controlar la calidad de la leche, el tipo de cultivo, la temperatura, el tiempo de fermentación y las condiciones de almacenamiento, ya que estos factores influyen directamente en la textura, el sabor, la estabilidad y la calidad final. 
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 El yogur y los lácteos funcionales corresponden a productos derivados de la leche en los que la fermentación cumple un papel fundamental. En el caso del yogur, la acción conjunta de cultivos específicos permite transformar parte de la lactosa, aumentar la acidez y desarrollar una textura más espesa, junto con el aroma y el sabor característicos del producto. Dependiendo de la formulación y del proceso, pueden obtenerse diferentes presentaciones y tipos de yogur. 
        p.mb-0 Por otra parte, algunos productos lácteos pueden incorporar probióticos y prebióticos, componentes que amplían el enfoque tradicional del alimento. Los probióticos corresponden a microorganismos vivos seleccionados, mientras que los prebióticos son sustancias utilizadas como sustrato por determinados microorganismos. Su incorporación exige un adecuado manejo del proceso para mantener las condiciones requeridas durante la elaboración y conservación. 

    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Proceso de elaboración del yogur y clases de yogur 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La elaboración del yogur requiere controlar cuidadosamente la calidad de la leche, la temperatura, el tiempo y la actividad de los cultivos lácticos. Aunque el proceso puede variar según el tipo de yogur que se desee obtener, existe una secuencia básica que permite transformar la leche en un producto fermentado con textura, sabor, aroma y acidez característicos. Durante el proceso, los cultivos de #[em Streptococcus thermophilus] y #[em Lactobacillus delbrueckii subsp. bulgaricus] actúan sobre la lactosa y producen principalmente ácido láctico. Esto disminuye el pH y modifica la estructura de las proteínas, favoreciendo la formación de la consistencia característica del yogur. 

    .fullwidth-bg.fullwidth-bg--1
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 3.
      span Proceso de elaboración del yogur
    img.mb-5.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema5/4-mob.png", alt="La figura presenta, de manera secuencial y visual, el proceso general de transformación de la leche hasta obtener un yogur terminado y listo para su conservación. A través de imágenes reales, flechas y recuadros informativos, se muestran distintas acciones relacionadas con la preparación de la materia prima, el control de sus condiciones, la incorporación de cultivos, el desarrollo de la fermentación y la posterior estabilización del producto. También se representan actividades de mezcla, envasado y almacenamiento en frío. En conjunto, la figura permite comprender que la elaboración del yogur requiere mantener condiciones controladas de higiene, temperatura, tiempo y manipulación durante todo el proceso.")
    img.mb-5.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema5/4.png", alt="La figura presenta, de manera secuencial y visual, el proceso general de transformación de la leche hasta obtener un yogur terminado y listo para su conservación. A través de imágenes reales, flechas y recuadros informativos, se muestran distintas acciones relacionadas con la preparación de la materia prima, el control de sus condiciones, la incorporación de cultivos, el desarrollo de la fermentación y la posterior estabilización del producto. También se representan actividades de mezcla, envasado y almacenamiento en frío. En conjunto, la figura permite comprender que la elaboración del yogur requiere mantener condiciones controladas de higiene, temperatura, tiempo y manipulación durante todo el proceso.")

    img(data-aos="fade-up", src="@/assets/curso/tema5/5.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 El yogur puede presentarse de distintas formas según su consistencia, formulación y tratamiento posterior a la fermentación. Aunque todos parten de la acción de cultivos específicos sobre la leche, las diferencias en el proceso, la cantidad de sólidos, la agitación, la incorporación de frutas o saborizantes y el nivel de concentración permiten obtener productos con características distintas de textura, sabor y presentación. Para facilitar su comprensión, las principales clases de yogur pueden organizarse así: 

    .bg-slider-2.p-4.p-xl-5.rounded-4.z-2
      SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5.slider-custom
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Firme o coagulado 
            p.mb-0 La fermentación se realiza directamente en el envase y el gel formado permanece prácticamente intacto. Presenta una consistencia compacta y uniforme. 
            p.mb-0 #[strong Ejemplo de presentación]: yogur natural firme servido en vaso individual. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema5/6.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Batido 
            p.mb-0 Después de la fermentación, el coágulo se mezcla suavemente para obtener una textura cremosa y homogénea. Puede comercializarse natural o con otros ingredientes. 
            p.mb-0 #[strong Ejemplo de presentación]: yogur cremoso de fresa o natural. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema5/7.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Bebible 
            p.mb-0 Presenta menor viscosidad y una consistencia más fluida, obtenida mediante agitación y ajuste de la formulación después de la fermentación. 
            p.mb-0 #[strong Ejemplo de presentación]: yogur líquido comercializado en botella. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema5/8.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Natural 
            p.mb-0 Se elabora sin incorporar sabores o frutas que modifiquen significativamente su perfil original. Conserva el sabor ácido propio de la fermentación. 
            p.mb-0 #[strong Ejemplo de presentación]: yogur natural sin sabor añadido. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema5/9.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Saborizado 
            p.mb-0 Incorpora ingredientes que aportan aromas y sabores determinados, manteniendo la base fermentada del producto. 
            p.mb-0 #[strong Ejemplo de presentación]: yogur sabor vainilla. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema5/10.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Con fruta 
            p.mb-0 Contiene preparaciones, pulpas o trozos de frutas incorporados antes o después de la fermentación, según el proceso utilizado. 
            p.mb-0 #[strong Ejemplo de presentación]: yogur con fresa, mora o durazno. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema5/11.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Concentrado 
            p.mb-0 Después de la fermentación se reduce parte del suero, aumentando la concentración de sólidos y generando una textura más espesa y cremosa. 
            p.mb-0 #[strong Ejemplo de presentación]: yogur tipo griego. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema5/12.png", alt="")

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Lácteos funcionales 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Además de aportar proteínas, grasas, vitaminas y minerales, algunos productos lácteos pueden elaborarse o formularse para ofrecer beneficios adicionales relacionados con el bienestar y el funcionamiento del organismo. Esto se logra mediante la incorporación de determinados microorganismos, fibras u otros componentes que complementan el valor nutricional del alimento.
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Los lácteos funcionales son productos derivados de la leche que, además de cumplir su función nutricional básica, contienen componentes que pueden contribuir favorablemente al organismo cuando se consumen como parte de una alimentación equilibrada. Entre los más utilizados se encuentran los probióticos y prebióticos, especialmente en productos fermentados como yogures y bebidas lácteas. 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Componentes de los lácteos funcionales
    .tabla-a.color-primario.tabla-a--text-left.mb-5
      table
        thead
          tr(style="background-color: #F5FAEA")
            th Componente 
            th(colspan="2") ¿En qué consiste? 
            th(colspan="2") Aplicación en productos lácteos 
        tbody
          tr
            td #[strong Probióticos]
            td(colspan="2") Son microorganismos vivos seleccionados que, cuando se encuentran en cantidades adecuadas, pueden aportar beneficios al consumidor. 
            td(colspan="2") Se incorporan en algunos yogures y bebidas lácteas fermentadas.
            tr
            td #[strong Prebióticos]
            td(colspan="2") Son compuestos que sirven como sustrato para determinados microorganismos benéficos presentes en el intestino. 
            td(colspan="2") Pueden adicionarse a yogures, bebidas lácteas u otros derivados como parte de su formulación.
          tr
            td #[strong Simbióticos]
            td(colspan="2") Combinan probióticos y prebióticos en un mismo producto para favorecer su acción conjunta. 
            td(colspan="2") Pueden encontrarse en algunos yogures funcionales y bebidas fermentadas.














</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
