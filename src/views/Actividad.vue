<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Control de calidad, conservación y elaboración de derivados lácteos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos, principios y relaciones desarrollados en el Componente Formativo, mediante la identificación, comprensión y aplicación conceptual de los fundamentos del Control de calidad, conservación y elaboración de derivados lácteos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del análisis fisicoquímico de la leche?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar únicamente el color y el sabor de la materia prima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar características físicas y químicas para conocer su estado y apoyar decisiones antes del procesamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir todos los análisis microbiológicos realizados en planta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Modificar la composición de la leche antes de almacenarla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! El análisis fisicoquímico permite obtener información objetiva sobre las condiciones de la leche y compararla con criterios de calidad antes de su conservación o transformación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'En la prueba de alcohol, ¿qué indica la aparición de grumos o coagulación después de mezclar la leche con alcohol?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que la leche presenta necesariamente una mayor cantidad de grasa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que la muestra está libre de alteraciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que la leche puede procesarse sin realizar otros controles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que la muestra puede presentar una condición de inestabilidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La formación de grumos puede indicar inestabilidad de la leche; por tratarse de una prueba presuntiva, debes relacionar el resultado con otros controles de calidad.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué sustancia se utiliza generalmente como indicador durante la determinación de la acidez titulable de la leche?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fenolftaleína.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Azul de metileno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solución de Lugol.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alcohol etílico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! En la determinación de la acidez titulable se utiliza generalmente fenolftaleína como indicador y una solución alcalina, como hidróxido de sodio, para realizar la titulación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el propósito de la prueba de harinas o féculas aplicada a la leche?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar directamente el contenido de grasa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular la cantidad de microorganismos presentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar la posible presencia de almidón utilizado para modificar artificialmente la leche.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Determinar la temperatura de conservación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Esta prueba permite detectar principalmente almidón presente en féculas o harinas que podrían haberse incorporado a la leche.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'En la prueba de reductasa, una decoloración rápida del azul de metileno suele relacionarse con:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Menor contenido de agua en la leche.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mayor actividad microbiana bajo las condiciones de la prueba.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mayor contenido de grasa y proteínas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ausencia total de microorganismos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Una pérdida rápida de la coloración suele asociarse con una mayor actividad metabólica de los microorganismos presentes.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Antes de iniciar un análisis de leche en el laboratorio, ¿cuál actuación es adecuada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar el estado y limpieza de los equipos y utilizar los elementos de protección requeridos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Utilizar cualquier reactivo disponible, aunque no esté identificado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Empezar el procedimiento antes de revisar los instrumentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mantener los resultados únicamente en la memoria del analista.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La preparación del área, la protección personal y la verificación de equipos contribuyen a reducir errores, accidentes y contaminaciones.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál afirmación describe correctamente la refrigeración de la leche?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Destruye completamente todos los microorganismos presentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituye siempre los tratamientos térmicos posteriores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incrementa intencionalmente la velocidad de fermentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reduce la velocidad de multiplicación microbiana y ayuda a retrasar el deterioro.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La refrigeración ayuda a conservar la leche al disminuir la velocidad de crecimiento de los microorganismos, pero no los elimina completamente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué diferencia principalmente la termización de la pasteurización según el componente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La termización utiliza exclusivamente temperaturas inferiores a la refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La pasteurización no emplea calor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La termización aplica un calentamiento moderado y no constituye una pasteurización completa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ambos tratamientos son exactamente iguales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La termización es un tratamiento térmico moderado que reduce parte de los microorganismos, pero no sustituye la pasteurización cuando esta es requerida',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál acción corresponde a las Buenas Prácticas de Manufactura durante el procesamiento de productos lácteos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener la higiene del personal, limpiar y desinfectar equipos y prevenir la contaminación cruzada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Utilizar los mismos utensilios sin limpiarlos entre diferentes procesos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener materias primas y productos terminados mezclados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el control de tiempo y temperatura',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Las BPM integran prácticas de higiene, limpieza, desinfección, control de materias primas y prevención de contaminación durante el procesamiento.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En el almacenamiento de productos lácteos, ¿qué significa aplicar el principio “primero en vencer, primero en salir”?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar primero el producto de mayor tamaño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retirar únicamente los productos recién elaborados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Almacenar todos los productos sin considerar sus fechas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dar salida primero a los productos cuya fecha de vencimiento está más próxima',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La rotación de productos permite organizar las existencias considerando sus fechas para disminuir pérdidas y mantener un adecuado control.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Durante la fermentación láctica, ¿qué componente de la leche utilizan principalmente los microorganismos como fuente de energía?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Caseína.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lactosa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Grasa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Las bacterias ácido-lácticas utilizan principalmente la lactosa y la transforman en ácido láctico durante la fermentación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué ocurre principalmente cuando aumenta la producción de ácido láctico durante la fermentación de la leche?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta progresivamente el pH.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desaparecen las proteínas de la leche.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Disminuye el pH y se producen cambios en la textura, el sabor y la consistencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se elimina completamente el agua del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La acidificación modifica la estabilidad de las proteínas, especialmente las caseínas, y favorece el desarrollo de la textura característica de los productos fermentados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes pares de microorganismos se relaciona directamente con la elaboración tradicional del yogur?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Leuconostoc spp. y Lactococcus lactis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lactococcus lactis y Bacillus spp.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Leuconostoc spp. y levaduras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Streptococcus thermophilus y Lactobacillus delbrueckii subsp. bulgaricus.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Estos dos cultivos actúan conjuntamente sobre la lactosa y participan en el desarrollo de la acidez, textura, sabor y aroma característicos del yogur.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál característica corresponde al yogur bebible?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su fermentación ocurre siempre dentro del envase sin alterar el gel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presenta menor viscosidad y una consistencia más fluida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Debe contener obligatoriamente trozos de fruta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se obtiene únicamente mediante eliminación total del suero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! El yogur bebible presenta una consistencia más fluida obtenida mediante agitación y ajustes en la formulación después de la fermentación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué son los probióticos según el contenido del componente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Microorganismos vivos seleccionados que, en cantidades adecuadas, pueden aportar beneficios al consumidor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustancias utilizadas exclusivamente para aumentar el contenido de grasa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Minerales adicionados para aumentar la dureza del queso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conservantes utilizados para eliminar completamente los cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Los probióticos son microorganismos vivos seleccionados utilizados, entre otros productos, en algunos yogures y bebidas lácteas fermentadas.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Durante la elaboración de queso, ¿qué ocurre en la coagulación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La grasa desaparece completamente de la leche.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El lactosuero se convierte en proteína.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las proteínas, especialmente las caseínas, se agrupan y forman la cuajada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se elimina todo el contenido de agua mediante evaporación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La coagulación permite formar una estructura sólida o semisólida denominada cuajada y facilita posteriormente la separación del lactosuero.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de las siguientes secuencias representa adecuadamente las etapas generales de elaboración de queso presentadas en el componente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salado → recepción → fermentación → homogeneización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recepción → pasteurización → coagulación → corte y desuerado → moldeado y prensado → salado y refrigeración.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Refrigeración → molienda → fermentación → evaporación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Coagulación → recepción → pasteurización → almacenamiento',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! El proceso comienza con la recepción y control de la leche y continúa con operaciones que permiten formar, separar, moldear y conservar el queso.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál característica corresponde al queso doble crema descrito en el componente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Producto líquido destinado principalmente al consumo como bebida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Queso muy seco que siempre requiere largos periodos de maduración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Producto fresco cuya principal característica es ser completamente granuloso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Queso semiblando, de textura elástica y con una masa que puede ser trabajada o hilada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! El queso doble crema se caracteriza por su textura semiblanda y elástica y por el trabajo que puede realizarse sobre su masa.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál característica diferencia principalmente al queso crema?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presenta una textura blanda, cremosa y fácil de untar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Es siempre un queso duro y madurado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Debe presentar grandes cavidades internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Su característica principal es una elevada capacidad de hilado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! El queso crema es un producto blando y cremoso elaborado con leche y componentes grasos que favorecen su textura característica.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Durante la elaboración de un yogur, se alcanza la acidez y textura esperadas. ¿Qué acción debe realizarse para disminuir la actividad de los microorganismos y controlar la acidificación posterior?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar nuevamente la temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incorporar más lactosa para prolongar la fermentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la temperatura mediante el enfriamiento del producto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mantenerlo indefinidamente en incubación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Una vez alcanzadas las características esperadas debes reducir la temperatura para disminuir la actividad microbiana y ayudar a conservar la textura y el sabor obtenidos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Has demostrado una comprensión adecuada de contenidos relacionados con el control de calidad, la conservación y la elaboración de derivados lácteos. Continúa aplicando estas orientaciones en situaciones de aprendizaje y práctica segura.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
