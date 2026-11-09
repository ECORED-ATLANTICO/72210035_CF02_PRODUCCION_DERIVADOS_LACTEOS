<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Leches fermentadas
    
    img(data-aos="fade-up", src="@/assets/curso/tema4/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 La transformación de la leche permite obtener productos con sabores, aromas, texturas y características diferentes a las de la materia prima original. En este proceso intervienen microorganismos seleccionados que, bajo condiciones controladas de tiempo y temperatura, generan cambios importantes en algunos de sus componentes.  

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Por esta razón, comprender qué ocurre durante estas transformaciones ayuda al aprendiz a reconocer la importancia de controlar cada etapa para obtener productos estables, seguros y con las características esperadas. 
        p.mb-0 Las leches fermentadas son productos obtenidos mediante la acción controlada de microorganismos que utilizan principalmente la lactosa de la leche y producen sustancias como el ácido láctico. Este cambio provoca una disminución del pH y genera modificaciones en la textura, el sabor, el aroma y la consistencia del producto. Dependiendo de los microorganismos utilizados, las condiciones del proceso y las características de la leche pueden obtenerse diferentes tipos de productos fermentados. 

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Fermentación y clasificación de las leches fermentadas 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La fermentación de la leche es un proceso biológico controlado en el que determinados microorganismos, principalmente bacterias ácido-lácticas, utilizan la lactosa como fuente de energía y la transforman principalmente en ácido láctico.  
        .bg-contenido-a5.p-4.py-3.rounded-4.mb-4.mb-lg-0
          p.mb-0 Como consecuencia, disminuye el pH de la leche y se producen cambios en su sabor, aroma, textura y consistencia, características que permiten obtener diferentes productos lácteos fermentados. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/3.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Este proceso no consiste simplemente en dejar reposar la leche. Para obtener un producto con las características esperadas es necesario trabajar con cultivos adecuados y controlar variables como la temperatura, el tiempo, la higiene y las condiciones de la materia prima.  
        .bg-primario-a5.p-4.py-3.rounded-4
          p.mb-0 A medida que aumenta la producción de ácido láctico, las proteínas de la leche, especialmente las caseínas, modifican su estabilidad y comienzan a formar una estructura más espesa o gelatinosa. El proceso para la fermentación de la leche se desarrolla de la siguiente manera: 

    .bg-slider-2.p-4.p-xl-5.rounded-4.mb-5.z-2
      SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5.slider-custom
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Incorporación del cultivo 
            p.mb-0 Consiste en adicionar microorganismos seleccionados a la leche para iniciar la fermentación bajo condiciones controladas que favorezcan su actividad y desarrollo. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema4/5.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Utilización de la lactosa 
            p.mb-0 Los microorganismos comienzan a utilizar la lactosa como fuente de energía, iniciando las transformaciones metabólicas que modifican progresivamente las características de la leche. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema4/6.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Producción de ácido láctico 
            p.mb-0 Durante la actividad microbiana, parte de la lactosa se transforma principalmente en ácido láctico, aumentando la acidez y provocando una disminución progresiva del pH. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema4/7.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Cambio de textura y sabor 
            p.mb-0 La disminución del pH modifica la estabilidad de las proteínas, especialmente las caseínas, favoreciendo una consistencia más espesa y el desarrollo del sabor ácido característico de los productos fermentados. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema4/8.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Enfriamiento del producto 
            p.mb-0 Una vez alcanzadas las características esperadas, se debe reducir la temperatura para disminuir la actividad de los microorganismos y controlar la acidificación, ayudando a conservar la textura y el sabor obtenidos. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema4/9.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las leches fermentadas no presentan las mismas características ni se elaboran utilizando siempre los mismos microorganismos. Dependiendo del tipo de cultivo empleado y de las transformaciones que ocurren durante el proceso, pueden obtenerse productos con diferentes niveles de acidez, consistencia, aroma y sabor. Reconocer estas diferencias permite comprender mejor por qué existen distintos derivados dentro de este grupo. 
        .bg-contenido-a5.p-4.py-3.rounded-4
          p.mb-0 La clasificación puede realizarse principalmente de acuerdo con el tipo de fermentación y los microorganismos que participan en ella, como se muestra a continuación: 

    TabsC.color-acento-contenido.z-2
      .p-4(titulo="Fermentación láctica")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Las bacterias ácido-lácticas transforman principalmente la lactosa en ácido láctico, generando disminución del pH y cambios en textura y sabor. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: yogur y leche acidófila.      
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema4/11.png", alt="")
      .p-4(titulo="Fermentación láctica con levaduras")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Participan bacterias ácido-lácticas y levaduras, por lo que además de ácido láctico pueden producirse pequeñas cantidades de otros compuestos asociados con el aroma y sabor. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: kéfir. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema4/12.png", alt="")
      .p-4(titulo="Fermentación ácido-alcohólica")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Combina la producción de ácido láctico con una actividad fermentativa de levaduras que puede generar pequeñas cantidades de alcohol y dióxido de carbono. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: kumis y algunas variedades de kéfir. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema4/13.png", alt="")
      .p-4(titulo="Leches fermentadas concentradas")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Después de la fermentación se reduce parte del contenido de suero o agua, obteniendo una consistencia más densa y mayor concentración de sólidos. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: productos fermentados espesos o concentrados. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema4/14.png", alt="")

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Cultivos lácticos y características de los productos fermentados

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/15.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Para que la fermentación de la leche ocurra de manera controlada, es necesario utilizar microorganismos capaces de generar los cambios esperados en el producto. Su selección influye directamente en aspectos como la velocidad de acidificación, la consistencia, el aroma y el sabor. Por esta razón, conocer qué función cumplen estos microorganismos permite comprender por qué no todas las leches fermentadas presentan las mismas características. 
        .bg-primario-p5.p-4.py-3.rounded-4
          p.mb-0 Los cultivos lácticos son preparaciones que contienen microorganismos seleccionados, principalmente bacterias ácido-lácticas, utilizadas para iniciar y dirigir la fermentación. Durante su actividad aprovechan nutrientes presentes en la leche, especialmente la lactosa, y producen ácido láctico y otros compuestos que participan en la formación de las características propias del producto fermentado.  Los cultivos mas utilizados en los productos lácteos son: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span  Tipos de cultivos utilizados en derivados lácteos
    .tabla-a.color-primario.tabla-a--text-left.mb-5
      table
        thead
          tr(style="background-color: #F5FAEA")
            th Cultivo láctico 
            th(colspan="3") Descripción 
            th(colspan="2") Producto donde se utiliza 
        tbody
          tr
            td #[strong #[em Streptococcus thermophilus]]
            td(colspan="3") Bacteria ácido-láctica de crecimiento rápido que inicia activamente la acidificación de la leche al transformar parte de la lactosa en ácido láctico. También favorece la formación de una textura uniforme y trabaja de manera complementaria con otros microorganismos durante la fermentación. 
            td(colspan="2") Yogur natural, generalmente en combinación con #[em Lactobacillus delbrueckii subsp. bulgaricus]. 
          tr
            td #[strong #[em Lactobacillus delbrueckii subsp. bulgaricus]]
            td(colspan="3") Bacteria ácido-láctica que participa intensamente en la fermentación, aumentando la producción de ácido láctico y contribuyendo a la disminución del pH. Su actividad también favorece el desarrollo del aroma, el sabor ácido característico y parte de la textura propia del producto fermentado. 
            td(colspan="2") Yogur tradicional, donde actúa junto con #[em Streptococcus thermophilus]. 
          tr
            td #[strong #[em Lactococcus lactis]]
            td(colspan="3") Bacteria ampliamente utilizada como cultivo iniciador en diferentes procesos lácteos. Fermenta la lactosa, produce ácido láctico y ayuda a generar las condiciones  necesarias para la coagulación y formación de textura. Algunas cepas también contribuyen al desarrollo de aromas característicos. 
            td(colspan="2") Quesos frescos, además de emplearse en diferentes variedades de quesos y productos lácteos cultivados. 
          tr
            td #[strong #[em Leuconostoc spp.]]
            td(colspan="3") Grupo de bacterias ácido-lácticas que puede complementar otros cultivos durante la fermentación. Además de producir ácido, algunas especies generan compuestos aromáticos, como el diacetilo, que aportan notas características de aroma y sabor a determinados derivados lácteos. 
            td(colspan="2") Mantequilla cultivada, en la que contribuye al aroma y sabor característicos del producto. 

    .bg-vaca.p-4.rounded-4.z-2.mb-5
      .tarjeta.tarjeta--blanca.p-4.rounded-4.py-3
        p.mb-0 En muchos derivados se utilizan combinaciones de cultivos porque cada microorganismo aporta una función diferente: unos favorecen principalmente la acidificación, mientras otros contribuyen a la textura, el aroma o el sabor del producto final 

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
