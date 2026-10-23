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
      tema: 'Fundamentos institucionales, información y orientación de requerimientos en el SENA',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de conocimientos relacionados con los fundamentos institucionales del SENA, la Formación Profesional Integral, la normativa, la gestión de información y la calidad, para orientar requerimientos de acuerdo con los lineamientos institucionales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Al orientar a una persona, debe explicar la razón de ser del SENA. ¿Qué propósito representa mejor su misión?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contribuir al desarrollo social y técnico mediante Formación Profesional Integral.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Expedir normas generales para todas las instituciones educativas del país.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Administrar exclusivamente los recursos de las empresas del sector productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir la formación de trabajadores por la gestión de trámites.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted relaciona la misión del SENA con el desarrollo de los trabajadores y la Formación Profesional Integral.',
          mensaje_incorrecto:
            'Revise la misión en el capítulo 1. Distinga la finalidad institucional de las funciones atribuidas a otras entidades.',
        },
        {
          id: 2,
          texto:
            'Una solicitud se relaciona con recursos administrativos que permiten desarrollar la formación. ¿Con qué tipo de proceso debe vincularla inicialmente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Misional, porque toda actividad administrativa constituye formación directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'De soporte, porque aporta recursos y condiciones para otros procesos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'De evaluación, porque disponer de recursos equivale a evaluar resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Estratégico, porque todo trámite de recursos define políticas institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted distingue los procesos de soporte por su aporte de recursos y condiciones al funcionamiento institucional.',
          mensaje_incorrecto:
            'Repase los tipos de procesos del capítulo 1. Diferencie el apoyo administrativo de la formación, la dirección y la evaluación.',
        },
        {
          id: 3,
          texto:
            'Recibe una solicitud cuyo responsable desconoce. ¿Cómo utiliza la estructura organizacional del SENA para orientarla?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La envía a la dependencia que recibió la última solicitud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elige la dependencia de mayor jerarquía, cualquiera que sea el asunto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Relaciona el asunto con las funciones de la dependencia competente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Selecciona el centro más cercano sin revisar sus competencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted utiliza la estructura para identificar responsabilidades y direccionar el requerimiento según su naturaleza.',
          mensaje_incorrecto:
            'Consulte la estructura institucional del capítulo 1. Verifique las funciones de la dependencia antes de elegir el destino.',
        },
        {
          id: 4,
          texto:
            'Le proponen utilizar recursos institucionales para favorecer un interés particular ajeno a la misión. ¿Qué decisión corresponde al carácter público del SENA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aceptar si el beneficio particular no genera un gasto adicional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permitirlo cuando lo solicite una persona de confianza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Decidir su uso únicamente según la conveniencia del equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Destinarlos a los fines institucionales según las reglas aplicables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que los recursos públicos deben apoyar los fines institucionales y el bien común.',
          mensaje_incorrecto:
            'Revise naturaleza pública y principios en el capítulo 1. Relacione el uso de recursos con la misión y el interés general.',
        },
        {
          id: 5,
          texto:
            'Un aprendiz domina una técnica, pero no comprende sus fundamentos ni coopera con su equipo. ¿Qué debe fortalecer desde la Formación Profesional Integral?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La velocidad de ejecución como único criterio de aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La integración de conocimientos, práctica, actitudes y convivencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La memorización de conceptos sin relacionarlos con la práctica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El desempeño individual, dejando la convivencia fuera de la formación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted comprende que la integralidad articula capacidades técnicas, humanas y sociales, además de la ejecución de tareas.',
          mensaje_incorrecto:
            'Repase la naturaleza de la FPI en el capítulo 2. Relacione conocer, hacer, ser y convivir en la situación presentada.',
        },
        {
          id: 6,
          texto:
            'Una tecnología modifica las tareas de su ocupación después de terminar un programa. ¿Qué actuación expresa el principio de formación permanente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conservar el método aprendido, aunque las condiciones hayan cambiado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Esperar otra certificación antes de reconocer necesidades de aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualizar sus conocimientos y practicar con las nuevas condiciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Delegar siempre las nuevas tareas para evitar volver a aprender.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted aplica la formación permanente al reconocer que el aprendizaje continúa ante los cambios del trabajo.',
          mensaje_incorrecto:
            'Revise los principios de la FPI en el capítulo 2. Reconozca la actualización como una necesidad que continúa después de certificarse.',
        },
        {
          id: 7,
          texto:
            'Debe escoger una actividad coherente con el carácter teórico-práctico de la FPI. ¿Cuál selecciona?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir una secuencia sin comprender por qué se realiza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Copiar definiciones sin relacionarlas con situaciones de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Observar una demostración sin aplicar ni analizar lo observado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Resolver un caso aplicando fundamentos y explicar las decisiones tomadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted integra comprensión y aplicación al resolver una situación y sustentar sus decisiones.',
          mensaje_incorrecto:
            'Revise el aprendizaje teórico-práctico del capítulo 2. Busque una actividad que conecte los fundamentos con su utilización.',
        },
        {
          id: 8,
          texto:
            'Un sector productivo incorpora nuevas tecnologías. ¿Cómo debe comprender la relación de este cambio con la FPI?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como un referente para actualizar aprendizajes y resolver necesidades del contexto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Como un motivo para reemplazar los valores por habilidades técnicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como un asunto empresarial sin relación con la formación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como una razón para limitar el aprendizaje a una tarea fija.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted relaciona la FPI con los sectores productivos y la tecnología para mantener su pertinencia y capacidad de adaptación.',
          mensaje_incorrecto:
            'Revise las relaciones de la FPI en el capítulo 2. Considere las transformaciones productivas sin perder el carácter integral de la formación.',
        },
        {
          id: 9,
          texto:
            'Encuentra una disposición sobre un requerimiento. ¿Qué debe comprobar antes de usarla para orientar la solicitud?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su extensión, pues el documento más largo siempre prevalece.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Su popularidad entre compañeros, aunque no conozca la fuente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Su vigencia, alcance y relación con el asunto consultado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Su fecha de descarga, aunque no identifique la versión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted verifica la aplicabilidad de la disposición antes de utilizarla como fundamento de la orientación.',
          mensaje_incorrecto:
            'Revise el marco normativo del capítulo 3. Compruebe vigencia, alcance y pertinencia; el título o la fecha de descarga no bastan.',
        },
        {
          id: 10,
          texto:
            'Necesita sustentar la concepción institucional de la Formación Profesional Integral. ¿Qué referente del componente debe consultar prioritariamente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El directorio de contactos de las dependencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un registro de remisiones de requerimientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un formato para solicitar recursos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El Estatuto de la Formación Profesional Integral.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted identifica el Estatuto como referente para comprender la naturaleza, los principios y las características de la FPI.',
          mensaje_incorrecto:
            'Revise el apartado del Estatuto en el capítulo 3. Diferencie una fuente conceptual institucional de un directorio o registro operativo.',
        },
        {
          id: 11,
          texto:
            'Identifica la norma y el proceso de una solicitud, pero desconoce los pasos para tramitarla. ¿Qué debe consultar ahora?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El procedimiento aplicable, con sus responsables, actividades y condiciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La historia institucional, para sustituir las instrucciones del trámite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un trámite parecido, aunque corresponda a otro proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La costumbre del equipo, sin contrastarla con documentos institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que el procedimiento concreta cómo actuar dentro del proceso y quiénes intervienen.',
          mensaje_incorrecto:
            'Repase procesos y procedimientos en el capítulo 3. Identifique el documento que establece los pasos específicos de la actuación.',
        },
        {
          id: 12,
          texto:
            'Un conocido le pide omitir un paso del procedimiento para favorecer su solicitud. ¿Cómo debe actuar con integridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Omitirlo si el solicitante promete completar después la información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicar el procedimiento con imparcialidad y explicar la ruta correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cambiar la ruta sin dejar constancia para facilitar el trámite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pedir a otra persona que otorgue el favor solicitado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted aplica los referentes de integridad al orientar sin favorecer intereses particulares y respetar el procedimiento.',
          mensaje_incorrecto:
            'Revise los códigos de integridad del capítulo 3. Relacione la imparcialidad y la responsabilidad con la aplicación del procedimiento.',
        },
        {
          id: 13,
          texto:
            'Dos documentos presentan rutas diferentes para una solicitud. ¿Cómo determina cuál información utilizar?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escoge el documento más breve para agilizar la consulta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usa el primero recibido porque ya está disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Combina ambas rutas sin consultar a la fuente responsable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contrasta procedencia, competencia, vigencia y correspondencia con el requerimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted corrobora la fuente y su aplicabilidad antes de comunicar una ruta institucional.',
          mensaje_incorrecto:
            'Revise las fuentes de información del capítulo 4. Compare su autoridad y vigencia antes de decidir cuál usar.',
        },
        {
          id: 14,
          texto:
            'Debe remitir un documento que contiene datos de acceso restringido. ¿Qué debe hacer antes de compartirlo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar autorización, finalidad y canal conforme a los protocolos institucionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Enviarlo a todas las dependencias para encontrar un responsable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Publicarlo en un espacio abierto para facilitar su consulta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar una cuenta ajena si su acceso no está habilitado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted protege la confidencialidad al verificar quién puede acceder y bajo qué condiciones debe comunicar la información.',
          mensaje_incorrecto:
            'Revise el manejo seguro de información del capítulo 4. Compruebe permisos y condiciones de acceso antes de divulgar datos.',
        },
        {
          id: 15,
          texto:
            'Necesita registrar un requerimiento en un aplicativo institucional y su usuario carece del permiso necesario. ¿Qué actuación corresponde?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Pedir prestada la contraseña de una persona que tenga acceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestionar el acceso o la intervención autorizada según el procedimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registrar el trámite con un usuario ajeno sin informar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Compartir sus credenciales para que otra persona pruebe el acceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que el uso de aplicativos depende de permisos, responsabilidades y procedimientos, y protege las credenciales.',
          mensaje_incorrecto:
            'Repase sistemas y aplicativos del capítulo 4. Identifique la ruta autorizada para gestionar la actuación sin compartir credenciales.',
        },
        {
          id: 16,
          texto:
            'Recibe una consulta que otra dependencia debe atender. ¿Qué secuencia permite orientarla de manera sustentada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Remitir al primer contacto disponible y verificar el asunto después.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Responder desde su experiencia y consultar solo si existe una queja.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar el asunto, verificar fuente y competencia, direccionar y comunicar la ruta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Enviar a todas las dependencias y esperar que alguna asuma el caso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted relaciona el requerimiento con información verificada y una dependencia competente antes de comunicar la orientación.',
          mensaje_incorrecto:
            'Revise la gestión de requerimientos del capítulo 4. Analice la necesidad y confirme la competencia antes de realizar la remisión.',
        },
        {
          id: 17,
          texto:
            'Antes de remitir una solicitud, comprueba la competencia del destinatario y el procedimiento aplicable. ¿Cómo se relaciona esta acción con el autocontrol?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asume la verificación de su propia actuación según los lineamientos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Traslada toda la responsabilidad al destinatario del requerimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituye los procedimientos institucionales por su criterio personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reserva la verificación exclusivamente para una revisión posterior externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted ejerce autocontrol al verificar la calidad y conformidad de su actuación antes de direccionar el requerimiento.',
          mensaje_incorrecto:
            'Revise el Sistema Integrado de Gestión y Autocontrol en el capítulo 5. Reconozca su responsabilidad al aplicar y verificar los procedimientos.',
        },
        {
          id: 18,
          texto:
            'Le presentan un porcentaje como indicador de calidad de un proceso. ¿Qué necesita conocer para comprenderlo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo si su valor es mayor que el porcentaje del mes anterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El nombre de quien lo presentó, sin revisar su propósito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Qué mide, con qué datos se obtiene y con qué criterio se compara.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Únicamente cuántas personas participaron en su elaboración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted reconoce que un indicador requiere un propósito, información verificable y un criterio de comparación para apoyar la gestión.',
          mensaje_incorrecto:
            'Revise indicadores de calidad en el capítulo 5. Evite interpretar un porcentaje aislado de su significado y referente.',
        },
        {
          id: 19,
          texto:
            'Detecta que un directorio podría estar desactualizado antes de remitir una solicitud. ¿Qué acción preventiva reduce el riesgo de direccionamiento incorrecto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Remitir con el directorio disponible y esperar una devolución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar los datos y la competencia en la fuente institucional vigente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Duplicar la remisión a cualquier dependencia para ganar tiempo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar el posible error sin comprobar los datos del destinatario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted previene una remisión incorrecta al controlar el riesgo antes de que afecte la orientación.',
          mensaje_incorrecto:
            'Revise gestión del riesgo y acciones preventivas en el capítulo 5. Actúe sobre la posible causa antes de remitir.',
        },
        {
          id: 20,
          texto:
            'Se repiten remisiones a una dependencia sin competencia. ¿Qué acción correctiva contribuye a evitar que el problema continúe?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reenviar cada solicitud sin revisar por qué se repite el error.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentar las remisiones para compensar las devoluciones recibidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar los registros de errores para mejorar el reporte del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analizar la causa, ajustar la ruta aplicable y verificar su eficacia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Usted relaciona la mejora con intervenir la causa del problema y comprobar que el ajuste produzca el resultado esperado.',
          mensaje_incorrecto:
            'Repase acciones correctivas y mejora del capítulo 5. Distinga solucionar un caso de intervenir la causa de su repetición.',
        },
      ],

      mensaje_final_aprobado:
        '¡Felicitaciones! Usted alcanzó al menos el 70 % de respuestas correctas. Demuestra comprensión de los fundamentos institucionales y su aplicación a la orientación de requerimientos. Revise las retroalimentaciones y repita la actividad si desea afianzar sus aprendizajes.',
      mensaje_final_reprobado:
        'Usted aún no alcanza el 70 % de respuestas correctas. Revise las retroalimentaciones y retome los temas que necesita fortalecer. Recuerde que esta actividad no es calificable y puede repetirla cuantas veces desee.',
    },
  }),
}
</script>
