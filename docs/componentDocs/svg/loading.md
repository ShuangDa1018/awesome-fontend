# chat 复制

js 实现复制功能，支持报错 

::: demo 
```vue 
<template>
  <div style="backgournd:red">
    <img :src="'@/svg/loading/loading-cylon-red.svg'" heigt="100" width="100" />
    <img src="/logo.jpg" heigt="100" width="100" />
    <el-button @click="handleCopy" type="success">点击复制</el-button>
    <h4>{{ text }}</h4>
  </div>
</template>

<script>
console.log(require)
console.log(require.context)
// const arr = requireContext.keys().map(requireContext)
// return arr.filter(module => module.default).map(item => item.default)
// })(require.context('@/svg/loading', false, /^\.\/.*\.svg$/))

export default {
  data() {
    return {
      text: '敲20年后代码的我是怎么样的我'
    }
  },
  methods: {
    handleCopy() {}
  }
}
</script>
```

:::

<start />
<vssue />
