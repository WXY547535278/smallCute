<template>
  <div class="">
      <div class="Card-box" :style="{right:nums}">
          <div class="Card-title">
              <div :class="['card-xhc',opencard]" @click="card">
                  <div class="card-icon"><img src="/static/img/card.png" alt=""></div>
                  <div class="xhc-name">选号车</div>
                  <div :class="['card-num',opcardnum]">2</div>
              </div>
              <div class="card-icon icon-mag">
                  <el-popover placement="left" width="250" trigger="hover">
                      <div class="datun-box">
                          <div class="datun-title">投放顾问</div>
                          <div class="datun-name"><img src="/static/img/usericon.png" alt="">小可爱</div>
                          <div class="datun-name"><img src="/static/img/phone2.png" alt="">400-0000-000</div>
                          <div class="datun-name" style="border-bottom: none"><img src="/static/img/QQ2.png" alt="">123456789</div>
                      </div>
                      <el-button slot="reference" class="card-phone">
                          <img src="/static/img/phone.png" alt="">
                      </el-button>
                  </el-popover>
              </div>
              <div class="card-icon icon-mag">
                <el-popover placement="left" width="300" trigger="click">
                  <div class="datun-box">
                      <div class="datun-title">投诉建议</div>
                      <div class="toushu-box">
                          <el-input type="textarea" placeholder="请输入内容" v-model="jianyi" autosize maxlength="300" show-word-limit></el-input>
                          <div class="toushu-tishi">最大字数300个字</div>
                          <div style="margin-top: -10px;text-align: center"><el-button type="danger" class="add-toushu">确定</el-button></div>
                      </div>
                  </div>
                  <el-button slot="reference" class="card-phone">
                     <img src="/static/img/fankui.png" alt="">
                  </el-button>
                </el-popover>
              </div>
          </div>
          <div class="Cardcont" >
              <div class="gb-card" @click="gbcard"><i class="el-icon-close"></i></div>
              <div class="card-cont">
                  <div class="list-box" v-for="item in 13" :key="item">
                      <div class="list-img">
                          <img src="/static/linshi/touxiang.png" alt="" class="list-headimg">
                          <img src="/static/img/logo-icon/pengyouquan.png" alt="" class="logo-icon">
                      </div>
                      <div class="list-name">
                          <span>张雪迎小仙女</span>
                          <span>粉丝数：5000</span>
                      </div>
                      <span class="shanchu"><img src="/static/img/del.png" alt=""></span>
                  </div>
              </div>
              <div class="card-foot">
                  <div class="logo-box">
                      <div>
                         <img src="/static/img/logo-icon/pengyouquan.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/shequn.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/xiaohongshuicon.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/weibo.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/weibo.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/douyin.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/kuaishou.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/taobao.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/taobaozhibo.png" alt="">2
                      </div>
                      <div>
                         <img src="/static/img/logo-icon/sheying.png" alt="">2
                      </div>
                  </div>
                  <div class="daochu">
                      <div class="qingchu">
                          <span>总：<span style="color: #fd3400">20</span> 个</span>
                          <span>全部清空</span>
                      </div>
                      <div><el-button type="danger" plain class="xiadan" @click="toCreative">立即下单</el-button></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      iscard: true, // 选号车是否默认显示
      nums: '-300px', // 关闭为-300px
      opencard: '',
      opcardnum: '',
      jianyi: '' // 投诉建议
    }
  },
  methods: {
    toCreative () {
      this.$router.push('/First')
    },
    // 打开选号车
    card () {
      this.nums = '0'
      this.opencard = 'open-card'
      this.opcardnum = 'open-card-num'
    },
    // 关闭选号车
    gbcard () {
      this.nums = '-300px'
      this.opencard = ''
      this.opcardnum = ''
    }
  }
}
</script>

<style scoped>
  .Card-box{position: fixed;top: 0;right: -300px;height: 100%;z-index: 999;display: flex;transition: all 0.3s}
  .Card-title{width: 35px;background: black;height: 100%;color: white;font-size: 14px}
  .Card-title >div{cursor: pointer;transition: all 0.2s}
  .card-xhc{margin-top: 200px;margin-bottom: 30px;padding: 10px 0;}
  .card-xhc>div{margin-top: 2px}
  .card-num{border-radius: 50px;background: #fd3400;width: 22px;height: 22px;line-height: 22px;text-align: center;margin: 0 auto;transition: all 0.2s}
  .xhc-name{width: 25px;text-align: center;margin: 0 auto;}
  .Cardcont{width: 300px;background: #ececec;height: 100%;}
  .card-icon{text-align: center}
  .card-icon >img{width: 70%;}
  .icon-mag{margin-top: 20px;padding: 5px 0}
  .Card-title>div:hover{background: #fd3400}
  .card-xhc:hover .card-num{background: white;color: #fd3400}
  .gb-card{background: white;height: 30px;line-height: 30px;text-align: right;padding: 0 10px;cursor: pointer}
  .open-card{background: #fd3400}
  .open-card-num{background: white;color: #fd3400}
  .card-phone{background: none;padding: 0;border: 0;padding: 12%}
  .datun-box > div{line-height: 35px;color: black;padding: 5px 0px}
  .datun-box img{width: 25px;vertical-align: middle;margin-right: 5px}
  .datun-title{color: white !important;background: #0083ff;text-align: center;padding: 0 !important;border-radius: 5px 5px 0 0}
  .datun-name{padding-top: 5px !important;border-bottom: 1px solid #cccccc;margin: 0 10px;}
  .toushu-box{width: 95%;margin: 0 auto}
  .toushu-tishi{font-size: 12px;color: #818181;margin-top: -10px;}
  .add-toushu{width: 50px;height: 25px;font-size: 12px;text-align: center;padding: 0px;line-height: 25px;background: #fd3400}
  .logo-box{display: flex;flex-wrap: wrap;background: #f5f5f5;padding: 10px 0}
  .logo-box>div{width: 16%;padding: 2%;text-align: center}
  .logo-box img{border-radius: 50px}
  .card-foot{position: absolute;bottom: 0}
  .daochu{background: white;display: flex;padding: 20px 10px}
  .daochu>div{width: 50%}
  .qingchu{display: flex;flex-direction: column;line-height: 25px}
  .qingchu > span:nth-child(2){color: #00b2fe}
  .xiadan{height: 45px;border-color: #fd3400;color: #fd3400}
  .card-cont{height: 650px;overflow:auto}
  .list-box{display: flex;padding: 5px 10px;border-bottom: 1px solid #cccccc;position: relative}
  .list-box:hover{background: #dfdfdf}
  .list-img{position: relative}
   .list-headimg{border:1px solid #cccccc}
  .list-img > img{width: 70px;height: 70px;object-fit: cover}
  .list-name{display: flex;flex-direction: column;margin-left: 15px;line-height: 30px}
  .list-name > span:nth-child(2){color: #00b2fe}
  .logo-icon{position: absolute;width: 30px !important;height: 30px !important;bottom: -2px;right: -10px}
  .shanchu{position: absolute;top: 30px;right: 20px;width: 18px;height: 18px;display: none;cursor: pointer}
  .list-box:hover .shanchu{display: block}
</style>
