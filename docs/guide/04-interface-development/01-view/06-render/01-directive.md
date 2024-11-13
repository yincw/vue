# 指令

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 条件渲染 | - | [v-if](https://vuejs.org/api/built-in-directives.html#v-if) v3.0 | [v-if](https://v2.cn.vuejs.org/v2/api/#v-if) v2.0 |
| - | - | [v-else-if](https://vuejs.org/api/built-in-directives.html#v-else-if) v3.0 | [v-else-if](https://v2.cn.vuejs.org/v2/api/#v-else-if) v2.0 |
| - | - | [v-else](https://vuejs.org/api/built-in-directives.html#v-else) v3.0 | [v-else](https://v2.cn.vuejs.org/v2/api/#v-else) v2.0 |
| 列表渲染 | - | [v-for](https://vuejs.org/api/built-in-directives.html#v-for) v3.0 / [:key](https://vuejs.org/api/built-in-special-attributes.html#key) v3.0 | [v-for](https://v2.cn.vuejs.org/v2/api/#v-for) v2.0 / [:key](https://v2.cn.vuejs.org/v2/api/#key) v2.0 |
| 显示隐藏 | - | [v-show](https://vuejs.org/api/built-in-directives.html#v-show) v3.0 | [v-show](https://v2.cn.vuejs.org/v2/api/#v-show) v2.0 |
| 文本渲染 | - | [v-text](https://vuejs.org/api/built-in-directives.html#v-text) v3.0 | [v-text](https://v2.cn.vuejs.org/v2/api/#v-text) v2.0 |
| HTML渲染 | - | [v-html](https://vuejs.org/api/built-in-directives.html#v-html) v3.0 | [v-html](https://v2.cn.vuejs.org/v2/api/#v-html) v2.0 |
| 跳过编译 | - | [v-pre](https://vuejs.org/api/built-in-directives.html#v-pre) v3.0 | [v-pre](https://v2.cn.vuejs.org/v2/api/#v-pre) v2.0 |
| 隐藏未编译插值 | - | [v-cloak](https://vuejs.org/api/built-in-directives.html#v-cloak) v3.0 | [v-cloak](https://v2.cn.vuejs.org/v2/api/#v-cloak) v2.0 |
| 渲染一次 | - | [v-once](https://vuejs.org/api/built-in-directives.html#v-once) v3.0 | [v-once](https://v2.cn.vuejs.org/v2/api/#v-once) v2.0 |
| 缓存模板 | - | [v-memo](https://vuejs.org/api/built-in-directives.html#v-memo) v3.2 | - |
| 注册指令 | - | [`directives`](https://vuejs.org/api/options-misc.html#directives) v3.0 | [`directives`](https://v2.cn.vuejs.org/v2/api/#directives) v2.0 |
| - | [app.directive()](https://vuejs.org/api/application.html#app-directive) v3.0 | - | [Vue.directive()](https://v2.cn.vuejs.org/v2/api/#Vue-directive) v2.0 |

## 条件渲染

根据表达式之真假值来有条件的渲染元素。在切换时元素及它的数据绑定/组件被销毁并重建。

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

## 列表渲染

基于源数据多次渲染元素或模板块。此指令值，必须使用特定语法 `alias in expression`。

```html
<!-- <div v-for="(val, key) in object"> -->
<!-- <div v-for="(val, name, index) in object"> -->
<!-- <div v-for="(item, index) in items"> -->
<div v-for="item in items">
  {{ item.text }}
</div>
```

`v-for` 的默认行为会尝试原地修改元素而不是移动它们。要强制其重新排序，你需要用特殊的 `key` 属性来提供一个排序提示：

```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```

```vue
<script setup lang="ts">
import { ref } from 'vue'
const datas = ref([
  {
    id: 1,
    name: 'a',
    isComplate: true
  },
  {
    id: 2,
    name: 'b',
    isComplate: false
  },
  {
    id: 3,
    name: 'c',
    isComplate: false
  }
])
</script>

<template>
  <template v-for="item in datas" :key="item.id">
    <div v-if="!item.isComplate">
      <span>{{ item.name }}</span>
    </div>
  </template>
</template>
```

`<template>` 不会渲染出 HTML 元素。

::: warning
Vue3 中，当 `v-for` 和 `v-if` 一起使用时，将会报错：This will throw an error because property "todo"
is not defined on instance.

> 当和 `v-for` 一起使用时，`v-for` 的优先级比 `v-if` 更高。
:::

## 显示隐藏

根据表达式之真假值，切换元素的 `display` CSS 属性。

```vue
<script setup lang="ts">
import { ref } from 'vue'
const text = ref('text content')
const flag = ref(false)
</script>

<template>
  <!-- flag 为 true 时显示 -->
  <div v-show="flag">{{ text }}</div>
</template>
```

## 文本渲染

更新元素的 `textContent`。如果要更新部分的 `textContent`，需要使用 <span v-pre>{{ Mustache }}</span> 插值。

```vue
<script setup lang="ts">
import { ref } from 'vue'
const text = ref('text content')
</script>

<template>
    <div v-text="text"></div>
    <!-- Mustache 插值 -->
    <div>{{ text }}</div>
</template>
```

## HTML 渲染

更新元素的 `innerHTML`。注意：内容按普通 HTML 插入，不会作为 Vue 模板进行编译。

```vue
<script setup lang="ts">
import { ref } from 'vue'
const html = ref('<div>html content</div>')
</script>

<template>
  <div v-html="html"></div>
</template>
```

::: warning
在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS（Cross site scripting） 攻击。只在可信内容上使用 `v-html`，永不用在用户提交的内容上。
:::

## 其他

### 跳过编译

跳过元素及子元素的编译过程。比如，直接显示插值（Mustache 标签）

```html
<!-- 显示 {{ this will not be compiled }} -->
<span v-pre>{{ this will not be compiled }}</span>
```

### 隐藏未编译的插值

隐藏未编译的插值标签，直到编译结束。`null` 值在该指令下不显示。

```html
<!-- 该元素区域未编译、编译结束前或 message 为 null，都不会显示 -->
<div v-cloak>
  {{ message }}
</div>
```

### 只渲染一次

只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点被视为静态内容并跳过。

```html
<span v-once>This will never change: {{msg}}</span>
```

### 缓存模板

该指令需要一个固定长度的依赖值数组来比较记忆化。如果数组中的每个值都与上次渲染相同，则将跳过整个子树的更新。事实上，即使是 Virtual DOM vNode 创建也将被跳过，因为子树的记忆副本可以重用。

`v-memo="[]"` 在功能上等同于 `v-once`。

`v-memo` 仅用于性能关键场景中的微优化，应该很少使用。比如，常见的场景是呈现 `length > 1000` 的大型列表时。

```html
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
  <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  <p>...more child nodes</p>
</div>
```

::: warning
`v-memo` 和 `v-for` 一起使用时，请确保它们用于同一元素。`v-memo` 在 `v-for` 内将不起作用。
:::

## 自定义指令

自定义指令主要**用于重用涉及普通元素上低级 DOM 访问的逻辑**。仅当只能通过直接 DOM 操作实现所需功能时，才使用自定义指令。

指令不仅在页面加载时有效，当 Vue 动态插入元素时也有效！

如果可能，声明模版内建议使用内置指令，例如 `v-bind`。因为它们效率更高且对服务端渲染友好。

不建议在组件上使用自定义指令。当组件具有多个根节点时，可能会发生意外行为：指令将被忽略并引发警告。与属性不同，指令不能通过 v-bind="$attrs" 透传。

![Image](/directive.png)

### 定义指令

自定义指令**被定义为包含生命周期钩子的对象，类似于组件的生命周期钩子**。钩子接收指令绑定到元素。

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

- **`el`** 指令所绑定的元素，可以用来直接操作 DOM。
- **`binding`** 包含以下属性的对象。
  - **`arg`** 传递给指令的参数（如果有）。
  - **`modifiers`** 包含修饰符（如果有）的对象
  - **`value`** 传递给指令的值。
  - `oldValue` 上一个值
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
<div v-example:foo.bar="baz"></div>
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
<div v-example:foo.bar="{ color: 'white', text: 'hello!'}"></div>
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
