<template lang="pug" src="./block-image-text.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    },
    textRight: {
      type: Boolean,
      default: false
    },
    lightColor: {
      type: Boolean,
      defualt: false
    }
  }
}
</script>
