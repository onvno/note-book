import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/foo',
      name: 'FOO',
      component: Foo,
    },{
      path: '/bar/:id',
      name: 'BAR',
      component: Bar,
    }
  ]
})
