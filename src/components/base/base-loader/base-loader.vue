<template lang="pug" src="./base-loader.pug"></template>
<script>
export default {
  props: ['props'],
  data () {
    return {
      loaded: false,
      animate: false
    }
  },
  created () {
    document.body.classList.add('body-stop')
  },
  mounted () {
    let isLoading = setInterval(() => {
      if (!this.$store.state.loading) {
        setTimeout(() => {
          console.log('animate')
          this.animate = true
        }, 1000)
        setTimeout(() => {
          console.log('loaded')
          this.loaded = true
          document.body.classList.remove('body-stop')
        }, 4000)
        console.log('clearing')
        clearInterval(isLoading)
      }
    }, 100)
  }
}
</script>
