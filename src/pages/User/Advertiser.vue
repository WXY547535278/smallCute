<template>
  <div class="">
  
      <ComHead title="流量主"></ComHead>
         <br><hr >
      <!--个人注册-->
   
      <div class="content">

        <div class="bd">
          <el-form label-position="right" label-width="100px" :rules="rules">
            
          <el-form-item label="用户名:" prop="name" >
            <el-input placeholder="请输入20-50个字符（英文、中文、数字）" v-model="input.name"></el-input>
          </el-form-item><br>
          <el-form-item label="公司名称:"  prop="name1">
            <el-input   placeholder="请填写真实姓名（英文、中文、数字）" v-model="input.name1"></el-input>
          </el-form-item><br>          
          <el-form-item label="联系人姓名:"  prop="name1">
            <el-input   placeholder="请填写真实姓名（英文、中文、数字）" v-model="input.name1"></el-input>
          </el-form-item><br>
          <el-form-item label="密码:" prop="psd">
            <el-input placeholder="密码由9-22位字母和数字组成，字母区分大小写" v-model="input.psd"  style="width:500px;"></el-input>
          </el-form-item><br>
          <el-form-item label="重复密码:" prop="psd1">
            <el-input placeholder="密码由9-22位字母和数字组成，字母区分大小写" v-model="input.psd2"  style="width:500px;"></el-input>
          </el-form-item>  <br>            
          <el-form-item label="手机号:" prop="phone">
            <el-input placeholder="请输入联系手机号" v-model="input.phone"></el-input>
          </el-form-item> <br>
          <el-form-item label="验证码:" prop="code" >
            <el-input  v-model="input.code" style="width:250px;"></el-input><span class="code"> 免费获取验证码</span>
          </el-form-item> 
          <div class="box">
            <input type="checkbox">
           <span>我已阅读并同意相关 <span style="color:#FD6541;">《服务条款》</span></span>
          </div>
          <el-form-item>
              <el-button type="primary">提交</el-button>
              <el-button type="danger" plain>重新填写</el-button>
            </el-form-item>             
          </el-form>                                                                        
    </div>          
 


      </div>
      
      <ComFoot ></ComFoot>
      
  </div>
</template>

<script>
export default {
  name: 'Advertiser',
  data () {
    return {
          activeName: 'ItemLists',
          input1:{
            text1:''

          },
          input:{
            name:'',
            name1:'',
            email:'',
            phone:'',
            psd:'',
            psd1:'',
            qq:'',
            code:'',
            weixin:'',
          },
          rules: {
          name: [
            { required: true, message: '用户名', trigger: 'blur' },
          ],
          name1: [
            { required: true, message: '真实姓名', trigger: 'blur' }
          ],
          code: [
            {  required: true, message: '验证码', trigger: 'blur' }
          ],
          psd1: [
            {  required: true, message: '重复密码', trigger: 'blur' }
          ],
          psd: [
            { required: true, message: '密码', trigger: 'blur' }
          ],
          phone: [
            {  required: true, message: '手机号',  }
          ],
          weixin: [
            {  message: '请填写微信', trigger: 'blur' }
          ],
          email: [
            {  }
          ] ,
          qq: [
            {  trigger: 'blur' }
          ]                        


        }
    }
  },
  methods: {
        tz:function(){
            this.$router.push('/mechanism')
        } 
        
        }
  

}
</script>

<style scoped>

.content{width:62.5%;height:740px;border:1px solid #E4E4E4;margin:0 auto; margin-top:30px;}

.code{margin-left:10px;color:#70AAFD;}
.bd{width:80%;margin: 30px auto;}
.box{margin-left:100px;margin-bottom: 30px;}

</style>
