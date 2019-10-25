<template>
  <div class="">
     <ComHead title="社群"></ComHead>
 
     <div class="win120">
         <div class="sousuo-box">
             <div class="sousuo-key"><el-input placeholder="请输入关键字" v-model="keyword" clearable class="keyword"></el-input></div>
             <div><el-button type="danger"  class="sousuo-btn">搜索关键字</el-button></div>
         </div>
         <div class="shaixuan">
              <div class="sx-box">
                  <div>行业标签</div>
                  <div>
                      <span v-for="(item,ind) in screen.number" @click="choose(ind,'number')" :class="{ 'sx-activi':ind==current.number}">{{ item.name }}</span>
                  </div>
              </div>
             <div class="sx-box">
                 <div>群人数</div>
                 <div :class="['biaoqian',opentj]">
                     <span v-for="(item,ind) in screen.label" @click="choose(ind,'label')" :class="{ 'sx-activi':ind==current.label}">{{ item.name }}</span>
                 </div>
                 <div class="gengduo" @click="opscreen" v-html="gengduo"></div>
             </div>
             <div class="sx-box">
                 <div>地区</div>
                 <div class="haoyou">
                     <span v-for="(item,ind) in screen.area" @click="choose(ind,'area')" :class="{ 'sx-activi':ind==current.area}">{{ item.name }}</span>
                 </div>
                 
               

               


                 <div class="fangwei" style="" >

                     <el-button type="danger">确定</el-button>
                 </div>
             </div>
             <div class="sx-box">
                 <div>转发率(%)</div>
                 <div class="haoyou">
                     <span v-for="(item,ind) in screen.friend" @click="choose(ind,'friend')" :class="{ 'sx-activi':ind==current.friend}">{{ item.name }}</span>
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
                     <span v-for="(item,ind) in screen.price" @click="choose(ind,'price')" :class="{ 'sx-activi':ind==current.price}">{{ item.name }}</span>
                 </div>
                 <div class="fangwei">
                   <input type="text"> -
                   <input type="text"> 元
                   <el-button type="danger">确定</el-button>
                 </div>
             </div>
           </div>
         <div class="sx-type">
             <div class="heji"><i class="el-icon-warning-outline" style="font-size: 16px"></i> 共计200个</div>
             <div>
                 <el-checkbox v-model="checked">可原创</el-checkbox>
                 <el-checkbox v-model="checked">我的收藏</el-checkbox>
                 <el-select v-model="paixu" placeholder="请选择" class="paixu">
                   <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                 </el-select>
             </div>
         </div>
         <div>
              <div class="pro-box" v-for="item in 10" :key="item">
                  <div class="pro-xuan"><el-checkbox v-model="checked"></el-checkbox></div>
                  <div class="pro-img"><img src="/static/linshi/touxiang.png" alt=""></div>
                  <div class="pro-jianbox">
                      <div class="pro-name"><img src="/static/img/logo-icon/shequn.png" alt="">河北医药行业交流群</div>
                      <div class="pro-jian">医生行业、全国</div>
                      <div class="pro-biao">
                          <span><img src="/static/img/group_2x.png" alt="">账号详情</span>
                          <span><img src="/static/img/star_2x.png" alt="">收藏</span>
                          <span><img src="/static/img/to_black_2x.png" alt="">拉黑</span>
                      </div>
                  </div>
                <div class="pro-cont">
                  <div class="pro-td">
                    <span class="pro-title">群人数</span>
                    <span>500</span>
                  </div>
                  <div class="pro-td">
                    <span class="pro-title">转发率</span>
                    <span>10%</span>
                  </div>
                  <!-- <div class="pro-td">
                    <span class="pro-title">好友数</span>
                    <span>5000</span>
                  </div> -->
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
                    <span class="pro-title">周订单</span>
                    <span  class="text1">本群是由河北医药行业的老师搭建的胸部影像科室的全国医生</span>
                  </div>
                </div>
              </div>
         </div>
        <div class="fenye">
            <el-pagination
              background
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
     <FeedBack></FeedBack>
     <ComFoot></ComFoot>
     <Card></Card>
  </div>
</template>

