<template>
  <div class="head">
    <div class="huif5">
      <div class="win120 headbox1">
        <div class="head1-left">
          <span>
            <router-link to="NewsCont">关于我们</router-link>
          </span>
          <span>
            <router-link to="NewsCont">联系我们</router-link>
          </span>
        </div>
        <div class="head1-right">
          <div class="utype">
            <span>您好</span>
            <span>xxxxxx</span>
            <span>
              <router-link to="ItemList">个人中心</router-link>
            </span>
          </div>
          <div class="zhanghao">
            <div class="input-title">可提现余额</div>
            <div>0.0</div>
            <div class="input-title">待提现余额</div>
            <div>0.0　</div>
            <div>通知(0)</div>
          </div>
          <div class="zhuce">
            <span>
              <router-link to="register">成为广告主</router-link>
            </span>
            <span><a href="#">退出</a></span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="head2-box win120">
        <div><img src="/static/logo.png"
               alt=""></div>
        <div>
          <div class="QQzixun">
            <img src="/static/img/QQ.png"
                 alt="">
            点击咨询（09:00-22:30）
          </div>
          <div class="phonezixun">400-0000-000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComHeadNoNav',
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {
    tz () {
      this.$router.push('/activity')
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.huif5 {
  background-color: #f5f5f5;
  height: 42px;
  line-height: 40px;
  color: #4e4e4e;
}
.headbox1 {
  display: flex;
  justify-content: space-between;
}
.head1-left > span:nth-child(1) {
  padding-right: 30px;
  border-right: 1px solid #888888;
}
.head1-left > span:nth-child(2) {
  padding-left: 30px;
}
.head1-right {
  display: flex;
}
.zhanghao {
  display: flex;
}
.action {
  color: #fd3400;
}
.utype {
  margin-right: 25px;
}
.input-title {
  padding: 0 10px;
}
.wenben {
  border: 2px solid #888888;
  border-radius: 5px;
  line-height: 20px;
  padding-left: 5px;
}
.zhuce > span:nth-child(1) {
  border-right: 1px solid #888888;
  padding: 0 15px;
}
.zhuce > span:nth-child(2) {
  padding-left: 15px;
}
.login {
  background-color: #fd3400;
  color: white;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  padding: 0 12px;
  margin: 10px 10px;
  border-radius: 3px;
}
.head2-box {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.QQzixun {
  font-size: 14px;
  margin: 5px 0;
}
.QQzixun > img {
  width: 15px;
  vertical-align: sub;
}
.phonezixun {
  color: #fd3400;
  font-weight: bold;
  font-size: 25px;
}
.daohan {
  height: 45px;
  background: #fd3400;
}
.dh_box {
  display: flex;
  color: white;
  line-height: 45px;
}
.dh_box > li {
  width: 9.090909%;
  text-align: center;
  cursor: pointer;
}
li > a {
  color: white;
}
.pitch_on {
  background: #fd967b;
}
</style>
