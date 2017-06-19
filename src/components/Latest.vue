<template>
  <div id="latest">
    <div class="top">
      <h2>Top Tag</h2>
      <ul class="toplist">
        <li v-for="tag in tags">
          <a v-bind:href="tag.link" >
            <i>{{tag.num}}</i>
            <span>{{tag.tit}}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="hot">
      <h2>Today Hot</h2>
      <div class="hotlist">
        <div class="hotcont" v-for="(hot, index) in hots">
          <div class="index">
            {{index + 1}}
          </div>
          <div class="desc">
            <h4>
              <a :href='hot.link'>{{hot.tit}}</a>
            </h4>
            <ul>
              <li>{{hot.rate}} hot</li>
              <li><a href="#">{{hot.commit}} Commits</a></li>
              <li><a href="#">{{hot.lastreplay}} ago</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
const tags = [
  {
    tit: 'react',
    link: '#test1',
    num: '99+',
  },
  {
    tit: 'vue',
    link: '#',
    num: '89',
  },
  {
    tit: 'javascript',
    link: '#',
    num: '79',
  },
  {
    tit: 'angular',
    link: '#',
    num:'57',
  }
]
const hots = [
  {
    tit: 'Deep Learning Reinvents the Hearing Aid',
    link: '#',
    rate: 200,
    commit: 89,
    lastreplay: '4hour'
  },
  {
    tit: 'Deep Learning Reinvents the Hearing Aid',
    link: '#',
    rate: 200,
    commit: 89,
    lastreplay: '4hour'
  },
  {
    tit: 'Deep Learning Reinvents the Hearing Aid',
    link: '#',
    rate: 200,
    commit: 89,
    lastreplay: '4hour'
  },
  {
    tit: 'Deep Learning Reinvents the Hearing Aid',
    link: '#',
    rate: 200,
    commit: 89,
    lastreplay: '4hour'
  },
  {
    tit: 'Deep Learning Reinvents the Hearing Aid',
    link: '#',
    rate: 200,
    commit: 89,
    lastreplay: '4hour'
  }
]
export default {
  data: function(){
    return {
      tags: tags,
      hots: hots,
    }
  }
}
</script>

<style lang="less">
  @import '../less/index';
  #latest{
    width:30%;
    height:100%;
    float:left;
    background-color: #f9f9f9;
    box-sizing:border-box;
    padding:20rem/100;

    .top{
      h2{
        font-size:14rem/100;
        color: #929292;
        text-align:left;
        line-height: 2;
        font-weight: normal;
      }

      .toplist{
        .clearfix();
      }

      li{
        float:left;
        position:relative;
        padding:5rem/100 10rem/100;
        background: #919191;
        border-radius: 4rem/100;
        color:#fff;
        margin-right:10rem/100;
        margin-top:10rem/100;
        a{
          display:block;
          color:#fff;
          i{
            display: inline-block;
            width:30rem/100;
            padding-right:10rem/100;
            &:after{
              content:'|';
              position:absolute;
              left:45rem/100;;
            }
          }
          span{
            display: inline-block;
            text-align: center;
          }
        }
      }
    }

    .hot{
      padding-top:20rem/100;
      h2{
        font-size:14rem/100;
        color: #929292;
        text-align:left;
        line-height: 2;
        font-weight: normal;
        margin-bottom:10px;
      }

      .hotcont{
        display:flex;
        align-items:center;
        .clearfix();
        margin-bottom:10rem/100;
        .index{
          float:left;
          width:33rem/100;
          height:33rem/100;
          background: #CBCBCB;
          color:#fff;
          line-height: 33rem/100;
          text-align: center;
          border-radius:50%;
        }

        .desc{
          float:left;
          margin-left:18rem/100;
          h4{
            font-weight: normal;
            a{
              font-size: 14px;
              color: #434343;
            }
            margin-bottom:5rem/100;
          }
          ul{
            li{
              float:left;
              position:relative;
              color: #919191;
              padding-right:10rem/100;
              a{
                color: #919191;
              }
              &:after{
                content:'|';
                position:absolute;
                right:5rem/100;
              }
            }
          }
        }
      }
    }
    
  }
</style>
