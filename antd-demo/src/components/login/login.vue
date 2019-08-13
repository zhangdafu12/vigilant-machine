<template>
  <div class="container">
    <div class="cont_name">婚礼云端</div>
    <div class="content">
      <div class="text"  v-show="step=='0'"  >登录/注册</div>
      <div class="text"  v-show="step=='4'"  >登录/注册</div>
      <div class="text" @click="register"  v-show="step=='1' || step=='2'||step=='3'">{{tips}}</div>
      <div  v-if="step=='0'">
        <img src="../../assets/images/code.png" id="code">
        <button class="but" @click="btnClick">微信扫码登录/注册</button>
      </div>
      <div v-else-if="step=='1'">
        <form>
          <label for="firm">公司名称</label>
          <input type="text" id="firm"><br>
          <label for="site">公司地址</label>
          <input type="text" id="site"><br>
          <label for="name">法人姓名</label>
          <input type="text" id="name"><br>
          <label for="business">营业执照号</label>
          <input type="number" id="business"><br>
          <label for="picture">法人照片</label>
          <input type="file" id="picture" ref="inputer" @change="tirggerFile($event)" accept="image/*"><br>
          <label for="license">营业执照</label>
          <input type="file" id="license" @change="tirggerFile2($event)" accept="image/*"><br>
          <input type="submit" value="下一步" id="next" @click="verify">
        </form>
        <div class="upload-first img_up">
          <img v-if="legal" :src="legal">
          <img v-else src="../../assets/images/upload.png">
        </div>
        <div class="upload-end img_up">
          <img v-if="business" :src="business">
          <img v-else src="../../assets/images/upload.png">
        </div>
      </div>
      <form v-else-if="step=='2'">
        <label for="firm">公司</label>
        <input type="text" id="firm2"><br>
        <label for="post">职位</label>
        <input type="text" id="post"><br>
        <label for="name">姓名</label>
        <input type="text" id="name2"><br>
        <label for="cell">手机</label>
        <input type="text" id="cell"><br>
        <input type="submit" value="确定" @click="admin_login" id="confirm">
      </form>
      <form v-else-if="step==3">
        <label for="firm3">公司</label>
        <input type="text" id="firm3"><br>
        <label for="post3">职位</label>
        <input type="text" id="post3"><br>
        <label for="name3">姓名</label>
        <input type="text" id="name3"><br>
        <label for="cell3">手机</label>
        <input type="text" id="cell3"><br>
        <input type="submit" class="but" value="确定" id="confirm3" @click="personal">
      </form>
      <div v-else-if="step==4">
        <form style="margin-top: 120px">
          <label>手机号</label>
          <input type="text" class="cell" placeholder="请输入手机号"><br>
          <div v-if="login_way">
            <label for="password">密码</label>
            <input type="text" id="password" placeholder="请输入密码"><br>
          </div>
          <div v-else>
            <label class="auth_label" for="auth">验证码</label>
            <input type="text" id="auth" class="auth" placeholder="650512">
            <span class="send_verification" @click="send">{{send_msg}}</span>
          </div>
          <input type="submit" value="登 录" class="login" @click="company">
        </form>
        <div class="pass"><a @click="phone_login">密码登录</a>
          <a @click="phone_login">验证码登录</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import photo from "../../assets/js/photo.js"

  export default {
    name: "login",
    data() {
      return {
        legal: "",
        business: "",
        step: '0',
        tips: "公司注册/个人注册",
        login_way: true,
        send_msg: "获取验证码"

      }
    },
    methods: {
      tirggerFile: function (e) {
        let _this = this;
        photo(e).then(function (result) {
          _this.legal = result
        })
      },
      tirggerFile2: function (e) {
        let _this = this;
        photo(e).then(function (result) {
          _this.business = result
        })
      },
      btnClick() {
        let _this = this;
        _this.step = '1'
      },
      verify() {
        let _this = this;
        _this.step = '2'
      },
      admin_login() {
        let _this = this;
        _this.step = '4'
        _this.tips = '公司登录'
      },

      register() {
        let _this = this;
        if (_this.step == '3') {
          _this.step = '1'
          _this.tips = '公司注册/个人注册'
        } else {

          _this.step = '3'
          _this.tips = '个人注册/公司注册'

        }

      },
      send() {
        this.send_msg = "已发送"
      },
      phone_login() {
        this.login_way = !this.login_way
      },
      company() {
        alert('公司主页')

      },
      personal() {
        alert('个人主页')
        this.$router.push({ name: 'personal', params: { userId: 123 }})
      }
    }
  }
</script>

<style scoped>
  @import url('../../assets/css/index.css');
</style>
