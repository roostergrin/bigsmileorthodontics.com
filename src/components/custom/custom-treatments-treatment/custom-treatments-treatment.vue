<template lang="pug" src="./custom-treatments-treatment.pug"></template>

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
        threshold: [0.2]
      }
    }
  },
  mixins: [onScroll],
  methods: {
    onWaypoint ({ going, direction, el }) {
      if (going === 'in' && direction === 'top') {
        const htmlItem = el.children[1].children[0]
        const htmlImage = el.children[0].children[0]
        htmlItem.classList.add('custom-treatments-treatment__title--active')
        htmlImage.classList.add('custom-treatments-treatment__image--active')
      }
    }
  }
}
</script>
