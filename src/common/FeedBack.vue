<template>
  <div class="">
      <div class="win120 Feedback">
          <div class="feedwen">没有找到账号?</div>
          <div style="width: 150px">
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
          </div>
          <div style="width: 250px"><el-input v-model="username" placeholder="留下账号名称,3小时极速反馈"></el-input></div>
          <div style="width: 400px"><el-input v-model="contact" placeholder="留下您的QQ/手机,方便及时告知您联系结果"></el-input></div>
          <div> <el-button type="danger">提交</el-button></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FeedBack',
  data () {
    return {
      options: [
        {value: '图层朋友圈', label: '图层朋友圈'},
        {value: '社群', label: '社群'},
        {value: '小红书', label: '小红书'},
        {value: '微博', label: '微博'},
        {value: '微信公众号', label: '微信公众号'},
        {value: '抖音', label: '抖音'},
        {value: '快手', label: '快手'},
        {value: '淘宝达人', label: '淘宝达人'},
        {value: '淘宝直播', label: '淘宝直播'},
        {value: '媒体邀约', label: '媒体邀约'}
      ],
      value: '',
      username: '',
      contact: ''
    }
  }
}
</script>

<style scoped>
  .Feedback{display: flex;justify-content: center;margin: 50px auto}
  .Feedback >div{margin: 0 5px}
  .feedwen{color: #fd3400;line-height: 38px}
</style>
