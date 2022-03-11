import VueRouter from "vue-router";

const routes = [
  {
    path:'/',
    redirect:'/publish'
  },
  {
    path:'/publish',
    component:()=>import('../views/publish')
  },
  {
    path:'/edit',
    component:()=>import('@/views/Edit')
  },
  {
    path:'/message',
    component:()=>import('@/views/Message')
  }
]
export default new VueRouter({
  routes
})