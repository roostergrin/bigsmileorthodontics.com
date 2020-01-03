export const onScroll = {
  data () {
    return {
      active: false
    }
  },
  methods: {
    onScroll ({going}) {
      if (going === 'in') {
        this.active = true
      }
    }
  }
}
