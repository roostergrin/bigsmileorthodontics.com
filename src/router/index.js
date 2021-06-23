import Vue from 'vue'
import VueRouter from 'vue-router'
import StyleGuide from 'pages/style-guide/style-guide'
import PageNotFound from 'pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const Home = () => import('@/pages/home/home')
const About = () => import('@/pages/about/about')
const Reviews = () => import('@/pages/reviews/reviews')
const NewPatient = () => import('@/pages/patient/patient')
const Invisalign = () => import('@/pages/invisalign/invisalign')
const Treatments = () => import('@/pages/treatments/treatments')
const Covid = () => import('@/pages/covid/covid')
const Contact = () => import('@/pages/contact/contact')
const StartYourVirtualConsultation = () => import('@/pages/start-your-virtual-consultation/start-your-virtual-consultation')
const ThankYou = () => import('@/pages/thank-you/thank-you')

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
      path: '/reviews',
      name: 'Reviews',
      navigation: false,
      mobile: false,
      component: Reviews
    },
    {
      path: '/about',
      name: 'About',
      navigation: true,
      mobile: true,
      component: About,
      children: [
        {
          path: '/about#office',
          name: 'Our Office',
          hash: 'office'
        },
        {
          path: '/reviews',
          name: 'Reviews'
        }
      ]
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
      path: '/covid-19',
      name: 'COVID-19',
      navigation: true,
      mobile: true,
      component: Covid
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      mobile: true,
      component: Contact
    },
    {
      path: '/start-your-virtual-consultation',
      name: 'Start Your Virtual Consultation',
      navigation: true,
      mobile: true,
      component: StartYourVirtualConsultation
    },
    {
      path: '/thank-you',
      name: 'Thank You',
      navigation: false,
      mobile: false,
      component: ThankYou
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
