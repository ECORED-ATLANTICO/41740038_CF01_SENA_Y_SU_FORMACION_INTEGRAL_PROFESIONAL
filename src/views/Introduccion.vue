<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Servicio Nacional de Aprendizaje (SENA) cumple una función fundamental en la formación de las personas para su participación en las actividades productivas y sociales del país. Su trayectoria, naturaleza institucional y misión se articulan con la Formación Profesional Integral, mediante la cual la entidad desarrolla procesos orientados al fortalecimiento de conocimientos, habilidades y capacidades relacionadas con el mundo del trabajo.

    p.mb-3 Comprender el SENA implica reconocer no solo su origen y evolución, sino también su naturaleza jurídica, estructura organizacional, principios, valores, procesos y marco normativo. Estos elementos permiten identificar cómo se organiza la entidad, cuáles son los lineamientos que orientan su actuación y de qué manera se articulan sus diferentes dependencias y procesos para el cumplimiento de su misión. 

    .row.justify-content-center.align-items-center.z-2
      .col-lg-9
        .bg-img.bg-img--1.rounded-4.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.p-0
              img.imgw-61(src="@/assets/curso/intro/2.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 En este contexto, la gestión adecuada de la información institucional constituye un elemento esencial para consultar fuentes confiables, utilizar los sistemas y aplicativos dispuestos por la entidad, verificar la vigencia de la información y orientar requerimientos hacia las dependencias competentes. Estas actuaciones se relacionan, a su vez, con los mecanismos institucionales de calidad, seguimiento, control y mejora continua. 
        p.mb-4.mb-lg-0 Este componente formativo aborda estos elementos desde una perspectiva articulada, con el propósito de proporcionar las bases necesarias para orientar requerimientos institucionales según normativa vigente, procesos misionales y lineamientos SENA, en correspondencia con las funciones y procedimientos establecidos por la entidad. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/intro/3.png", alt="")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
