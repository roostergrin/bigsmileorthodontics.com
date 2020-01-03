<template lang="pug" src="./custom-home-testimonials.pug"></template>

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
      show: 0,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.4]
      }
    }
  },
  mixins: [onScroll],
  async mounted () {
    setInterval(() => {
      if (this.show === (this.props.testimonials.length - 1)) {
        this.show = 0
      } else {
        this.show++
      }
    }, 7500)
  },
  methods: {
    moveSlide (i) {
      this.show = i
    },
    setSlide (i) {
      this.show = i
      setInterval(() => {
        this.setInterval()
      }, 7500)
    },
    nextSlide () {
      if (this.show === (this.props.testimonials.length - 1)) {
        this.show = 0
      } else {
        this.show++
      }
    },
    prevSlide () {
      if (this.show === 0) {
        this.show = this.props.testimonials.length - 1
      } else {
        this.show--
      }
    }
  }
}
</script>
