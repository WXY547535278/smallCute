// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// ElementUI ui框架
import ElementUI from 'element-ui'
import '../theme/index.css'

// 公共css样式文件
import '../static/css/style.css'

// 公共组件
import ComHead from './common/ComHead'
import ComFoot from './common/ComFoot'
import FeedBack from './common/FeedBack'
import Handover from './common/Handover'
import Card from './common/Card'  
import Activityh from './common/Activityh'

Vue.use(ComHead)
Vue.use(ComFoot)
Vue.use(FeedBack)
Vue.use(Handover)
Vue.use(Card)
Vue.use(Activityh)

Vue.use(ElementUI)

Vue.config.productionTip = false

// 设置页面标题 关键字 简介
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
