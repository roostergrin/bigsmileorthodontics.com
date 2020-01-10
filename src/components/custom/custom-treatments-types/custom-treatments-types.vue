<template lang="pug" src="./custom-treatments-types.pug"></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  props: {
    props: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      activeType: 0,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.4]
      }
    }
  },
  mixins: [onScroll],
  methods: {
    setType (i) {
      this.activeType = i
    }
  }
}
</script>
