<template lang="pug" src="./navigation-desktop.pug"></template>

<script>
export default {
  props: {
    links: {
      type: Array
    },
    props: {
      type: Object
    },
    scrolling: {
      type: Boolean
    }
  },
  computed: {
    contact () {
      return this.$store.state.app['contact-information']
    }
  }
}
</script>
