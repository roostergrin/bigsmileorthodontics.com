<template lang="pug" src="./home.pug"></template>

<script>
import HeroHome from 'components/hero/hero-home/hero-home'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import CustomHomeWhy from 'components/custom/custom-home-why/custom-home-why'
import CustomHomeTestimonials from 'components/custom/custom-home-testimonials/custom-home-testimonials'
import BlockGradImage from 'components/block/block-grad-image/block-grad-image'
import CustomHomeBanner from 'components/custom/custom-home-banner/custom-home-banner'
import CustomHomePatients from 'components/custom/custom-home-patients/custom-home-patients'
import CustomHomeLifetime from 'components/custom/custom-home-lifetime/custom-home-lifetime'
import Custom3DTour from 'components/custom/custom-3d-tour-iframe/custom-3d-tour-iframe'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    HeroHome,
    CustomHomeWelcome,
    CustomHomeWhy,
    CustomHomeTestimonials,
    BlockGradImage,
    CustomHomeBanner,
    CustomHomePatients,
    CustomHomeLifetime,
    Custom3DTour
  }
}
</script>
