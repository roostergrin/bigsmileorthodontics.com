import Vue from 'vue'
import VueRouter from 'vue-router'
import StyleGuide from 'pages/style-guide/style-guide'
import PageNotFound from 'pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const Home = () => import('@/pages/home/home')
const About = () => import('pages/about/about')
const NewPatient = () => import('pages/patient/patient')
const Invisalign = () => import('pages/invisalign/invisalign')
const Treatments = () => import('pages/treatments/treatments')
const Contact = () => import('pages/contact/contact')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: false,
      mobile: true,
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      navigation: true,
      mobile: true,
      component: About
    },
    {
      path: '/new-patient',
      name: 'New Patient',
      navigation: true,
      mobile: true,
      component: NewPatient
    },
    {
      path: '/invisalign',
      name: 'Invisalign',
      navigation: true,
      mobile: true,
      component: Invisalign
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      mobile: true,
      component: Treatments
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      mobile: true,
      component: Contact
    },
    {
      path: '/style-guide',
      name: 'style guide',
      navigation: false,
      component: StyleGuide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

router.beforeResolve((to, from, next) => {
  /* eslint-disable */
  if (to.hash === "") {
    /* eslint-enable */
    window.scrollTo(0, 0)
  }
  next()
})

export default router
