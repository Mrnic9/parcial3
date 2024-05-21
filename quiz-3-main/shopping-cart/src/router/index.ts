import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ClientePage from '../views/ClientePage.vue'
import LoginPage from '../views/LoginPage.vue'
import DasboardPage from '../views/DasboardPage.vue'
import ProductoPage from '@/views/ProductoPage.vue';
import Proveedor from '@/views/Proveedor.vue';
import CarroPage from '@/views/carroPage.vue';
import CategoriaPage from '@/views/CategoriaPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },{
    path: '/cliente',
    name: 'Cliente',
    component: ClientePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DasboardPage
  },
  {
    path: '/producto',
    name: 'Producto',
    component: ProductoPage
  },
  {
    path: '/carro',
    name: 'carro',
    component: CarroPage
  }
  ,
  {
    path: '/categoria',
    name: 'categoria',
    component: CategoriaPage
  }
  

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
