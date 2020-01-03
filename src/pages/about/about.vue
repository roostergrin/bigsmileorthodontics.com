<template lang="pug" src="./about.pug"></template>

<script>
export default {
  name: 'About',
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
  }
}
</script>
