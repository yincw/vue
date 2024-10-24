# DOM 实例

- el
  - $el
  - $root
  - $parent
- render
- renderError
- `<template>`
    - template
    - useTemplateRef
- ref
  - $refs
- $forceUpdate()
- $nextTick()

默认情况下，state/data 的更新是同步的，但渲染是异步的。

> 当你在 Vue 中改变响应状态时，产生的 DOM 更新不会同步应用。相反，Vue 会缓冲它们，直到 “next tick”，以确保每个组件只更新一次，无论你做了多少状态更改。
> 
> nextTick() 可以在状态更改后立即使用，以等待 DOM 更新完成。您可以将回调作为参数传递，也可以等待返回的 Promise。

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { ref, watch } from 'vue'
const screenWidth = ref(0)

// 监听并更新
watch(screenWidth, (newVal) => {
  if (newVal <= 1000) {
    // 1440
    emit('onResize', {
      lineTotal: 4
    })
  } else {
    // 1920
    emit('onResize', {
      lineTotal: 6
    })
  }
})

</script>

<template>
  <div class="list">
  </div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  data() {
    return {};
  },
  computed {},
  watch: {},
}
</script>

<template>
  <div class="list">
  </div>
</template>
```

:::

## 同步更新状态

- nextTick()
- Vue.nextTick()
- this.$nextTick()


- DOM 实例
- DOM 实例引用


- https://vuejs.org/api/general.html#nexttick
- https://v2.cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97
