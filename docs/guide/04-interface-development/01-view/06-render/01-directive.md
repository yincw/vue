# 指令

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 注册指令 | [app.directive()](https://vuejs.org/api/application.html#app-directive) | [directives](https://vuejs.org/api/options-misc.html#directives) | [directives](https://v2.cn.vuejs.org/v2/api/#directives) |
| - | [withDirectives()](https://vuejs.org/api/render-function.html#withdirectives) | - | - |
| 条件渲染 | - | [v-if](https://vuejs.org/api/built-in-directives.html#v-if) | [v-if](https://v2.cn.vuejs.org/v2/api/#v-if) |
| - | - | [v-else-if](https://vuejs.org/api/built-in-directives.html#v-else-if) | [v-else-if](https://v2.cn.vuejs.org/v2/api/#v-else-if) |
| - | - | [v-else](https://vuejs.org/api/built-in-directives.html#v-else) | [v-else](https://v2.cn.vuejs.org/v2/api/#v-else) |
| 列表渲染 | - | [v-for](https://vuejs.org/api/built-in-directives.html#v-for) / [`:key`](https://vuejs.org/api/built-in-special-attributes.html#key) | [v-for](https://v2.cn.vuejs.org/v2/api/#v-for) / [`:key`](https://v2.cn.vuejs.org/v2/api/#key) |
| 显示隐藏 | - | [v-show](https://vuejs.org/api/built-in-directives.html#v-show) | [v-show](https://v2.cn.vuejs.org/v2/api/#v-show) |
| 文本渲染 | - | [v-text](https://vuejs.org/api/built-in-directives.html#v-text) | [v-text](https://v2.cn.vuejs.org/v2/api/#v-text) |
| HTML渲染 | - | [v-html](https://vuejs.org/api/built-in-directives.html#v-html) | [v-html](https://v2.cn.vuejs.org/v2/api/#v-html) |
| 其它 | - | [v-once](https://vuejs.org/api/built-in-directives.html#v-once) | [v-once](https://v2.cn.vuejs.org/v2/api/#v-once) |
| - | - | [v-pre](https://vuejs.org/api/built-in-directives.html#v-pre) | [v-pre](https://v2.cn.vuejs.org/v2/api/#v-pre) |
| - | - | [v-memo](https://vuejs.org/api/built-in-directives.html#v-memo) | - |
| - | - | [v-cloak](https://vuejs.org/api/built-in-directives.html#v-cloak) | [v-cloak](https://v2.cn.vuejs.org/v2/api/#v-cloak) |

## 条件渲染

## 列表渲染

## 显示隐藏

## 文本渲染

## HTML 渲染

## 其他

## 自定义指令

自定义指令主要用于重用涉及普通元素上低级 DOM 访问的逻辑。仅当只能通过直接 DOM 操作实现所需功能时，才使用自定义指令。

指令不仅在页面加载时有效，当 Vue 动态插入元素时也有效！

如果可能，声明模版内建议使用内置指令，例如 `v-bind`。因为它们效率更高且对服务端渲染友好。

不建议在组件上使用自定义指令。当组件具有多个根节点时，可能会发生意外行为：指令将被忽略并引发警告。与属性不同，指令不能通过 v-bind="$attrs" 。

### 定义指令

自定义指令被定义为包含生命周期钩子的对象，类似于组件的生命周期钩子。钩子接收指令绑定到元素。

指令定义对象可以提供多个钩子函数（全部可选）：

::: code-group

```js [Vue3]
const myDirective = {
  created(el, binding, vnode) {},
  beforeMount(el, binding, vnode) {},
  mounted(el, binding, vnode) {},
  beforeUpdate(el, binding, vnode, prevVnode) {},
  updated(el, binding, vnode, prevVnode) {},
  beforeUnmount(el, binding, vnode) {},
  unmounted(el, binding, vnode) {},
}
```

```js [Vue2]
const myDirective = {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind(el, binding, vnode) {},
  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  inserted(el, binding, vnode) {},
  // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
  update(el, binding, vnode, oldVnode) {},
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  componentUpdated(el, binding, vnode, oldVnode) {},
  // 只调用一次，指令与元素解绑时调用。
  unbind(el, binding, vnode) {},
}
```

指令钩子函数会被传入以下参数：

- `el` 指令所绑定的元素，可以用来直接操作 DOM。
- `binding` 包含以下属性的对象。
  - `value` 传递给指令的值。
  - `oldValue` 上一个值
  - `arg` 传递给指令的参数（如果有）。
  - `modifiers` 包含修饰符（如果有）的对象
  - `instance` 使用该指令的组件的实例。
  - `dir` 指令定义对象。
- `vnode` 绑定元素的底层 VNode。
- `prevVnode`/`oldVnode` 上一次渲染中的绑定元素的 VNode。

:::

::: code-group

```vue [Vue3]
<script setup lang="ts">
const vFocus = {  // [!code focus:5]
  mounted: (el) => {
    el.focus()
  }
}

// defineOptions({
//   directives: {
//     focus: {
//       mounted(el) {
//         el.focus()
//       }
//     }
//   }
// })
</script>

<template>
  <input type="text" v-focus />  // [!code focus]
</template>
```

```vue [Vue2]
<script lang="ts">
const focus = {  // [!code focus:5]
  mounted(el) {
    el.focus()
  }
};

export default {
  directives: {
    focus
  }
}
</script>

<template>
  <input type="text" v-focus />  // [!code focus]
</template>
```

:::

### 指令参数及修饰符

与内置指令类似，自定义指令可以定制参数及修饰符。

```html [模板]
<div v-example:foo.var="baz"></div>
```

参数及修饰符将是以下形式的对象：

```js
{
  arg: 'foo',
  modifiers: { bar: true },
  value: `baz`,
  oldValue: `baz`
}
```

如果需要多个值，还可以传入 JavaScript 对象。指令可以采用任何有效的 JavaScript 表达式。

```html [模板]
<div v-example:foo.var="{ color: 'white', text: 'hello!'}"></div>
```

```js
{
  arg: 'foo',
  modifiers: { bar: true },
  value: { color: 'white', text: 'hello!'},
  oldValue: { color: 'white', text: 'hello!'}
}
```

### 注册指令

局部注册：

::: code-group

```vue [Vue3]
<script setup lang="ts">
const vFocus = { // [!code focus]
  mounted: (el) => {
    el.focus()
  }
}

// defineOptions({
//   directives: {
//     focus: {
//       mounted(el) {
//         el.focus()
//       }
//     }
//   }
// })
</script>

<template>
  <input type="text" v-focus />
</template>
```

```vue [Vue2]
<script lang="ts">
const focus = {
  mounted(el) {
    el.focus()
  }
};

export default {
  directives: {  // [!code focus:3]
    focus
  }
}
</script>

<template>
  <input type="text" v-focus />
</template>
```

:::

全局注册：

::: code-group

```vue [Vue3]
<script setup lang="ts">
const vFocus = { 
  mounted: (el) => {
    el.focus()
  }
}

const app = createApp({})

// 全局注册自定义指令 // [!code focus:2]
app.directive('focus');
</script>

<template>
  <input type="text" v-focus />
</template>
```

```vue [Vue2]
<script lang="ts">
const focus = {
  mounted(el) {
    el.focus()
  }
};

// 全局注册自定义指令 // [!code focus:2]
Vue.directive('focus');
</script>

<template>
  <input type="text" v-focus />
</template>
```

:::
