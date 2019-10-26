<template>
  <div class="">

    <ComHead title="创建预约活动第一步"></ComHead>
    <!--创建预约活动第一步-->
    <div class="win1201"
         style="margin-top:30px;margin-bttom:30px;">
      <div class="title">
        <span style="display:block; font-size:14px;transform: translateY(-8px) translateX(8px);">创建预约活动</span>
      </div>
      <div class="stepBox">
        <el-steps :active="active"
                  finish-status="success"
                  align-center>
          <el-step title="选择账号"></el-step>
          <el-step title="填写预约需求"></el-step>
          <el-step title="提交已选账号"></el-step>
        </el-steps>
      </div>
      <div class="shaixuan">
        <div class="sx-box">
          <div>全部账号</div>
          <div>
            <span v-for="(item,ind) in screen.number"
                  @click="choose(ind,'number')"
                  :class="{ 'sx-activi':ind==current.number}">{{ item.name }}</span>
          </div>
        </div>
        <div class="sx-box">
          <div>行业标签</div>
          <div :class="['biaoqian',opentj]">
            <span v-for="(item,ind) in screen.label"
                  @click="choose(ind,'label')"
                  :class="{ 'sx-activi':ind==current.label}">{{ item.name }}</span>
          </div>
          <div class="gengduo"
               @click="opscreen"
               v-html="gengduo"></div>
        </div>
        <div class="sx-box">
          <div>地区</div>
          <div class="haoyou">
            <span v-for="(item,ind) in screen.area"
                  @click="choose(ind,'area')"
                  :class="{ 'sx-activi':ind==current.area}">{{ item.name }}</span>
          </div>
          <div class="fangwei">
            <el-button type="danger">确定</el-button>
          </div>
        </div>
        <div class="sx-box">
          <div>好友数</div>
          <div class="haoyou">
            <span v-for="(item,ind) in screen.friend"
                  @click="choose(ind,'friend')"
                  :class="{ 'sx-activi':ind==current.friend}">{{ item.name }}</span>
          </div>
          <div class="fangwei">
            <input type="text"> -
            <input type="text"> 元
            <el-button type="danger">确定</el-button>
          </div>
        </div>
        <div class="sx-box">
          <div>价格</div>
          <div class="haoyou">
            <span v-for="(item,ind) in screen.price"
                  @click="choose(ind,'price')"
                  :class="{ 'sx-activi':ind==current.price}">{{ item.name }}</span>
          </div>
          <div class="fangwei">
            <input type="text"> -
            <input type="text"> 元
            <el-button type="danger">确定</el-button>
          </div>
        </div>
      </div>
      <div class="sx-type">
        <div class="heji"><i class="el-icon-warning-outline"
             style="font-size: 16px"></i> 共计200个</div>
        <div>
          <el-checkbox v-model="checked">可原创</el-checkbox>
          <el-checkbox v-model="checked">我的收藏</el-checkbox>
          <el-select v-model="paixu"
                     placeholder="请选择"
                     class="paixu">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </div>
      </div>

      <div>
        <div class="pro-box"
             v-for="item in 8"
             :key="item"
             @click="showDetail">
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
            <div class="pro-td">
              <span class="pro-title">张大大</span>
              <span>伤害浦东新区</span>
            </div>
            <div class="pro-td">
              <span class="pro-title">行业</span>
              <span>传媒/营销</span>
            </div>
            <div class="pro-td">
              <span class="pro-title">好友数</span>
              <span>5000</span>
            </div>
            <div>
              <div class="pro-td pro-price">
                <span class="pro-title">参考报价</span>
                <span style="color: #fd3400">￥ 5000</span>
                <span class="pro-title">价格有效期：2019-09-05</span>
              </div>
              <div class="heisebox">
                <span>请尽快联系 您的专属投放顾问</span>
                <span>售前服务 400-0000-000</span>
                <span>获取最新账号报价</span>
              </div>
            </div>
            <div class="pro-td">
              <span class="pro-title">被约次数</span>
              <span>100</span>
            </div>
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
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="200">
        </el-pagination>
      </div>
      <div class="bottom-button">
        <span class="button"
              @click="nextStep">下一步</span>
      </div>
    </div>
    <ComFoot></ComFoot>
    <!-- 查看详情 -->
    <el-dialog width="60%"
               title="查看更多详细信息"
               :visible.sync="moreDetail"
               append-to-body
               >
      <div class="info-one">
        <div>
          <el-image style="width: 140px; height: 150px"
                  src="/static/linshi/touxiang.png"
                  >
          </el-image>
        </div>
        <div style="margin-left: 20px">
          <span>吃货向阳妞妞</span>
          <div style="margin-top: 18px; font-size: 13px">
            <span style="margin-left: 10px">性别：男</span>
            <span style="margin-left: 150px">现居地：广东东莞</span>
          </div>
          <div style="margin: 18px 0 0 10px;font-size: 13px">
            <div>主要成就：</div>
            <div>20183月18日朋友圈广告点击排行第十名</div>
          </div>
        </div>
      </div>
      <div class="info-two">
        <div>预约须知：</div>
        <div class="info-content">不接硬广告</div>
      </div>
      <div class="info-three">
        <div>预约须知：</div>
        <div class="info-content">不接硬广告</div>
      </div>
      <div class="info-four">
        <div>预约须知：</div>
        <div class="info-content">不接硬广告</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      active: 0,
      checked: '', // 对接数据时可删除
      paixu: '默认排序', // 对接数据时可删除
      currentPage4: 0, //分页
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
      gengduo: '更多 <i class="el-icon-arrow-right"></i>',
      moreDetail: false
    }
  },
  methods: {
    handleSizeChange () {
    },
    handleCurrentChange () {
    },
    // 下一步
    nextStep () {
      this.$router.push('/Second')
    },
    //  查看详情
    showDetail () {
      this.moreDetail = true
    },
    // 选择条件
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
/* 步骤条 */
.stepBox {
  position: relative;
  box-sizing: border-box;
  /* display: flex;
  align-items: center; */
  padding: 20px 100px 0 100px;
  width: 100%;
  height: 100px;
  border-top: 2px solid rgb(221, 220, 220);
  border-bottom: 2px solid rgb(221, 220, 220);
}
/*搜索*/
.sousuo-box {
  display: flex;
  width: 612px;
  margin: auto;
  margin: 20px auto;
}
.sousuo-key {
  width: 500px;
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
  height: 300px;
  padding: 10px 0;
  border-top: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
  color: #383838;
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
.info-one{
  display: flex;
}
.info-two,
.info-three,
.info-four {
  margin-top: 20px;
}
.info-content {
  margin-top: 10px;
  font-size: 13px;
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
  cursor: pointer;
}
.bottom-button .button {
  margin-top: 80px;
  height: 50px;
  width: 200px;
  background-color: #fd3400;
  color: white;
  border-radius: 4px;
}
</style>
