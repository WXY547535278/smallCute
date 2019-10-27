<template>
  <div class="home">
    <ComHeadNoNav></ComHeadNoNav>
    <Activityh activeName="first"></Activityh>
    <div style="background: #e8e8e8;background-color: white;">
      <div class="win120 lunbo_box">
        <div class="lunbo">
          <el-carousel height="450px"
                       autoplay>
            <el-carousel-item v-for="item in 3"
                              :key="item">
              <img src="/static/linshi/lunbo.png"
                   alt=""
                   class="lunbo_img">
            </el-carousel-item>
          </el-carousel>
        </div>

      </div>
    </div>
    <div class="message">
      号外：【重要通知】 支付宝提现方式停用通知
    </div>
    <div>

      <div class="shaixuan">
        <div class="sx-box">
          <div>全部账号</div>
          <div>
            <span v-for="(item,index) in screen.number"
                  @click="choose(index,'number')"
                  :key="index"
                  :class="{ 'sx-activi':index==current.number}">{{ item.name }}</span>
          </div>
        </div>
        <div class="sx-box">
          <div>行业标签</div>
          <div :class="['biaoqian',opentj]">
            <span v-for="(item,index) in screen.label"
                  @click="choose(index,'label')"
                  :key="index"
                  :class="{ 'sx-activi':index==current.label}">{{ item.name }}</span>
          </div>
          <div class="gengduo"
               @click="opscreen"
               v-html="gengduo"></div>
        </div>
        <div class="sx-box">
          <div>地区</div>
          <div class="haoyou">
            <span v-for="(item,index) in screen.area"
                  @click="choose(index,'area')"
                  :key="index"
                  :class="{ 'sx-activi':index==current.area}">{{ item.name }}</span>
          </div>
          <div class="fangwei">
            <el-button type="danger">确定</el-button>
          </div>
        </div>

      </div>
      <div class="sx-type">
        <div class="heji"
             style="width:30%;">
          <el-checkbox v-model="checked">账号名</el-checkbox>
        </div>
        <div class="heji"
             style="width:10%;">
          地区
        </div>
        <div class="heji">
          价格
        </div>
        <div class="heji">
          数量
        </div>
        <div class="heji ">
          报名截止时间
        </div>
        <div class="heji">
          批量报名
        </div>
      </div>
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
          <div class="pro-biao">
            <span><img src="/static/img/group_2x.png"
                   alt="">账号详情</span>
            <span><img src="/static/img/star_2x.png"
                   alt="">收藏</span>
            <span><img src="/static/img/to_black_2x.png"
                   alt="">拉黑</span>
          </div>
        </div>
        <div class="pro-cont">
          <div class="pro-td"
               style="margin-left:40px;">
            <span>上海浦东新区</span>
          </div>
          <div class="pro-td">
            <span></span>
          </div>
          <div class="pro-td">
            <span style="">￥ 5000</span>
          </div>
          <div class="pro-td">
            <span style="position: relative;left: 25px;">5000</span>
          </div>
          <div class="pro-td">
            <span style="position: relative;left: 50px;">2019-5-12</span>
          </div>
          <div>

            <div class="heisebox">
              <span>请尽快联系 您的专属投放顾问</span>
              <span>售前服务 400-0000-000</span>
              <span>获取最新账号报价</span>
            </div>
          </div>
          <div class="pro-td"
               style="position: relative;left: 25px;">
            <el-button type="danger"
                       size="mini">点击报名</el-button>
          </div>
        </div>
      </div>
      <div class="fenye">
        <el-pagination background
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage4"
                       :page-sizes="[10, 25, 50, 100]"
                       :page-size="10"
                       :total="200"
                       layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </div>
    </div>

    <ComFoot></ComFoot>
  </div>
</template>

