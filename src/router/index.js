import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import Second from '@/components/Second'
import List from '@/components/List'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/list',
      name: 'LIST',
      component: List,
      children: [
        {
          path: 'second',
          component: Second
        }
      ]
    },{
      path: '/bar/:id',
      name: 'BAR',
      component: Bar,
    }
  ]
})
