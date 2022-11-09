// .vuepress/config.js

const path = require('path')
console.log(path.resolve(__dirname, '../../src'))
module.exports = {
  base: '/awesome-fontend/',
  title: 'awesome-fontend',
  description: '开箱即用的组件库文档', //描述
  port: 1080,
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }] // 增加一个自定义的 favicon
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      'demo-block': {
        'hide-text': '隐藏代码',
        'show-text': '显示代码',
        'copy-text': '复制代码',
        'copy-success': '复制成功'
      }
    },
  },
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github地址', link: 'https://github.com/ShuangDa1018/awesome-fontend' },
      { text: 'Npm地址', link: 'https://www.npmjs.com/package/awesome-fontend' }
    ],
    sidebar: {
      '/componentDocs/': [
        { title: '安装', path: 'guide/install' },
        { title: '快速上手', path: 'guide/quick-start' },
        {
          title: 'Svg',
          collapsable: false,
          children: [
            { title: 'loading', path: 'svg/loading' },
            { title: 'animate', path: 'svg/animate' },
            { title: 'icon', path: 'svg/icon' }
          ]
        },
        // isDev?{title:'atest',path: 'atest',},// 测试组件打开用()
        { title: 'copy 复制', path: 'copy' },
        {
          title: 'codeopen',
          collapsable: false,
          children: [
            { title: 'svg', path: 'codeopen/svg' },
            { title: 'animate', path: 'svg/animate' },
            { title: 'icon', path: 'svg/icon' }
          ]
        },
      ]
    }
  },
  plugins: [
    // 官方回到顶部插件
    '@vuepress/back-to-top',
    //官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
    ['@vuepress/medium-zoom', { selector: 'img' }],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        // 设置 `platform` 而不是 `api` 我这里是在github平台
        platform: 'github',

        // owner与repo配置 https://github.com/${owner}/${repo}
        // 例如我的仓库地址为https://github.com/1011cat/shotCat_doc 则owner为1011cat，repo为shotCat_doc
        owner: 'ShuangDa1018',
        repo: 'awesome-fontend',

        // 填写自己的OAuth App 信息。详见https://vssue.js.org/zh/options/#repo
        clientId: '5b7c3d23f228ad6d497c',
        clientSecret: 'bfdab50ac2f22535844ac77d6484cc8c0274a8d3',
        locale: 'zh', //使用的语言  这里是简体中文
        baseURL: 'https://github.com'
      }
    ], //平台的 base URL
    ['@vuepress/last-updated'],
    ['demo-container']
    // [require('../vue-demo')]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
        '@alias':  path.resolve(__dirname, 'public'),
      }
    }
  }
}
