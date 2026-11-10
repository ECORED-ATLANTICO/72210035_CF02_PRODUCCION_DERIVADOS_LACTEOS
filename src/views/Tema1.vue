<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Control de calidad fisicoquímico de la leche

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La leche fresca puede presentar variaciones en su composición y en sus características antes de ser utilizada como materia prima. Estas diferencias pueden estar relacionadas con el contenido de agua, grasa, proteínas, minerales, con su estado de conservación o con posibles alteraciones durante el manejo.
        .bg-contenido-a5.p-4.py-3.rounded-4
          p.mb-0 Por esta razón, resulta necesario aplicar procedimientos que permitan obtener información objetiva sobre sus condiciones y determinar si cumple con los parámetros requeridos para continuar con los procesos de conservación o transformación.
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/1.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El control de calidad fisicoquímico de la leche permite conocer de manera objetiva las condiciones que presenta esta materia prima antes de ser destinada a procesos de conservación o transformación. A través de la evaluación de sus características físicas y químicas es posible obtener información relacionada con su composición, estabilidad y comportamiento, aspectos que resultan importantes para determinar si la leche conserva las condiciones esperadas para su utilización en la industria láctea.
        .bg-primario-p5.p-4.py-3.rounded-4
          p Este tipo de control adquiere especial relevancia porque la leche puede experimentar variaciones desde el momento del ordeño hasta su recepción y procesamiento. Hay factores que pueden modificar sus características y afectar posteriormente la elaboración de derivados.
          p.mb-0 Por ello, la evaluación fisicoquímica constituye una herramienta de apoyo para reconocer cambios que no siempre pueden identificarse únicamente mediante la observación del producto. Entre esos factores tenemos:  

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .bg-slider.p-4.p-lg-5.rounded-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5.mb-4 Manipulación 
              p Las prácticas aplicadas durante el ordeño, traslado o recepción pueden modificar la calidad de la leche.  
              p.mb-0 #[strong Ejemplo]: el uso de recipientes mal higienizados puede favorecer cambios en la acidez y deteriorar la materia prima. 
            div
              h5.mb-4 Almacenamiento 
              p Las condiciones de conservación influyen en la estabilidad fisicoquímica de la leche durante el tiempo. 
              p.mb-0 #[strong Ejemplo]: una leche almacenada por periodos prolongados sin refrigeración adecuada puede aumentar su acidez y perder frescura. 
            div
              h5.mb-4 Temperatura 
              p La temperatura influye en la estabilidad, conservación y comportamiento de los componentes de la leche.  
              p.mb-0 #[strong Ejemplo]: mantenerla refrigerada después del ordeño ayuda a reducir alteraciones que posteriormente pueden evidenciarse durante los controles de calidad. 
            div
              h5.mb-4 Presencia de sustancias externas 
              p La incorporación de materiales ajenos modifica la composición y los resultados de calidad de la leche.  
              p.mb-0 #[strong Ejemplo]: adicionar agua altera su densidad, mientras que harinas o féculas pueden utilizarse fraudulentamente para modificar su apariencia. 
            div
              h5.mb-4 Cambios propios de sus componentes 
              p Las modificaciones en proteínas, grasas, lactosa o minerales pueden afectar las propiedades de la leche.  
              p.mb-0 #[strong Ejemplo]: el aumento de ácido láctico por transformación de la lactosa reduce el pH y modifica su estabilidad. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/3.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Los resultados obtenidos durante estos controles proporcionan información útil para la toma de decisiones dentro del proceso productivo, ya que permiten establecer si la materia prima puede continuar hacia las etapas posteriores de procesamiento o si requiere una revisión adicional.
        .bg-contenido-a5.p-4.py-3.rounded-4
          p.mb-0 De esta manera, el control fisicoquímico se integra a las acciones orientadas a conservar la calidad de la leche y a favorecer la obtención de productos lácteos con características adecuadas para su elaboración y consumo. 

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Análisis fisicoquímico y criterios de calidad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El análisis fisicoquímico permite evaluar de manera objetiva algunas características físicas y químicas de la leche y relacionarlas con criterios previamente establecidos. Su propósito es obtener información útil sobre el estado de la materia prima, interpretar posibles variaciones y apoyar decisiones antes de su conservación o transformación.
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Los resultados no deben analizarse de forma aislada, sino compararse con parámetros de calidad que permitan determinar si la leche conserva las condiciones esperadas. Estos criterios pueden relacionarse con su composición, estabilidad, características sensoriales e inocuidad, dependiendo del objetivo del análisis. 
        p.mb-0 Para realizar una evaluación fisicoquímica adecuada de la leche, es necesario seguir una secuencia organizada que permita obtener información confiable sobre la materia prima. Cada etapa, desde la toma de la muestra hasta la interpretación de los resultados, contribuye a valorar sus condiciones y a tomar decisiones oportunas antes de continuar con su conservación o procesamiento. 

    TabsC.color-acento-contenido.z-2
      .p-4(titulo="Muestra de leche")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Porción representativa de la materia prima que será evaluada y debe conservar sus características originales.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: tomar una muestra homogénea de un tanque de recepción antes de realizar los análisis.      
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema1/6.png", alt="")
      .p-4(titulo="Medición de parámetros")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Consiste en determinar características físicas o químicas mediante procedimientos y equipos apropiados.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: medir la densidad de una muestra de leche utilizando un instrumento adecuado. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema1/7.png", alt="")
      .p-4(titulo="Registro de resultados")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Comprende la anotación organizada de los datos obtenidos durante el análisis para facilitar su revisión y comparación.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: registrar el valor obtenido, la fecha, la identificación de la muestra y las condiciones de medición. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema1/8.png", alt="")
      .p-4(titulo="Comparación con criterios de calidad")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Permite contrastar los resultados con parámetros técnicos, normativos o establecidos para la materia prima.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: comparar un resultado de acidez con el intervalo definido para aceptar la leche destinada al procesamiento. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema1/9.png", alt="")
      .p-4(titulo="Interpretación")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p Consiste en analizar el significado de los resultados considerando las características de la muestra y las condiciones del proceso.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: identificar si una variación puede relacionarse con almacenamiento prolongado o cambios en la composición. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema1/10.png", alt="")
      .p-4(titulo="Decisión sobre la materia prima")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p A partir de los resultados se determina si la leche puede continuar hacia el procesamiento o requiere revisión adicional.  
            p.mb-4.mb-lg-0 #[strong Ejemplo]: aceptar un lote que cumple los criterios establecidos o separarlo cuando presenta resultados no conformes. 
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema1/11.png", alt="")

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Pruebas de calidad: alcohol, acidez titulable, harinas o féculas y reductasa

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de utilizar la leche fresca en procesos de conservación o transformación, es necesario verificar algunas de sus condiciones mediante procedimientos que permitan identificar posibles variaciones o alteraciones en la materia prima. Estas evaluaciones aportan información útil para complementar el control de calidad, apoyar la interpretación de su estado y tomar decisiones sobre su aceptación o utilización dentro del proceso productivo. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Prueba de alcohol

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La prueba de alcohol es un procedimiento rápido y presuntivo utilizado para valorar la estabilidad de la leche frente a tratamientos térmicos. Se basa en observar la reacción que presenta una muestra cuando entra en contacto con alcohol etílico; la aparición de grumos o coagulación puede evidenciar una condición de inestabilidad de la materia prima.
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 En el material de referencia, el procedimiento consiste en mezclar cantidades iguales de leche y alcohol etílico al 68 %, agitar cuidadosamente y observar el comportamiento de la muestra. Si aparecen grumos, el resultado se considera positivo; si la mezcla permanece homogénea, el resultado es negativo. 
        p.mb-0 Esta evaluación resulta útil antes de someter la leche a operaciones que implican calentamiento, ya que permite identificar rápidamente muestras que podrían presentar problemas de estabilidad. Sin embargo, al tratarse de una prueba presuntiva, su resultado debe relacionarse con otros controles de calidad antes de tomar una decisión definitiva sobre la materia prima. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        .bg-secundario-s10.p-4.py-3.rounded-4.mb-4
          p.mb-0 Para comprender de manera práctica la aplicación de esta prueba, es importante reconocer la secuencia básica que debe seguirse desde la preparación de la muestra hasta la observación del resultado. La siguiente figura presenta de forma visual cada una de estas etapas, permitiendo identificar cómo se desarrolla el procedimiento y qué características deben observarse para interpretar adecuadamente la respuesta de la leche. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/14.png", alt="")
    
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 1.
      span Etapas de la prueba de alcohol
    img.mb-5.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema1/15-mob.png", alt="La figura  presenta de manera visual y secuencial el procedimiento básico para realizar la prueba de alcohol en una muestra de leche. A través de cuatro escenas en un entorno de laboratorio lácteo, se muestra la preparación de la muestra, la incorporación del alcohol, la mezcla de los líquidos y la observación del resultado final. La representación permite identificar de forma general cómo se desarrolla la prueba y cómo se compara el comportamiento de la leche después del contacto con el alcohol. También se ilustra la diferencia entre una muestra que permanece uniforme y otra que presenta formación de grumos, facilitando la comprensión de la respuesta de la leche durante la evaluación de su estabilidad.|")
    img.mb-5.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema1/15.png", alt="La figura  presenta de manera visual y secuencial el procedimiento básico para realizar la prueba de alcohol en una muestra de leche. A través de cuatro escenas en un entorno de laboratorio lácteo, se muestra la preparación de la muestra, la incorporación del alcohol, la mezcla de los líquidos y la observación del resultado final. La representación permite identificar de forma general cómo se desarrolla la prueba y cómo se compara el comportamiento de la leche después del contacto con el alcohol. También se ilustra la diferencia entre una muestra que permanece uniforme y otra que presenta formación de grumos, facilitando la comprensión de la respuesta de la leche durante la evaluación de su estabilidad.|")

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Acides titulable

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/16.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La acidez titulable es una determinación fisicoquímica que permite estimar la cantidad total de sustancias con comportamiento ácido presentes en la leche. Su medición se realiza mediante una titulación con una solución alcalina de concentración conocida y permite obtener información útil sobre la frescura, estabilidad y posibles cambios ocurridos durante el almacenamiento.  
        .bg-primario-p10.p-4.py-3.rounded-4.mb-3
          p.mb-0 En la leche existe una acidez natural asociada con proteínas, fosfatos y otros componentes; sin embargo, esta puede aumentar cuando los microorganismos transforman la lactosa y producen ácido láctico. 
        p.mb-0 Para realizar la determinación se utiliza una cantidad conocida de leche, a la cual se adiciona un indicador, generalmente fenolftaleína. Posteriormente se incorpora gradualmente una solución de hidróxido de sodio (NaOH) hasta alcanzar una coloración rosada tenue y estable. 
    
    .bg-secundario-s10.p-4.py-3.rounded-4.mb-5.z-2
      p.mb-0 El volumen de solución alcalina utilizado permite calcular la acidez de la muestra. Los resultados pueden expresarse principalmente como porcentaje de ácido láctico, gramos de ácido láctico por litro o grados Dornic, dependiendo del método empleado.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-xl-8
        SlyderF.circl-arrow.mb-4(columnas="col-lg-6")
          .tarjeta.tarjeta--gris.p-4.p-lg-5
            .row.justify-content-center.mb-3
              .col-3
                img.mb-4.imgw-34.imgh-50(src='@/assets/curso/tema1/17.svg' alt='')
            h4.text-center.mb-4 Preparar la muestra
            p.mb-0 Tomar una cantidad definida de leche en un recipiente limpio.
          .tarjeta.tarjeta--gris.p-4.p-lg-5
            .row.justify-content-center.mb-3
              .col-3
                img.mb-4.imgw-34.imgh-50(src='@/assets/curso/tema1/18.svg' alt='')
            h4.text-center.mb-4 Adicionar el indicador
            p.mb-0 Agregar fenolftaleína para facilitar la observación del cambio de color.
          .tarjeta.tarjeta--gris.p-4.p-lg-5
            .row.justify-content-center.mb-3
              .col-3
                img.mb-4.imgw-34.imgh-50(src='@/assets/curso/tema1/19.svg' alt='')
            h4.text-center.mb-4 Realizar la titulación
            p.mb-0 Adicionar NaOH gota a gota mientras se agita la muestra.
          .tarjeta.tarjeta--gris.p-4.p-lg-5
            .row.justify-content-center.mb-3
              .col-3
                img.mb-4.imgw-34.imgh-50(src='@/assets/curso/tema1/20.svg' alt='')
            h4.text-center.mb-4 Identificar el punto final
            p.mb-0 Observar una tonalidad rosada tenue y estable.
          .tarjeta.tarjeta--gris.p-4.p-lg-5
            .row.justify-content-center.mb-3
              .col-3
                img.mb-4.imgw-34.imgh-50(src='@/assets/curso/tema1/21.svg' alt='')
            h4.text-center.mb-4 Registrar el volumen utilizado
            p.mb-0 Leer y anotar la cantidad de NaOH empleada en la titulación.
          .tarjeta.tarjeta--gris.p-4.p-lg-5
            .row.justify-content-center.mb-3
              .col-3
                img.mb-4.imgw-34.imgh-50(src='@/assets/curso/tema1/22.svg' alt='')
            h4.text-center.mb-4 Calcular e interpretar
            p.mb-0 Calcular la acidez de la muestra utilizando la concentración de NaOH y el volumen utilizado.
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/23.png", alt="")
    
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Harinas o féculas

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/24.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La prueba de harinas o féculas es un análisis cualitativo utilizado para identificar la posible presencia de almidón en la leche. Su aplicación resulta útil para detectar una adulteración cuando se han incorporado sustancias amiláceas con el propósito de modificar artificialmente la consistencia o aparentar un mayor contenido de sólidos. 
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Es importante precisar que esta prueba detecta principalmente almidón, por lo que permite evidenciar féculas y aquellas harinas que lo contienen. No constituye por sí sola una evaluación completa de todas las posibles sustancias utilizadas para adulterar la leche. 
        p.mb-0 La muestra debe ser representativa y encontrarse correctamente identificada antes del análisis. Dependiendo del procedimiento aplicado, puede realizarse un calentamiento previo y posterior enfriamiento para favorecer la detección del almidón. Después se adiciona el Lugol, se mezcla cuidadosamente y se observa cualquier cambio de color. La interpretación es principalmente visual y la prueba se da de la siguiente manera: 
 














 


      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
