<template lang="pug" src="./app.pug"></template>

<script>
import CustomBanner from 'components/custom/custom-banner/custom-banner'
import TheNavigation from 'components/navigation/navigation'
import TheFooter from 'components/footer/footer'

export default {
  async created () {
    this.$store.dispatch('GET_APP')
    // this.$store.dispatch('GET_BLOG')
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('SET_SCROLLED', false)
  },
  components: {
    CustomBanner,
    TheNavigation,
    TheFooter
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
