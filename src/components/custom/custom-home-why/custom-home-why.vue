<template lang="pug" src="./custom-home-why.pug"></template>

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
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.4]
      }
    }
  },
  mixins: [onScroll]
}
</script>
