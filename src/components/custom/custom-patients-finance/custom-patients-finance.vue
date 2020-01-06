<template lang="pug" src="./custom-patients-finance.pug"></template>

<script>
export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    backgroundImg () {
      const screenIsMobile = window.innerWidth < 1024
      if (screenIsMobile) {
        return this.props.mobile_background_img
      } else {
        return this.props.background_img
      }
    }
  }
}
</script>
