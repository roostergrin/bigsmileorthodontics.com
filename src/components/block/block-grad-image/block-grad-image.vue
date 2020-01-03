<template lang="pug" src="./block-grad-image.pug"></template>

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
  mixins: [onScroll],
  // methods: {
  //   onWaypoint ({ going, direction, el }) {
  //     console.log()
  //     if (going === 'in' && direction === 'top') {
  //       const htmlItem = el.children[0].children[1].children[0]
  //       htmlItem.classList.add('custom-about-why__body-bottom--active')
  //     }
  //   }
  // }
}
</script>
