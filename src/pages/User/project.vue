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

        <div class="win1201"
             style="margin-top:30px;margin-bttom:30px;">
          <div class="win120"
               style="padding-bottom: 10px;">项目管理</div>
          <div class="b"></div>
          我的项目管理
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
            <span class="tr"> 预约名称：</span>
            <el-input v-model="input1.text1"
                      placeholder="请输入内容"
                      style="width:150px;"></el-input>
            <el-tag type="danger"
                    effect="plain">显示废气重约的订单</el-tag>
            <el-button type="primary">查询</el-button><br><br>
            <div class="sx-type">
              <div>
                <el-checkbox v-model="checked">全选</el-checkbox>
              </div>
              <div><span style="margin-left:-100px;">账号名称</span></div>
              <div><span style="margin-left:50px;">订单状态</span></div>
              <div><span>执行时间</span></div>
              <div><span>操作</span></div>
            </div>
            <div>
              <div class="pro-box"
                   v-for="item in 8"
                   :key="item">
                <div class="pro-xuan">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
                <div class="pro-img"><img src="/static/linshi/touxiang.png"
                       alt=""></div>
                <div class="pro-jianbox">
                  <div class="pro-name"><img src="/static/img/logo-icon/pengyouquan.png"
                         alt="">吃货向阳妞妞</div>
                  <div class="pro-jian">知名美食博主、瑞丽之星</div>
                </div>
                <div class="pro-cont"
                     style="margin-left:170px;">
                  <div class="pro-td">
                    <span class="pro-title"
                          Style="color: #fd3400">待执行</span>
                  </div>
                  <div class="pro-td"
                       style="margin-left:70px;">
                    <span class="pro-title">2019.09.12</span>
                  </div>
                  <div class="pro-td">
                    <span Style="color: #4DA2FF;"><span class="el-icon-s-order"
                            style="color:#fd3400;"></span>查看订单详情</span>
                    <span Style="color: #4DA2FF;"><span class="el-icon-delete"
                            style="color:#fd3400;"></span>删除</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="foot">
              <div>
                <el-checkbox v-model="checked">已选择账号{{num}}个</el-checkbox>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <!--财务管理-->

      <el-tab-pane label="财务管理"
                   style="margin-top:30px;"
                   name="Finance"
                   data-val="Finance"></el-tab-pane>
    </el-tabs>

    <ComFoot></ComFoot>

  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      num: '10',
      checked: '',
      activeName: 'project',
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
        weixin: '',
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
      console.log
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

.sx-type {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 10p;
  height: 50px;
  border: 1px solid #ededed;
  line-height: 50px;
  padding-left: 30px;
  padding-right: 30px;
  color: #7e7e7e;
  font-size: 15px;
}

.pro-box {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #cccccc;
  color: #3f3f3f;
  cursor: pointer;
}
.pro-xuan {
  margin-top: 40px;
  padding: 0 10px;
}
.pro-img {
  margin: 0 10px;
}
.pro-img > img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #cccccc;
}
.pro-jianbox {
  margin-right: 10px;
  width: 200px;
}
.pro-name {
  margin: 10px 0;
}
.pro-name > img {
  width: 20px;
  height: 20px;
  vertical-align: sub;
  margin-right: 5px;
}
.pro-jian {
  font-size: 14px;
  margin: 15px 0;
}
.pro-biao {
  display: none;
  font-size: 14px;
}
.pro-biao img {
  width: 15px;
  vertical-align: sub;
  margin-right: 5px;
}
.pro-td {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 15px 10px;
}
.pro-title {
  color: #a5a5a5;
}
.pro-cont {
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding-left: 20px;
}
.heisebox {
  display: flex;
  flex-direction: column;
  color: white;
  background: #262626;
  padding: 20px 35px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  display: none;
}
.pro-box:hover .heisebox {
  display: flex;
}
.pro-box:hover .pro-price {
  display: none;
}
.pro-box:hover .pro-biao {
  display: block;
}
.pro-box:hover {
  background: #f5f5f5;
}
.foot {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 10p;
  height: 25px;
  border: 1px solid #ededed;
  line-height: 25px;
  padding-left: 30px;
  padding-right: 30px;
  color: #7e7e7e;
  font-size: 15px;
}
</style>
