<template lang="pug" src="./start-your-virtual-consultation.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import FormVirtual from 'components/form/form-virtual/form-virtual'

export default {
  name: 'Start Your Virtual Consultation',
  computed: {
    props () {
      return this.$store.state.pages['start-your-virtual-consultation']
    },
    contact () {
      return this.$store.state.app['contact-information']
    }
  },
  components: {
    HeroPhoto,
    FormVirtual
  }
}
</script>
