# DOM 实例

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| DOM 引用 | [useTemplateRef()](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) v3.5 | - | [el](https://v2.cn.vuejs.org/v2/api/#el) |
| DOM 实例 | - | [$el](https://vuejs.org/api/component-instance.html#el) | [$el](https://v2.cn.vuejs.org/v2/api/#vm-el) |
| DOM 实例层级 | - | [$root](https://vuejs.org/api/component-instance.html#root) | [$root](https://v2.cn.vuejs.org/v2/api/#vm-root) |
| - | - | [$parent](https://vuejs.org/api/component-instance.html#parent) | [$parent](https://v2.cn.vuejs.org/v2/api/#vm-parent) |
| - | - | - | [$children](https://v2.cn.vuejs.org/v2/api/#vm-children) |
| 获取DOM | - | [$refs](https://vuejs.org/api/component-instance.html#refs) | [$refs](https://v2.cn.vuejs.org/v2/api/#vm-refs) |
| 立即获取 | [nextTick()](https://vuejs.org/api/general.html#nexttick) | [$nextTick()](https://vuejs.org/api/component-instance.html#nexttick) | [Vue.nextTick()](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) / [$nextTick()](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) |
| - | - | [$forceUpdate()](https://vuejs.org/api/component-instance.html#forceupdate) | [$forceUpdate()](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate) |

# DOM 挂载

`el` 选项提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。

```js
new Vue({
  el: '#app'
})
```

::: warning
提供的元素只能作为挂载点，所有的挂载元素会被 Vue 生成的 DOM 替换。因此不推荐挂载 root 实例到 `<html>` 或者 `<body>` 上。
:::

`$el` Vue 实例使用的根 DOM 元素。通过 `el` 选项在实例挂载之后，元素可以用 `$el` 访问。

## DOM 引用

## DOM 实例

## 立即更新 DOM

## 强制更新 DOM

## 立即更新 DOM

> 当你在 Vue 中改变响应状态时，产生的 DOM 更新不会同步应用。相反，Vue 会缓冲它们，直到 “next tick”，以确保每个组件只更新一次，无论你做了多少状态更改。

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
