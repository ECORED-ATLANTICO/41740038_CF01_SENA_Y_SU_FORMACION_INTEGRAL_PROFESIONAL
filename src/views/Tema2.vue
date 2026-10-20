<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Formación Profesional Integral

    img(data-aos="fade-up", src="@/assets/curso/tema2/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 La Formación Profesional Integral constituye uno de los fundamentos esenciales de la misión del SENA. Su propósito no se limita al aprendizaje de una técnica o al dominio de una tarea específica; busca desarrollar conocimientos, capacidades, actitudes y valores que permitan a las personas participar de manera crítica, creativa y responsable en el mundo del trabajo y en la vida social. 

    .fullwidth-bg.fullwidth-bg--1
    p.z-2 El Estatuto de la Formación Profesional Integral, adoptado mediante el Acuerdo 0008 de 1997, constituye un referente central para comprender esta concepción. Desde allí, la formación impartida por el SENA se reconoce como un proceso educativo de carácter teórico-práctico e integral, relacionado con las necesidades del sector productivo, las transformaciones tecnológicas y las condiciones sociales en las que las personas desarrollan su actividad laboral. 
    .bg-img.rounded-4.p-4.mb-3.z-2
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block.p-0
          img.imgw-61(src="@/assets/curso/tema2/2.svg", alt="" data-aos="zoom-in-down")
        .col-lg-11
          p.mb-0 En este capítulo se presentan la naturaleza y el concepto de la Formación Profesional Integral, sus principios y características, su relación con el mundo laboral y su articulación con el sistema educativo, los sectores productivos y los procesos de ciencia, tecnología e innovación. 

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Naturaleza y concepto

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-9
        p La Formación Profesional Integral (FPI) puede comprenderse como un proceso educativo que articula conocimientos técnicos y tecnológicos con capacidades humanas, sociales y actitudinales. Su carácter integral radica precisamente en que no separa el saber técnico del desarrollo de la persona. 
        .bg-img.bg-img--3.rounded-4.p-4.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.p-0
              img.imgw-61(src="@/assets/curso/tema2/3.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 El Estatuto de la Formación Profesional Integral la define como un proceso teórico-práctico orientado al desarrollo de conocimientos técnicos y tecnológicos, así como de actitudes y valores para la convivencia social, de manera que las personas puedan actuar crítica y creativamente en el mundo del trabajo y de la vida. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/4.png", alt="")

    .bg-contenido-a5.mb-4.z-2(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/5.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Esta concepción incorpora varias dimensiones. Por una parte, la persona necesita comprender los fundamentos de aquello que realiza; por otra, debe estar en capacidad de aplicar ese conocimiento en situaciones concretas. Además, la formación debe favorecer criterios para relacionarse con otras personas, tomar decisiones, resolver problemas y adaptarse a transformaciones productivas y tecnológicas. 

    p.mb-5.z-2 Por ello, la FPI integra el saber, el saber hacer y dimensiones relacionadas con el ser y convivir. El dominio de una ocupación no se concibe únicamente como ejecución instrumental, sino como la capacidad de comprender, intervenir y transformar situaciones propias del trabajo. 
    
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Dimensiones de la FPI

    p.mb-4 La Formación Profesional Integral articula diferentes dimensiones del aprendizaje que permiten responder a las exigencias del trabajo y de la vida social. 

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8.mb-4.mb-lg-0
        SlyderF(columnas="col-xl-6")
          .tarjeta.bg-cards.p-4.pt-5.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-2(src='@/assets/curso/tema2/6.svg' alt='')
            h5.mb-2.text-center Conocer
            p.mb-0.text-center Comprende los fundamentos científicos, técnicos, tecnológicos y conceptuales necesarios para interpretar situaciones y tomar decisiones relacionadas con una ocupación o campo de desempeño.
          .tarjeta.bg-cards.p-4.pt-5.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-2(src='@/assets/curso/tema2/7.svg' alt='')
            h5.mb-2.text-center Hacer
            p.mb-0.text-center Implica aplicar conocimientos mediante procedimientos, técnicas, herramientas y recursos propios del contexto laboral, con criterios de calidad y pertinencia. 
          .tarjeta.bg-cards.p-4.pt-5.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-2(src='@/assets/curso/tema2/8.svg' alt='')
            h5.mb-2.text-center Ser
            p.mb-0.text-center Se relaciona con actitudes, valores, responsabilidad y capacidad de actuación crítica frente a las situaciones que se presentan en el ámbito personal, laboral y social. 
          .tarjeta.bg-cards.p-4.pt-5.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-2(src='@/assets/curso/tema2/9.svg' alt='')
            h5.mb-2.text-center Convivir
            p.mb-0.text-center Supone relacionarse con otras personas, trabajar colaborativamente, respetar diferencias y actuar de acuerdo con principios que favorezcan la participación y la convivencia social. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/10.png", alt="")

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Formación teórico-práctica

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Uno de los rasgos esenciales de la FPI es su carácter teórico-práctico. La teoría proporciona fundamentos para comprender fenómenos, procedimientos y tecnologías; la práctica permite aplicar y validar esos conocimientos en situaciones relacionadas con el trabajo. 
        .bg-img.bg-img--2.rounded-4.p-4
          p.mb-0 Esta relación evita que la formación se reduzca a la repetición mecánica de tareas. El aprendiz debe comprender por qué realiza determinada acción, cuáles son sus implicaciones y qué decisiones puede tomar cuando cambian las condiciones del contexto. 

    p.mb-5.z-2 Esta capacidad resulta especialmente importante en entornos laborales caracterizados por cambios tecnológicos, nuevas formas de organización y transformaciones en los perfiles ocupacionales. 

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
                  p Para profundizar en la concepción de la formación profesional y su carácter integral mediante este recurso audiovisual del SENA. Tenga en cuenta su contexto histórico y contraste sus planteamientos con los conceptos desarrollados en este componente. 
                  p.mb-0 Consulte el video en el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://repositorio.sena.edu.co/bitstream/handle/11404/3805/general.mp4?sequence=1&isAllowed=y" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Principios y características

    p.mb-4 La Formación Profesional Integral se desarrolla a partir de principios que orientan su sentido y de características que determinan la forma como se organiza pedagógicamente. 

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Estatuto identifica cuatro principios fundamentales: trabajo productivo, equidad social, integralidad y formación permanente. Asimismo, establece características relacionadas con la organización modular, el aprendizaje teórico-práctico, el uso de pedagogías innovadoras, la comprensión de aspectos sociales y ambientales y el diseño basado en competencias.  

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Principios de la FPI

    p.mb-4 Los principios orientan el propósito de la Formación Profesional Integral y permiten comprender su relación con el trabajo, la sociedad y el desarrollo de las personas. 
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-secundario-s5")
          div(titulo="Trabajo productivo")
            p La formación se construye en relación con el trabajo y con las necesidades de los sectores productivos. Su propósito es favorecer capacidades que permitan participar de manera pertinente, crítica y creativa en actividades productivas. 
          div(titulo="Equidad social")
            p La formación contribuye a ampliar las oportunidades de acceso y participación de las personas, favoreciendo condiciones que permitan desarrollar capacidades para el trabajo y mejorar sus posibilidades de inclusión social y productiva. 
          div(titulo="Integralidad")
            p La FPI busca equilibrio entre las dimensiones técnicas, tecnológicas, humanas y sociales de la formación. La persona no se prepara únicamente para desempeñar una tarea, sino para comprender y actuar responsablemente en diferentes contextos. 
          div(titulo="Formación permanente")
            p El aprendizaje no termina con la certificación de un programa. Las personas requieren actualizar y desarrollar continuamente sus conocimientos y capacidades para responder a transformaciones sociales, laborales y tecnológicas. 
 
    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-xl-10
        .cajon.color-acento-contenido.p-4.z-2
          p.mb-0 Estos cuatro principios se desprenden de la concepción establecida en el Estatuto de la Formación Profesional Integral. 

    .fullwidth-bg.fullwidth-bg--1
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Características de la FPI 

    p.mb-4.z-2 Los principios se materializan mediante características pedagógicas que orientan el desarrollo de la formación. 

    .bg-slider.p-4.mb-4.rounded-4.z-2
      .row.justify-content-center.align-items-center.z-2
        .col-lg-8.mb-4.mb-lg-0
          SlyderF(columnas="col-xl-6")
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/14.svg' alt='')
              p.mb-0.text-center Organización modular. Los contenidos y aprendizajes se estructuran de manera articulada para favorecer el desarrollo progresivo de capacidades. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/15.svg' alt='')
              p.mb-0.text-center Aprendizaje teórico-práctico. Los conocimientos se relacionan permanentemente con su aplicación en contextos concretos. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/16.svg' alt='')
              p.mb-0.text-center Pedagogías innovadoras. La formación promueve estrategias que favorecen la participación activa, la resolución de problemas y el aprendizaje significativo. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/17.svg' alt='')
              p.mb-0.text-center Comprensión social y ambiental. El desempeño laboral se reconoce como parte de un contexto más amplio que incluye impactos sociales y ambientales. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/18.svg' alt='')
              p.mb-0.text-center Diseño basado en competencias. La formación se estructura en función de capacidades demostrables para actuar de manera pertinente en diferentes situaciones. 
        .col-sm-6.col-lg-4.d-none.d-lg-block
          figure
            img(data-aos="fade-down-right", src="@/assets/curso/tema2/19.png", alt="")

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Tabla 3.
      span Principios y características
    .tabla-a.color-primario.tabla-a--text-left.z-2
      table
        thead
          tr(style="background-color: #EBF6E5")
            th Elemento
            th(colspan="2") Orientación
        tbody
          tr
            td Trabajo productivo 
            td(colspan="2") Relaciona la formación con las necesidades del mundo laboral. 
          tr
            td Equidad social 
            td(colspan="2") Favorece oportunidades de participación e inclusión. 
          tr
            td Integralidad 
            td(colspan="2") Articula dimensiones técnicas, humanas y sociales. 
          tr
            td Formación permanente 
            td(colspan="2") Reconoce el aprendizaje a lo largo de la vida. 
          tr
            td Formación teórico-práctica 
            td(colspan="2") Integra comprensión y aplicación. 
          tr
            td Diseño por competencias 
            td(colspan="2") Orienta el aprendizaje hacia desempeños demostrables. 
          tr
            td Pedagogías innovadoras 
            td(colspan="2") Favorece participación activa y resolución de situaciones. 

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Formación y mundo laboral

    img(data-aos="fade-up", src="@/assets/curso/tema2/20.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 La Formación Profesional Integral mantiene una relación directa con el mundo del trabajo. Desde su origen, el SENA ha orientado su actuación hacia la cualificación de personas para responder a las necesidades productivas del país. 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/21.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El Estatuto establece que los currículos deben considerar las necesidades y perspectivas de los sectores productivos y la demanda social. Asimismo, plantea que la formación debe responder a distintos niveles tecnológicos y a las transformaciones que se presentan en las formas de organización y desarrollo del trabajo.  
        .bg-img.bg-img--1.rounded-4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.p-0
              img.imgw-61(src="@/assets/curso/tema2/22.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 Esta relación no significa que la formación deba limitarse a responder pasivamente a las necesidades inmediatas de las empresas. La FPI busca que la persona pueda comprender, adaptarse y actuar creativamente frente a los cambios de la estructura productiva. 

    p.mb-5.z-2 El documento histórico suministrado señala que la Formación Profesional Integral ha evolucionado junto con transformaciones de carácter tecnológico, económico, educativo y organizacional. Los cambios en la producción han generado nuevas exigencias en materia de conocimientos, trabajo en equipo, capacidad de adaptación y resolución de problemas. 
 
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Del oficio a la capacidad de adaptación

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En contextos productivos dinámicos, aprender únicamente una tarea específica resulta insuficiente. Los cambios tecnológicos pueden modificar equipos, procesos y formas de organización, por lo que las personas necesitan desarrollar capacidades transferibles a diferentes situaciones. 

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-xl-10
        .cajon.color-acento-contenido.p-4.z-2
          p.mb-0 La FPI busca favorecer esta adaptación mediante la integración entre conocimientos, práctica y resolución de problemas. De esta manera, la persona formada puede responder a situaciones nuevas, incorporar tecnologías y desenvolverse dentro de estructuras ocupacionales cambiantes. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Formación y desempeño

    p.mb-4 La relación entre formación y trabajo puede comprenderse como un proceso progresivo en el que los conocimientos se transforman en capacidades para actuar. 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-4.col-lg-2
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/24.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        TabsA.color-primario.mb-0.custom-tabs
          .tarjeta.bg-primario-p5.p-4(titulo="Comprender")
            p.mb-0 Apropiar conocimientos técnicos, tecnológicos y contextuales que permitan entender los conceptos, procesos y situaciones propias de la formación. 
          .tarjeta.bg-primario-p5.p-4(titulo="Aplicar")
            p.mb-0 Utilizar los conocimientos adquiridos en situaciones propias del desempeño, integrando la teoría con la práctica de manera pertinente. 
          .tarjeta.bg-primario-p5.p-4(titulo="Resolver")
            p.mb-0 Analizar situaciones, identificar alternativas y tomar decisiones frente a problemas, aplicando los conocimientos y habilidades desarrollados. 
          .tarjeta.bg-primario-p5.p-4(titulo="Adaptar")
            p.mb-0 Responder de manera pertinente a los cambios tecnológicos, productivos y organizacionales, ajustando conocimientos y estrategias según las nuevas necesidades. 
          .tarjeta.bg-primario-p5.p-4(titulo="Mejorar")
            p.mb-0 Incorporar nuevos aprendizajes, reflexionar sobre la experiencia y fortalecer permanentemente el desempeño para alcanzar mejores resultados. 

    p.mb-0 Esta secuencia sintetiza la idea de que la Formación Profesional Integral prepara para actuar en el trabajo, pero también para aprender y transformarse dentro de él.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Sistema educativo y productivo

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/14.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p La Formación Profesional Integral se desarrolla en permanente relación con otros actores institucionales. El diseño curricular incluye expresamente dentro de los saberes del RA1 las relaciones del SENA con el sistema educativo y los sectores productivos. 
        p.mb-0 Esta articulación resulta necesaria porque la formación para el trabajo forma parte de un entorno más amplio en el que intervienen instituciones educativas, empresas, trabajadores, organizaciones sociales y entidades públicas. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Relación con el sistema educativo 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        .bg-img.bg-img--3.rounded-4.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.p-0
              img.imgw-61(src="@/assets/curso/tema2/25.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 A lo largo de su trayectoria, el SENA ha establecido mecanismos de articulación con el sistema educativo colombiano. La Ley General de Educación y otras disposiciones han generado espacios de relación entre la formación impartida por la entidad y diferentes niveles y modalidades educativas. 
        p El análisis académico aportado señala que históricamente la FPI se ha caracterizado por mantener una identidad propia frente a la educación formal, aunque al mismo tiempo se han desarrollado mecanismos de articulación entre ambos ámbitos.  
        p.mb-0 Esta relación permite favorecer trayectorias de formación, reconocimiento de aprendizajes y oportunidades de cualificación, sin desconocer las particularidades que caracterizan la Formación Profesional Integral. 
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/26.png", alt="")
    
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Relación con sectores productivos 

    .bg-contenido-a5.mb-4.z-2(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/27.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La vinculación con los sectores productivos constituye un elemento central de la FPI. Las necesidades de las empresas, trabajadores, territorios y actividades económicas aportan referentes para identificar transformaciones ocupacionales y tecnológicas que deben ser consideradas en la formación. El Estatuto establece precisamente que los currículos se relacionan con las necesidades y perspectivas de estos sectores y con la demanda social. 

    p.mb-5 Esta relación permite mantener la pertinencia de la formación frente a cambios en tecnologías, procesos productivos y perfiles ocupacionales. 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
            h3.titulo-con-imagen__texto Articulación de la formación 

        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span  Diagrama de relaciones 
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/28-mob.svg", alt="El diagrama ilustra la Formación Profesional Integral con sus tres relaciones principales: sistema educativo, sectores productivos y sociedad y territorios.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/28.svg", alt="El diagrama ilustra la Formación Profesional Integral con sus tres relaciones principales: sistema educativo, sectores productivos y sociedad y territorios.")

        p.mb-0 La pertinencia de la Formación Profesional Integral depende de su capacidad para relacionar las necesidades de las personas, los territorios y los sectores productivos con las oportunidades de formación y desarrollo. 

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Ciencia, tecnología e innovación

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0.imgw-61(src="@/assets/curso/tema2/29.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 La evolución del trabajo se encuentra estrechamente relacionada con los avances científicos y tecnológicos. Nuevos equipos, sistemas de producción, herramientas digitales y formas de organización modifican continuamente los conocimientos y capacidades requeridos en los diferentes sectores económicos. 

    p.mb-5.z-2 Por esta razón, la Formación Profesional Integral debe mantener una relación permanente con la ciencia, la tecnología y la innovación. La trayectoria histórica del SENA evidencia esta relación en la década de 1990, en la cual la entidad asumió funciones asociadas con ciencia y tecnología y participó en actividades de formación, transferencia tecnológica, investigación aplicada y desarrollo tecnológico. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Tecnología y formación 

    p.z-2 La incorporación tecnológica tiene efectos directos sobre la formación profesional. Cuando cambian las tecnologías utilizadas en los sectores productivos, también deben actualizarse los conocimientos, herramientas y metodologías que hacen parte de los procesos de formación. 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/30.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esto implica que el aprendizaje no puede permanecer estático. La persona debe desarrollar capacidad para apropiarse de nuevas tecnologías y utilizarlas de manera pertinente dentro de su contexto laboral. Por ello el SENA ha ido incorporando recursos digitales, bibliotecas conectadas, observatorios tecnológicos y herramientas para apoyar procesos de formación y virtualización.  

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Innovación y solución de problemas 

    p La innovación no consiste únicamente en incorporar tecnologías nuevas. También implica identificar necesidades, generar soluciones y mejorar procesos, productos o servicios. 
    p Desde la perspectiva de la Formación Profesional Integral, innovar supone utilizar conocimientos técnicos, tecnológicos y experiencias del contexto para resolver situaciones de manera creativa y pertinente. 
    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-xl-10
        .cajon.color-acento-contenido.p-4.z-2
          p.mb-0 Esta capacidad se relaciona directamente con la concepción de la FPI, que plantea que la persona debe estar en condiciones de integrar tecnologías, adaptarse a la estructura ocupacional y solucionar creativamente problemas. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Ciencia, tecnología e innovación 

    .bg-slider.p-4.mb-4.rounded-4.z-2
      .row.justify-content-center.align-items-center.z-2
        .col-sm-6.col-lg-4.d-none.d-lg-block
          figure
            img(data-aos="fade-down-right", src="@/assets/curso/tema2/31.png", alt="")
        .col-lg-8.mb-4.mb-lg-0
          SlyderF(columnas="col-xl-6")
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/32.svg' alt='')
              h5.text-center Ciencia 
              p.mb-0.text-center Aporta conocimientos y explicaciones que permiten comprender fenómenos, materiales, procesos y contextos relacionados con diferentes campos de desempeño. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/33.svg' alt='')
              h5.text-center Tecnología 
              p.mb-0.text-center Integra conocimientos, técnicas, herramientas y procedimientos para responder a necesidades concretas y desarrollar soluciones aplicables. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/34.svg' alt='')
              h5.text-center Innovación 
              p.mb-0.text-center Permite transformar conocimientos y experiencias en mejoras, nuevas soluciones o formas diferentes de responder a una necesidad. 
            .tarjeta.tarjeta--blanca.p-4.pt-5.shadow-sm
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img.imgw-95.mb-2(src='@/assets/curso/tema2/35.svg' alt='')
              h5.text-center Formación 
              p.mb-0.text-center Articula estos elementos para preparar personas capaces de comprender, aplicar, adaptar y mejorar tecnologías y procesos en contextos productivos y sociales. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Aprendizaje permanente 

    p La relación entre formación, tecnología e innovación refuerza uno de los principios fundamentales de la FPI: la formación permanente. Las competencias adquiridas en un momento determinado necesitan actualizarse a medida que cambian los procesos, herramientas y condiciones del entorno. 

    p.mb-4 Por esta razón, la formación profesional no debe comprenderse como una etapa cerrada, sino como un proceso continuo de cualificación y aprendizaje. 

    img(data-aos="fade-up", src="@/assets/curso/tema2/36.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 La Formación Profesional Integral constituye el eje de la misión del SENA y articula conocimientos técnicos y tecnológicos con capacidades humanas, sociales y actitudinales. Su naturaleza teórico-práctica permite relacionar el conocimiento con la acción, mientras sus principios —trabajo productivo, equidad social, integralidad y formación permanente— orientan su sentido y propósito. 
    
    .bg-img.bg-img--1.rounded-4.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block.p-0
          img.imgw-61(src="@/assets/curso/tema2/37.svg", alt="" data-aos="zoom-in-down")
        .col-lg-11
          p.mb-0 Su relación con el mundo laboral permite responder a transformaciones productivas y tecnológicas; su articulación con el sistema educativo, los sectores productivos y los territorios fortalece su pertinencia; y su vínculo con la ciencia, la tecnología y la innovación favorece la actualización y la capacidad de resolver problemas. 

    .row.justify-content-center.align-items-center
      .col-lg-3
        p Estos elementos permiten avanzar hacia uno de los criterios centrales del resultado de aprendizaje: explicar los aspectos esenciales de la Formación Profesional Integral de acuerdo con la normativa y los procedimientos institucionales. 
      .col-lg-9
        .bg-audio.rounded-4
          .row.align-items-center.justify-content-center
            .col-10.col-sm-4
              figure.pt-3
                img.w-315(src="@/assets/curso/common/mic.png", alt="")
            .col-sm-8.col-lg-7.p-4
              p Ir al pódcast:
              TarjetaAudio.mb-3.color-primario(
                texto=" El SENA y la Formación Profesional Integral: formación para el trabajo y el desarrollo humano."
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )






















</template>
