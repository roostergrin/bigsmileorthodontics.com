import VueScrollTo from 'vue-scrollto'

const scrollBehavior = function (to, from) {
  if (to.hash) {
    if (window.innerWidth < 1431) {
      window.scrollTo(0, 0)
      VueScrollTo.scrollTo(to.hash, { offset: -120, duration: 1500, easing: 'ease-in' })
    } else {
      window.scrollTo(0, 0)
      VueScrollTo.scrollTo(to.hash, { offset: -150, duration: 1500, easing: 'ease-in' })
    }
  } else {
    return { x: 0, y: 0 }
  }
}

export default scrollBehavior
