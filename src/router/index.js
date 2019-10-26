import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import AddTask from '@/pages/Task/AddTask'
import AddAccount from '@/pages/Task/AddAccount'
import First from '@/pages/CreateActivity/First'
import Second from '@/pages/CreateActivity/Second'
import Third from '@/pages/CreateActivity/Third'
import ItemList from '@/pages/User/ItemLists'
import Layer from '@/pages/TypeList/Layer'
import Flock from '@/pages/TypeList/Flock'
import RedBook from '@/pages/TypeList/RedBook'
import Weibo from '@/pages/TypeList/Weibo'
import Tencent from '@/pages/TypeList/Tencent'
import Vibrato from '@/pages/TypeList/Vibrato'
import AAuto from '@/pages/TypeList/AAuto'
import Taobaoperson from '@/pages/TypeList/Taobaoperson'
import Taobaolive from '@/pages/TypeList/Taobaolive'
import Media from '@/pages/TypeList/Media'
import NewsCont from '@/pages/Article/NewsCont'
import Finance from '@/pages/User/Finance'
import project from '@/pages/User/project'
import mechanism from '@/pages/User/mechanism'
import register from '@/pages/User/register'
import Advertiser from '@/pages/User/Advertiser'
import activity from '@/pages/User/activity'
import Order from '@/pages/User/Order'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Order',
    meta: { title: '小可爱-我的订单管理' },
    name: 'Order',
    component: Order
  },
  {
    path: '/activity',
    meta: { title: '小可爱-活动报名大厅' },
    name: 'activity',
    component: activity
  },
  {
    path: '/Advertiser',
    meta: { title: '小可爱-注册-广告主' },
    name: 'Advertiser',
    component: Advertiser
  },
  {
    path: '/mechanism',
    meta: { title: '小可爱-注册-机构' },
    name: 'mechanism',
    component: mechanism
  },
  {
    path: '/register',
    meta: { title: '小可爱-注册-个人' },
    name: 'register',
    component: register
  },
  {
    path: '/project',
    meta: { title: '小可爱-项目管理' },
    name: 'project',
    component: project
  },
  {
    path: '/Finance',
    meta: { title: '小可爱-财务管理' },
    name: 'Finance',
    component: Finance
  },
  {
    path: '/',
    meta: { title: '小可爱-首页' },
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    meta: { title: '小可爱-首页' },
    name: 'Home',
    component: Home
  },
  {
    path: '/AddTask',
    meta: { title: '小可爱-发布活动' },
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/AddAccount',
    meta: { title: '小可爱-添加账号' },
    name: 'AddAccount',
    component: AddAccount
  },
  {
    path: '/first',
    meta: { title: '小可爱-创建预约活动第一步' },
    name: 'First',
    component: First
  },
  {
    path: '/second',
    meta: { title: '小可爱-创建预约活动第二步' },
    name: 'Second',
    component: Second
  },
  {
    path: '/third',
    meta: { title: '小可爱-创建预约活动第三步' },
    name: 'Third',
    component: Third
  },
  {
    path: '/ItemList',
    meta: { title: '小可爱-项目管理' },
    name: 'ItemList',
    component: ItemList
  },
  {
    path: '/layer',
    meta: { title: '小可爱-图层朋友圈' },
    name: 'Layer',
    component: Layer
  },
  {
    path: '/Flock',
    meta: { title: '小可爱-社群' },
    name: 'Flock',
    component: Flock
  },
  {
    path: '/RedBook',
    meta: { title: '小可爱-小红书' },
    name: 'RedBook',
    component: RedBook
  },
  {
    path: '/Weibo',
    meta: { title: '小可爱-微博' },
    name: 'Weibo',
    component: Weibo
  },
  {
    path: '/Tencent',
    meta: { title: '小可爱-微信公众号' },
    name: 'Tencent',
    component: Tencent
  },
  {
    path: '/Vibrato',
    meta: { title: '小可爱-抖音' },
    name: 'Vibrato',
    component: Vibrato
  },
  {
    path: '/AAuto',
    meta: { title: '小可爱-快手' },
    name: 'AAuto',
    component: AAuto
  },
  {
    path: '/Taobaoperson',
    meta: { title: '小可爱-淘宝达人' },
    name: 'Taobaoperson',
    component: Taobaoperson
  },
  {
    path: '/Taobaolive',
    meta: { title: '小可爱-淘宝直播' },
    name: 'Taobaolive',
    component: Taobaolive
  },
  {
    path: '/Media',
    meta: { title: '小可爱-媒体邀约' },
    name: 'Media',
    component: Media
  },
  {
    path: '/NewsCont',
    meta: { title: '文章详情' },
    name: 'NewsCont',
    component: NewsCont
  }
  ]
})
