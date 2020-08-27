<template lang="pug" src="./covid.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import CustomCovidContent from 'components/custom/custom-covid-content/custom-covid-content'

export default {
  name: 'COVID-19',
  computed: {
    props () {
      return this.$store.state.pages['covid-19']
    }
  },
  components: {
    HeroPhoto,
    CustomCovidContent
  }
}
</script>
