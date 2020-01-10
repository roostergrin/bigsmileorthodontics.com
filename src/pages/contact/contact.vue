<template lang="pug" src="./contact.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import CustomContactPage from 'components/custom/custom-contact-page/custom-contact-page'

export default {
  name: 'Contact Us',
  computed: {
    props () {
      return this.$store.state.pages['contact-us']
    },
    contact () {
      return this.$store.state.app['contact-information']
    }
  },
  components: {
    HeroPhoto,
    CustomContactPage
  }
}
</script>
