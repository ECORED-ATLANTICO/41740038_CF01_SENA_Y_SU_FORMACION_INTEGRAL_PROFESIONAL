<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de información institucional

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de información institucional es fundamental para orientar requerimientos de manera pertinente, oportuna y sustentada. En el SENA, la información se produce, consulta, actualiza y comunica a través de diferentes fuentes, sistemas y canales que responden a los procesos y responsabilidades de la entidad. 

    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Es así como, el aprendiz debe reconocer los tipos de información institucional, las fuentes internas y externas, los sistemas de información, los protocolos de manejo, clasificación y actualización, la seguridad y confidencialidad de los datos, los canales de atención y el flujo de información. Asimismo, debe consultar información institucional, utilizar aplicativos del SENA, comunicar información y verificar su vigencia.
        .bg-img.bg-img--1.rounded-4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema4/3.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 En este capítulo se abordan estos elementos desde una perspectiva práctica: no se busca memorizar plataformas o documentos, sino desarrollar criterios para identificar fuentes confiables, utilizar adecuadamente la información y direccionar requerimientos hacia las instancias competentes. 

    .fullwidth-bg.fullwidth-bg--1
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Información y fuentes institucionales

    p La información institucional comprende los datos, documentos, registros, orientaciones y contenidos que se generan o utilizan para desarrollar los procesos del SENA. Puede estar relacionada con formación, gestión administrativa, normativa, servicios, procedimientos, resultados, atención a usuarios y otros ámbitos propios de la entidad. 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/4.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p Para que una información pueda utilizarse de manera responsable, no basta con que resulte pertinente para la consulta. También debe ser posible reconocer #[strong su procedencia, vigencia y autoridad institucional]. 
        p.mb-0 Las fuentes pueden agruparse, de manera general, en #[strong internas y externas]. 

    .bg-contenido-a5.mb-4.z-2(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las fuentes internas corresponden a información producida, administrada o publicada por el propio SENA en desarrollo de sus funciones. Las fuentes externas proceden de entidades, organismos o actores externos y pueden servir como soporte normativo, técnico, estadístico o contextual para la gestión institucional. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/5.png', alt='')

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Fuentes de información 

    p.mb-4.z-2 Antes de utilizar información para orientar un requerimiento, es necesario identificar su procedencia y determinar si constituye una fuente adecuada para el asunto consultado. 

    .row.justify-content-center.cursor-pointer.mb-5.z-2
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/6.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Fuentes internas 
            p.mb-0 Son aquellas generadas, administradas o divulgadas por el SENA. Permiten consultar información sobre procesos, procedimientos, lineamientos, servicios, normativa institucional, responsabilidades y gestión de la entidad. 
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/7.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Fuentes externas 
            p.mb-0 Provienen de otras entidades u organismos y pueden aportar referentes legales, técnicos, estadísticos o sectoriales relacionados con las funciones del SENA. 
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/27.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Fuente competente 
            p.mb-0 La confiabilidad de una fuente también depende de que corresponda a la dependencia o entidad responsable del asunto. Una información institucional puede ser auténtica, pero no necesariamente ser la fuente competente para resolver todas las consultas. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Criterios para seleccionar una fuente

    p.mb-4.z-2 Cuando se consulta información institucional, conviene verificar al menos cuatro aspectos: 

    .row.justify-content-center.align-items-stretch.z-2
      .col-sm-6.col-lg-3.mb-3.mb-lg-0
        .bg-cards.rounded-4.p-4.overflow-hidden.h-100
          figure
            img.imgw-104.mb-4(src="@/assets/curso/tema4/8.svg", alt="")
          p.mb-0.text-center #[strong Procedencia: ] quién produce o publica la información. 
      .col-sm-6.col-lg-3.mb-3.mb-lg-0
        .bg-cards.rounded-4.p-4.overflow-hidden.h-100
          figure
            img.imgw-104.mb-4(src="@/assets/curso/tema4/9.svg", alt="")
          p.mb-0.text-center #[strong Competencia: ] si la fuente tiene responsabilidad sobre el asunto consultado. 
      .col-sm-6.col-lg-3.mb-3.mb-sm-0
        .bg-cards.rounded-4.p-4.overflow-hidden.h-100
          figure
            img.imgw-104.mb-4(src="@/assets/curso/tema4/10.svg", alt="")
          p.mb-0.text-center #[strong Vigencia: ] si la información continúa siendo aplicable. 
      .col-sm-6.col-lg-3
        .bg-cards.rounded-4.p-4.overflow-hidden.h-100
          figure
            img.imgw-104.mb-4(src="@/assets/curso/tema4/11.svg", alt="")
          p.mb-0.text-center #[strong Correspondencia: ] si responde realmente al requerimiento plantea 
  
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Sistemas de información institucional

    img(data-aos="fade-up", src="@/assets/curso/tema4/12.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 La gestión institucional requiere herramientas tecnológicas que permitan registrar, consultar, organizar y tramitar información. Por esta razón, el diseño curricular incluye tanto los sistemas de información institucionales dentro de los saberes conceptuales como la capacidad de utilizar aplicativos del SENA dentro de los saberes de proceso. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Un sistema de información institucional permite integrar datos, documentos o registros relacionados con un proceso determinado. Un aplicativo constituye una herramienta tecnológica mediante la cual las personas pueden ejecutar acciones específicas, como consultar, registrar, actualizar o tramitar información.  
        p.mb-0 La utilización de estas herramientas debe responder a las funciones de cada persona, los permisos de acceso y los procedimientos definidos por la entidad. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/13.png", alt="")
    
    .row.justify-content-center.z-2
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 6.
          span Sistemas y aplicativos
        .tabla-a.color-primario.tabla-a--text-left.mb-4
          table
            thead
              tr(style="background-color: #EBF6E5")
                th Elemento 
                th(colspan="2") Función 
            tbody
              tr
                td Sistema de información 
                td(colspan="2") Organiza y permite gestionar información asociada con uno o varios procesos institucionales. 
              tr
                td Aplicativo 
                td(colspan="2") Facilita la ejecución de tareas específicas dentro de la gestión. 
              tr
                td Usuario autorizado 
                td(colspan="2") Accede según los permisos, responsabilidades y condiciones definidas. 
              tr
                td Registro institucional 
                td(colspan="2") Deja evidencia de actuaciones, datos o movimientos realizados en el sistema. 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-xl-10
        .cajon.color-acento-contenido.p-4.z-2
          p.mb-0 El uso adecuado de estas herramientas contribuye a la trazabilidad y permite que la información permanezca disponible para los procesos que la requieren. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Uso responsable

    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/14.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Utilizar un aplicativo institucional no consiste únicamente en conocer sus funciones técnicas. También exige aplicar los procedimientos establecidos y proteger las credenciales, datos y registros gestionados. 
        .bg-img.bg-img--1.rounded-4.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema4/15.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 Por ello, antes de utilizar una herramienta es necesario identificar: qué información se puede consultar o registrar, qué permisos posee el usuario, qué procedimiento debe seguirse y qué responsabilidad genera la actuación realizada. 
        p.mb-0 Los documentos suministrados no contienen un inventario oficial y actualizado de aplicativos del SENA. Por esta razón, en este componente no se incorporará un listado de plataformas específicas sin verificar previamente su vigencia institucional. 

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Manejo seguro de información

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/14.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p La información institucional debe administrarse de acuerdo con su naturaleza y con las condiciones establecidas para su tratamiento. No toda la información puede divulgarse, modificarse o utilizarse de la misma manera. 
        p.mb-0 Una gestión adecuada requiere proteger la información frente a accesos, modificaciones, usos o divulgaciones que no correspondan a los procedimientos institucionales. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Manejo de la información

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8.mb-4.mb-lg-0
        SlyderF(columnas="col-xl-6")
          .tarjeta.bg-cards.p-4.pt-5.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-2(src='@/assets/curso/tema4/16.svg' alt='')
            h5.mb-2.text-center Clasificación
            p.mb-0.text-center Permite reconocer la naturaleza de la información y establecer las condiciones bajo las cuales puede consultarse, utilizarse o comunicarse. 
          .tarjeta.bg-cards.p-4.pt-5.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-2(src='@/assets/curso/tema4/17.svg' alt='')
            h5.mb-2.text-center Actualización
            p.mb-0.text-center Consiste en mantener los datos y documentos de acuerdo con las fuentes vigentes. Antes de utilizar información institucional debe verificarse que no haya sido modificada, sustituida o actualizada. 
          .tarjeta.bg-cards.p-4.pt-5.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-2(src='@/assets/curso/tema4/18.svg' alt='')
            h5.mb-2.text-center Seguridad
            p.mb-0.text-center Comprende las medidas destinadas a evitar accesos, modificaciones, pérdidas o usos no autorizados de la información. 
          .tarjeta.bg-cards.p-4.pt-5.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-2(src='@/assets/curso/tema4/19.svg' alt='')
            h5.mb-2.text-center Confidencialidad
            p.mb-0.text-center Exige que determinados datos o documentos sean conocidos únicamente por las personas autorizadas y utilizados para los fines correspondientes. 
      .col-sm-6.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/20.png", alt="")
 
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Un criterio esencial: verificar antes de comunicar

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/14.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p Uno de los riesgos más frecuentes en la gestión institucional es utilizar información que fue válida en otro momento, pero que ya no corresponde con el procedimiento o la norma vigente. 
        p Por ello, el diseño curricular incluye de manera expresa el saber de proceso “verificar vigencia de información”.  
        p.mb-0 Esta verificación puede realizarse mediante una secuencia sencilla: 

    .bg-terciario-t5.p-4.rounded-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block
          figure
            img.mb-4.mb-lg-0.imgw-40(src="@/assets/curso/tema3/11.svg", alt="" data-aos="zoom-in-down")
        .col-lg-11
          h5.mb-0 Identificar la fuente → comprobar fecha o versión → contrastar con la fuente vigente → confirmar competencia → comunicar o utilizar.

    p.mb-4.z-2 Este procedimiento resulta especialmente importante cuando se trabaja con normativa, procedimientos, formatos, directorios o lineamientos susceptibles de actualización. 

    .row.justify-content-center.z-2
      .col-xl-10
        .tarjeta.bg-video.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-xl-block
              figure
                img.imgw-61(src="@/assets/curso/common/video.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.px-xl-5
                  p Para ampliar: conozca la evolución de la gestión documental en el SENA y su relación con la administración de la información y el conocimiento institucional.  
                  p.mb-0 Consulte la infografía disponible en el Repositorio Institucional del SENA:  
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.imadatech.com/blog/rpa-ia-pqrs-secretaria-movilidad-cali/" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Canales y flujos informativos

    p Los canales de atención permiten recibir, trasladar y comunicar información entre los diferentes actores que se relacionan con la entidad.  
    p Un canal constituye el medio mediante el cual se presenta, recibe o comunica una información o requerimiento. El flujo de información describe el recorrido que esta realiza desde su recepción hasta la instancia responsable de gestionarla o responderla. 
    p.mb-5 En términos generales, un requerimiento puede recorrer diferentes momentos: 

    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Diagrama de flujo
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema4/21-mob.svg", alt="Diagrama de flujo del proceso de atención del SENA. Describe secuencialmente 7 pasos de izquierda a derecha: Recepción del requerimiento, Identificación del asunto, Consulta de información, Determinación del responsable, Direccionamiento o gestión, Comunicación de la información, y finaliza con Registro y seguimiento.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema4/21.svg", alt="Diagrama de flujo del proceso de atención del SENA. Describe secuencialmente 7 pasos de izquierda a derecha: Recepción del requerimiento, Identificación del asunto, Consulta de información, Determinación del responsable, Direccionamiento o gestión, Comunicación de la información, y finaliza con Registro y seguimiento.")

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-xl-10
        .cajon.color-acento-contenido.p-4.z-2
          p.mb-0 Este flujo evidencia que recibir información no significa necesariamente tener competencia para resolverla. En algunos casos, la actuación adecuada consiste precisamente en identificar quién debe atender el asunto y remitirlo siguiendo el procedimiento establecido. 
    
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Comunicación institucional

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 ELa comunicación de información debe ser clara, pertinente y consistente con las fuentes consultadas. Cuando una persona transmite información institucional, debe diferenciar entre: información confirmada, sustentada en una fuente vigente y competente, e información pendiente de validación, que requiere consulta adicional antes de ser comunicada como respuesta institucional. 

    p.mb-0.z-2 Esta distinción reduce el riesgo de orientar incorrectamente a usuarios, ciudadanos o integrantes de la entidad. 

    separador

    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Gestión de requerimientos institucionales

    .bg-img.bg-img--3.rounded-4.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block
          figure
            img.mb-4.mb-lg-0.imgw-55(src="@/assets/curso/tema4/23.svg", alt="" data-aos="zoom-in-down")
        .col-lg-11
          p.mb-0 La gestión de un requerimiento integra los conocimientos desarrollados hasta este punto: estructura organizacional, procesos, normativa, fuentes de información, sistemas institucionales y canales de atención. 

    p.mb-5 Orientar un requerimiento no significa necesariamente resolverlo. Significa determinar, con base en información institucional confiable, cuál debe ser su ruta de atención. 
    
    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
          .titulo-con-imagen__fondo.gradiente
            img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon-2.png")
            h3.titulo-con-imagen__texto Ruta del requerimiento

    .row.justify-content-center.z-2.mb-4.align-items-center
      .col-lg-3.col-xl-2.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/24.png", alt="" data-aos="zoom-in-down")
      .col-lg-9.col-xl-8
        LineaTiempoD.color-primario
          div(numero="1" titulo="Recibir")
            p.mb-0 Identifique claramente qué información, servicio o actuación requiere la persona. 
          div(numero="2" titulo="Analizar")
            p.mb-0 Determine el tema, alcance y naturaleza del requerimiento. 
          div(numero="3" titulo="Consultar")
            p.mb-0 Revise las fuentes institucionales y la normativa relacionada. 
          div(numero="4" titulo="Verificar")
            p.mb-0 Confirme vigencia, competencia y correspondencia de la información. 
          div(numero="5" titulo="Ubicar")
            p.mb-0 Determine qué proceso y dependencia tienen responsabilidad sobre el asunto. 
          div(numero="6" titulo="Direccionar")
            p.mb-0 Remita el requerimiento utilizando el canal y procedimiento establecido. 
          div(numero="7" titulo="Comunicar")
            p.mb-0 Informe de manera clara la orientación suministrada o la ruta que seguirá la solicitud.

    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        p.mb-0 Esta secuencia articula prácticamente los saberes de proceso definidos en la planeación: consultar información, aplicar normativa y procedimientos, utilizar aplicativos, tramitar requerimientos entre dependencias, comunicar información y verificar su vigencia.

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Caso breve de aplicación

    p.mb-5.z-2 Una persona solicita información relacionada con un trámite institucional. Quien recibe la consulta conoce el tema de manera general, pero no tiene competencia para responderlo directamente.
    
    img(data-aos="fade-up", src="@/assets/curso/tema4/25.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 La actuación correcta no consiste en proporcionar una respuesta basada únicamente en experiencia previa. Primero debe identificar la naturaleza de la solicitud, consultar la fuente institucional correspondiente, verificar que la información se encuentre vigente y establecer cuál dependencia tiene competencia. A partir de ello, puede brindar una orientación sustentada o direccionar el requerimiento por la ruta definida. 

    .row.justify-content-center.align-items-center.mb-3.z-2
      .col-lg-9
        .bg-img.bg-img--1.rounded-4.p-4.mb-3
          p.mb-0 Este ejemplo permite reconocer una regla fundamental: #[strong una orientación institucional confiable depende tanto de la calidad de la información como de la correcta identificación de la fuente y la dependencia competente.] 
        p.mb-4.mb-lg-0 La gestión de información institucional permite transformar datos, documentos y fuentes en insumos confiables para orientar requerimientos. Para ello es necesario reconocer la procedencia de la información, utilizar los sistemas y aplicativos correspondientes, aplicar condiciones de seguridad y confidencialidad, verificar la vigencia de las fuentes y comprender los canales mediante los cuales circula la información. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/26.png", alt="")
    
    p Estos elementos permiten pasar del conocimiento institucional a una actuación concreta: #[strong consultar, verificar, relacionar y direccionar información de acuerdo con la estructura y los procedimientos del SENA.]


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
