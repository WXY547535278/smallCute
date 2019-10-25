import FeedBacks from './FeedBack.vue'
const FeedBack = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('FeedBack', FeedBacks)
  }
}
export default FeedBack
