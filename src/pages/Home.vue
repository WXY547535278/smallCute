<template>
    <div class="home">
        <ComHead title="网站首页"></ComHead>
        <div style="background: #e8e8e8">
            <div class="win120 lunbo_box">
                <div class="lunbo">
                    <el-carousel height="450px" autoplay >
                        <el-carousel-item v-for="item in 3" :key="item">
                            <img src="/static/linshi/lunbo.png" alt="" class="lunbo_img">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="news">
                    <div class="news_th">热门活动</div>
                    <div class="new_td" v-for="item in 10" :key="item">
                        <span>著名系列短剧，全网所属...</span>
                        <span>2019/8/5</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="win120 guanggao">
            <img src="/static/linshi/guanggao.jpg" alt="">
            <div class="gg_title">美妆大IP——Pony开启微播易双十一短视频战略计划</div>
        </div>
        <div class="win120 anli-box">
            <el-tabs v-model="activeName">
                <el-tab-pane label="品牌意见领袖" name="first">
                    <div class="anli">
                        <div class="anli-smbox" v-for="item in 8" :key="item">
                            <div class="smbox1">
                                <div class="al-headimg"><img src="/static/linshi/touxiang.png" alt=""></div>
                                <div class="baojia">查看报价</div>
                            </div>
                            <div class="smbox2">
                                <div class="anli-name">张雪迎</div>
                                <div class="anli-jian">张雪迎，出生于浙江义乌，中国内地女演员。</div>
                                <div class="anli-bofan">平均播放量：<span>112W</span></div>
                                <div class="alli-lian">
                                    <img src="/static/img/live.png" alt="">
                                    <img src="/static/img/video_2x.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chakan">查看更多</div>
                </el-tab-pane>
                <el-tab-pane label="优选KOC" name="second">优选KOC2</el-tab-pane>
                <el-tab-pane label="视频达人" name="third">视频达人3</el-tab-pane>
            </el-tabs>
        </div>
        <div class="win120">
          <div class="hezuo-title">
              <span>品牌客户</span>&nbsp;100家大品牌客户的选择
          </div>
          <div class="hezuo-cont">
              <div class="kh-box" v-for="item in 18" :key="item">
                  <img src="/static/linshi/kehu.png" alt="">
                  <div class="hezuo-name">宝洁</div>
              </div>
          </div>
        </div>
        <ComFoot></ComFoot>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lunbo_box{display: flex}
  .lunbo{width: 850px;}
  .lunbo_img{width: 850px;height: 450px;object-fit: cover}
  .news{width: 340px;background: white;height: 440px;border: 1px solid #fd3400;margin: 5px}
  .news_th{background: #fd3400;color: white;height: 35px;text-align: center;line-height: 35px;font-size: 18px}
  .new_td{display: flex;justify-content: space-between;margin: 0 10px;border-bottom: 1px #888888 dashed;line-height: 39px;color: #4e4e4e}
  .gg_title{padding-top: 10px;padding-bottom: 15px;text-align: center;color: #4e4e4e}
  .guanggao{margin-top: 10px;border-bottom: 2px solid #fd3400;cursor: pointer}
  .anli-box{padding-top: 10px;border-bottom: 2px solid #fd3400}
  .anli{display: flex;flex-wrap: wrap;justify-content: space-between}
  .anli-smbox{width: 24%;display: flex;padding: 10px 0}
  .smbox1{width: 45%;border: 1px solid #dbdbdb;margin-right: 10px}
  .smbox2{width: 55%}
  .al-headimg > img{width: 125px;height: 135px;object-fit: cover}
  .baojia{text-align: center;color: #fd3400;height: 30px;line-height: 30px;font-size: 14px;margin-top: -4px;border-top: 1px solid #dbdbdb;background: #f8f8f8}
  .alli-lian{display: flex;}
  .alli-lian>img{margin: 0 5px;width: 50px}
  .anli-jian{font-size: 14px;margin: 8px 0;border-top: 1px solid #e7e7e7;border-bottom: 1px solid #e7e7e7;color: #383838;line-height: 22px;padding: 5px 0}
  .anli-bofan{color: #8a8a8a;font-size: 14px;padding-bottom: 10px}
  .anli-bofan>span{color: #fd3400}
  .chakan{text-align: center;color: #fd3400;font-size: 14px;background: #f4f4f4;padding: 5px 0;margin: 10px 0}
  .hezuo-title{color: #4b4b4b;font-size: 14px;line-height: 50px}
  .hezuo-title > span{color: #fd3400;font-size: 18px}
  .hezuo-cont{display: flex;flex-wrap: wrap;border: 1px #cccccc solid}
  .kh-box{width: 16.5%;border: 1px #cccccc dashed;position: relative;cursor: pointer;overflow: hidden}
  .kh-box > img{opacity: 0.5;width: 200px;height: 75px;object-fit: cover;transition: all 0.2s;}
  .hezuo-name{position: absolute;bottom: -25px;width: 100%;background: rgba(0,0,0,0.7);color: white;text-align: center;font-size: 14px;line-height: 22px;height: 25px; transition: all 0.2s;}
  .kh-box:hover > img{opacity: 1;}
  .kh-box:hover > div{bottom: 0;}
</style>
