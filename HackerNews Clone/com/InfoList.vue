<template>
  <div class="list-item">
    <div class="give-up">
      <div class="give-up-icon">
        <span class=" give-up-span icon"></span>
      </div>
      <div class="give-up-view">
        {{view}}
      </div>
    </div>
    <div class="info">
      <div class="title clearfix">
        <div class="title-name float-left">
          <a href="#">{{info.titleName}}</a>
        </div>
        <div class="time float-left">{{info.time}}</div>
      </div>
      <div class="info-url">
        <a href="#">{{info.url}}</a>
      </div>
      <div class="info-user">
        <span class="icon user">{{info.userName}}</span>
        <span class="icon msg">{{info.msg}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['info'],
  data () {
    return {
      view : 15166
    }
  },
  created () {
   
  }
}
</script>

<style scoped>
  @import '../assets/css/common.css';
  /* @font-face {
  font-family: 'iconfont';  /* project id 1638217 
  src: url('https://at.alicdn.com/t/font_1638217_5s2cwjzej6n.eot');
  src: url('https://at.alicdn.com/t/font_1638217_5s2cwjzej6n.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_1638217_5s2cwjzej6n.woff2') format('woff2'),
  url('https://at.alicdn.com/t/font_1638217_5s2cwjzej6n.woff') format('woff'),
  url('https://at.alicdn.com/t/font_1638217_5s2cwjzej6n.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_1638217_5s2cwjzej6n.svg#iconfont') format('svg'); 
}*/
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
.float-left{
  float: left;
}
.float-right{
  float:right
}
a{
  color: inherit;
}
  .list-item{
    height: 100px;
    padding:10px 0;
    border-bottom: 1px solid #bbb;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
  }
  .give-up{
    width: 50px;
    text-align: center;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .give-up-icon{
    background-color: #eee;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 0 auto;
    border-radius: 50%;
  }
  .icon{
    font-family: 'iconfont';
    cursor: pointer;
  }
  .give-up-span::after{
    color: orange;
    content: "\e60c"
  }
  .give-up-view{
    text-align: center;
    color: orange;
    font-weight: 400;
    font-size: 14px;
  }
  .info{
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* background-color: aqua; */
    font-size: 12px;
  }
  .title-name{
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin-right: 40px;
  }

  .user::before{
    font-size: 14px;
    color: #ddd;
    content: "\e699";
    margin-right: 10px;
  }
  .msg{
    margin: 30px;
    color: orange;
  }
  .msg::before{
    font-size: 14px;
    color: #ddd;
    content: "\e614";
    margin-right: 10px;
  }

</style>