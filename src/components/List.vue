<template>
  <div id="list">
    List
    <router-link to="/list/second">second</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  @import '../less/index';
  #list{
    width:30%;
    height:100%;
    float:left;
    background-color: #f9f9f9;
  }
</style>
