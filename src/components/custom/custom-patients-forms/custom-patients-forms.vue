<template lang="pug" src="./custom-patients-forms.pug"></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  props: {
    props: {
      type: Object
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
