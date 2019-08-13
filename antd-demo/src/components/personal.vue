<template>
    <div id="per_cont">
        <div class="head">
            <div class="head_name">云端婚礼</div>
            <div class="head_mess">
                <img src="../assets/images/sch.png" class="search">
                <div class="screen_name">
                    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    曼****m<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">员工管理</el-dropdown-item>
                            <el-dropdown-item command="b">信息修改</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown></div>
                <img src="../assets/images/icon-img.jpg" class="portrait">
            </div>
        </div>
        <div class="cont">
            <left/>
            <router-view/>


        </div>
    </div>
</template>

<script>
  import left from './left/left'
  export default {
    name: "personal",
    components:{
      left
    },
    methods:{
      handleCommand(command) {
        if (command=="a") {
          alert('员工管理');
          this.$router.push({ name: 'staff'})
        }
      }
    }
  }
</script>

<style scoped>
    #per_cont .head{
        width: 100%;
        height: 70px;
        background: url("../assets/images/head_img.png");
        display: flex;
        justify-content: space-between;
        line-height: 70px;
    }
    #per_cont .head_name{
        font-size: 30px;
        color: #ffffff;
        margin-left: 130px;
    }
    #per_cont  .head_mess{
        display: flex;
        justify-content: end;
        margin-right: 33px;
        align-items: center;
    }
    #per_cont .search{
        width: 16px;
        height: 16px;
    }
    #per_cont .screen_name{
        font-size: 16px;
        color: #ffffff;
        margin: 0 8px 0 20px;
    }
    #per_cont  .portrait{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    #per_cont  .cont{
        display: flex;
        justify-content: flex-start;
    }
    #per_cont .el-dropdown-link {
        cursor: pointer;
        color: #ffffff;
        margin: 0 10px;
    }
    #per_cont  .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