<script>
export default {
  name: 'Flock',
  data () {
    return {
      checked: '', // 对接数据时可删除
      paixu: '默认排序', // 对接数据时可删除
       region: '',
      options: [
        {value: '默认排序', label: '默认排序'},
        {value: '好友数正序', label: '好友数正序'},
        {value: '好友数反序', label: '好友数反序'},
        {value: '报价正序', label: '报价正序'},
        {value: '报价反序', label: '报价反序'}
      ],
      keyword: '', // 搜索框内容
      screen: {
        number: [
          {name: '不限', value: ''},
          {name: '传媒/营销', value: ''},
          {name: '互联网', value: ''},
          {name: '电商/微商', value: ''},
          {name: '金融/财经', value: ''},
          {name: '母婴', value: ''},
          {name: '游戏动漫', value: ''},
          {name: '时尚', value: ''},
          {name: '文娱', value: ''},
          {name: '旅游/酒店', value: ''},
          {name: '房地产', value: ''},
          {name: '医疗/健康', value: ''},
          {name: '教育', value: ''},

        ], // 全部账号
        label: [
          {name: '不限', value: ''},
          {name: '200以下', value: ''},
          {name: '200~400', value: ''},
          {name: '500', value: ''},

        ], // 行业标签
        area: [
          {name: '不限', value: ''},
          {name: '北京', value: ''},
          {name: '上海', value: ''},
          {name: '广州', value: ''},
          {name: '深圳', value: ''},
          {name: '武汉', value: ''},
          {name: '重庆', value: ''},
          {name: '成都', value: ''},
          {name: '杭州', value: ''},
          {name: '天津', value: ''},
          {name: '南京', value: ''}
        ], // 地区
        friend: [
          {name: '不限', value: ''},
          {name: '1%-5%', value: ''},
          {name: '5%-10%', value: ''},
          {name: '10%-20%', value: ''},
          {name: '20%-50%', value: ''},
          {name: '50%以上', value: ''}
        ], // 好友数量
        price: [
          {name: '不限', value: ''},
          {name: '100元以下', value: ''},
          {name: '100-500元', value: ''},
          {name: '500-1000元', value: ''},
          {name: '1000-5000元', value: ''},
          {name: '5000-10000元', value: ''},
          {name: '10000元以上', value: ''}
        ] // 价格
      }, // 筛选条件
      current: {number: '0', label: '0', area: '0', friend: '0', price: '0'}, // 当前选中的条件
      opentj: 'opentj',
      gengduo: '更多 <i class="el-icon-arrow-right"></i>'
    }
  },
  methods: {
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
  .text1{ width:170px;word-wrap: break-word;word-break: break-all;overflow: hidden;}
  .sousuo-box{display: flex;width: 612px;margin: auto;margin: 20px auto;}
  .sousuo-key{width: 500px}
  .keyword>input{border-color: #fd3400 !important;}
  .sousuo-btn{border-color: #fd3400;background: #fd3400;border-radius: 0 5px 5px 0}
  .keyword>>>.el-input__inner{border-color: #fd3400;border-radius: 5px 0 0 5px}
  /*筛选*/
  .shaixuan{height: 300px;padding: 10px 0;border-top: 2px solid #ececec;border-bottom: 2px solid #ececec;color: #383838;}
  .sx-box{display: flex;line-height: 50px;position: relative}
  .sx-box>div:nth-child(1){background: #f3f3f3;height: 50px;width: 120px;text-align: center}
  .sx-box>div:nth-child(2){margin-left: 20px;border-bottom: 1px #ccc dashed;width: 1080px;display: flex;flex-wrap: wrap;}
  .sx-box>div:nth-child(2) > span{margin-right: 15px;cursor: pointer}
  .sx-activi{color: #fd3400}
  .gengduo{position: absolute;right: 0;cursor: pointer}
  .biaoqian{padding-right: 100px;width: 980px !important;}
  .opentj{height: 50px;overflow: hidden}
  .haoyou{padding-right: 280px;width: 800px !important;}
  .fangwei{position: absolute;right: 0}
  .fangwei >input{width: 70px;height: 25px}
  .fangwei>>>.el-button--danger{height: 25px;padding: 0 10px;background: #fd3400;border-color: #fd3400;margin-left: 10px}
  .sx-type{display: flex;justify-content: space-between;background-color: #f3f3f3;padding: 10px}
  .paixu{width: 120px;margin-left: 30px;}
  .heji{line-height: 35px;color: #5e5e5e;font-size: 14px}
  .pro-box{display: flex;padding: 20px 0;border-bottom: 1px solid #cccccc;color: #3f3f3f;cursor: pointer}
  .pro-xuan{margin-top: 40px;padding: 0 10px}
  .pro-img{margin: 0 10px}
  .pro-img>img{width: 100px;height: 100px;object-fit: cover;border-radius: 5px;border: 1px solid #cccccc}
  .pro-jianbox{margin-right: 10px;width: 200px}
  .pro-name{margin: 10px 0}
  .pro-name > img{width: 20px;height: 20px;vertical-align: sub;margin-right: 5px}
  .pro-jian{font-size: 14px;margin: 15px 0}
  .pro-biao{display: none;font-size: 14px}
  .pro-biao img{width: 15px;vertical-align: sub;margin-right: 5px}
  .pro-td{display: flex;flex-direction: column;font-size: 14px;padding:15px 10px;}
  .pro-title{color: #a5a5a5}
  .pro-cont{display: flex;justify-content: space-between;width: 800px;padding-left: 20px;}
  .heisebox{display: flex;flex-direction: column;color: white;background: #262626;padding: 20px 35px;font-size: 14px;line-height: 22px;text-align: center;display: none}
  .pro-box:hover .heisebox{display: flex}
  .pro-box:hover .pro-price{display: none}
  .pro-box:hover .pro-biao{display: block}
  .pro-box:hover{background: #f5f5f5}
  .fenye{text-align: center;margin-top: 30px}
</style>
