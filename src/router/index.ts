import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/frete',
    name: 'frete',

    component: () => import('../views/frete/FreteListView.vue')
  },
  {
    path: '/fretecadastrar',
    name: 'fretecadastrar',

    component: () => import('../views/frete/FreteCadastrar.vue')
  },
  {
    path: '/transportadocargafrete',
    name: 'transportadocargafrete',

    component: () => import('../views/frete/carga/TransportadoCargaFrete.vue')
  },
  {
    path: '/interrompidocarga/frete/:model/:id',
    name: 'interrompidocargafrete',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import( '../views/frete/emtransporte/InterrompidoTransporte.vue')
  },
  {
    path: '/canceladocargafrete',
    name: 'canceladocargafrete',

    component: () => import('../views/frete/carga/CanceladoCargaFrete.vue')
  },
  {
    path: '/interrompidotransportefrete',
    name: 'interrompidotransportefrete',

    component: () => import('../views/frete/emtransporte/InterrompidoTransporte.vue')
  },
  {
    path: '/canceladointerrompidofrete',
    name: 'canceladointerrompidofrete',

    component: () => import('../views/frete/interrompido/CanceladoInterrompidoFrete.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
