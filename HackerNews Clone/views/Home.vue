<template>
  <div class="home">
      <div class="content header ">
        <h1 class="logo">
          <a href="#">
            <span>Hacker News</span>
          </a>
        </h1>
        <nav class="nav">
          <a href="javascript:void(0)" class="active"
            @click="handleType"
          >Top</a>
          <a href="javascript:void(0)"
             @click="handleType"
          >New</a>
        </nav>
      </div>
    
    <div class="main-warp">
      <div class="main content">
        <div class="list-wrap">
          <div class="list-title">{{type}}</div>
          <div class="list-info">
            <InfoList
              v-for="ele in infoArr"
              :key="ele.time"
              :info="ele"
             
            />
          </div>
        </div>
         <pageTurn :pageSize="pageSize" :total="total"/>
      </div>
    </div>
    <div class="footer">Copyright@2019 ByteArk</div>
  </div>
</template>

<script>
  import  InfoList from '../com/InfoList';
  import PageTurn from '../com/PageTurn';
export default {
  data () {
    return {
      type:'new',
      pageSize:4, // 页容量
      total:10, // 数据总数
      //模拟要总的数据
      info:[
        {
          titleName:"flajdlfjlajdfljeoqjffj",
          time:1561525761131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        }, {
          titleName:"flajdlfjlajdfljgfeoqjffj",
          time:156152561131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },{
          titleName:"flajdlfjlfadajdfljeoqjffj",
          time:156156271131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },{
          titleName:"flajdlfjlajfaddfljeoqjffj",
          time:1561275561131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },{
          titleName:"flajdlfjlajfaddfljeoqjffj",
          time:156127561131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },{
          titleName:"flajdlfjlfaajdfljeoqjffj",
          time:156127521561131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },{
          titleName:"flajdlfjlfaajdfljeoqjffj",
          time:156152761751131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },{
          titleName:"flajdlfjfadlajdfljeoqjffj",
          time:1561275515761131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },{
          titleName:"flajdlfjfadlajdfljeoqjffj",
          time:156127552165615761131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },{
          titleName:"flajdlfjfadlajdfljeoqjffj",
          time:156127551545616761131,
          url:'www.baidu.com',
          userName:'jfladjsfl',
          msg:465161
        },
      ],
      // 要渲染的数据
      infoArr:[],
    }
  },
  created () {
    /** 
      获取发送请求获取数据，
      this.total = 获取的数据的长度
      this.info = '得到的数据'
    */
      this.sliceInfo ();  // 截取内容
      this.initInfo();    // 对内容进行初始化
    
  },
  components:{
    InfoList,
    PageTurn
  },
  methods : {
    /**对时间格式进行处理 */
    initTime (time) {
      var oTime = new Date(time);
      var year = add0(oTime.getFullYear());
      var month = add0 (oTime.getMonth() + 1);
      var day = add0 (oTime.getDate());
      var hours = add0 (oTime.getHours());
      var minutes = add0 (oTime.getMinutes());
      var seconds = add0 (oTime.getSeconds())
      
      time = year + ':' + month + ":" + day + " " + hours + ':' + minutes + ':' + seconds;
      // console.log(time)
      return time;


      function add0 (num) {
        if(num < 10){
          num = "0" + num;
        }
        return num;
      }
    },
    handleType(e) {
      this.type = e.target.innerText;
    },
    /**截取当前要渲染的数据 */
    sliceInfo (curpage = 1) {
      console.log(1)
      console.log(((curpage - 1) * this.pageSize));
      console.log((curpage * this.pageSize));

      this.infoArr = this.info.slice(((curpage - 1) * this.pageSize),(curpage * this.pageSize));
    },
    /**对数据初始化 */
    initInfo () {
      for (var i = 0; i < this.infoArr.length; i++){
        this.infoArr[i].time = this.initTime(this.infoArr[i].time);
      }
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    color: #bbb
  }
  a{
    text-decoration: none
  }
  .content{
    width:960px;
    margin: 0 auto;
   
  }
  .header{
     height: 57px;
  }
  .logo{
    margin: 0;
    width:120px;
    height: 57px;
    line-height: 57px;
    font-size: 18px;
    float: left;
    margin-right: 60px;
  } 
  .logo a{
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/微信截图_20200213172849.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 2px -1px;
  }
  .logo a span{
    display: none;
  }
  .nav{
    overflow: hidden;
    height: 100%;
    line-height: 57px;
   
  }
  .nav a{
    font-size: 12px;
    color: #bbb;
    margin-right: 30px;
  }
  .nav a.active{
    color: #222;
    font-weight: 600;
  }
  .main-warp {
    background-color: #eee;
    padding:10px;
    
  }
  .main{
    height: 100%;
    border-radius: 5px;
   

  }
  .list-wrap{
     background-color: #fff;
  }
  .list-title{
    height: 40px;
    line-height: 40px;
    color: #222;
    font-size: 12px;
    font-weight: 600;
    border-bottom: 1px solid #bbb;
    padding-left: 20px;
  }
  
  .list-info{
    margin: 0 20px;
    
  }

  .footer{
    height: 66px;
    background-color:#fff;
    text-align: center;
    line-height: 66px;
    font-size: 12px;
    
  }

  
</style>
  