<template lang="pug" src="./navigation-mobile.pug"></template>

<script>
import FormDentist from 'components/form/form-dentist/form-dentist'

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
      menu: false,
      form: false
    }
  },
  computed: {
    contact () {
      console.log(this.scrolling)
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
    },
    toggleForm () {
      console.log('toggling?')
      this.form = !this.form
      if (this.form) {
        document.body.classList.add('body-stop')
      } else {
        document.body.classList.remove('body-stop')
      }
    },
    handleScroll () {
      let prevScrollpos = window.pageYOffset

      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos) {
          document.querySelector('.navigation-mobile__content').style.height = 'auto'
          document.querySelector('.navigation-mobile__content').style.opacity = '1'
        } else {
          document.querySelector('.navigation-mobile__content').style.height = '0'
          document.querySelector('.navigation-mobile__content').style.opacity = '0'
        }
        prevScrollpos = currentScrollPos
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: {
    FormDentist
  }
}
</script>
