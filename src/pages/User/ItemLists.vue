<template>
  <div class="">
  
      <ComHead title="项目管理"></ComHead>
      <!--我的资料-->
      <el-tabs tab-position="left" class="win120" @tab-click="handleClick"  v-model="activeName" >
        <el-tab-pane label="我的资料"  style="margin-top:30px;"   name="ItemLists"  data-val="ItemLists">                            
             <div class="win1201"  >我的资料</div>
           
             <div class="win1201"  style="margin-top:10px;margin-bttom:30px;">  <div class="b"></div>
             企业信息编辑<hr>
             <el-form label-position="right" label-width="100px" :rules="rules">
               
              <el-form-item label="公司名称:" prop="name" >
                <el-input placeholder="请输入20-50个字符（英文、中文、数字）" v-model="input.name"></el-input>
              </el-form-item>
              <el-form-item label="联系人姓名:"  prop="name1">
                <el-input   placeholder="请填写真实姓名（英文、中文、数字）" v-model="input.name1"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="psd">
                <el-input placeholder="密码由9-22位字母和数字组成，字母区分大小写" v-model="input.psd"  style="width:500px;"></el-input>
              </el-form-item>
              <el-form-item label="重复密码:" prop="psd1">
                <el-input placeholder="密码由9-22位字母和数字组成，字母区分大小写" v-model="input.psd2"  style="width:500px;"></el-input>
              </el-form-item>              
              <el-form-item label="手机号:" prop="phone">
                <el-input placeholder="请输入联系手机号" v-model="input.phone"></el-input>
              </el-form-item> 
              <el-form-item label="验证码:" prop="code" >
                <el-input  v-model="input.code" style="width:250px;"></el-input><span class="code">免费获取验证码</span>
              </el-form-item> 
              <el-form-item label="邮箱:" prop="email">
                <el-input placeholder="请输入联系人邮箱" v-model="input.email"  style="width:500px;"></el-input>
              </el-form-item> 
              <el-form-item label="微信:" prop="weixin">
                <el-input placeholder="请输入联系人微信" v-model="input.weixin"  style="width:500px;"></el-input>
              </el-form-item> 
              <el-form-item label="QQ:" prop="qq">
                <el-input placeholder="请输入QQ" v-model="input.qq"  style="width:500px;"></el-input>
             
              </el-form-item> 
              <el-form-item>
                <el-button type="primary">提交</el-button>
            
              </el-form-item>             
            </el-form>                                                                        
             
             
             
             
             </div>
        </el-tab-pane>
        
        <el-tab-pane label="项目管理"  name="project"  data-val="project"><div class="win120">项目管理</div></el-tab-pane>
        <!--财务管理-->    
        <el-tab-pane label="财务管理" style="margin-top:30px;" data-val="Finance" name="Finance"></el-tab-pane>                              


      </el-tabs>
      
      <ComFoot></ComFoot>
      
  </div>
</template>

<script>
export default {
  name: 'ItemLists',
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
            { required: true, message: '公司名称', trigger: 'blur' },
          ],
          name1: [
            { required: true, message: '联系人姓名', trigger: 'blur' }
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
    handleClick (tab, event) {
       var data = tab.$el.dataset.val
      console.log
      switch (data) {
        case 'Finance':
          this.$router.push('/Finance')
          console.log(1);
          break
        case 'project':
          this.$router.push('/project')
          break          
        case 'ItemLists':
          this.$router.push('/ItemList')
          break
      }  
    }


  }
}
</script>

<style scoped>
.el-tabs--left .el-tabs__item.is-left{font-size:15px;}
.win1201{margin-left:50px;}
.b{width:3px;height:15px; background:#FD3400;display:inline-block;margin-right:10px;line-height:10px;    position: relative; top: 1px;}
.code{margin-left:10px;color:#70AAFD;}
.head_content div{display:inline-block; width:20%;}
.tr{color:#7E7E7E;}
.content_foot div{display:inline-block; width:15%;}
</style>
