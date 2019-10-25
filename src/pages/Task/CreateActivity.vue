<template>
  <div class="">

    <ComHead title="创建预约活动"></ComHead>
    <!--我的资料-->
    <div class="win1201"
         style="margin-top:30px;margin-bttom:30px;">
      <div class="title"><span style="display:block; font-size:14px;transform: translateY(-8px) translateX(8px);">创建预约活动</span></div>
      <div class="stepBox">
        <el-steps :active="active"
                  finish-status="success"
                  align-center>
          <el-step title="选择账号"></el-step>
          <el-step title="填写预约需求"></el-step>
          <el-step title="提交已选账号"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;"
                   @click="next">下一步</el-button>
        <div class="accountNum">
          <span>账号数：</span><span style="color:red">1</span>
        </div>
      </div>
      <div>
        <div class="sx-type">
          <div style="width:20%">
            <el-checkbox v-model="checked">全选</el-checkbox>
          </div>
          <div style="width:20%"><span>账号名称</span></div>
          <div style="width:10%"><span>粉丝数</span></div>
          <div style="width:25%"><span>参考报价</span></div>
          <div style="width:25%"><span>操作</span></div>
        </div>
        <div>
          <div class="pro-box"
               v-for="item in 1"
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
                 style="margin-left:80px;">
              <div class="pro-td">
                <span class="pro-title"
                      style="color: black;margin-left:28px;">5000</span>
              </div>
              <div class="pro-td"
                   style="margin-left:60px;">
                <span class="pro-title">参考报价</span>
                <span class="pro-title"
                      style="color:#fd3400;">￥5000</span>
                <span class="pro-title"
                      style="">价格有效期：2019.09.12</span>
              </div>
              <div class="pro-td"
                   style="margin-left:100px;">
                <span Style="color: #4DA2FF;"><span class="el-icon-s-order"
                        style="color:#fd3400;"></span>添加订单信息并提交</span>
                <span Style="color: #4DA2FF;"><span class="el-icon-delete"
                        style="color:#fd3400;"></span>删除</span>
              </div>
            </div>
          </div>
        </div>
        <div class="foot">
          <div>
            <el-checkbox v-model="checked">已选择账号: <span style="color:red">{{num}}</span>个</el-checkbox>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <span class="button1">继续添加账号</span>
        <span class="button2">批量添加订单信息并提交</span>
      </div>
    </div>
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
      active: 0,
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
      }
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    },
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
.win1201 {
  width: 76%;
  min-width: 1200px;
  margin: 0 auto;
}
.title {
  transform: translateY(2px);
  width: 100px;
  border-bottom: 3px solid #fd3400;
}
.stepBox {
  position: relative;
  box-sizing: border-box;
  /* display: flex;
  align-items: center; */
  padding: 100px 100px;
  width: 100%;
  height: 250px;
  border-top: 2px solid rgb(221, 220, 220);
}
.stepBox .accountNum {
  position: absolute;
  font-size:12px;
  right: 4px;
  bottom: 4px;
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
  justify-content: flex-start;
  /* width: 800px; */
  /* padding-left: 80px; */
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
.bottom-button {
  display: flex;
  justify-content: center;
}
.bottom-button span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
}
.bottom-button .button1 {
  height: 50px;
  width: 210px;
  border: 1px solid #fd3400;
  color: #fd3400;
  border-radius: 4px;
}
.bottom-button .button2 {
  height: 50px;
  width: 300px;
  background-color: #fd3400;
  color: white;
  border-radius: 4px;
}
</style>
