<template>
  <div class="second">
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
      </div>
      <div>
      </div>
    </div>
    <div class="tableBox">
      <div style="text-align:right;margin-right:150px">
        注<span style="color: red">*</span>为必填项
      </div>
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="200px"
               class="demo-ruleForm"
               >
        <el-form-item label="平台"
                      prop="resource"
                      style="width: 1100px;">
          <el-radio-group v-model="ruleForm.platform"
                          v-for="(item,index) in platform"
                          :key="index"
                          style="padding:10px;">
            <el-radio :label="item"
                      @change="changePlatform(index)"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="预约需求名称"
                      prop="name">
          <el-input v-model="ruleForm.name"
                    style="width: 800px;"
                    placeholder="请为您的预约取一个好记的名字，方便您日后查询，请不要超过20个汉字！"></el-input>
        </el-form-item>
        <div style="text-align:right; color: #229fff;"
             ><span @click="showProductDetail" style="cursor: pointer;margin-right:170px">看看别人怎么写>></span></div>
        <el-form-item label="预约需求描述"
                      prop="requirements">
          <el-input v-model="ruleForm.requirements"
                    type="textarea"
                    style="width: 800px;"
                    resize="none"
                    placeholder="介绍下您本次推广的产品、品牌或推广内容，让名人/媒体对您本次推广活动有大概的了解，请忽超过5000字"></el-input>
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
        <el-form-item label="预计结果反馈时间"
                      prop="mediumTime">
          <el-date-picker v-model="ruleForm.mediumTime"
                          type="date"
                          placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="推广产品所属行业"
                      prop="productIndustry">
          <el-select v-model="ruleForm.region"
                     placeholder="请选择产品行业">
            <el-option label="行业一"
                       value="shanghai"></el-option>
            <el-option label="行业二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="附件"
                      prop="annex">
          <el-upload class="upload-demo"
                     :action="upload_url"
                     :headers="upload_head"
                     :multiple=false
                     :limit=10
                     :on-exceed="handleExceed"
                     :on-success="upload_success_file"
                     :file-list="fileList">
            <el-button size="small"
                       type="inof">点击上传</el-button>
            <div slot="tip"
                 class="el-upload__tip">文件不大于50M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="推广产品所属行业"
                      prop="quotationName">
          <el-input v-model="ruleForm.quotationName"
                    style="width: 800px;"
                    placeholder="输入你想获取的报价的名称，例：线下出席活动+发布一条朋友圈"></el-input>
        </el-form-item>
        <el-form-item v-for="(domain, index) in dynamicValidateForm.domains"
                      label=""
                      :key="index"
                      prop="quotationName'">
          <el-input v-model="ruleForm.quotationName"
                    style="width: 800px;"
                    placeholder="输入你想获取的报价的名称，例：线下出席活动+发布一条朋友圈"></el-input>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <div>
          <span @click="addDomain"
                style="cursor: pointer;margin-left:200px;color:blue">+添加想要获取的报价名称</span>
        </div>
        <el-form-item style="margin: 50px 300px;">
          <el-button type="primary"
                     style="height: 50px; width: 200px;"
                     @click="submitForm('ruleForm')">下一步</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">取消填写</el-button> -->
        </el-form-item>
      </el-form>
    </div>
    <ComFoot></ComFoot>
    <!-- 看别人怎么写产品/品牌介绍 -->
    <el-dialog width="60%"
               title="产品/品牌介绍 "
               :visible.sync="productDetail"
               append-to-body>
      <div class="product-info">
        <div>例1：介绍本次推广的产品</div>
        <div class="info-content">1、产品介绍：xxxxxx</div>
        <div class="info-content">2、产品链接：www.xxxxxx.com</div>
      </div>
      <div class="product-info">
        <div>例2：介绍本次推广的品牌</div>
        <div class="info-content">xxxxxx</div>
      </div>
      <div class="product-info">
        <div>例3：本次推广内容概述</div>
        <div class="info-content">xxxxx</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      upload_url: '', // 请求的url
      upload_head: {
        Authorization: ''
      }, // 上传请求头
      fileList: [], // 文件上传
      active: 1,
      productDetail: false, // 看别人怎么写产品介绍详情
      ruleForm: {
        name: '', // 预约需求名称
        platform: '', // 平台
        cooperation: '', // 合作形势
        extensionTime: '', // 推广时间
        mediumTime: '', // 媒介反馈时间
        requirements: '', // 需求描述
        annex: '', // 附件
        quotationName: '', // 报价名称
        productIndustry: '' // 推广产品所属行业
      },
      rules: {
        name: [
          { required: true, message: '请输入预约需求名称', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
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
        ],
        productIndustry: [
          { required: true, message: '请选择产品所属行业', trigger: 'change' }
        ]
      },
      // 平台
      platform: ['圈层朋友圈', '社群', '小红书', '微博', '微信公众号', '抖音', '快手', '淘宝达人', '淘宝直播', '媒体邀约'],
      dynamicValidateForm: { // 动态增加表格
        domains: [{
          value: ''
        }]
      }
    }
  },
  methods: {
    // 文件上传
    handleExceed (files, fileList) {
      this.$message.warning('最多只可上传10个文件！')
    },
    changePlatform (index) {
      console.log('选择平台', index)
    },
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
      this.$router.push('/Third')
    },
    // 取消填写
    // resetForm (formName) {
    //   this.$refs[formName].resetFields()
    // }
    // 删除添加的表格
    removeDomain (item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    // 添加表格
    addDomain () {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    },
    // 查看别人怎么写
    showProductDetail () {
      this.productDetail = true
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
  padding: 20px 100px 0 100px;
  width: 100%;
  height: 100px;
  border-top: 2px solid rgb(221, 220, 220);
}
.product-info {
  margin-top: 30px;
}
.product-info:first-child {
  margin-top: 0px;
}
.info-content {
  margin-top: 10px;
  font-size: 13px;
}
/* 表单盒子 */
.tableBox {
  width: 70%;
  min-width: 1200px;
  margin: 0 auto;
}
</style>
