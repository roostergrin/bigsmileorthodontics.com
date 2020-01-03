<template lang="pug" src="./custom-about-office.pug"></template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      activeSlide: 0
    }
  },
  mounted () {
    this.slideAutomate()
  },
  methods: {
    slideAutomate () {
      setInterval(() => {
        this.activeSlide >= (this.content.slider.length - 1) ? this.activeSlide = 0 : this.activeSlide += 1
      }, 7500)
    },
    slideNext () {
      this.activeSlide >= (this.content.slider.length - 1) ? this.activeSlide = 0 : this.activeSlide += 1
    },
    slidePrev () {
      this.activeSlide <= 0 ? this.activeSlide = (this.content.slider.length - 1) : this.activeSlide -= 1
    }
  }
}
</script>
