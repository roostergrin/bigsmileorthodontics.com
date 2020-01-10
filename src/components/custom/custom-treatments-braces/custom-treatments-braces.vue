<template lang="pug" src="./custom-treatments-braces.pug"></template>

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
      activeTab: 0,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.4]
      }
    }
  },
  mixins: [onScroll],
  methods: {
    setTab (i) {
      this.activeTab = i
    }
  }
}
</script>
