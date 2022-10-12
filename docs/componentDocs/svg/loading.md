# chat 复制


js实现复制功能，支持报错
::: demo 
```vue 
<template>
  <div>
    <img :src="'/login.jpg'"/>
    <el-button @click="handleCopy" type="success">点击复制</el-button>
    <h4>{{ text }}</h4>
  </div>
</template>

<script>
//   const arr = requireContext.keys().map(requireContext)
//   return arr.filter(module => module.default).map(item => item.default)
// })(require.context('../../src', false, /^\.\/.*\.js$/))

export default {
  data() {
    return {
      text: '敲20年后代码的我是怎么样的我',
    };
  },
  methods: {
    handleCopy() {
    },
  },
};
</script>

```
:::

<start />
<vssue />