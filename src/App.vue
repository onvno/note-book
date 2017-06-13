<template>
  <div id="app">

    <Nav></Nav>
    <List></List>
    <Content name="from parent app"></Content>




    <!--以下为原始内容，注释-->
    <!--<img src="./assets/logo.png">
    
    <div>
      <router-link to="/">Go to Home</router-link>
    </div>
    
    <div>
      <router-link to="/foo">Go to foo</router-link>
    </div>
    <div>
      <router-link to="/bar/myparam">Go to bar with para</router-link>
    </div>

    <router-view></router-view>-->
    
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import List from '@/components/List';
import Content from '@/components/Content';

export default {
  name: 'app',
  components: {Nav, List, Content},
}
</script>

<style lang="less">
@import './less/index';
html,body,#app{
  height:100%;
  background: #fff;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
