webpackJsonp([0,1],{1:function(t,s,n){t.exports=n(29)},29:function(t,s,n){var a,h,e=n(39);h=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(h=a=a.default),"function"==typeof h&&(h=h.options),h.render=e.render,h.staticRenderFns=e.staticRenderFns,t.exports=a},39:function(t,s){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("section",[t._h("h1",["YunUI 前端技术大纲 v1.0"])," ",t._h("h2",["版本：v1.0 时间：2016-10-17"])," ",t._h("h2",["Overview22sd"])," ",t._h("p",["本文将介绍YunUI的安装方式和基本的使用方法。"])," ",t._h("h3",["基础技术框架"])," ",t._h("ol",[t._h("li",[t._h("a",{attrs:{href:"https://vuejs.org/"}},["Vue.js"])])," ",t._h("li",[t._h("a",{attrs:{href:"https://lernajs.io/"}},["Lerna.js"])])," ",t._h("li",["ECMAScript 2015"])," ",t._h("li",[t._h("a",{attrs:{href:"https://webpack.github.io/docs/"}},["Webpack"])])," ",t._h("li",[t._h("a",{attrs:{href:"http://eslint.org/"}},["ESLint"])])])," ",t._h("h3",["文件目录结构"])," ",t._h("pre",[t._h("code",{staticClass:"language-bash"},["CloudHubUI/\t\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##根目录"]),"\n\tbuild/\t\t\t\t\t\t    ",t._h("span",{staticClass:"hljs-comment"},["##webpack构建配置目录"]),"\n\tconfig/\t\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##环境配置文件目录"]),"\n\tdemo/\t\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##demo源文件"]),"\n\tdist/\t\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##构建后的文件"]),"\n\t\t|_ demo/\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##构建后的demo文件"]),"\n\t\t|_ yun/\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##构建后的各个组件代码"]),"\n\tnode_modules/\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##第三方依赖包"]),"\n\tpackages/\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##lerna拆分的组件包源文件"]),"\n\tsrc/\t\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##其他基础公共源文件"]),"\n\tstatic/\t\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##静态资源文件（图片图标等）"]),"\n\t\t|_ demo/\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##demo的静态资源文件"]),"\n\t\t|_ yun/\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##YunUI组件的静态资源文件"]),"\n\t",t._h("span",{staticClass:"hljs-built_in"},["test"]),"/\t\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##测试代码源文件"]),"\n\t.babelrc\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##babel配置文件"]),"\n\t.editorconfig\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##编辑器配置文件"]),"\n\t.eslintignore\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##eslint忽略检查的文件"]),"\n\t.eslintrc\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##eslint配置文件"]),"\n\t.gitignore\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##git忽略文件的配置"]),"\n\tindex.html\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##总入口文件"]),"\n\tlerna.json\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##lerna配置文件"]),"\n\tpackage.json\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##依赖包声明"]),"\n\tREADME.md\t\t\t\t\t\t",t._h("span",{staticClass:"hljs-comment"},["##read me"]),"\n"])])," ",t._h("h2",["Getting Started"])," ",t._h("h4",["I.\tInstall"])," ",t._h("p",[t._h("strong",["npm安装"])," ",t._h("em",["(TODO)"])])," ",t._h("p",["推荐使用npm的方式安装，它能更好地与Webpack等构建工具结合使用。"])," ",t._h("pre",[t._h("code",{staticClass:"language-bash"},["npm install yunui\n"])])," ",t._h("p",[t._h("strong",["CDN"])," ",t._h("em",["(TODO)"])])," ",t._h("p",["可以从静态资源服务器获取最新的资源文件。"])," ",t._h("p",["####II. Start"])," ",t._h("p",[t._h("strong",["引入Yun UI"])])," ",t._h("p",["你可以引入整个Yun UI组件库，或者根据需要引入部分组件。"])," ",t._h("p",["#####完整引入"])," ",t._h("p",["在你的工程目录入口js文件中，写入以下内容："])," ",t._h("pre",[t._h("code",{staticClass:"language-javascript"},["main.js ->\n\n",t._h("span",{staticClass:"hljs-keyword"},["import"])," Vue ",t._h("span",{staticClass:"hljs-keyword"},["from"])," ",t._h("span",{staticClass:"hljs-string"},["'vue'"]),"\n",t._h("span",{staticClass:"hljs-comment"},["/* 引入组件库js文件 */"]),"\n",t._h("span",{staticClass:"hljs-keyword"},["import"])," Yun ",t._h("span",{staticClass:"hljs-keyword"},["from"])," ",t._h("span",{staticClass:"hljs-string"},["'../dist/yun/'"]),"\n",t._h("span",{staticClass:"hljs-comment"},["/* 引入组件库样式文件 */"]),"\n",t._h("span",{staticClass:"hljs-keyword"},["import"])," ",t._h("span",{staticClass:"hljs-string"},["'../dist/yun/index.css'"]),"\n\nVue.use(Yun)\n\n",t._h("span",{staticClass:"hljs-keyword"},["const"])," app = ",t._h("span",{staticClass:"hljs-keyword"},["new"])," Vue({}).$mount(",t._h("span",{staticClass:"hljs-string"},["'#app'"]),")\n\n---------------\nexample.vue ->\n\n<!-- 在vue的template中直接引用即可 -->\n<template>\n    <div>\n        <yun-toast></yun-toast>\n        <yun-button></yun-button>\n    </div>\n</template>\n\n"])])," ",t._h("p",["#####按需引入"])," ",t._h("p",["你可以只安装你需要的组件。这里以安装YunUI的button组件为例："])," ",t._h("pre",[t._h("code",{staticClass:"language-bash"},["npm install yun-button --save-dev\n"])])," ",t._h("p",["安装后在所需的vue文件中进行声明和使用："])," ",t._h("pre",[t._h("code",{staticClass:"language-javascript"},["<template>\n    ",t._h("span",{staticClass:"xml"},[t._h("span",{staticClass:"hljs-tag"},["<",t._h("span",{staticClass:"hljs-name"},["div"]),">"]),"\n        ",t._h("span",{staticClass:"hljs-tag"},["<",t._h("span",{staticClass:"hljs-name"},["yun-button"]),">"]),t._h("span",{staticClass:"hljs-tag"},["</",t._h("span",{staticClass:"hljs-name"},["yun-button"]),">"]),"\n    ",t._h("span",{staticClass:"hljs-tag"},["</",t._h("span",{staticClass:"hljs-name"},["div"]),">"]),"\n",t._h("span",{staticClass:"hljs-tag"},["</",t._h("span",{staticClass:"hljs-name"},["template"]),">"])]),"\n\n<script>\n    ",t._h("span",{staticClass:"hljs-keyword"},["import"])," yunButton ",t._h("span",{staticClass:"hljs-keyword"},["from"])," ",t._h("span",{staticClass:"hljs-string"},["'yunui/button/'"]),"\n\n    ",t._h("span",{staticClass:"hljs-keyword"},["export"])," ",t._h("span",{staticClass:"hljs-keyword"},["default"])," {\n        ",t._h("span",{staticClass:"hljs-attr"},["components"]),": {\n            yunButton\n        }\n    }\n<",t._h("span",{staticClass:"hljs-regexp"},["/script>\n\n"])])])," ",t._h("p",["###增加组件"])," ",t._h("p",[t._h("strong",["I.\t开发"])])," ",t._h("p",["目前在",t._h("code",["package.json"]),"中声明了多个脚本模式，可以通过",t._h("code",["npm run xxx"]),"的方式进行运行，各个命令启动服务如下："])," ",t._h("pre",[t._h("code",{staticClass:"language-bash"},["dev-demo: \n启动demo的本地开发模式，监听http://localhost:8090/\ndev:\n启动组件库的本地开发模式，监听http://localhost:8080/\nbuild:\n编译打包组件库，输出文件目录为：dist/yun/\nbuild-demo:\n编译打包demo页面，可发布并通过http(s)访问，输入文件目录：dist/demo/\nlint:\n执行eslint检查\nunit:TODO\ne2e:TODO\n",t._h("span",{staticClass:"hljs-built_in"},["test"]),":TODO\n"])])," ",t._h("p",[t._h("strong",["II. 测试"])])," ",t._h("p",[t._h("em",["TODO"])])," ",t._h("p",[t._h("strong",["III. 构建"])])," ",t._h("p",["构建demo页面："])," ",t._h("pre",[t._h("code",{staticClass:"language-bash"},["npm run build-demo\n"])])," ",t._h("p",["demo构建后的文件在",t._h("code",["dist/demo"]),"目录下。"])," ",t._h("p",["构建完整组件库代码："])," ",t._h("pre",[t._h("code",{staticClass:"language-bash"},["npm run build\n"])])," ",t._h("p",["完整组件库构建后的文件在",t._h("code",["dist/yun"]),"目录下。"])," ",t._h("p",[t._h("strong",["IV. 发布"]),"\n请提交",t._h("a",{attrs:{href:"https://git-scm.com/docs/git-request-pull"}},["Pull Request"]),"。"])," ",t._h("p",["###代码规范"])," ",t._h("p",["请参考 ",t._h("a",{attrs:{href:"http://eslint.org/"}},["ESLint"])," standard 规范进行书写，并执行",t._h("code",["npm run lint"]),"进行代码检查。"])," ",t._h("p",["###Tips"])," ",t._h("p",["如果你使用的是Webstorm，请在运行",t._h("code",["npm install"]),"之前，在",t._h("code",["Preferences | Editor | File Types | Ignore files and folders"]),"中增加",t._h("code",["node_modules"]),"，避免循环依赖造成的死循环。"])])}]}}});
//# sourceMappingURL=0.af57fd36e95c9a779c75.js.map