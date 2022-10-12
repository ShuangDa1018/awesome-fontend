# chat 复制


js实现复制功能，支持报错
::: demo 
```vue 
<template>
  <div>
    <el-button @click="handleCopy" type="success">点击复制</el-button>
    <h4>{{ text }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '敲20年后代码的我是怎么样的我',
    };
  },
  methods: {
    handleCopy() {
      let mes = this.$Copy(this.text)
      mes?this.$message.error(mes):this.$message.success('复制成功')
    },
  },
};
</script>

```
:::

<start />
<vssue />