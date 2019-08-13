<template>
  <div class="paper">
    <div class="project">
      <div class="project_name">
        <div class="project_tit">项目名称</div>
        <span class="back" @click="goback">返回</span>
      </div>
      <div class="drop_down">
        <el-dropdown>
          <el-button type="primary">
          中式<i class="el-icon-arrow-down el-icon--center"></i>
        </el-button>
          <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>中式一</el-dropdown-item>
          <el-dropdown-item>中式二</el-dropdown-item>
          <el-dropdown-item>中式三</el-dropdown-item>
          <el-dropdown-item>中式四</el-dropdown-item>
          <el-dropdown-item>中式五</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <el-button type="primary">
            红色<i class="el-icon-arrow-down el-icon--center"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>橙色</el-dropdown-item>
            <el-dropdown-item>黄色</el-dropdown-item>
            <el-dropdown-item>绿色</el-dropdown-item>
            <el-dropdown-item>青色</el-dropdown-item>
            <el-dropdown-item>蓝色</el-dropdown-item>
            <el-dropdown-item>紫色</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="tab">
        <ul class="tab-tilte">
          <li @click="cur(0)" :class="{active:curs==0}">
            <img src="../../assets/images/微信.png" class="tab-img1">
            <span>微信</span>
          </li>
          <li @click="cur(1)" :class="{active:curs==1}">
            <img src="../../assets/images/信息实图.png" class="tab-img2">
            <span>客户</span>
          </li>
          <li @click="cur(2)" :class="{active:curs==2}">
            <img src="../../assets/images/技术文档.png" class="tab-img3">
            <span>文件</span>
          </li>
          <li @click="cur(3)" :class="{active:curs==3}">
            <img src="../../assets/images/图片.png" class="tab-img4">
            <span>图片</span>
          </li>
        </ul>
        <div class="tab-content">
<!--        <router-view></router-view>-->
          <message v-if="curs==0"/>
          <client v-else-if="curs==1"/>
          <matter v-else-if="curs==2"/>
          <pictures  v-else-if="curs==3"/>
      </div>
    </div>
  </div>
</template>
<script>
  import message from '../left_table/message'
  import client from '../left_table/client'
  import matter from '../left_table/matter'
  import pictures from '../left_table/pictures'
  import { mapState } from 'vuex'
    export default {
      name: "paper",
      data(){
        return{
          curs: 0 //默认选中第一个tab
        }
      },
      computed:{
        ...mapState({
          paperShow:state=>state.paperShow
        })
      },
      components:{
        message,
        client,
        matter,
        pictures
      },
      methods:{
        goback(){
          this.$store.dispatch("setIncrement");
          // this.$store.state.paperShow=false
        },
        cur:function(index){
          this.curs=index;
        }
      }
    }

</script>

<style scoped>
  .paper .project{
    padding: 32px 23px 16px 23px;
  }
  .paper .project_name{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .paper .project_tit{
    font-size: 15px;
    font-weight: 600;
  }
  .paper .back{
    font-size: 15px;
    color: #3d97ff;
    cursor: pointer;
  }
  .paper  .el-button--primary {
    width: 100px;
    height: 36px;
    background-color: #ffffff;
    border: 0;
    color: #5b5b5b;
    border-radius: 5px;
    margin-right: 15px;
  }
  .paper .el-dropdown-menu__item{
    width: 100px;
    text-align: center;
  }
  .paper .tab{
    width: 100%;
    height: 56px;
    background-color: #e0e0e0;
  }

  .paper ul,li {

    margin: 0;
    padding: 0;
    list-style: none;
  }
  .paper .tab-img1{
    width: 31px;
    height: 25px;
  }
  .paper .tab-img2{
    width: 24px;
    height: 25px;
  }
  .paper .tab-img3{
    width: 19px;
    height: 22px;
  }
  .paper .tab-img4{
    width: 26px;
    height: 21px;
  }
  .paper .tab-tilte {
    width: 100%;
    height: 53px;
    line-height: 53px;
  }
  .paper .tab-tilte li {
    float: left;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
  }
  .paper .tab-tilte li span{
    font-size: 15px;
    margin-left: 8px;
  }
 .paper .tab-tilte .active {
    border-bottom: solid 3px #3d97ff;
  }

  /*.tab-content div {*/
  /*  float: left;*/
  /*  width: 25%;*/
  /*  line-height: 100px;*/
  /*  text-align: center;*/
  /*}*/
</style>
