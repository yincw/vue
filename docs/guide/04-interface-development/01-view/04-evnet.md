# 组件事件

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）| 
| :--- | :--- | :--- | :--- |
| 事件回调声明 | - | [`methods`](https://vuejs.org/api/options-state.html#methods) | [`methods`](https://v2.cn.vuejs.org/v2/api/#methods) |
| DOM 事件对象 | - | [$event](https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers) | [$event](https://v2.cn.vuejs.org/v2/guide/events.html#%E5%86%85%E8%81%94%E5%A4%84%E7%90%86%E5%99%A8%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95) |
| 事件绑定/监听 | - | [@](https://vuejs.org/api/built-in-directives.html#v-on) / [v-on](https://vuejs.org/api/built-in-directives.html#v-on) | [@ / v-on](https://v2.cn.vuejs.org/v2/api/#v-on) |
| - | - | @/v-on | [$on](https://v2.cn.vuejs.org/v2/api/#vm-on) |
| - | - | [.once](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers) | [$once](https://v2.cn.vuejs.org/v2/api/#vm-once) |
| - | - | 组件卸载自动完成 | [$off](https://v2.cn.vuejs.org/v2/api/#vm-off) |
| 事件及类型声明 | [defineEmits()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [`emits`](https://vuejs.org/api/options-state.html#emits) | [`emits`](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html#%E7%A7%BB%E6%A4%8D%E5%9B%9E%E6%9D%A5%E7%9A%84%E7%89%B9%E6%80%A7) +v2.7 |
| 事件触发 | [var emit()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [$emit()](https://vuejs.org/api/component-instance.html#emit) | [$emit()](https://v2.cn.vuejs.org/v2/api/#vm-emit) |
| - | - | - | [$listeners](https://v2.cn.vuejs.org/v2/api/#vm-listeners) |

## 事件回调声明

事件回调函数的声明：

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 声明事件回调函数及 DOM 事件对象  // [!code focus:4]
const handleClick = (event) => {
  console.log('handleClick', event)
}
</script>

<template>
  <button type="button" @click="handleClick">按钮</button>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  methods: { // [!code focus:6]
    // 声明事件回调函数及 DOM 事件对象
    handleClick: function (event) {
      console.log('handleClick', event)
    },
  }
}
</script>

<template>
  <button type="button" @click="handleClick">按钮</button>
</template>
```

:::

## 事件绑定及传参

事件绑定/监听:

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 声明事件回调函数
const handleClick = (data, event) => {
  console.log('handleClick', data)
}
</script>

<template>
  <button type="button" @click="handleClick({a: 'a'})">按钮</button> // [!code focus:2]
  <button type="button" v-on:click="handleClick({a: 'a'})">按钮</button>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  methods: { 
    // 声明事件回调函数
    handleClick: function (data, event) {
      console.log('handleClick', data)
    },
  }
}
</script>

<template>
  <button type="button" @click="handleClick({a: 'a'})">按钮</button> // [!code focus:2]
  <button type="button" v-on:click="handleClick({a: 'a'})">按钮</button> 
</template>
```

:::

Vue2 实例中其他绑定事件及移除绑定的方法（Vue3中以删除）：

- 绑定事件
  - $on
  - $once
- 移除监听
  - $off
  
## 自定义事件

### 声明事件及类型

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 声明自定义事件及事件类型检查  // [!code focus:4]
const emit = defineEmits<{
  cClick: [data: string]
}>()
</script>

<template>
  <!-- About -->
  <button type="button" @click="emit('cClick', {a: 'a'})">按钮</button>

  <!-- AboutWrap -->
  <About @cClick="handleClick" />
  <!-- <About v-on:cClick="handleClick" /> -->
  <!-- <About @c-click="handleClick" /> -->
  <!-- <About v-on:c-click="handleClick" /> -->
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 声明自定义事件类型检查  // [!code focus:2]
  emits: ['cClick'],
}
</script>

<template>
  <!-- About -->
  <button type="button" @click="$emit('cClick', { data: '2' })">按钮</button>

  <!-- AboutWrap -->
  <About v-on:cClick="handleClick" />
  <!-- <About @cClick="handleClick" /> -->
  <!-- <About v-on:c-click="handleClick" /> -->
  <!-- <About @c-click="handleClick" /> -->
</template>
```

:::

### 触发事件

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 声明自定义事件及事件类型检查 
const emit = defineEmits<{ // [!code focus]
  cClick: [data: string]
}>()
</script>

<template>
  <!-- About -->
  <button type="button" @click="emit('cClick', {a: 'a'})">按钮</button> // [!code focus]

  <!-- AboutWrap -->
  <About @cClick="handleClick" />
  <!-- <About v-on:cClick="handleClick" /> -->
  <!-- <About @c-click="handleClick" /> -->
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 声明自定义事件类型检查，仅以类型检查为目的 (并不会影响运行时的行为)
  emits: ['cClick'],
}
</script>

<template>
  <!-- About -->
  <button type="button" @click="$emit('cClick', { data: '2' })">按钮</button> // [!code focus]

  <!-- AboutWrap -->
  <About v-on:cClick="handleClick" />
  <!-- <About @c-click="handleClick" /> -->
</template>
```

:::

## 事件修饰符

事件修饰符作用于 v-on 指令：`v-on:click.stop=""`。使用修饰符时，顺序很重要。

事件修饰符 | DOM 事件细节 | 说明 
--- | --- | --- 
`.prevent` | `event.preventDefault()` | 阻止系统默认行为（捕获阶段） 
`.stop` | `event.stopPropagation()` | 阻止 JS 事件冒泡和捕获（冒泡/捕获阶段）
`.capture` | ` ` | 捕获阶段添加事件监听器 
`.self` | ` ` | 只有事件从元素本身发出才触发处理函数 
`.once` | ` ` | 最多触发一次事件处理函数 
`.passive` | ` ` | 附加一个 DOM 事件（立即触发），该修饰符会告诉浏览器，你不想阻止事件的默认行为 
` ` | `event.stopImmediatePropagation()` | 阻止监听同一事件的其他事件监听器被调用（冒泡阶段） 

### 键盘修饰符

事件修饰符 | 说明
---|---
`{keyCode}` | 键代码
`.esc` | Esc 键
`.delete` | Del（删除）键 和 Back（退格）键
`.tab` | Tab 键
`.enter` | Ent 键，确认键
`.space` | 空格键
`keyup.up` | 向上箭头键
`keyup.down` | 向下箭头键
`keyup.left` | 向左箭头键
`keyup.right` | 向右箭头键
`.ctrl` | Ctrl 键
`.alt` | Alt 键
`.shift` | Shift 键
`.meta` | Meta 键
`.exact` | 精确控制

### 鼠标修饰符

事件修饰符 | 说明
---|---
`.left` | 鼠标左键被按下时，触发事件处理函数
`.middle` | 鼠标中键被按下时，触发事件处理函数
`.right` | 鼠标右键被按下时，触发事件处理函数

## 事件类型（复合事件）

- 键盘
  - keyup
  - ...
- 鼠标
  - click
  - mousedown
  - mouseup
  - scroll
  - ...
- 表单
  - input
  - change
  - submit
  - resize
  - ...

## 事件原理

![Image](/event.png)

## 问题

> 方法可以定义在 methods 外面吗？

不行，定义在 methods 外面，无法通过实例的 this.方法名 获取到。

- $options
