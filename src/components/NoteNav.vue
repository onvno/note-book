<template>
  <div id="nav">
    <div class="title">
      <router-link to="/">NOTE BOOK LOGO</router-link>
    </div>
    <div class="list">
      <button @click="toggle">Toggle</button>
      <transition name="fade">
        <ul v-if="show">
          <li>
            <router-link to='/list'>
              <span>J</span>
              <b>Javascript</b>
            </router-link>
          </li>
          <li>
            <router-link to='/list'>
              <span>N</span>
              <b>Node</b>
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      show: true
    }
  },
  methods: {
    toggle: function(){
      this.show = !this.show;
    }
  }
  // data(){
  //   show: true
  // } 
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

    .list{
      .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
      }
      .fade-enter, .fade-leave-active {
        opacity: 0
      }
      li{
        padding:0 20rem/100;
      }
      a{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        margin:10rem/100 0;
        b{
          color: #9C9C9C;
          margin-left:10rem/100;
        }
        span{
          width:46rem/100;
          height:46rem/100;
          background:#A5A5A5;
          color:#fff;
          line-height:46rem/100;
        }
      }
    }
  }
</style>

