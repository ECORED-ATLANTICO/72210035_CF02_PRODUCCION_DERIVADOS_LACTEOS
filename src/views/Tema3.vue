<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Higiene y cuidado de los productos lácteos 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-1 Durante la elaboración de productos como yogures, quesos y otros derivados, cada etapa del proceso puede influir directamente en la calidad final. 
        p.mb-0 La forma en que se manipulan los alimentos, la limpieza de las superficies y equipos, el control de la temperatura, el almacenamiento y la protección frente a posibles contaminantes son aspectos que deben mantenerse bajo control para evitar pérdidas y garantizar productos adecuados para el consumo. 
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-9
        .bg-contenido-a5.p-4.py-3.rounded-4.mb-3
          p.mb-0 La higiene y el cuidado de los productos lácteos reúnen las prácticas necesarias para prevenir la contaminación y conservar las características del alimento durante su elaboración, envasado, almacenamiento y distribución.  
        p.mb-4.mb-lg-0 Esto implica mantener una adecuada higiene del personal, limpiar y desinfectar correctamente los equipos e instalaciones, evitar la contaminación cruzada, controlar las condiciones de tiempo y temperatura y proteger el producto después de su procesamiento. Estas acciones contribuyen a mantener la inocuidad, la estabilidad y las características esperadas de los derivados lácteos. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/2.png", alt="")
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Higiene y buenas prácticas de manufactura durante el procesamiento 

    img(data-aos="fade-up", src="@/assets/curso/tema3/3.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 Durante la elaboración de un producto lácteo, la calidad no depende únicamente de contar con una buena materia prima. Cada contacto con las manos, los utensilios, los equipos, las superficies o el ambiente puede convertirse en una oportunidad de contaminación. Por esta razón, mantener condiciones higiénicas durante todo el proceso permite proteger el producto y conservar las características esperadas hasta su envasado. 

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Las Buenas Prácticas de Manufactura (BPM) reúnen medidas y procedimientos orientados a elaborar alimentos bajo condiciones higiénicas y controladas. En la producción de derivados lácteos incluyen la higiene del personal, la limpieza y desinfección de equipos e instalaciones, el manejo adecuado de materias primas y utensilios, la prevención de la contaminación cruzada y el control de las condiciones del proceso. 
        p.mb-0 Para comprender mejor cómo se aplican las Buenas Prácticas de Manufactura durante el procesamiento de productos lácteos, es útil observar los principales aspectos que deben mantenerse bajo control en cada etapa, como se muestran a continuación:  

    .fullwidth-bg.fullwidth-bg--1
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 2.
      span Higiene y buenas prácticas de manufactura para el procesamiento de productos lácteos
    img.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema3/5-mob.png", alt="La figura presenta una escena informativa sobre el trabajo higiénico y organizado en el procesamiento de productos lácteos. A través de varias imágenes y recuadros, se muestran acciones, condiciones y controles que ayudan a proteger la calidad del producto durante su elaboración. Se observan personas, equipos, áreas de trabajo y actividades relacionadas con la manipulación segura, la limpieza, la verificación de insumos y el mantenimiento de condiciones adecuadas en el entorno productivo. En conjunto, la imagen explica de manera visual que obtener un producto confiable no depende de una sola acción, sino del cumplimiento permanente de prácticas adecuadas en todo el proceso.")
    img.mb-2.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema3/5.png", alt="La figura presenta una escena informativa sobre el trabajo higiénico y organizado en el procesamiento de productos lácteos. A través de varias imágenes y recuadros, se muestran acciones, condiciones y controles que ayudan a proteger la calidad del producto durante su elaboración. Se observan personas, equipos, áreas de trabajo y actividades relacionadas con la manipulación segura, la limpieza, la verificación de insumos y el mantenimiento de condiciones adecuadas en el entorno productivo. En conjunto, la imagen explica de manera visual que obtener un producto confiable no depende de una sola acción, sino del cumplimiento permanente de prácticas adecuadas en todo el proceso.")

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Manipulación, almacenamiento y conservación de productos lácteos 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Una vez finalizada la elaboración de un producto lácteo, todavía existen etapas que pueden afectar su calidad. Un yogur, un queso o una crema correctamente procesados pueden deteriorarse si se manipulan de forma inadecuada, se almacenan a temperaturas incorrectas o permanecen expuestos a condiciones que favorezcan la contaminación. Por ello, el cuidado debe mantenerse desde el envasado hasta el momento en que el producto llega al consumidor. 
        p.mb-0 La manipulación, el almacenamiento y la conservación de los productos lácteos reúnen las prácticas destinadas a proteger el alimento después de su elaboración, mantener sus características y reducir los riesgos de deterioro o contaminación. Estas acciones incluyen:  

    .fullwidth-bg.fullwidth-bg--1
    .bg-slider-2.p-4.p-xl-5.rounded-4.mb-5.z-2
      SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5.slider-custom
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Manipulación higiénica 
            p Evitar el contacto innecesario del producto con manos, utensilios, superficies o elementos que puedan contaminarlo.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: utilizar utensilios limpios y desinfectados al porcionar un queso antes de su empaque. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema3/7.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Envasado y protección 
            p Utilizar recipientes o materiales que protejan el producto del ambiente, la humedad y posibles contaminantes.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: envasar el yogur en recipientes limpios, cerrados y adecuados para alimentos. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema3/8.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Control de temperatura 
            p Mantener cada producto dentro de las condiciones térmicas requeridas para reducir su deterioro y conservar sus características.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: almacenar yogures y quesos frescos bajo refrigeración. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema3/9.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Organización del almacenamiento 
            p Ubicar los productos de manera ordenada, evitando contacto con sustancias o alimentos que puedan contaminarlos.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: separar productos terminados de materias primas dentro de la cámara de refrigeración. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema3/10.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Rotación de productos 
            p Organizar las existencias considerando las fechas de elaboración y vencimiento para utilizar primero los productos que deben salir antes.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: aplicar el principio “primero en vencer, primero en salir”. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema3/11.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Control del envase 
            p Verificar que los recipientes permanezcan íntegros, cerrados y sin daños que comprometan el alimento.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: retirar un yogur cuyo envase presente ruptura, fuga o abombamiento. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema3/12.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4.mb-4 Seguimiento de condiciones 
            p Registrar información sobre temperatura, fechas y estado de los productos para facilitar su control.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: llevar un registro periódico de la temperatura de la cámara de refrigeración. 
          .col-sm-6.col-lg-4
            figure
              img.imgw-340(src="@/assets/curso/tema3/13.png", alt="")

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
                texto="Antes de transformar: calidad, conservación e higiene de la leche"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
