# DOM 实例

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| DOM 挂载 | - | - | [`el`](https://v2.cn.vuejs.org/v2/api/#el) |
| DOM 实例 | - | [$el](https://vuejs.org/api/component-instance.html#el) | [$el](https://v2.cn.vuejs.org/v2/api/#vm-el) |
| - | - | [$root](https://vuejs.org/api/component-instance.html#root) | [$root](https://v2.cn.vuejs.org/v2/api/#vm-root) |
| - | - | [$parent](https://vuejs.org/api/component-instance.html#parent) | [$parent](https://v2.cn.vuejs.org/v2/api/#vm-parent) |
| - | - | - | [$children](https://v2.cn.vuejs.org/v2/api/#vm-children) |
| 模板引用 | - | [ref](https://vuejs.org/api/built-in-special-attributes.html#ref) | [ref](https://v2.cn.vuejs.org/v2/api/#ref) |
| - | [useTemplateRef()](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) v3.5 | [$refs](https://vuejs.org/api/component-instance.html#refs) | [$refs](https://v2.cn.vuejs.org/v2/api/#vm-refs) |
| 强制 DOM 更新 | - | [$forceUpdate()](https://vuejs.org/api/component-instance.html#forceupdate) | [$forceUpdate()](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate) |
| 立即获取 DOM | [nextTick()](https://vuejs.org/api/general.html#nexttick) | [$nextTick()](https://vuejs.org/api/component-instance.html#nexttick) | [Vue.nextTick()](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) / [$nextTick()](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) |
| 公开实例属性 | [defineExpose()](https://vuejs.org/api/sfc-script-setup.html#defineexpose) | [`expose`](https://vuejs.org/api/options-state.html#expose) | - |

## DOM 挂载

`el` 选项提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。

```js
new Vue({
  el: '#app'
})
```

::: warning
提供的元素只能作为挂载点，所有的挂载元素会被 Vue 生成的 DOM 替换。因此不推荐挂载 root 实例到 `<html>` 或者 `<body>` 上。
:::

## DOM 实例

通过 `el` 选项在实例挂载之后，元素可以用 `$el` 访问。`$el` 可以获得 Vue 实例使用的根 DOM 元素。

`$el` 一直保持 `undefined`，直到组件 `mounted` 为止。

其他获取 DOM 实例层级的方法：

- `$root` 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。
- `$parent` 父实例（如果当前实例具有父实例），否则它将是根实例自身。
- `$children` 当前实例的直接子实例。需要注意**它并不保证顺序，也不是响应式的**。

::: info
为了保持一致性，建议使用模板 `refs` 直接访问元素，而不是依赖 `$el`
:::

## 模版引用

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

## 强制更新 DOM

`$forceUpdate()` 可以强制组件实例重新渲染。

::: info
考虑到 Vue 的全自动响应式系统，这应该很少需要。唯一可能需要它的情况是当你使用高级响应式 API 显式创建非响应式组件状态时。
:::

## 立即更新 DOM

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

## 公开实例属性

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
