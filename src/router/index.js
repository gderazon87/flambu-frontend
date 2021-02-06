import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogDetail from '../views/BlogDetail.vue'
import ContactUs from '../views/ContactUs.vue'
import Items from '../views/Items.vue'
import ItemDetail from '../views/ItemDetail.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
  {
    path: '/item/:id',
    name: 'ItemDetail',
    component: ItemDetail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})

export default router
