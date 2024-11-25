# DOM 实例

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 引用 | - | [ref](https://vuejs.org/api/built-in-special-attributes.html#ref) v3.0 | [ref](https://v2.cn.vuejs.org/v2/api/#ref) v2.0 |
| `\-获取` | `var refs` | [$refs](https://vuejs.org/api/component-instance.html#refs) v3.0 | [$refs](https://v2.cn.vuejs.org/v2/api/#vm-refs) v2.0 |
| - | - | [$el](https://vuejs.org/api/component-instance.html#el) v3.0 | [$el](https://v2.cn.vuejs.org/v2/api/#vm-el) v2.0 |
| `\-立即获取 DOM` | [nextTick()](https://vuejs.org/api/general.html#nexttick) v3.0 | [$nextTick()](https://vuejs.org/api/component-instance.html#nexttick) v3.0 | [Vue.nextTick()](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) v2.0 <br/> [$nextTick()](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) v2.0 |
| `\-查找` | - | [$root](https://vuejs.org/api/component-instance.html#root) v3.0 | [$root](https://v2.cn.vuejs.org/v2/api/#vm-root) v2.0 |
| - | - | [$parent](https://vuejs.org/api/component-instance.html#parent) v3.0 | [$parent](https://v2.cn.vuejs.org/v2/api/#vm-parent) v2.0 |
| `\-挂载` | - | - | [`el`](https://v2.cn.vuejs.org/v2/api/#el) v2.0 |
| 组件引用 | [useTemplateRef()](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) v3.5 | - | - |
| `\-属性公开` | [defineExpose()](https://vuejs.org/api/sfc-script-setup.html#defineexpose) v3.0 | [`expose`](https://vuejs.org/api/options-state.html#expose) v3.0 | - |
| `\-挂载` | [`<Teleport>`](https://vuejs.org/api/built-in-components.html#teleport) v3.0 | - | - |

## 大纲

- DOM 实例
  - 引用
  - 获取
  - 立即更新
  - 查找
  - 挂载
- 组件实例
  - 引用
  - 属性公开
  - 挂载

## DOM 实例

### 引用

虽然 Vue 的声明式渲染模型为你抽象了大部分直接的 DOM 操作，但在某些情况下，我们仍然需要直接访问底层的 DOM 元素，我们可以使用特殊 `ref` 属性。它允许我们在挂载特定 DOM 元素或子组件实例后获得对它的直接引用。例如，当你想以编程方式将输入集中在组件挂载上，或在元素上初始化第三方库时，这可能很有用。

```vue
<template>
  <input ref="input">
</template>
```

除了字符串键，该属性还可以绑定到一个函数，该函数将在每次组件更新时调用，并为你提供充分的灵活性来存储元素引用的位置。该函数接收 ref 元素引用作为第一个参数：

```vue
<template>
  <input :ref="(el) => {}">
</template>
```

请注意，我们使用的是动态 `:ref` 绑定，因此我们可以向其传递一个函数而不是 ref 名称字符串。卸载元素时，这个参数将返回 `null`。

### 获取

`ref` 也可以在子组件上使用，在这种情况下，引用的将是组件实例。

```vue
<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  mounted() {
    // this.$refs.child will hold an instance of <Child />
  }
}
</script>

<template>
  <Child ref="child" />
</template>
```

引用的实例将与子组件的 `this` 相同，这意味着父组件将拥有对子组件的每个属性和方法的完全访问权限。这使得在父级和子级之间创建紧密耦合的实现细节变得容易，因此组件 `refs` 应该只在绝对需要时使用。在大多数情况下，你应该先尝试使用标准的 props 和 emit 接口来实现父/子交互。

`$refs` 持有通过模板 `ref` 属性注册的所有 DOM 元素和组件实例的对象。

请注意，你只能在组件 `mounted` 后访问 `ref`。如果你尝试通过 `$refs.input` 在模板表达式中访问 `ref`，它将在第一次渲染时是 `undefined`。因为该元素在第一次渲染之前不存在。

### 立即更新 DOM

状态更新后立即获取应用新状态后的 DOM 实例的值。

> 当你在 Vue 中改变响应状态时，产生的 DOM 更新不会同步应用。相反，Vue 会缓冲它们，直到 “next tick”，以确保每个组件只更新一次，无论你做了多少状态更改。

> nextTick() 可以在状态更改后立即使用，以等待 DOM 更新完成。您可以将回调作为参数传递，也可以等待返回的 Promise。

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { ref, nextTick } from 'vue'

// 声明状态
const count = ref(0)
const counter = ref(null)

const cb = () => {
  // 同步更新 state
  console.log('count.value', count.value)
  // 异步更新 DOM ，state 为更新前的值
  console.log('counter', counter.value?.textContent)

  nextTick(() => {
    // 立即执行 DOM 更新，state 为更新后的值
    console.log('counter', counter.value?.textContent)
  })
}

const handleIncrease = () => {
  count.value++
  cb();
}
const handleDecrease = () => {
  count.value--;
  cb();
}
</script>

<template>
  <div ref="counter">{{ count }}</div>
  <div>
      <button type="button" @click="handleDecrease">-</button>
      {{ count }}
      <button type="button" @click="handleIncrease">+</button>
  </div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    // 脚本读取状态值  // [!code focus:2]
    console.log(this.count)
  },
  methods: {
    cb: function () {
      // 同步更新 state
      console.log('count', this.count)
      // 异步更新 DOM ，state 为更新前的值
      console.log('counter', this.$refs.counter.textContent)

      this.$nextTick(function () {
        // 立即执行 DOM 更新，state 为更新后的值
        console.log('counter', this.$refs.counter.textContent)
      })
    },
    handleIncrease: function () {
      this.count++;
      this.cb();
    },
    handleDecrease: function () {
      this.count--;
      this.cb();
    },
  }
}
</script>

<template>
  <div ref="counter">{{ count }}</div>
  <div>
      <button type="button" @click="handleDecrease">-</button>
      {{ count }}
      <button type="button" @click="handleIncrease">+</button>
  </div>
</template>
```

:::

### 查找

通过 `el` 选项在实例挂载之后，元素可以用 `$el` 访问。`$el` 可以获得 Vue 实例使用的根 DOM 元素。

`$el` 一直保持 `undefined`，直到组件 `mounted` 为止。

其他获取 DOM 实例层级的方法：

- `$root` 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。
- `$parent` 父实例（如果当前实例具有父实例），否则它将是根实例自身。
- `$children` 当前实例的直接子实例。需要注意**它并不保证顺序，也不是响应式的**。

::: info
为了保持一致性，建议使用模板 `refs` 直接访问元素，而不是依赖 `$el`
:::

### 挂载

`el` 选项提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。

```js
new Vue({
  el: '#app'
})
```

::: warning
提供的元素只能作为挂载点，所有的挂载元素会被 Vue 生成的 DOM 替换。因此不推荐挂载 root 实例到 `<html>` 或者 `<body>` 上。
:::

## 组件实例

### 组件引用

`useTemplateRef()` 返回一个浅层 `ref`（ShallowRef），其值将于具有匹配 `ref` 属性的模板元素或组件同步。

::: code-group

```vue [Vue3]
<script setup>
import { useTemplateRef, onMounted } from 'vue'

const inputRef = useTemplateRef('input')

onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```

```vue [Vue2]
<script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input ref="input" />
</template>
```

:::

### 公开实例属性

默认情况下，组件实例在通过 `$parent` 和 `$root` 或模板 `refs` 访问时向父级公开所有实例属性。这可能是不可取的，因为组件很可能具有内部 state 或方法，这些 state 或方法应该保持私有以避免紧密耦合。

使用 `expose` 时，该选项需要一个属性名称字符串列表，只有显式列出的属性才会在组件的公开实例上公开。

`expose` 仅影响用户定义的属性 - 它不会过滤掉内置组件实例属性。

```js
export default {
  // 只有 `publicMethod` 在公共实例上可用
  expose: ['publicMethod'],
  methods: {
    publicMethod() {
      // ...
    },
    privateMethod() {
      // ...
    }
  }
}
```

默认情况下，使用通过模板 `refs` 或 `$parent` 检索的组件的公共实例不会暴露在 `<script setup>` 中。要在组件 `<script setup>` 中显式公开属性，可使用 `defineExpose` 编译宏。

```vue
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```

当父级通过模板 `refs` 获取此组件的实例时，检索到的实例将是 `{ a: number, b: number }`（refs 会自动解包，就像在普通实例上一样）。

### 组件挂载

`<Teleport>` 允许我们将组件模板的一部分“传送”到该组件的 DOM 层次结构之外的 DOM 节点中。

#### 传送位置

试想一个场景：构建全屏模式的弹窗。理想状态下，我们希望 modal 的按钮和 modal 本身位于同一个组件中，因为它们都与 modal 的 open/close 状态有关。但这意味着模态框将于按钮一起呈现，深深浅套在应用程序的 DOM 层次结构中。`<Teleport>` 提供了一种干净的方法来解决这些问题，允许我们跳出嵌套的 DOM 结构。

```vue
<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
```

`<Teleport>` 的目标 `to` 需要 CSS 选择器字符串或实际的 DOM 节点。在这里，我们基本上是告诉 Vue “将这个模板片段传送到 body 标签”。

#### 禁用传送

在某些情况下，我们可能希望有条件的禁用 `<Teleport>`。比如：我们可能希望在桌面设备将组件渲染为叠加层，但在移动设备上是内联的。可以通过 `<Teleport>` 的 `disabled` 属性实现。

```vue
<template>
  <Teleport :disabled="isMobile">
    ...
  </Teleport>
</template>
```

#### 延迟传送

在 Vue 3.5+ 中，可以使用 `defer` prop 来推迟 Teleport 的目标解析，直到应用程序的其他部分挂载完毕。这允许 Teleport 以 Vue 渲染的容器元素为目标，但在组件树的后面部分：

```vue
<template>
  <Teleport defer to="#late-div">...</Teleport>

  <!-- somewhere later in the template -->
  <div id="late-div"></div>
</template>
```
