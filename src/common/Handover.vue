<template>
    <div class="win120 Handover">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="创建预约需求" name="first"></el-tab-pane>
            <el-tab-pane label="发布报名活动" name="second" data-val="Activity"></el-tab-pane>
            <el-tab-pane label="项目管理" name="third" data-val="ItemList"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
  name: 'Handover',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      var data = tab.$el.dataset.val
      switch (data) {
        case 'Activity':
          this.$router.push('/activity')
          break
        case 'ItemList':
          this.$router.push('/ItemList')
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Handover{margin-top: 15px}
</style>
