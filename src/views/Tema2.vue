<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Laboratorio y conservación de la leche 

    img(data-aos="fade-up", src="@/assets/curso/tema2/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 Antes de que la leche sea utilizada en la elaboración de yogures, quesos u otros derivados, es necesario garantizar que su manejo se realice bajo condiciones adecuadas y controladas.  

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este proceso intervienen el uso correcto de equipos y materiales, la higiene del área de trabajo, la manipulación segura de las muestras y el mantenimiento de condiciones que ayuden a conservar la calidad de la leche.  
    
    p.mb-4 Estos aspectos permiten reducir errores, prevenir contaminaciones y proteger tanto al producto como a las personas que participan en su análisis y procesamiento. 

    .row.justify-content-center.align-items-center.z-2
      .col-lg-9
        .bg-contenido-a5.p-4.py-3.rounded-4.mb-3
          p.mb-0 El laboratorio y la conservación de la leche reúnen las prácticas, procedimientos y condiciones necesarias para trabajar con esta materia prima de manera segura y mantener sus características durante el tiempo previo a su transformación.
        p.mb-0 El laboratorio permite realizar controles y verificaciones bajo condiciones organizadas, mientras que la conservación busca limitar los cambios que pueden afectar la estabilidad, la calidad y la inocuidad del producto. 
        p.mb-0 Ambos aspectos están estrechamente relacionados, ya que una muestra correctamente manipulada y una leche adecuadamente conservada ofrecen mejores condiciones para obtener resultados confiables y continuar con los procesos productivos. 
      .col-sm-8.col-lg-3.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/3.png", alt="")
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Seguridad, equipos y buenas prácticas de laboratorio 

    img(data-aos="fade-up", src="@/assets/curso/tema2/4.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 El trabajo en laboratorio exige mantener condiciones organizadas y seguras antes, durante y después de realizar cualquier análisis de la leche. La correcta preparación del área, el uso adecuado de los elementos de protección personal, la limpieza de materiales y la verificación del funcionamiento de los equipos ayudan a reducir errores, evitar accidentes y prevenir contaminaciones que puedan afectar las muestras o los resultados obtenidos. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 La seguridad, los equipos y las buenas prácticas de laboratorio comprenden el conjunto de medidas, comportamientos y procedimientos que permiten desarrollar los análisis de manera confiable y proteger tanto al personal como a las muestras y al entorno de trabajo.  
        p.mb-0 Para desarrollar los análisis de la leche de manera segura y confiable, es necesario considerar diferentes condiciones relacionadas con la protección personal, el uso adecuado de equipos y reactivos, así como el orden y la limpieza del área de trabajo. La siguiente información resume estos componentes y su aplicación práctica en el laboratorio. 
    
    .row.justify-content-center.align-items-center
      .col-xl-8
        TabsA.color-acento-botones.z-2
          .tarjeta.bg-contenido-a5.p-4.py-5(titulo="Seguridad personal")
            p.mb-0 Aplicar medidas que reduzcan el riesgo durante el trabajo con muestras, reactivos y equipos.
            p.mb-0 #[strong Ejemplo]: utilizar bata, protección para el cabello, guantes y gafas cuando el procedimiento lo requiera.  
          .tarjeta.bg-contenido-a5.p-4.py-5(titulo="Equipos y materiales")
            p.mb-0 Verificar que los instrumentos sean adecuados, estén limpios y funcionen correctamente antes de iniciar el análisis.  
            p.mb-0 #[strong Ejemplo]: comprobar el estado de una bureta o un medidor antes de utilizarlo.  
          .tarjeta.bg-contenido-a5.p-4.py-5(titulo="Manejo de reactivos")
            p.mb-0 Utilizar las sustancias químicas siguiendo las indicaciones de identificación, concentración, manipulación y almacenamiento.  
            p.mb-0 #[strong Ejemplo]: mantener correctamente rotulada una solución de NaOH utilizada en la determinación de acidez.  
          .tarjeta.bg-contenido-a5.p-4.py-5(titulo="Orden, limpieza y registro")
            p.mb-0 Mantener el área organizada, eliminar residuos correctamente y registrar los resultados obtenidos.
            p.mb-0 #[strong Ejemplo]: limpiar la mesa al finalizar una prueba y anotar los datos de la muestra en el formato correspondiente.  
      .col-sm-6.col-lg-4.d-none.d-xl-block
        figure
          img(src="@/assets/curso/tema2/6.png", alt="" data-aos="zoom-in-down")

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Métodos y tratamientos de conservación de la leche 

    .fullwidth-bg.fullwidth-bg--1
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La leche puede deteriorarse rápidamente cuando permanece durante mucho tiempo a temperaturas inadecuadas o se manipula sin las condiciones necesarias. Por esta razón, después del ordeño y durante su procesamiento es fundamental controlar especialmente la temperatura y el tiempo, con el fin de conservar sus características y disminuir el crecimiento de microorganismos. 

    .bg-vaca.p-4.rounded-4.z-2.mb-5
      .tarjeta.tarjeta--blanca.p-4.rounded-4.py-3
        p.mb-0 Los métodos y tratamientos de conservación de la leche son procedimientos utilizados para mantener su calidad e inocuidad durante un periodo determinado. Algunos actúan mediante el frío, reduciendo la velocidad de crecimiento microbiano, mientras que otros utilizan calor para disminuir o destruir microorganismos. La elección depende del uso posterior de la leche y del producto que se desea elabora. Entre los métodos de conservación más comunes tenemos: 

    TabsC.color-acento-contenido.mb-5.z-2
      .p-4(titulo="Refrigeración")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Mantener la leche a baja temperatura para disminuir la velocidad de multiplicación de los microorganismos y retrasar su deterioro. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: enfriar la leche después del ordeño y conservarla refrigerada hasta su traslado o procesamiento.      
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema2/8.png", alt="")
      .p-4(titulo="Termización")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Aplicar un calentamiento moderado durante corto tiempo para disminuir parte de los microorganismos presentes sin realizar todavía una pasteurización completa. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: utilizarla como tratamiento previo cuando la leche no será procesada inmediatamente 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema2/9.png", alt="")
      .p-4(titulo="Pasteurización")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Someter la leche a una combinación controlada de tiempo y temperatura para reducir microorganismos que pueden afectar la salud o deteriorar el producto. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: pasteurizar la leche antes de elaborar yogur, queso u otros derivados. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema2/10.png", alt="")
      .p-4(titulo="Tratamiento UHT")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Calentar la leche a temperatura muy alta durante pocos segundos y envasarla en condiciones que eviten una nueva contaminación. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: leche larga vida que puede almacenarse a temperatura ambiente mientras el envase permanezca cerrado. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema2/11.png", alt="")
      .p-4(titulo="Esterilización comercial")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Aplicar un tratamiento térmico intenso para obtener un producto estable durante un periodo prolongado en su envase cerrado. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: leche procesada y envasada para conservarse durante varios meses antes de abrirse 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema2/12.png", alt="")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
