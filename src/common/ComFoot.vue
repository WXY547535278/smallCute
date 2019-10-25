<template>
  <div class="">
      <div class="win120 banquan">
          <div class="ban-lan">
              <span><router-link to="NewsCont">加入我们</router-link></span>
              <span><router-link to="NewsCont">联系我们</router-link></span>
              <span><router-link to="NewsCont">法律/免责声明</router-link></span>
              <span style="border-right: 0"><router-link to="NewsCont">小可爱</router-link></span>
          </div>
          <div>版权所有 © 小可爱 2011-2019</div>
          <div><a href="http://beian.miit.gov.cn" target="_blank">粤ICP备123456789号</a></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ComFoot',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banquan{text-align: center;font-size: 16px;color: #878787;line-height: 35px;border-top: 1px solid #878787;padding-top: 10px;margin-top: 25px;margin-bottom: 10px}
  .ban-lan > span{padding: 0 20px;border-right: 1px solid #878787}

</style>
