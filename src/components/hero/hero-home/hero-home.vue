<template lang="pug" src="./hero-home.pug"></template>

<script>
export default {
  props: {
    props: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      details: false
    }
  },
  methods: {
    toggleDetails () {
      this.details = !this.details
    }
  }
}
</script>
