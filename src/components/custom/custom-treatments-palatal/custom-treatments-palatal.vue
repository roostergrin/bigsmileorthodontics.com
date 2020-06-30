<template lang="pug" src="./custom-treatments-palatal.pug"></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  mixins: [onScroll],
  props: {
    props: {
      type: [Object, Array]
    }
  },
  computed: {
    logProps () {
      return this.props
    }
  },
  data () {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.4]
      }
    }
  }
}
</script>
