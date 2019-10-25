import Comheads from './ComHead.vue'
const ComHead = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('ComHead', Comheads)
  }
}
export default ComHead
