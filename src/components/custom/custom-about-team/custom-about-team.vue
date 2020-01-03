<template lang="pug" src="./custom-about-team.pug"></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  data () {
    return {
      containerActive: false,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.2]
      }
    }
  },
  props: {
    content: {
      Type: Object,
      default: () => ({})
    },
    tiles: {
      Type: String,
      default: 'three',
      validator: function (str) {
        return ['two', 'three', 'four'].indexOf(str) !== -1
      }
    }
  },
  mixins: [onScroll],
  methods: {
    onContainerScroll ({going, direction}) {
      if (going === 'in' && direction === 'top') {
        this.containerActive = true
      }
    }
  }
}
</script>
