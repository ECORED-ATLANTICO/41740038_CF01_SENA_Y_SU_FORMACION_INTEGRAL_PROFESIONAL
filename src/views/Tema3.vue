<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa e integridad institucional

    .row.justify-content-center.align-items-center
      .col-sm-4.col-lg-2
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-10
        p El funcionamiento del SENA se desarrolla dentro de un marco jurídico e institucional que establece responsabilidades, competencias y condiciones para el cumplimiento de su misión. Por tratarse de una entidad pública, sus actuaciones deben corresponder con las disposiciones legales aplicables, los procedimientos institucionales y los principios que orientan el servicio público. 
        .bg-img.bg-img--5.rounded-4.p-4.mb-3.py-3
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.p-0
              img.imgw-61(src="@/assets/curso/tema3/2.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 Este conocimiento no implica memorizar un conjunto extenso de normas. Lo fundamental es comprender su función, reconocer las fuentes institucionales donde pueden consultarse y determinar cuál disposición o procedimiento resulta aplicable ante una situación determinada. 

    .fullwidth-bg.fullwidth-bg--1
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Marco normativo del SENA

    p.mb-4.z-2 El marco normativo del SENA se ha construido progresivamente desde la creación de la entidad en 1957. Diferentes disposiciones constitucionales, legales y reglamentarias han definido su naturaleza, misión, estructura, funciones y relación con la Formación Profesional Integral. 

    .bg-contenido-a5.mb-4.z-2(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Como se abordó en el capítulo anterior, algunas normas constituyen referentes fundamentales en esta trayectoria. El Decreto 118 de 1957 dio origen al SENA; posteriormente, otras disposiciones desarrollaron y modificaron su organización. La Constitución Política de 1991 fortaleció el fundamento constitucional de la formación para el trabajo, mientras la Ley 119 de 1994 reestructuró la entidad y consolidó su misión asociada con el desarrollo social y técnico de los trabajadores. El Decreto 249 de 2004, por su parte, modificó su estructura organizacional y las funciones de diferentes dependencias. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/3.png', alt='')

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/12.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 A estos referentes se suman disposiciones relacionadas con educación, formación para el trabajo, contrato de aprendizaje, ciencia, tecnología, innovación y otros ámbitos vinculados con las funciones institucionales. El resumen normativo aportado evidencia precisamente que la regulación aplicable al SENA ha evolucionado en correspondencia con las transformaciones del Estado y las necesidades sociales y productivas del país.

    .row.justify-content-center.mb-4.z-2
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 4.
          span Referentes normativos del SENA 
        .tabla-a.color-primario.tabla-a--text-left.mb-2
          table
            thead
              tr(style="background-color: #EBF6E5")
                th Referente 
                th(colspan="2") Aporte principal 
            tbody
              tr
                td Decreto 118 de 1957 
                td(colspan="2") Crea el Servicio Nacional de Aprendizaje (SENA). 
              tr
                td Constitución Política de 1991 
                td(colspan="2") Fortalece el fundamento constitucional de la formación y habilitación profesional y técnica. 
              tr
                td Ley 119 de 1994 
                td(colspan="2") Reestructura el SENA y establece referentes fundamentales de su misión y funcionamiento. 
              tr
                td Decreto 249 de 2004 
                td(colspan="2") Modifica la estructura institucional y define funciones de sus dependencias. 
              tr
                td Ley 1064 de 2006 
                td(colspan="2") Fortalece la articulación con la formación para el trabajo. 
              tr
                td Decretos 1072 y 1075 de 2015 
                td(colspan="2") Compilan disposiciones reglamentarias relacionadas con los sectores Trabajo y Educación. 

    p.z-2.mb-5 La tabla presenta únicamente algunos referentes relevantes para este componente. No constituye un inventario completo de la normativa aplicable al SENA, ya que cada proceso institucional puede estar regulado por disposiciones específicas. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Jerarquía y aplicación normativa

    img(data-aos="fade-up", src="@/assets/curso/tema3/4.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 Las disposiciones que orientan la gestión institucional tienen diferente naturaleza y alcance. La Constitución establece el marco superior; las leyes desarrollan materias de competencia legislativa; los decretos reglamentan o desarrollan disposiciones y estructuras; mientras los acuerdos, resoluciones y demás actos institucionales regulan asuntos específicos dentro de las competencias correspondientes. 

    p.mb-4 Para orientar un requerimiento no es suficiente identificar una norma por su título. También es necesario verificar #[strong su vigencia, alcance y relación con el asunto consultado]. Por ello, el diseño curricular incluye expresamente como saber de proceso la verificación de la vigencia de la información institucional. 

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
                  p.mb-0 Para ampliar, explore este documento audiovisual histórico para reconocer cómo se presentaban la organización, los objetivos y el funcionamiento del SENA en un momento de su evolución institucional. Recuerde que la estructura y la normativa mencionadas corresponden a su contexto de producción y deben contrastarse con las disposiciones vigentes. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://repositorio.sena.edu.co/bitstream/handle/11404/1212/UM2708.mp4?sequence=1&isAllowed=y" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Estatuto de Formación Profesional

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Entre los referentes institucionales relacionados directamente con la misión del SENA se encuentra el Estatuto de la Formación Profesional Integral, adoptado mediante el Acuerdo 0008 de 1997.
        p Este documento desarrolla la concepción de Formación Profesional Integral estudiada en el capítulo 2 y constituye un referente para comprender su naturaleza, principios, características y relación con el mundo del trabajo.
        .bg-img.bg-img--1.rounded-4.p-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.p-0
              img.imgw-61(src="@/assets/curso/tema3/6.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 El Estatuto establece una concepción teórico-práctica e integral de la formación, orientada al desarrollo de conocimientos técnicos y tecnológicos, así como de actitudes y valores. También reconoce su relación con las necesidades de los sectores productivos y con los cambios del entorno laboral. 

    p.mb-5.z-2 Su importancia para este componente radica en que permite relacionar la normativa con la misión institucional. La Formación Profesional Integral no se desarrolla únicamente a partir de decisiones pedagógicas aisladas, sino dentro de referentes institucionales que orientan su concepción y desarrollo. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto ¿Qué orienta el Estatuto de la FPI?

    .row.align-items-stretch.mb-4.mb-lg-5
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/7.png' alt='')
          .tarjeta.bg-terciario-t5
            .p-4.ps-sm-2
              h5.mb-2 Concepto de formación
              p.mb-0 Establece la Formación Profesional Integral como un proceso educativo teórico-práctico y de carácter integral.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/8.png' alt='')          
          .tarjeta.bg-terciario-t5
            .p-4.ps-sm-2
              h5.mb-2 Principios
              p.mb-0 Reconoce como referentes el trabajo productivo, la equidad social, la integralidad y la formación permanente.
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/9.png' alt='')
          .tarjeta.bg-terciario-t5
            .p-4.ps-sm-2
              h5.mb-2 Características
              p.mb-0 Incluye elementos como organización modular, aprendizaje teórico-práctico, pedagogías innovadoras y diseño en función de competencias.
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/10.png' alt='')          
          .tarjeta.bg-terciario-t5
            .p-4.ps-sm-2
              h5.mb-2 Relación con el trabajo
              p.mb-0 Vincula la formación con las necesidades productivas, tecnológicas y sociales y con la capacidad de las personas para desenvolverse en contextos laborales cambiantes.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .cajon.color-acento-contenido.p-4.z-2
          p.mb-0 El propósito del aprendiz no es memorizar el Estatuto, sino reconocerlo como fuente institucional de referencia cuando un requerimiento involucre aspectos propios de la Formación Profesional Integral.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Procesos y procedimientos institucionales

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/14.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p La normativa establece el marco dentro del cual actúa la entidad, mientras los procesos y procedimientos permiten llevar esas disposiciones a la práctica. 
        p Como se explicó en el capítulo 1, un proceso articula actividades orientadas hacia determinados resultados institucionales. Los procedimientos especifican la forma en que deben desarrollarse actuaciones concretas dentro de esos procesos. 
        p.mb-0 Esta relación puede sintetizarse de la siguiente manera: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg-terciario-t5.p-4.rounded-4.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema3/11.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 #[strong Normativa → proceso → procedimiento → actuación institucional]
      .col-lg-5
        p.mb-0 La normativa determina qué debe cumplirse; el proceso organiza las actividades y responsabilidades; el procedimiento establece cómo debe realizarse una actuación; y la persona aplica esas orientaciones en una situación concreta.

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Antes de actuar

    .fullwidth-bg.fullwidth-bg--1
    .bg-slider.p-4.mb-4.rounded-4.z-2
      .row.justify-content-center.align-items-center.z-2
        .col-lg-8.mb-4.mb-lg-0
          SlyderF(columnas="col-xl-6")
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema3/20.svg' alt='')
              h5.mb-2.text-center Identifique el asunto 
              p.mb-0.text-center Determine con precisión la naturaleza del requerimiento o actuación. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema3/21.svg' alt='')
              h5.mb-2.text-center Consulte la normativa 
              p.mb-0.text-center Identifique las disposiciones relacionadas y verifique su vigencia. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema3/22.svg' alt='')
              h5.mb-2.text-center Ubique el proceso 
              p.mb-0.text-center Determine el proceso institucional al que corresponde la situación. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema3/23.svg' alt='')
              h5.mb-2.text-center Consulte el procedimiento 
              p.mb-0.text-center Revise responsables, actividades, documentos y condiciones aplicables. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema3/24.svg' alt='')
              h5.mb-2.text-center Ejecute o direccione 
              p.mb-0.text-center Realice la actuación correspondiente o remita el requerimiento a la dependencia competente. 
        .col-sm-6.col-lg-4.d-none.d-lg-block
          figure
            img(data-aos="fade-down-right", src="@/assets/curso/tema3/12.png", alt="")
            
    p.mb-0 Esta secuencia permite comprender por qué un requerimiento no debería resolverse únicamente desde el conocimiento personal. La respuesta institucional debe sustentarse en fuentes, competencias y procedimientos vigentes.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Gestión documental e información

    p.mb-4.z-2 La gestión institucional produce y utiliza permanentemente documentos e información. Estos recursos permiten registrar actuaciones, respaldar decisiones, mantener trazabilidad y proporcionar información a quienes la requieren. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Gestionar información institucional implica reconocer que no toda la información tiene las mismas condiciones de acceso, tratamiento o conservación. Antes de comunicar un dato o documento es necesario determinar su naturaleza, identificar la fuente responsable y aplicar los protocolos correspondientes. 

    p.mb-4.z-2 En términos formativos, pueden considerarse cuatro acciones esenciales: 

    .row.align-items-stretch.mb-4.mb-lg-5
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/14.png' alt='')
          .tarjeta.bg-terciario-t5
            .p-4.ps-sm-2
              p.mb-0 #[strong Consultar]. Acceder a fuentes institucionales pertinentes para obtener información. 
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/15.png' alt='')          
          .tarjeta.bg-terciario-t5
            .p-4.ps-sm-2
              p.mb-0 #[strong Verificar]. Comprobar procedencia, actualización, vigencia y correspondencia con el asunto tratado. 
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/16.png' alt='')
          .tarjeta.bg-terciario-t5
            .p-4.ps-sm-2
              p.mb-0 #[strong Gestionar]. Aplicar los procedimientos establecidos para almacenar, clasificar, tramitar o utilizar documentos e información. 
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/17.png' alt='')          
          .tarjeta.bg-terciario-t5
            .p-4.ps-sm-2
              p.mb-0 #[strong Comunicar]. Suministrar únicamente la información que corresponda, utilizando los canales y condiciones institucionales definidos. 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-xl-10
        .cajon.color-acento-contenido.p-4.z-2
          p.mb-0 Estas acciones son especialmente relevantes para el resultado de aprendizaje porque el aprendiz deberá corroborar fuentes institucionales de acuerdo con la estructura organizacional y la normativa vigente. 

    .row.justify-content-center.z-2
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 5.
          span Gestión responsable de la información
        .tabla-a.color-primario.tabla-a--text-left.mb-2
          table
            thead
              tr(style="background-color: #EBF6E5")
                th Acción 
                th(colspan="2") Pregunta orientadora
            tbody
              tr
                td Consultar 
                td(colspan="2") ¿La fuente corresponde a una fuente institucional pertinente? 
              tr
                td Verificar 
                td(colspan="2") ¿La información está actualizada y vigente? 
              tr
                td Clasificar 
                td(colspan="2") ¿Qué tipo de información se está gestionando? 
              tr
                td Proteger 
                td(colspan="2") ¿Existen restricciones de acceso, seguridad o confidencialidad? 
              tr
                td Comunicar 
                td(colspan="2") ¿Quién puede recibirla y mediante qué canal? 

    .fullwidth-bg.fullwidth-bg--1
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Códigos de integridad

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-9
        p El cumplimiento de una norma no depende únicamente de conocer su contenido. También requiere comportamientos coherentes con las responsabilidades propias del servicio público. En este sentido, la integridad complementa el marco jurídico al proporcionar referentes éticos para la actuación institucional. 
        .bg-img.bg-img--3.rounded-4.p-4.mb-4.mb-lg-0.py-3
          p.mb-0 El Código de Integridad del servidor público y el Código de Integridad SENA, son referentes orientan la manera como las personas vinculadas con la entidad deben relacionarse con los recursos públicos, la información institucional, los ciudadanos y los demás integrantes de la organización. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/18.png", alt="")

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-xl-3
        p Por ejemplo, actuar con integridad implica que la información suministrada sea veraz, que un requerimiento sea tratado sin favorecer intereses particulares, que los procedimientos se apliquen oportunamente y que los recursos institucionales se utilicen para los fines establecidos. 
        p.mb-xl-0 Integridad en la gestión: situaciones aplicadas 
      .col-xl-9
        TabsA.color-primario.mb-0.custom-tabs
          .tarjeta.bg-primario-p5.p-4(titulo="Información institucional")
            p.mb-0 Antes de comunicar información, se verifica la fuente y su vigencia para evitar suministrar datos incorrectos o desactualizados. 
          .tarjeta.bg-primario-p5.p-4(titulo="Direccionamiento")
            p.mb-0 Un requerimiento se remite a la dependencia competente de acuerdo con el procedimiento, sin favorecer intereses particulares. 
          .tarjeta.bg-primario-p5.p-4(titulo="Tratamiento documental")
            p.mb-0 Los documentos y datos se administran de acuerdo con las condiciones de acceso, seguridad y confidencialidad establecidas. 
          .tarjeta.bg-primario-p5.p-4(titulo="Servicio institucional")
            p.mb-0 La atención se realiza con oportunidad, respeto y responsabilidad, procurando que la persona reciba una orientación pertinente.

    p.mb-4.z-2 Estas situaciones muestran que la integridad no constituye un contenido separado de la gestión: se refleja en la manera como se aplica la normativa, se utiliza la información y se desarrollan los procedimientos.

    img(data-aos="fade-up", src="@/assets/curso/tema3/19.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 El marco normativo proporciona las bases jurídicas para el funcionamiento del SENA, mientras los procesos y procedimientos permiten aplicar esas disposiciones dentro de la gestión cotidiana. A su vez, la gestión documental establece condiciones para administrar responsablemente la información y los referentes de integridad orientan los comportamientos asociados con el servicio público. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/14.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p Para orientar requerimientos institucionales resulta, por tanto, necesario integrar estos elementos: #[strong consultar la norma aplicable, identificar el proceso, verificar el procedimiento, utilizar información institucional vigente y actuar con integridad.]
        p.mb-0 Esta articulación responde directamente a los criterios del resultado de aprendizaje relacionados con la aplicación de procedimientos y con la corroboración de fuentes institucionales. 


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
