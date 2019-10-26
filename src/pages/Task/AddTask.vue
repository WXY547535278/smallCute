<template>
  <div class="Task">
    <ComHead title="活动报名大厅"></ComHead>
    <Activityh activeName="second"></Activityh>
    <div class="head2">
      <span class="userName"
            style="margin: 0 10px 0 10px;color: #fa8262;">{{ name }}</span>
      <span>的账号管理</span>
      <span class="orange"
            @click="addAccountNumber">+添加账号</span>
      <!-- <span class="blue">账号分配</span> -->
      <span>账号审核通过后就能继续添加账号了</span>
    </div>
    <div class="head1">
      <el-tabs type="border-card">
        <el-tab-pane label="圈层朋友圈">
          <div class="content">
            <span class="input">
              账号：
              <input v-model="input"
                     style="width:100px;height:20px; border-radius: 5px; border:1px solid #D1D1D1;">
            </span>

            <span class="input">
              是否支持预约：
              <select style="width:100px;height:20px; border-radius: 5px; border:1px solid #D1D1D1;">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <el-button type="primary"
                         class="cx"
                         size="small">查询</el-button>
            </span>
          </div>
          <div class="foot1">
            <div class="foot_head">
              <span>账号数：<span style="color:#FD3400;">0</span>个</span>
            </div>
            <el-table :data="tableData"
                      tooltip-effect="dark"
                      style="width: 100%"
                      @selection-change="handleSelectionChange">
              <template slot="empty">
                <img src="/static/img/errorr.png"
                     style="width:300px">
              </template>
              <el-table-column type="selection"
                               width="55">
              </el-table-column>
              <el-table-column label="账号名"
                               width="120"
                               prop="test">
              </el-table-column>
              <el-table-column prop="test"
                               label="报价(元)"
                               width="120">
              </el-table-column>
              <el-table-column prop="test"
                               label="负责人信息"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="粉丝数"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="接单状态"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="是否上架(活动)"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="暂不接单"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="是否接硬广"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="接单上限"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="详情"
                               show-overflow-tooltip>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="社群">社群</el-tab-pane>
        <el-tab-pane label="小红书">小红书</el-tab-pane>
        <el-tab-pane label="微博">微博</el-tab-pane>
        <el-tab-pane label="微信公众号">微信公众号</el-tab-pane>
        <el-tab-pane label="抖音">抖音</el-tab-pane>
        <el-tab-pane label="快手">快手</el-tab-pane>
        <el-tab-pane label="淘宝达人">淘宝达人</el-tab-pane>
        <el-tab-pane label="淘宝直播">淘宝直播</el-tab-pane>
        <el-tab-pane label="媒体邀约">媒体邀约</el-tab-pane>
      </el-tabs>
      <!-- <span style="width:140px;color:white;"
            class="active">新浪微博(0)</span>
      <span style="width:140px;">视频(0)</span>
      <span style="width:200px;">微信公众号(0)</span> -->
    </div>
    <ComFoot></ComFoot>
    <div class="mask"
         v-if="showMask"></div>
    <transition name="el-fade-in-linear">
      <div class="addAccountNumber"
           v-if="showAddAccount">
        <div class="addAccountNumber-top">选中平台 (只有成功添加一个账号之后，才会关闭当前窗口)</div>
        <div class="addAccountNumber-content">
          <div class="icon-img"
               v-for="(item, index) in icon"
               :key="index"
               @click="selectIcon">
            <img :src="item.image"
                 alt="">
            <span class="name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      input: '',
      name: 'xxxx',
      tableData: [
        {
          test: '测试'
        },
        {
          test: '测试'
        },
        {
          test: '测试'
        }
      ],
      multipleSelection: [],
      showMask: false, // 遮罩层
      showAddAccount: false, // 添加账号的显示框
      icon: [
        {
          image: '/static/img/logo-icon/pengyouquan.png',
          name: '圈层朋友圈',
          select: ''
        },
        {
          image: '/static/img/logo-icon/shequn.png',
          name: '社群',
          select: ''
        },
        {
          image: '/static/img/logo-icon/xiaohongshu.png',
          name: '小红书',
          select: ''
        },
        {
          image: '/static/img/logo-icon/sina.png',
          name: '微博',
          select: ''
        },
        {
          image: '/static/img/logo-icon/weixin.png',
          name: '微信公众号',
          select: ''
        },
        {
          image: '/static/img/logo-icon/douyin.png',
          name: '抖音',
          select: ''
        },
        {
          image: '/static/img/logo-icon/kuaishou.png',
          name: '快手',
          select: ''
        },
        {
          image: '/static/img/logo-icon/taobao.png',
          name: '淘宝达人',
          select: ''
        },
        {
          image: '/static/img/logo-icon/taobaozhibo.png',
          name: '淘宝直播',
          select: ''
        },
        {
          image: '/static/img/logo-icon/sheying.png',
          name: '媒体邀约',
          select: ''
        }
      ]
    }
  },
  methods: {
    // 添加账号
    addAccountNumber () {
      this.showAddAccount = true
      this.showMask = true
      console.log('添加账号')
    },
    // 选择图标
    selectIcon () {
      this.$router.push('/AddAccount')
      // this.showAddAccount = false
      // this.showMask = false
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Task {
  position: relative;
}
.head2 {
  width: 1200px;
  margin: 10px auto;
  border-top: 2px solid #fd3400;
  background-color: #f6f6f6;
  padding: 10px 0;
  display: flex;
  align-items: center;
}
.head2 .orange,
.head2 .blue {
  border-radius: 2px;
  width: 100px;
  height: 24px;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
}
.head2 .orange {
  background-color: #f9ac17;
  margin: 0 14px 0 20px;
}
.head2 .blue {
  background-color: #479ee1;
  margin-right: 30px;
}
.head1 {
  width: 1200px;
  margin: 20px auto;
  border-bottom: 2px solid #fd3400;
}
.content {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #f0f0f0;
  height: 50px;
  position: relative;
}
.input {
  margin-left: 10px;
  line-height: 50px;
}
.cx {
  position: absolute;
  right: 10px;
  top: 10px;
}
.foot1 {
  width: 1200px;
  margin: 0 auto;
  background: #f6f6f6;
  /* height: 110px; */
  margin-top: 10px;
}
.foot_head {
  line-height: 40px;
  padding-left: 30px;
  border-bottom: 4px solid #fd3400;
}
.b_head {
  display: flex;
  height: 66px;
  width: 100%;
  color: #454545;
  line-height: 100px;
  border-bottom: 3px solid #fd3400;
}
.b_head div {
  width: 20%;
  text-align: center;
}
.mask {
  height: 100%;
  width: 100%;
  background-color: #454545;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 10000;
}
.addAccountNumber {
  height: 520px;
  width: 850px;
  background-color: #ffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10001;
  border: solid 6px gray;
}
.addAccountNumber .addAccountNumber-top {
  box-sizing: border-box;
  padding-left: 10px;
  line-height: 40px;
  font-size: 12px;
  height: 40px;
  width: 100%;
  background-color: #fddebe;
}
.addAccountNumber .addAccountNumber-content {
  display: flex;
  flex-flow: row wrap;
  padding: 20px 0;
}
.addAccountNumber .addAccountNumber-content .icon-img .name {
  display: block;
  margin-bottom: 40px;
  text-align: center;
  margin-left: 44px;
}
.addAccountNumber .addAccountNumber-content .icon-img img {
  cursor: pointer;
  margin-left: 44px;
  height: 90px;
  width: 90px;
}
</style>