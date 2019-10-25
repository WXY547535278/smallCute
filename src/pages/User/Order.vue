<template>
    <div class="home">
        <ComHead title="活动报名大厅"></ComHead>
        <Activityh activeName="third"></Activityh>
        <div class="head1 ">
            <span style="width:140px;color:white;" class="active">我报名的活动</span>
            <span  style="width:140px;">寻购我的订单</span>
            <span  style="width:200px;">已完成/历史执行订单</span>
        </div>
        <div class="content">
          <span class="input">
           账号：
           <input v-model="input"  style="width:100px;height:30px; border-radius: 5px; border:1px solid #D1D1D1;">
          </span>

           <span class="input">
           是否支持预约：
           <select style="width:100px;height:30px; border-radius: 5px; border:1px solid #D1D1D1;">
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
           <el-button type="primary" class="cx" size="small" >查询</el-button>
          </span>
        </div>
        <div class="foot1">
          <div class="foot_head">
            <span>账号数：<span style="color:#FD3400;">0</span>个</span>
          </div>
          <div class="b_head">
            <div><input type="checkbox" style="margin-right:50px;margin-top:45px;">标题</div>
            <div>待执行</div>
            <div>执行时间</div>
            <div>结案报告待上传</div>
            <div>订单详细</div>
          </div>
        </div>
        <img src="/static/img/errorr.png" style="width:300px;margin-left:40%;">
        <ComFoot></ComFoot>
    </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      input: ''
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head1{width:1200px;margin:20px auto; border-bottom: 2px solid #FD3400; }
.head1 span{margin-right:30px;    height:50px;   display: inline-block; text-align:center; line-height:50px; color:black; margin-left:15px;} 
.head1 span:hover{margin-right:30px;   background:#FD3400;  height:50px;  display: inline-block;  color:white; }
.head1 span a:visited {margin-right:30px;   background:#FD3400;  height:50px;  display: inline-block;  color:white; }
.active{ margin-right:30px;   background:#FD3400;  height:50px;  display: inline-block;  color:white;}
.content{width:1200px;margin:0 auto; border:1px solid #F0F0F0; height:50px;position: relative;  }
.input{margin-left:10px; line-height:50px; }
.cx{position: absolute; right:10px; top:10px;}
.foot1{width:1200px;margin:0 auto; background:#F6F6F6; height:110px; margin-top:10px;}
.foot_head{line-height:40px;padding-left:30px; border-bottom: 4px solid #FD3400;}
.b_head{ display: flex;height: 66px; width:100%;color:#454545; line-height:100px; border-bottom: 3px solid #FD3400;}
.b_head div{width:20%;text-align:center;}
</style>

