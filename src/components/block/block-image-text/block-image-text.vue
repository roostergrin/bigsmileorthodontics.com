<template lang="pug" src="./block-image-text.pug" ></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    },
    textRight: {
      type: Boolean,
      default: false
    },
    lightColor: {
      type: Boolean,
      defualt: false
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
