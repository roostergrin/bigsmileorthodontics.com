<template lang="pug" src="./covid.pug"></template>

<script>
import CustomCovidContent from 'components/custom/custom-covid-content/custom-covid-content'

export default {
  name: 'COVID-19',
  computed: {
    props () {
      return this.$store.state.pages['covid-19']
    }
  },
  components: {
    CustomCovidContent
  }
}
</script>
