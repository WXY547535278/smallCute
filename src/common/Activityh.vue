<template>
  <div class="win120 Activityh">
    <el-tabs v-model="activeName"
             @tab-click="Activityh">
      <el-tab-pane label="活动报名大厅"
                   name="first"
                   data-val="firsts"></el-tab-pane>
      <el-tab-pane label="我的账户管理"
                   name="second"
                   data-val="AddTask"></el-tab-pane>
      <el-tab-pane label="我的订单管理"
                   name="third"
                   data-val="order"></el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
export default {
  name: 'Activityh',
  props: ['activeName'],
  data () {
    return {
    }
  },
  methods: {
    Activityh (tab, event) {
      var data = tab.$el.dataset.val
      switch (data) {
        case 'AddTask':
          this.$router.push('/AddTask')
          break
        case 'order':
          this.$router.push('/Order')
          break
        case 'firsts':
          this.$router.push('/activity')
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Activityh {
  margin-top: 15px;
}
</style>
