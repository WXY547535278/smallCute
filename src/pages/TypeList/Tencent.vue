<template>
  <div class="">
     <ComHead title="微信公众号"></ComHead>
    
     <div class="win120">
         <div class="sousuo-box">
             <div class="sousuo-key"><el-input placeholder="请输入关键字" v-model="keyword" clearable class="keyword"></el-input></div>
             <div><el-button type="danger"  class="sousuo-btn">搜索关键字</el-button></div>
         </div>
         <div class="shaixuan">
              <div class="sx-box">
                  <div>全部账号</div>
                  <div>
                      <span v-for="(item,ind) in screen.number" @click="choose(ind,'number')" :class="{ 'sx-activi':ind==current.number}">{{ item.name }}</span>
                  </div>
              </div>
             <div class="sx-box">
                 <div>个人标签</div>
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
                 <div class="fangwei">
                     <el-button type="danger">确定</el-button>
                 </div>
             </div>
             <div class="sx-box">
                 <div>粉丝数</div>
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
                 <el-checkbox v-model="checked">微信认证</el-checkbox>
                 <el-checkbox v-model="checked">我的收藏</el-checkbox>
                 <el-select v-model="paixu" placeholder="请选择" class="paixu">
                   <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                 </el-select>
             </div>
         </div>
         <div>
              <div class="pro-box" v-for="item in 8" :key="item">
                  <div class="pro-xuan"><el-checkbox v-model="checked"></el-checkbox></div>
                  <div class="pro-img"><img src="/static/linshi/touxiang.png" alt=""></div>
                  <div class="pro-jianbox">
                      <div class="pro-name"><img src="/static/img/logo-icon/weixin.png" alt="">吃货向阳妞妞</div>
                      <div class="pro-name"><img src="/static/img/logo-icon/weixin.png" alt="">iiidaily</div>
                      <div class="pro-jian">
                          


                          <el-tag     
                             size="small"                      
                             type="danger"
                             effect="plain">
                             原创写稿
                          </el-tag>
                         <el-tag
                             size="small"                     
                             type="danger"
                             effect="plain">
                             仅支持原创写稿
                          </el-tag>


                      </div>



                      <div class="pro-biao">
                          <span><img src="/static/img/group_2x.png" alt="">账号详情</span>
                          <span><img src="/static/img/star_2x.png" alt="">收藏</span>
                          <span><img src="/static/img/to_black_2x.png" alt="">拉黑</span>
                      </div>
                  </div>
                <div class="pro-cont" >
                  <div class="pro-td" style="width:70px;">
                    <span class="pro-title">粉丝数</span>
                    <span>12万</span>
                  </div>


                  <div class="pro-td pro-price">
                      <span class="pro-title">参考报价</span>
                      <span>多图文第一条</span>
                      <span>多图文第二条</span>
                      <span>多图文第3-N条</span>
                        <span>单图文</span>
                      <span class="pro-title">价格有效期：2019-09-05</span>
                  </div>

                  
                  <div class="pro-td pro-price" style="width:100px;">
                      <span class="pro-title" >原创+发布</span>
                      <span style="color: #fd3400">￥ 5000</span>
                      <span style="color: #fd3400">￥ 5000</span>
                      <span style="color: #fd3400">-</span>
                      <span style="color: #fd3400">-</span>
                  </div> 

                  <div class="pro-td pro-price">
                      <span class="pro-title">阅读量</span>
                      <span >100000+</span>
                      <span >92642</span>
                      <span >-</span>
                      <span >100000+</span>
                  </div>                                      
                  <div class="pro-td pro-price" style="width:100px;">
                      <span class="pro-title" >阅读单价</span>
                      <span >￥3.1</span>
                      <span >￥1.5</span>
                      <span >-</span>
                      <span >-</span>
                  </div>   
                  
                  <div>
      
                    <div class="pro-td pro-price">
                        <span class="pro-title">参考报价</span>
                        <span style="color: #fd3400">￥ 5000</span>
                        <span class="pro-title">价格有效期：2019-09-05</span>
                    </div>
                    
                    <div class="heisebox" style="width:350px;height:80px;">
                        <span>请尽快联系 您的专属投放顾问</span>
                        <span>售前服务 400-0000-000</span>
                        <span>获取最新账号报价</span>
                    </div>
                  </div>
                  <div class="pro-td">
                    <span class="pro-title">SNBT</span>
                    <span Style="color: #fd3400">84.5</span>
                  </div> 
                  <div class="pro-td">
                    <span class="pro-title">受众画像</span>
                    <span >性别：泛性别</span>
                    <span >年龄：19-25/0-18</span>
                    <span >地域：广东/北京...</span>
                    <span >兴趣：美食/游戏...</span>
                  </div>                                      
                  <div class="pro-td">
                    <span class="pro-title">更新次数</span>
                    <span>周平均：1次</span>
                    <span>近7天：2次</span>
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
  name: 'Tencent',
  data () {
    return {
      checked: '', // 对接数据时可删除
      paixu: '默认排序', // 对接数据时可删除
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
          {name: '全部账号', value: ''},
          {name: '大V自媒体', value: ''}
        ], // 全部账号
        label: [
          {name: '不限', value: ''},
          {name: '母婴育儿', value: ''},
          {name: '美容美妆', value: ''},
          {name: '时尚穿搭', value: ''},
          {name: '旅游', value: ''},
          {name: '游戏', value: ''},
          {name: '动漫', value: ''},
          {name: '娱乐影音', value: ''},
          {name: '美食', value: ''},
          {name: '3C数码', value: ''},
          {name: '科技', value: ''},
          {name: 'IT数码', value: ''},
          {name: '健康养生', value: ''},
          {name: '医疗', value: ''},
        ], // 个人标签
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
          {name: '1000以下', value: ''},
          {name: '1000-2000', value: ''},
          {name: '2000-5000', value: ''},
          {name: '5000-10000', value: ''},
          {name: '10000-50000', value: ''},
          {name: '100000以上', value: ''}
        ], // 粉丝数
        price: [
          {name: '不限', value: ''},
          {name: '1000元以下', value: ''},
          {name: '1000-2000元', value: ''},
          {name: '2000-5000元', value: ''},
          {name: '5000-10000元', value: ''},
          {name: '10000-20000元', value: ''},
          {name: '20000元以上', value: ''}
        ] // 参考价格
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
