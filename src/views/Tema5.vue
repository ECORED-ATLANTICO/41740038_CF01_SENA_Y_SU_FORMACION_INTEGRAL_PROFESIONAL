<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Calidad y mejora continua

    img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La calidad institucional se relaciona con la capacidad de desarrollar los procesos de manera coherente con la misión, la normativa y los resultados esperados. Para ello, no basta con ejecutar actividades: es necesario establecer mecanismos que permitan planear, hacer seguimiento, evaluar resultados, identificar riesgos y emprender acciones orientadas al mejoramiento. 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
