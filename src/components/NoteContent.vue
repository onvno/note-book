<template>
  <div id="note-cont">
    <div class="head">
      <h1>Deep Learning Reinvents the Hearing Aid</h1>
      <span>{{name}}</span>
    </div>

    <div class="code">
      <div class="codezone">Code Zone</div>
      <div class="result">Run Project</div>
    </div>

    <div class="cont">
      <h2>Code Analysis</h2>
      <p>My mother began to lose her hearing while I was away at college. I would return home to share what I’d learned, and she would lean in to hear. Soon it became difficult for her to hold a conversation if more than one person spoke at a time. Now, even with a hearing aid, she struggles to distinguish the sounds of each voice. When my family visits for dinner, she still pleads with us to speak in turn.</p>
      <div class="quote">
        <p>
        hold a conversation if more than one person spoke at a time. Now, even with a hearing aid, she struggles to distinguish the sounds of each voice. When my family visits for dinner, she still pleads with us to speak in turn.          
        </p>
      </div>
    </div>

    <div class="discuss">
      <h2>Discuz</h2>
      <ul>
        <li>
          <dl>
            <dt>
              <img src="../assets/avator.png" alt="">
            </dt>
            <dd>
              In the 80s, the hair accessory was invaluable. Almost every style involved some sort of hair accessory.
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['name']
}
</script>

<style lang="less">
  @import '../less/index';
  #note-cont{
    width:50%;
    float:left;
    box-sizing:border-box;
    padding:50px 20px 20px;
    text-align: left;
    
    // 头部
    .head{
      border-bottom: 1px solid #DADADA;
      margin-bottom:30px;
      h1{
        font-size: 24px;
        color: #737272;
        text-align: left;
        font-weight:normal;
      }
      span{
        display: block;
        margin:5px 0 15px;
        font-size: 14px;
        color: #919191;
        line-height: 1.5;
      }
    }

    // 代码展示区
    .code{
      height:290px;
      .codezone{
        float:left;
        width:60%;
        box-sizing: border-box;
        padding:20px;
        background: #F3F3F3;
        height:100%;
      }
      .result{
        float:left;
        width:40%;
        background: #7F7F7F;
        color:#fff;
        box-sizing: border-box;
        padding:20px;
        height:100%;
      }
    }

    // 内容区
    .cont{
      padding:20px;
      h2{
        font-size: 20px;
        font-weight:lighter;
        color: #4B4B4B;
        padding:10px 0;
      }
      p{
        font-size: 14px;
        color: #8F8F8F;
      }
      .quote{
        margin:15px 0px;
        border-left:3px solid #B1B1B1;
        padding:5px 0px 5px 10px;
        color: #8F8F8F;
      }
    }

    // 讨论
    .discuss{
      padding:20px;
      h2{
        font-size: 20px;
        font-weight:lighter;
        color: #4B4B4B;
        padding:10px 0;
      }
      p{
        font-size: 14px;
        color: #8F8F8F;
      }
      li{
        .clearfix();
        padding:5px 0px;
        dt{
          float:left;
        }
        dd{
          box-sizing: border-box;
          padding-left:80px;
        }
      }
    }
    
  }
</style>
