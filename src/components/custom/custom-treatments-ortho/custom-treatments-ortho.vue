<template lang="pug" src="./custom-treatments-ortho.pug"></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  mixins: [onScroll],
  props: {
    props: {
      type: [Object, Array]
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
