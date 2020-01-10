<template lang="pug" src="./custom-about-apart.pug"></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
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
  mixins: [onScroll]
}
</script>
