<template>
  <div class="Task">
    <ComHead title="订单管理"></ComHead>
    <Activityh activeName="third"></Activityh>
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
              <el-table-column label="标题"
                               prop="test">
              </el-table-column>
              <el-table-column prop="test"
                               label="待执行"
                               >
              </el-table-column>
              <el-table-column prop="test"
                               label="执行时间"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="结案报告待上传"
                               show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="test"
                               label="订单详细"
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
    </div>
    <ComFoot></ComFoot>
  </div>
</template>

<script>
export default {
  name: 'Order',
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
      multipleSelection: []
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