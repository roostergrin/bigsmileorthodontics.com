<template lang="pug" src="./treatments.pug"></template>

<script>
export default {
  name: 'Treatments',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
  }
}
</script>
