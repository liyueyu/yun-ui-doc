import Vue from 'vue'
import './css/base.css'
import './css/common.less'
// import './css/github-gist.css'
import 'github-markdown-css'
import router from './router'
// 引入yun-ui样式
import 'yun-ui/dist/yun/index.css'
import {
    Root
} from 'pages'

/* eslint-disable no-new */
Root.router = router
new Vue(Root).$mount('#app')
