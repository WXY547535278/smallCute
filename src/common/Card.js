import Cards from './Card.vue'
const Card = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('Card', Cards)
  }
}
export default Card
