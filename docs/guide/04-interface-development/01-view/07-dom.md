# DOM 实例

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| DOM 引用 | [useTemplateRef()](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) | - | [el](https://v2.cn.vuejs.org/v2/api/#el) |
| DOM 实例 | - | [$el](https://vuejs.org/api/component-instance.html#el) | [$el](https://v2.cn.vuejs.org/v2/api/#vm-el) |
| - | - | [$parent](https://vuejs.org/api/component-instance.html#parent) | [$parent](https://v2.cn.vuejs.org/v2/api/#vm-parent) |
| - | - | - | [$children](https://v2.cn.vuejs.org/v2/api/#vm-children) |
| - | - | [$root](https://vuejs.org/api/component-instance.html#root) | [$root](https://v2.cn.vuejs.org/v2/api/#vm-root) |
| 获取DOM | - | [$refs](https://vuejs.org/api/component-instance.html#refs) | [$refs](https://v2.cn.vuejs.org/v2/api/#vm-refs) |
| 立即获取 | [nextTick()](https://vuejs.org/api/general.html#nexttick) | [$nextTick()](https://vuejs.org/api/component-instance.html#nexttick) | [Vue.nextTick()](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) / [$nextTick()](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) |
| - | - | [$forceUpdate()](https://vuejs.org/api/component-instance.html#forceupdate) | [$forceUpdate()](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate) |

## 立即更新 DOM

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

- https://vuejs.org/api/general.html#nexttick
- https://v2.cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97
