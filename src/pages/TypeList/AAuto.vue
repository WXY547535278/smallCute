<template>
  <div class="">
    <ComHead title="快手"></ComHead>

    <div class="win120">
      <div class="sousuo-box">
        <div class="sousuo-key">
          <el-input placeholder="请输入关键字"
                    v-model="keyword"
                    clearable
                    class="keyword"></el-input>
        </div>
        <div>
          <el-button type="danger"
                     class="sousuo-btn">搜索关键字</el-button>
        </div>
      </div>
      <div class="shaixuan">
        <div class="sx-box">
          <div>全部账号</div>
          <div>
            <span v-for="(item,index) in screen.number"
                  @click="choose(index,'number')"
                  :class="{ 'sx-activi':index==current.number}"
                  :key="index">{{ item.name }}</span>
          </div>
        </div>
        <div class="sx-box">
          <div>个人标签</div>
          <div :class="['biaoqian',opentj]">
            <span v-for="(item,index) in screen.label"
                  @click="choose(index,'label')"
                  :class="{ 'sx-activi':index==current.label}"
                  :key="index">{{ item.name }}</span>
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
                  :class="{ 'sx-activi':index==current.area}"
                  :key="index">{{ item.name }}</span>
          </div>
          <div class="fangwei">
            <el-button type="danger">确定</el-button>
          </div>
        </div>
        <div class="sx-box">
          <div>粉丝数</div>
          <div class="haoyou">
            <span v-for="(item,index) in screen.friend"
                  @click="choose(index,'friend')"
                  :class="{ 'sx-activi':index==current.friend}"
                  :key="index">{{ item.name }}</span>
          </div>
          <div class="fangwei">
            <input type="text"> -
            <input type="text"> 元
            <el-button type="danger">确定</el-button>
          </div>
        </div>
        <div class="sx-box">
          <div>参考价格</div>
          <div class="haoyou">
            <span v-for="(item,index) in screen.price"
                  @click="choose(index,'price')"
                  :class="{ 'sx-activi':index==current.price}"
                  :key="index">{{ item.name }}</span>
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
             :key="item">
          <div class="pro-xuan">
            <el-checkbox v-model="checked"></el-checkbox>
          </div>
          <div class="pro-img"><img src="/static/linshi/touxiang.png"
                 alt=""></div>
          <div class="pro-jianbox">
            <div class="pro-name"><img src="/static/img/logo-icon/kuaishou.png"
                   alt="">吃货向阳妞妞</div>
            <div class="pro-jian">俺有金钟罩铁布衫</div>
            <div class="pro-jian">
              <el-tag size="small"
                      type="danger"
                      effect="plain">
                可原创
              </el-tag>
            </div>
            <div class="pro-biao">
              <span @click="showDetail"><img src="/static/img/group_2x.png"
                     alt="">账号详情</span>
              <span><img src="/static/img/star_2x.png"
                     alt="">收藏</span>
              <span><img src="/static/img/to_black_2x.png"
                     alt="">拉黑</span>
            </div>
          </div>
          <div class="pro-cont">
            <div class="pro-td"
                 style="width:60px;">
              <span class="pro-title">粉丝数</span>
              <span>12万</span>
            </div>

            <div class="pro-td">
              <span class="pro-title">报价类型</span>
              <span>原创视频+发布</span>
              <span class="pro-title">价格有效期：2019-09-05</span>
            </div>
            <div class="pro-td pro-price"
                 style="width:90px;">
              <span class="pro-title">参考报价</span>
              <span style="color: #fd3400">￥ 5000</span>
            </div>
            <div>

              <div class="heisebox"
                   style="width:250px;">
                <span>请尽快联系 您的专属投放顾问</span>
                <span>售前服务 400-0000-000</span>
                <span>获取最新账号报价</span>
              </div>
            </div>
            <div class="pro-td pro-price"
                 style="width:90px;">
              <span class="pro-title">播放单价</span>
              <span>--</span>
            </div>

            <div class="pro-td"
                 style="width:100px;">
              <span class="pro-title">平均播放量</span>
              <span>--</span>
            </div>
            <div class="pro-td"
                 style="width:100px;">
              <span class="pro-title">平均互动数</span>
              <span>点赞：0</span>
              <span>评论：9万</span>
              <span>弹幕：0</span>
            </div>
            <div class="pro-td">
              <span class="pro-title">SNBT</span>
              <span Style="color: #fd3400">84.5</span>
            </div>
            <div class="pro-td"
                 style="width:150px;">
              <span class="pro-title">受众画像</span>
              <span>性别：女性居多</span>
              <span>年龄：19-25/0-18</span>
              <span>地域：广东/北京...</span>
              <span>兴趣：美食/游戏...</span>
            </div>
            <div class="pro-td"
                 style="width:80px;">
              <span class="pro-title">被约次数</span>
              <span>14</span>
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
    </div>
    <!-- 查看详情 -->
    <el-dialog width="60%"
               title="查看更多详细信息"
               :visible.sync="moreDetail"
               append-to-body>
      <div class="info-one">
        <div>
          <el-image style="width: 140px; height: 150px"
                    src="/static/linshi/touxiang.png">
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
    <FeedBack></FeedBack>
    <ComFoot></ComFoot>
    <Card></Card>
  </div>
</template>

<script>
export default {
  name: 'AAuto',
  data () {
    return {
      // 分页
      currentPage4: 1,
      moreDetail: false, // 账号详情
      checked: '', // 对接数据时可删除
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
          { name: '快手大V', value: '' },
          { name: '带货达人', value: '' }
        ], // 全部账号
        label: [
          { name: '不限', value: '' },
          { name: '母婴育儿', value: '' },
          { name: '美容美妆', value: '' },
          { name: '时尚穿搭', value: '' },
          { name: '旅游', value: '' },
          { name: '游戏', value: '' },
          { name: '动漫', value: '' },
          { name: '娱乐影音', value: '' },
          { name: '美食', value: '' },
          { name: '3C数码', value: '' },
          { name: '科技', value: '' },
          { name: 'IT数码', value: '' },
          { name: '健康养生', value: '' },
          { name: '医疗', value: '' },
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
          { name: '1000以下', value: '' },
          { name: '1000-2000', value: '' },
          { name: '2000-5000', value: '' },
          { name: '5000-10000', value: '' },
          { name: '10000-50000', value: '' },
          { name: '50000-100000', value: '' },
          { name: '200000以上', value: '' }
        ], // 好友数量
        price: [
          { name: '不限', value: '' },
          { name: '1000元以下', value: '' },
          { name: '1000-2000元', value: '' },
          { name: '2000-5000元', value: '' },
          { name: '5000-10000元', value: '' },
          { name: '10000-20000元', value: '' },
          { name: '20000元以上', value: '' }
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
    //  查看账号详情
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
/* 查看账号详情 */
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
</style>
