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
        threshold: [0.2]
      },
      optionsText: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  mixins: [onScroll],
  methods: {
    onWaypoint ({ going, direction, el }) {
      if (going === 'in' && direction === 'top') {
        const htmlItem = el.children[0]
        htmlItem.classList.add('custom-about-apart__title--active')
      }
    }
  }
}
</script>
