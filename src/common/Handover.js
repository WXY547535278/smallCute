import Handovers from './Handover.vue'
const Handover = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('Handover', Handovers)
  }
}
export default Handover
