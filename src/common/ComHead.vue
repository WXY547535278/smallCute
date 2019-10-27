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
            <span>
              <router-link to="Advertiser">广告主</router-link>
            </span>/
            <span>
              <router-link to="register">流量主</router-link>
            </span>——
            <span>
              <router-link to="ItemList">个人中心</router-link>
            </span>
          </div>
          <div class="zhanghao">
            <div class="input-title">账号</div>
            <div><input type="text"
                     class="wenben"
                     placeholder="手机/邮箱"></div>
            <div class="input-title">密码</div>
            <div><input type="password"
                     class="wenben"></div>
            <div class="login"
                 @click="tz();">登录</div>
          </div>
          <div class="zhuce">
            <span>
              <router-link to="register">新用户注册</router-link>
            </span>
            <span @click="showForgetPassword"><a href="#">忘记密码？</a></span>
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
    <div class="daohan">
      <ul class="win120 dh_box">
        <li v-for="(vo,index) in column"
            :key="index"
            @mouseover="overShow(index)"
            @mouseout="outStyle(index)"
            :class="{pitch_on:index==current}">
          <router-link :to="vo.route">
            <div style="width: 100%;height: 100%">
              {{vo.title}}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <el-dialog title="修改密码"
               :visible.sync="hideForgetPassword"
               width="40%">
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
               <el-form-item label="手机号"
                      prop="phone">
          <el-input v-model.number="ruleForm.phone"
                    style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="验证码"
                      prop="verification">
          <el-input v-model.number="ruleForm.verification"
                    style="width:150px"></el-input><span style="margin-left:50px;color: blue;cursor:pointer">获取验证码</span>
        </el-form-item>
        <el-form-item label="密码"
                      prop="pass">
          <el-input type="password"
                    v-model="ruleForm.pass"
                    style="width:300px"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm.checkPass"
                    style="width:300px"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ComHead',
  props: ['title'],
  data () {
    // 验证
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('不可输入非数字'))
        } else {
          if (value.length < 11) {
            callback(new Error('请输入11位数'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var checkVerification = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      column: [
        { title: '网站首页', route: { name: 'Home' } },
        { title: '图层朋友圈', route: { name: 'Layer' } },
        { title: '社群', route: { name: 'Flock' } },
        { title: '小红书', route: { name: 'RedBook' } },
        { title: '微博', route: { name: 'Weibo' } },
        { title: '微信公众号', route: { name: 'Tencent' } },
        { title: '抖音', route: { name: 'Vibrato' } },
        { title: '快手', route: { name: 'AAuto' } },
        { title: '淘宝达人', route: { name: 'Taobaoperson' } },
        { title: '淘宝直播', route: { name: 'Taobaolive' } },
        { title: '媒体邀约', route: { name: 'Media' } }
      ],
      current: 0, // hover动态选中的栏目
      num: '', // 当前所在的栏目
      hideForgetPassword: false,
      // 验证
      ruleForm: {
        pass: '',
        checkPass: '',
        phone: '',
        verification: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        verification: [
          { validator: checkVerification, trigger: 'blur' }
        ]       
      }
    }
  },
  methods: {
    showForgetPassword () {
      this.hideForgetPassword = true
    },
    tz () {
      this.$router.push('/activity')
    },
    overShow (index) {
      this.current = index
    },
    outStyle () {
      this.current = this.num
    },
    // 验证
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    var array = ['网站首页', '图层朋友圈', '社群', '小红书', '微博', '微信公众号', '抖音', '快手', '淘宝达人', '淘宝直播', '媒体邀约']
    this.num = array.indexOf(this.title)
    this.current = this.num
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
