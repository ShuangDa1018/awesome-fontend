(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{480:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("h4",{attrs:{id:"_1-安装组件库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装组件库"}},[t._v("#")]),t._v(" 1.安装组件库")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i awesome-fontend \n")])])]),s("h4",{attrs:{id:"_2-引用组件库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用组件库"}},[t._v("#")]),t._v(" 2.引用组件库")]),t._v(" "),s("h4",{attrs:{id:"完整引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整引入"}},[t._v("#")]),t._v(" 完整引入")]),t._v(" "),s("p",[t._v("在 main.js 中写入以下内容：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js 完整引入 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-fontend/lib/theme-chalk/index.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUiS "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-fontend'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUiS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h5",{attrs:{id:"按需引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按需引入"}},[t._v("#")]),t._v(" 按需引入")]),t._v(" "),s("p",[t._v("首先，安装 babel-plugin-component,借助该插件，我们可以只引入需要的组件，以达到减小项目体积的目的。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" babel-plugin-component "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("p",[t._v("然后，将 .babelrc 或 babel.config.json 文件 修改,.babelrc举例子（ps:element官网还不改这的代码，坑小白）：")]),t._v(" "),s("div",{staticClass:"language-JS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .babelrc")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"presets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"modules"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"component"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"libraryName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"awesome-fontend"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"styleLibraryName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"theme-chalk"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("babel-plugin-component的作用为编译源码如下（彩蛋：某些时候你可能会想用下面方式引入哦~~~~~哈哈）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CountUp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" form "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-fontend'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译成下面这种")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CountUp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-fontend/lib/count-up.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-fontend/lib/theme-chalk/count-up.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js 按需引入 (组件，方法，指令3种)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CountUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Print，Dialogdrag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-fontend'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CountUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <els-countUp/>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Print "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Print "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.$Print('#app')")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dreactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dialogdrag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Dialogdrag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v-dialogdrag")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("h3",{attrs:{id:"完整组件列表和引入方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整组件列表和引入方式"}},[t._v("#")]),t._v(" 完整组件列表和引入方式")]),t._v(" "),s("p",[t._v("完整组件列表和引入方式（完整组件列表以 /packages/lib/index.js 为准）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Chat\nCountUp\nDialogdrag\nForm\nFullscreen\nHighlightCode\nKeyboard\nMagnifie\nNprogress\nPrint\nQrcode\nScreenshot\nSign\nSticker\nTable\nTextEllipsis\nTyper\nVideo\nWatermark\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" form "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-fontend'")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Chat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CountUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HighlightCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Keyboard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Magnifie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qrcode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Sign"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Sticker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextEllipsis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Typer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Print "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Print\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Nprogress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Nprogress\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Watermark "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Watermark\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Screenshot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Screenshot\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Fullscreen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Fullscreen\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dialogdrag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Dialogdrag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),s("p",[t._v("至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。")]),t._v(" "),s("start"),t._v(" "),s("vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);