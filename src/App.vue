<template>
  <div id="app">

    <NoteNav></NoteNav>
    <Latest></Latest>
    <NoteContent name="from parent app"></NoteContent>




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
import NoteNav from '@/components/NoteNav';
import List from '@/components/List';
import Latest from '@/components/Latest';
import NoteContent from '@/components/NoteContent';

export default {
  name: 'app',
  components: {NoteNav, List, NoteContent, Latest},
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
