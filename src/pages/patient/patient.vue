<template lang="pug" src="./patient.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'

export default {
  computed: {
    props () {
      return this.$store.state.pages['new-patient']
    }
  },
  components: {
    HeroPhoto
  }
}
</script>