<script>
import ComHeadNoNav from '@/common/ComHeadNoNav.vue'
export default {
  components: {
    ComHeadNoNav
  },
  name: 'activity',
  data () {
    return {
      activeName: 'first',
      checked: '', // 对接数据时可删除
      currentPage4: 1,
      paixu: '默认排序', // 对接数据时可删除
      options: [
        { value: '默认排序', label: '默认排序' },
        { value: '好友数正序', label: '好友数正序' },
        { value: '好友数反序', label: '好友数反序' },
        { value: '报价正序', label: '报价正序' },
        { value: '报价反序', label: '报价反序' }
      ],
      keyword: '', // 搜索框内容
      screen: {
        number: [
          { name: '全部账号', value: '' },
          { name: '意见领袖', value: '' }
        ], // 全部账号
        label: [
          { name: '不限', value: '' },
          { name: '传媒/营销', value: '' },
          { name: '物联网', value: '' },
          { name: '电商/微商', value: '' },
          { name: '金融/财经', value: '' },
          { name: '母婴', value: '' },
          { name: '游戏动漫', value: '' },
          { name: '时尚', value: '' },
          { name: '文娱', value: '' },
          { name: '旅游/酒店', value: '' },
          { name: '房地产', value: '' },
          { name: '医疗/健康', value: '' },
          { name: '教育', value: '' },
          { name: '测试一', value: '' },
          { name: '测试二', value: '' },
          { name: '测试三', value: '' },
          { name: '测试四', value: '' }
        ], // 行业标签
        area: [
          { name: '不限', value: '' },
          { name: '北京', value: '' },
          { name: '上海', value: '' },
          { name: '广州', value: '' },
          { name: '深圳', value: '' },
          { name: '武汉', value: '' },
          { name: '重庆', value: '' },
          { name: '成都', value: '' },
          { name: '杭州', value: '' },
          { name: '天津', value: '' },
          { name: '南京', value: '' }
        ], // 地区
        friend: [
          { name: '不限', value: '' },
          { name: '500以下', value: '' },
          { name: '500-1500', value: '' },
          { name: '1500-3000', value: '' },
          { name: '3000-5000', value: '' },
          { name: '500以上', value: '' }
        ], // 好友数量
        price: [
          { name: '不限', value: '' },
          { name: '50元以下', value: '' },
          { name: '50-100元', value: '' },
          { name: '100-200元', value: '' },
          { name: '200-500元', value: '' },
          { name: '500-1000元', value: '' },
          { name: '1000-2000元', value: '' },
          { name: '2000元以上', value: '' }
        ] // 价格
      }, // 筛选条件
      current: { number: '0', label: '0', area: '0', friend: '0', price: '0' }, // 当前选中的条件
      opentj: 'opentj',
      gengduo: '更多 <i class="el-icon-arrow-right"></i>'
    }
  },
  methods: {
    // 选择当前页面显示多少条数据的选择框发生改变
    handleSizeChange (e) {
      // this.pageSize = e
    },
    // 分页改变 e点击的页码  用户手动输入了页面然后go
    handleCurrentChange (e) {
      // console.log('当前页码', e)
      // this.pageindex = e - 1
    },
    choose (index, value) {
      switch (value) {
        case 'number':
          this.current.number = index
          break
        case 'label':
          this.current.label = index
          break
        case 'area':
          this.current.area = index
          break
        case 'friend':
          this.current.friend = index
          break
        case 'price':
          this.current.price = index
          break
      }
    },
    // 行业标签 更多
    opscreen () {
      if (this.opentj === '') {
        this.opentj = 'opentj'
        this.gengduo = '更多 <i class="el-icon-arrow-right"></i>'
      } else {
        this.opentj = ''
        this.gengduo = '更多 <i class="el-icon-arrow-down"></i>'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background: white;
}
.lunbo_box {
  display: flex;
}
.lunbo {
  width: 1200px;
}
.lunbo_img {
  width: 1200px;
  height: 450px;
  object-fit: cover;
}
.news {
  width: 340px;
  background: white;
  height: 440px;
  border: 1px solid #fd3400;
  margin: 5px;
}
.news_th {
  background: #fd3400;
  color: white;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 18px;
}
.new_td {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  border-bottom: 1px #888888 dashed;
  line-height: 39px;
  color: #4e4e4e;
}
.gg_title {
  padding-top: 10px;
  padding-bottom: 15px;
  text-align: center;
  color: #4e4e4e;
}
.anli-box {
  padding-top: 10px;
  border-bottom: 2px solid #fd3400;
}
.anli {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.anli-smbox {
  width: 24%;
  display: flex;
  padding: 10px 0;
}
.smbox1 {
  width: 45%;
  border: 1px solid #dbdbdb;
  margin-right: 10px;
}
.smbox2 {
  width: 55%;
}
.al-headimg > img {
  width: 125px;
  height: 135px;
  object-fit: cover;
}
.baojia {
  text-align: center;
  color: #fd3400;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-top: -4px;
  border-top: 1px solid #dbdbdb;
  background: #f8f8f8;
}
.alli-lian {
  display: flex;
}
.alli-lian > img {
  margin: 0 5px;
  width: 50px;
}
.anli-jian {
  font-size: 14px;
  margin: 8px 0;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  color: #383838;
  line-height: 22px;
  padding: 5px 0;
}
.anli-bofan {
  color: #8a8a8a;
  font-size: 14px;
  padding-bottom: 10px;
}
.anli-bofan > span {
  color: #fd3400;
}
.chakan {
  text-align: center;
  color: #fd3400;
  font-size: 14px;
  background: #f4f4f4;
  padding: 5px 0;
  margin: 10px 0;
}
.hezuo-title {
  color: #4b4b4b;
  font-size: 14px;
  line-height: 50px;
}
.hezuo-title > span {
  color: #fd3400;
  font-size: 18px;
}
.hezuo-cont {
  display: flex;
  flex-wrap: wrap;
  border: 1px #cccccc solid;
}
.kh-box {
  width: 16.5%;
  border: 1px #cccccc dashed;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.kh-box > img {
  opacity: 0.5;
  width: 200px;
  height: 75px;
  object-fit: cover;
  transition: all 0.2s;
}
.hezuo-name {
  position: absolute;
  bottom: -25px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  height: 25px;
  transition: all 0.2s;
}
.kh-box:hover > img {
  opacity: 1;
}
.kh-box:hover > div {
  bottom: 0;
}

.keyword > input {
  border-color: #fd3400 !important;
}
.sousuo-btn {
  border-color: #fd3400;
  background: #fd3400;
  border-radius: 0 5px 5px 0;
}
.keyword >>> .el-input__inner {
  border-color: #fd3400;
  border-radius: 5px 0 0 5px;
}
/*筛选*/
.shaixuan {
  height: auto;
  padding: 10px 0;
  border-top: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
  color: #383838;
  width: 1200px;
  margin: 0 auto;
}
.sx-box {
  display: flex;
  line-height: 50px;
  position: relative;
}
.sx-box > div:nth-child(1) {
  background: #f3f3f3;
  height: 50px;
  width: 120px;
  text-align: center;
}
.sx-box > div:nth-child(2) {
  margin-left: 20px;
  border-bottom: 1px #ccc dashed;
  width: 1080px;
  display: flex;
  flex-wrap: wrap;
}
.sx-box > div:nth-child(2) > span {
  margin-right: 15px;
  cursor: pointer;
}
.sx-activi {
  color: #fd3400;
}
.gengduo {
  position: absolute;
  right: 0;
  cursor: pointer;
}
.biaoqian {
  padding-right: 100px;
  width: 980px !important;
}
.opentj {
  height: 50px;
  overflow: hidden;
}
.haoyou {
  padding-right: 280px;
  width: 800px !important;
}
.fangwei {
  position: absolute;
  right: 0;
}
.fangwei > input {
  width: 70px;
  height: 25px;
}
.fangwei >>> .el-button--danger {
  height: 25px;
  padding: 0 10px;
  background: #fd3400;
  border-color: #fd3400;
  margin-left: 10px;
}
.sx-type {
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 10px;
  width: 1180px;
  margin: 40px auto;
}
.paixu {
  width: 120px;
  margin-left: 30px;
}
.heji {
  line-height: 35px;
  color: #5e5e5e;
  font-size: 14px;
}
.pro-box {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #cccccc;
  color: #3f3f3f;
  cursor: pointer;
  width: 1200px;
  margin: 0 auto;
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
.fenye {
  text-align: center;
  margin-top: 30px;
}
.message {
  width: 1200px;
  margin: 20px auto;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  color: #fd3603;
}
</style>
