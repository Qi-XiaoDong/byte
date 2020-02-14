<template>
  <div class="page-turn-wrap">
    <!-- <div class="page-turn"> -->
      <span class="pre-btn"> <a :class="this.curPage === 1 ? 'disabled' : ''" @click.prevent="turnPage(-1)" href="#" >&#xe6e1;</a></span>
      
       <span class="ellipsis" v-if="ellipsisShow"> 
        <a href="javascript:void(0)">...</a> 
      </span>
    <!-- 渲染页面索引 -->
      <span v-for="ele in PageIndex"
        :key="ele"
        :class="{'active' : curPage === ele + statePage}"
      >
        <a @click="changePage(ele + statePage)" href="#">{{ele + statePage}}</a>
      </span>

      <span class="next-btn" ><a :class="this.curPage === this.PageNumber ? 'disabled' : ''" @click="turnPage(1)" href="#">&#xe64c;</a> </span>
    </div>
    
  <!-- </div> -->
</template>

<script>
export default {
  data () {
    return {
      statePage: 0,
      // total: 50,   // 数据总量
      // pageSize:10,    // 页容量
      curPage : 1,  // 当前页
    }
  },
  props:['pageSize', 'total'],
  methods :{
    /**跳转到指定的页面索引 */
    turnPage (num) {
      if (num < 1 ){
        if (this.curPage === 1) {
          return ;
        }
        this.curPage = this.curPage + num;
        this.statePage = this.curPage > 10 ? this.statePage - 1 : this.statePage = 0 ;
          this.tallCur(this.curPage);
      }else{
        if (this.curPage >= this.PageNumber)  {
          return ;
        }
        this.curPage = this.curPage + num;
        this.statePage = this.curPage > 10 ? this.statePage + 1 : this.statePage = 0 ;
        this.tallCur(this.curPage);
      }
    },
    changePage(num){  // 点击页码跳转
      if (num === this.curPage) {
        return ;
      }
      this.curPage = num ;
      // 告诉父级当前页码；
      this.tallCur(this.curPage);
    },
    tallCur (cur) {
      this.$parent.sliceInfo(cur);
    }

  },
  computed:{
    ellipsisShow() { // 是否渲染...
      return this.statePage !== 0;
    },
    PageNumber () { // 总页数
      return  Math.ceil (this.total / this.pageSize);
    },
    PageIndex () { // 每次最多渲染的页面索引个数
      return this.PageNumber >= 10 ? 10 : this.PageNumber;
    }
  }
  
}
</script>

<style scoped>
  @import '../assets/css/common.css';
  .page-turn-wrap{
    user-select:none;
    height: 45px;
    padding: 10px 0;
    margin-top: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    text-align: right
  }
  .page-turn-wrap span{
    margin-right: 10px;
    text-align: center;
    display: inline-block;
    min-width: 15px;
    height: 15px;
    font-size: 12px;
    color: orangered;
    border: 1px solid #bbb;
  }
  .page-turn-wrap span.pre-btn,
  .page-turn-wrap span.next-btn,
  .page-turn-wrap span.active{
    color: #222;
  }
  .page-turn-wrap span.pre-btn a,
  .page-turn-wrap span.next-btn a{
    font-family: 'iconfont'
  }
  .page-turn-wrap span.ellipsis,
   .page-turn-wrap span.active{
     color: #222;
    border: none;
  }
  .page-turn-wrap span a{
    /* padding: 2px; */
    display: inline-block;
    width: 100%;
    height: 100%;
    color: inherit;
  }
  .page-turn-wrap span a.active{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
  
</style>