<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El componente formativo Fundamentos institucionales y gestión de la información en el SENA, brinda los fundamentos necesarios para comprender la identidad, el funcionamiento y el papel institucional del SENA en el contexto de la formación y el servicio público. Su desarrollo parte del reconocimiento de la historia, origen y evolución de la entidad, su naturaleza jurídica, función pública, estructura organizacional, principios, valores y procesos institucionales. 
        .bg-img.rounded-4.p-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block.p-0
              img.imgw-61(src="@/assets/curso/1.svg", alt="" data-aos="zoom-in-down")
            .col-lg-11
              p.mb-0 Asimismo, profundiza en la Formación Profesional Integral, sus principios y características, su relación con el trabajo y su articulación con el sistema educativo, los sectores productivos, la ciencia, la tecnología y la innovación. De manera complementaria, aborda el marco normativo que orienta las actuaciones institucionales, los procesos y procedimientos, la gestión responsable de la información y la consulta de fuentes confiables y vigentes. 
        p.mb-0 Finalmente, integra los fundamentos del Sistema Integrado de Gestión y Autocontrol, el seguimiento de los procesos, la gestión del riesgo y la mejora continua, fortaleciendo la capacidad para aplicar lineamientos institucionales, comunicar información y direccionar requerimientos hacia las dependencias competentes de manera pertinente, oportuna y coherente con la misión del SENA.

    .row.justify-content-center
      .col-lg-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="El componente formativo Fundamentos institucionales y gestión de la información en el SENA, permite comprender los fundamentos institucionales que orientan la actuación en el SENA, a partir del reconocimiento de su historia, naturaleza, estructura, principios, valores y procesos. Asimismo, aborda la Formación Profesional Integral y su relación con el trabajo, el sistema educativo, los sectores productivos, la ciencia, la tecnología y la innovación. Este recorrido se complementa con el marco normativo institucional, la gestión responsable de la información y el Sistema Integrado de Gestión y Autocontrol, como referentes para consultar fuentes vigentes, aplicar procedimientos, comunicar información y direccionar requerimientos hacia las dependencias competentes, contribuyendo a una gestión institucional pertinente, articulada y orientada a la mejora continua.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
