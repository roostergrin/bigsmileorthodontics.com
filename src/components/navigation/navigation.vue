<template lang="pug" src="./navigation.pug"></template>

<script>
import NavigationDesktop from 'components/navigation/navigation-desktop/navigation-desktop'
import NavigationMobile from 'components/navigation/navigation-mobile/navigation-mobile'

export default {
  data () {
    return {
      windowHeight: window.pageYOffset
    }
  },
  computed: {
    scrolling () {
      return this.windowHeight > (window.innerHeight * 0.35)
    },
    links () {
      return this.$router.options.routes.filter((link) => {
        return link.navigation
      })
    },
    linksMobile () {
      return this.$router.options.routes.filter((link) => {
        return link.mobile
      })
    }
  },
  components: {
    NavigationDesktop,
    NavigationMobile
  }
}
</script>
