<template>
  <div id="nav">
    <div class="title">
      <router-link to="/">NOTE BOOK LOGO</router-link>
    </div>
    <div class="list">
      
      <ul>
        <li>111111</li>
        <li>222222</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
  @import '../less/index';
  #nav{
    width:20%;
    float:left;
    box-sizing:border-box;
    height:100%;
    box-shadow: 0px 2px 4px 0px rgba(194, 194, 194, 50);

    .title{
      padding:40rem/100 0;
      font-size:20px;
      border-bottom:1px solid #d6d6d6;
      a{
        color:#000;
        display: block;
        margin-left:auto;
        margin-right:auto;
      }
    }
  }
</style>

