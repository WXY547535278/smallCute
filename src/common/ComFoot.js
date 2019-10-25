import Comfoot from './ComFoot.vue'
const ComFoot = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('ComFoot', Comfoot)
  }
}
export default ComFoot
