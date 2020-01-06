<template lang="pug" src="./invisalign.pug"></template>

<script>
import BlockImageText from 'components/block/block-image-text/block-image-text'
import CustomAccelerated from 'components/custom/custom-invisalign-accelerated/custom-invisalign-accelerated'
import HeroPages from 'components/block/block-hero-photo/block-hero-photo'

export default {
  name: 'Invisalign',
  computed: {
    props () {
      return this.$store.state.pages.invisalign
    }
  },
  components: {
    BlockImageText,
    CustomAccelerated,
    HeroPages
  }
}
</script>
