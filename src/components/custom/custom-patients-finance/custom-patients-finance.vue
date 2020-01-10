<template lang="pug" src="./custom-patients-finance.pug"></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  props: {
    props: {
      type: Object
    }
  },
  data () {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  mixins: [onScroll],
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
