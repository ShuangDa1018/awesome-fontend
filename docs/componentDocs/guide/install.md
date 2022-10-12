

## npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```sh
npm install awesome-fontend
```

## CDN
目前可以通过 unpkg.com/awesome-fontend 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/awesome-fontend/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/awesome-fontend/lib/index.js"></script>
```
:::tip
我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。
:::

## Hello world
通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。在线演示
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/awesome-fontend/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app">
    <els-count-up :endVal="endVal"></els-count-up>
      <p>Try awesome-fontend</p>
    </el-keyboard>
  </div>
</body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/awesome-fontend/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { endVal: 520520 }
      }
    })
  </script>
</html>
```

<vssue/>