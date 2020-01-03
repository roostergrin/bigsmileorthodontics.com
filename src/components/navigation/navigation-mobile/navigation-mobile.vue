<template lang="pug" src="./navigation-mobile.pug"></template>

<script>
export default {
  props: {
    links: {
      type: Array
    },
    props: {
      type: Object
    },
    scrolling: {
      type: Boolean
    }
  },
  data () {
    return {
      menu: false
    }
  },
  computed: {
    contact () {
      return this.$store.state.app['contact-information']
    }
  },
  methods: {
    toggleMenu () {
      console.log('click')
      this.menu = !this.menu
      if (this.menu) {
        document.body.classList.add('body-stop')
      } else {
        document.body.classList.remove('body-stop')
      }
    }
  }
}
</script>
