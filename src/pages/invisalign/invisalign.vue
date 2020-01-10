<template lang="pug" src="./invisalign.pug"></template>

<script>
import HeroInvisalign from 'components/hero/hero-invisalign/hero-invisalign'
import BlockImageText from 'components/block/block-image-text/block-image-text'
import CustomAccelerated from 'components/custom/custom-invisalign-accelerated/custom-invisalign-accelerated'

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
    HeroInvisalign
  }
}
</script>
