<template lang="pug" src="./thank-you.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import CustomContactPage from 'components/custom/custom-contact-page/custom-contact-page'

export default {
  name: 'Thank You',
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    },
    contact () {
      return this.$store.state.app['contact-information']
    }
  },
  components: {
    HeroPhoto,
    CustomContactPage
  }
}
</script>
