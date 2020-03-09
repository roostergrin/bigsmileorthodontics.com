<template lang="pug" src="./reviews.pug"></template>

<script>
import CustomReviewsIframe from 'components/custom/custom-reviews-iframe/custom-reviews-iframe'

export default {
  name: 'Reviews',
  computed: {
    props () {
      return this.$store.state.pages.reviews
    }
  },
  components: {
    CustomReviewsIframe
  }
}
</script>
