<template lang="pug" src="./navigation-desktop.pug"></template>

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
      form: false
    }
  },
  computed: {
    contact () {
      return this.$store.state.app['contact-information']
    }
  },
  methods: {
    toggleForm () {
      this.form = !this.form
      if (this.form) {
        document.body.classList.add('body-stop')
      } else {
        document.body.classList.remove('body-stop')
      }
    }
  },
  components: {
    FormDentist
  }
}
</script>
