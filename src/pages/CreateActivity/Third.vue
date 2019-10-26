<template>
  <div class="">

    <ComHead title="创建预约活动"></ComHead>
    <!--步骤条-->
    <div class="win1201"
         style="margin-top:30px;margin-bttom:30px;">
      <div class="title"><span style="display:block; font-size:14px;transform: translateY(-8px) translateX(8px);">创建预约活动</span></div>
      <div class="stepBox">
        <el-steps :active="active"
                  finish-status="success"
                  align-center>
          <el-step title="选择账号"></el-step>
          <el-step title="填写预约需求"></el-step>
          <el-step title="提交已选账号"></el-step>
        </el-steps>
        <div class="accountNum">
          <span>账号数：</span><span style="color:red">1</span>
        </div>
      </div>
      <div>
        <div class="sx-type">
          <div style="width:20%">
            <el-checkbox v-model="checked">全选</el-checkbox>
          </div>
          <div style="width:20%"><span>账号名称</span></div>
          <div style="width:10%"><span>粉丝数</span></div>
          <div style="width:25%"><span>参考报价</span></div>
          <div style="width:25%"><span>操作</span></div>
        </div>
        <div>
          <div class="pro-box"
               v-for="item in 1"
               :key="item"
               @click="showForm">
            <div class="pro-xuan">
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
            <div class="pro-img"><img src="/static/linshi/touxiang.png"
                   alt=""></div>
            <div class="pro-jianbox">
              <div class="pro-name"><img src="/static/img/logo-icon/pengyouquan.png"
                     alt="">吃货向阳妞妞</div>
              <div class="pro-jian">知名美食博主、瑞丽之星</div>
            </div>
            <div class="pro-cont"
                 style="margin-left:80px;">
              <div class="pro-td">
                <span class="pro-title"
                      style="color: black;margin-left:28px;">5000</span>
              </div>
              <div class="pro-td"
                   style="margin-left:60px;">
                <span class="pro-title">参考报价</span>
                <span class="pro-title"
                      style="color:#fd3400;">￥5000</span>
                <span class="pro-title"
                      style="">价格有效期：2019.09.12</span>
              </div>
              <div class="pro-td"
                   style="margin-left:100px;">
                <span Style="color: #4DA2FF;"><span class="el-icon-s-order"
                        style="color:#fd3400;"></span>添加订单信息并提交</span>
                <span Style="color: #4DA2FF;"><span class="el-icon-delete"
                        style="color:#fd3400;"></span>删除</span>
              </div>
            </div>
          </div>
          <transition name="el-zoom-in-top">
            <el-form :model="ruleForm"
                     :rules="rules"
                     ref="ruleForm"
                     label-width="200px"
                     class="demo-ruleForm"
                     style="margin: 20px 0 0 50px;"
                     v-if="hideForm">
              <el-form-item label="账号名称"
                            prop="name">{{ruleForm.name}}</el-form-item>
              <el-form-item label="合作形势"
                            prop="cooperation">
                <el-radio-group v-model="ruleForm.cooperation">
                  <el-radio label="其他"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="预计推广时间"
                            prop="extensionTime">
                <el-date-picker v-model="ruleForm.extensionTime"
                                type="daterange"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="媒介反馈时间"
                            prop="mediumTime">
                <el-date-picker v-model="ruleForm.mediumTime"
                                type="date"
                                placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="需求描述"
                            prop="requirements">
                <el-input v-model="ruleForm.requirements"
                          type="textarea"
                          style="width: 300"
                          resize="none"></el-input>
              </el-form-item>
              <el-form-item label="附件"
                            prop="annex">
                <el-upload class="upload-demo"
                           :action="upload_url"
                           :headers="upload_head"
                           :multiple=false
                           :limit=1
                           :on-success="upload_success_file"
                           :file-list="fileList">
                  <el-button size="small"
                             type="inof">点击上传</el-button>
                  <div slot="tip"
                       class="el-upload__tip">文件不大于50M</div>
                </el-upload>
              </el-form-item>
              <el-form-item label="想要获取的报价名称"
                            prop="quotationName">
                <el-input v-model="ruleForm.quotationName"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           @click="submitForm('ruleForm')">保存并提交</el-button>
                <el-button @click="resetForm('ruleForm')">取消填写</el-button>
              </el-form-item>
            </el-form>
          </transition>
        </div>
        <div class="foot">
          <div>
            <el-checkbox v-model="checked">已选择账号: <span style="color:red">{{num}}</span>个</el-checkbox>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <span class="button1">继续添加账号</span>
        <span class="button2"
              @click="submitOrders">批量添加订单信息并提交</span>
      </div>
    </div>
    <ComFoot></ComFoot>

  </div>
</template>

<script>
export default {
  name: 'Third',
  data () {
    return {
      upload_url: '', // 请求的url
      upload_head: {
        Authorization: ''
      }, // 上传请求头
      num: '10',
      checked: '',
      active: 2,
      hideForm: false, // 显示填写表单
      ruleForm: {
        name: '吃货向阳妞妞',
        cooperation: '', // 合作形势
        extensionTime: '', // 推广时间
        mediumTime: '', // 媒介反馈时间
        requirements: '', // 需求描述
        annex: '', // 附件
        quotationName: '' // 报价名称
      },
      rules: {
        // name: [
        //   { required: true, message: '账号名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        extensionTime: [
          { type: 'date', required: true, message: '请选择推广日期', trigger: 'change' }
        ],
        mediumTime: [
          { type: 'date', required: true, message: '请选择媒介反馈日期', trigger: 'change' }
        ],
        cooperation: [
          { type: 'array', required: true, message: '请选择合作形势', trigger: 'change' }
        ],
        quotationName: [
          { required: true, message: '请输入报价名称', trigger: 'blur' }
        ],
        annex: [
          { required: true, message: '请选择附件', trigger: 'change' }
        ],
        requirements: [
          { required: true, message: '请输入需求描述', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    showForm () {
      this.hideForm = !this.hideForm
    },
    upload_success_file () {
    },
    // 批量添加提交
    submitOrders () {
      this.$confirm('请选择需要添加订单信息并提交的账号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    // 表单提交
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
.stepBox {
  position: relative;
  box-sizing: border-box;
  /* display: flex;
  align-items: center; */
  padding: 100px 100px;
  width: 100%;
  height: 250px;
  border-top: 2px solid rgb(221, 220, 220);
}
.stepBox .accountNum {
  position: absolute;
  font-size: 12px;
  right: 4px;
  bottom: 4px;
}
.sx-type {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 10p;
  height: 50px;
  border: 1px solid #ededed;
  line-height: 50px;
  padding-left: 30px;
  padding-right: 30px;
  color: #7e7e7e;
  font-size: 15px;
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
  justify-content: flex-start;
  /* width: 800px; */
  /* padding-left: 80px; */
}
.pro-box:hover {
  background: #f5f5f5;
}
.foot {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 10p;
  height: 25px;
  border: 1px solid #ededed;
  line-height: 25px;
  padding-left: 30px;
  padding-right: 30px;
  color: #7e7e7e;
  font-size: 15px;
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
.bottom-button .button1 {
  height: 50px;
  width: 210px;
  border: 1px solid #fd3400;
  color: #fd3400;
  border-radius: 4px;
}
.bottom-button .button2 {
  height: 50px;
  width: 300px;
  background-color: #fd3400;
  color: white;
  border-radius: 4px;
}
</style>
