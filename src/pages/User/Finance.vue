<template>
  <div class="">
    <ComHead title="项目管理"></ComHead>
    <!--我的资料-->
    <el-tabs tab-position="left"
             class="win120"
             @tab-click="handleClick"
             v-model="activeName">
      <el-tab-pane label="我的资料"
                   style="margin-top:30px;"
                   name="ItemLists"
                   data-val="ItemLists"></el-tab-pane>
      <el-tab-pane label="项目管理"
                   name="project"
                   data-val="project">
        <div class="win120">项目管理</div>
      </el-tab-pane>
      <!--财务管理-->
      <el-tab-pane label="财务管理"
                   style="margin-top:30px;"
                   name="Finance"
                   data-val="Finance">
        <div class="win1201"
             style="margin-top:10px;margin-bttom:30px;">
          <div class="win120"
               style="padding-bottom: 10px;">财务管理</div>
          <div class="b"></div>
          当前账户信息<span class="tr">(2019-09-16 18：30)</span>
          <hr>
          <div class="head_content">
            <div class="tr">公司名称</div>
            <div class="tr">用户名</div>
            <div class="tr">余额</div>
            <div></div>
          </div>
          <div class="head_content"
               style="margin-top:15px;">
            <div>帷幄</div>
            <div>zeda0123456</div>
            <div style="color: #fd3400">￥ 5000</div>
            <div><span style="color: #fd3400">充值 / </span> 我要开票 / 开票记录</div>
          </div><br><br><br>
          <div class="b"></div>
          账户金额使用明细
          <hr>
          <div>
            <span class="tr">起止时间：</span>
            <el-input v-model="input1.text1"
                      placeholder="请输入内容"
                      style="width:150px;"></el-input>
            <span style=" color:#8A8A8A;"> —— </span>
            <el-input v-model="input1.text1"
                      placeholder="请输入内容"
                      style="width:150px;"></el-input>
            <el-button type="primary">查询</el-button><br><br><br><br>

            <div class="content_foot">
              <div class="tr">流水号</div>
              <div class="tr">日期</div>
              <div class="tr">金额（元）</div>
              <div class="tr">项目</div>
              <div class="tr">金额（元）</div>
              <div></div>
            </div>

            <img src="/static/img/err.png"
                 style="width:300px;margin-left:30%;margin-top:100px;">

          </div>
        </div><br><br><br><br><br><br><br><br><br>
      </el-tab-pane>
    </el-tabs>
    <ComFoot></ComFoot>
  </div>
</template>

<script>
export default {
  name: 'Finance',
  data () {
    return {
      activeName: 'Finance',
      input1: {
        text1: ''
      },
      input: {
        name: '',
        name1: '',
        email: '',
        phone: '',
        psd: '',
        psd1: '',
        qq: '',
        code: '',
        weixin: ''
      },
      rules: {
        name: [
          { required: true, message: '公司名称', trigger: 'blur' },
        ],
        name1: [
          { required: true, message: '联系人姓名', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码', trigger: 'blur' }
        ],
        psd1: [
          { required: true, message: '重复密码', trigger: 'blur' }
        ],
        psd: [
          { required: true, message: '密码', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号', }
        ],
        weixin: [
          { message: '请填写微信', trigger: 'blur' }
        ],
        email: [
          {}
        ],
        qq: [
          { trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      var data = tab.$el.dataset.val
      switch (data) {
        case 'Finance':
          this.$router.push('/Finance')
          console.log(1);
          break
        case 'project':
          this.$router.push('/project')
          break
        case 'ItemLists':
          this.$router.push('/ItemList')
          break
      }
    }
  }


}
</script>

<style scoped>
.el-tabs--left .el-tabs__item.is-left {
  font-size: 15px;
}
.win1201 {
  margin-left: 50px;
}
.b {
  width: 3px;
  height: 15px;
  background: #fd3400;
  display: inline-block;
  margin-right: 10px;
  line-height: 10px;
  position: relative;
  top: 1px;
}
.code {
  margin-left: 10px;
  color: #70aafd;
}
.head_content div {
  display: inline-block;
  width: 20%;
}
.tr {
  color: #7e7e7e;
}
.content_foot div {
  display: inline-block;
  width: 15%;
}
</style>
