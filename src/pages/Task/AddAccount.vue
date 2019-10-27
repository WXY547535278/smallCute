<template>
  <div class="account">
    <ComHeadNoNav></ComHeadNoNav>
    <div class="container">
      <div class="title">账号入库</div>
      <div class="info">
        <span class="rectangle"></span>
        <span style="font-size: 17px">账号基本信息</span>
        <span><img src="/static/img/logo-icon/sina.png"
               alt=""></span>
        <span>{{name}}</span>
      </div>
      <el-form ref="form"
               :model="postForm"
               label-width="80px"
               style="margin: 0 100px;">
        <el-form-item label="微信昵称">
          <el-input v-model="postForm.weChat"
                    placeholder="请输入联系人手机"></el-input>
        </el-form-item>
        <el-form-item label="头像:">
          <el-upload class="avatar-uploader"
                     :action="upload_url"
                     :headers="upload_head"
                     :show-file-list="false"
                     :on-success="upload_success_headImg"
                     :before-upload="beforeAvatarUpload">
            <img v-if="headImg"
                 :src="headImg"
                 class="avatar">
            <i v-else
               class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip"
                 class="el-upload__tip"
                 style="color:gray">请上传25M以内的图片</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="postForm.name"
                    placeholder="请输入您的真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-input v-model="postForm.label"
                    placeholder="请输入您的标签，直接回车"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-select v-model="postForm.area"
                     placeholder="请选择您的地区">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="好友数">
          <el-input v-model="postForm.friend"
                    placeholder="请输入您的好友数"></el-input>
        </el-form-item>
        <el-form-item label="好友数截图上传:">
          <el-upload class="avatar-uploader"
                     :action="upload_url"
                     :headers="upload_head"
                     :show-file-list="false"
                     :on-success="upload_success_friendImg"
                     :before-upload="beforeAvatarUpload">
            <img v-if="friendImg"
                 :src="friendImg"
                 class="avatar">
            <i v-else
               class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip"
                 class="el-upload__tip"
                 style="color:gray">请上传25M以内的图片</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="postForm.price"
                    placeholder="请输入价格"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea"
                    v-model="postForm.desc"
                    resize="none"
                    placeholder="微博知名段子手/大V/星座达人，致力于网络新起事物、热点事件、热门电影等相关的创作，内容有自己的独特视角；出版作品《xxxx》等。若您不接受原创合作，可写：账号支持转发，可支持下微任务防屏蔽，可购买粉丝头条等"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit"
                     style="width: 400px;margin-left:250px">提交</el-button>
        </el-form-item>
      </el-form>
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
  data () {
    return {
      upload_url: '', // 上传地址
      upload_head: {
        Authorization: ''
      }, // 上传请求头
      fileList: [],
      name: '新浪微博',
      postForm: {
        weChat: '',
        headImg: '',
        name: '',
        label: '',
        area: '',
        friend: '',
        friendImg: '',
        price: '',
        desc: ''
      },
      headImg: '', // 头像
      friendImg: '' // 好友数图片
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    // 头像上传
    upload_success_headImg (res, file) {
      // 图片上传
      this.headImg = URL.createObjectURL(file.raw)
    },
    // 好友数图片上传
    upload_success_friendImg (res, file) {
      // 图片上传
      this.friendImg = URL.createObjectURL(file.raw)
    },
    // 上传图片前执行的操作
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt25M = file.size / 1024 / 1024 < 25

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt25M) {
        this.$message.error('上传头像图片大小不能超过 25MB!')
      }
      return isJPG && isLt25M
    }
  }
}
</script>
<style scope>
.account {
  background-color: #f5f5f5;
}
.container {
  box-sizing: border-box;
  width: 1200px;
  height: 1247px;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 30px;
}
.container .title {
  /* margin-top: 30px; */
  /* font-weight: 600; */
  margin-left: 30px;
  font-size: 24px;
  transform: translateY(30px);
}
.container .info {
  margin-top: 60px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-bottom: 40px;
  /* font-size: 24px; */
}
.container .info img {
  margin: 0 14px;
  width: 20px;
  height: 20px;
  transform: translateY(2px);
}
.container .info .rectangle {
  display: inline-block;
  width: 7px;
  height: 24px;
  background-color: #fd3400;
  margin-right: 30px;
}
/* 图片上传 */
.avatar-uploader .el-upload {
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #e9ebec;
}
.avatar-uploader .el-upload:hover {
  border-color: #b1b1b3;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 128px;
  height: 128px;
  line-height: 128px;
  text-align: center;
}
.avatar {
  width: 128px;
  height: 128px;
  display: block;
}
</style>