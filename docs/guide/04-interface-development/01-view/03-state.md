# 组件状态

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 状态 | [ref()](https://vuejs.org/api/reactivity-core#ref) | [data](https://vuejs.org/api/options-state.html#data) | [data](https://v2.cn.vuejs.org/v2/api/#data) | 
| - | - | [$data](https://vuejs.org/api/component-instance.html#data) | $data | 
| 计算 | [computed()](https://vuejs.org/api/reactivity-core#computed) | [computed](https://vuejs.org/api/options-state.html#computed) | [computed](https://v2.cn.vuejs.org/v2/api/#computed) | 
| 监听 | [watch()](https://vuejs.org/api/reactivity-core#watch) | [watch](https://vuejs.org/api/options-state.html#watch) /  | [watch](https://v2.cn.vuejs.org/v2/api/#watch) | 
| - | - | [$watch()](https://vuejs.org/api/component-instance.html#watch) | [$watch()](https://v2.cn.vuejs.org/v2/api/#vm-watch) | 
| - | [watchEffect()](https://vuejs.org/api/reactivity-core#watcheffect) | - | - | 
| - | [watchPostEffect()](https://vuejs.org/api/reactivity-core#watchposteffect) | - | - | 
| - | [watchSyncEffect()](https://vuejs.org/api/reactivity-core#watchsynceffect) | - | - | 
| - | [onWatcherCleanup()](https://vuejs.org/api/reactivity-core.html#onwatchercleanup) | - | - | 

## 状态

状态值的更新是同步的，但状态值更新后的 DOM 渲染是异步的。

### 声明状态

- ref 响应式默认是深度展开的。避免深度转换，请使用 shallowRef

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { ref } from 'vue' // [!code focus]

// 声明状态
const count = ref(0) // [!code focus]
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      {{ count }}
      <button type="button" @click="count++">+</button>
  </div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  data() { // [!code focus:5]
    return {
      count: 0 
    };
  },
}
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      {{ count }}
      <button type="button" @click="count++">+</button>
  </div>
</template>
```

:::

### 计算

computed 计算属性允许我们以声明方式计算派生值。

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { ref, computed } from 'vue'

// 声明状态
const count = ref(0)

// 计算
const newCount = computed(() => count.value * 2); // [!code focus]
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      {{ count }}
      <button type="button" @click="count++">+</button>
      {{ newCount }}
  </div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  data() {
    return {
      count: 0
    };
  },
  computed: { // [!code focus:5]
    newCount: function() {
      return this.count * 2;
    }
  }
}
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      {{ count }}
      <button type="button" @click="count++">+</button>
      {{ newCount }}
  </div>
</template>
```

:::

### 监听并更改状态值

watch 函数在一段响应式状态发生变化时触发回调。比如：执行 “副作用” 来响应状态更改，更改 DOM 或根据异步操作的结果更改另一个状态。

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// 声明状态
const count = ref(0)
const total = ref(0)

// 计算
const newCount = computed(() => count.value * 2);

// 监听状态值 // [!code focus:5]
watch(count, (newVal, oldVal) => {
  // 更改状态值
  total.value = newVal
})

// 监听计算属性
watch(newCount, (newVal, oldVal) => {
})
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      {{ count }}
      <button type="button" @click="count++">+</button>
      {{ newCount }}
  </div>
  <div>{{ total }}</div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      total: 0
    };
  },
  computed: {
    newCount: function() {
      return this.count * 2;
    }
  },
  // 监听状态值 // [!code focus:7]
  watch: { 
    count: function(newVal, oldVal) {
      // 更改状态值
      this.total = newVal
    },
    newCount: function(newVal, oldVal) {
    }
  }
}
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      {{ count }}
      <button type="button" @click="count++">+</button>
      {{ newCount }}
  </div>
  <div>{{ total }}</div>
</template>
```

:::

#### 深度监听和立即执行

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { ref, watch } from 'vue'

// 声明状态
const count = ref(0)
const total = ref(0)

// 监听状态值
watch(count, (newVal, oldVal) => {
  total.value = newVal
}, {
  deep: true, // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深  // [!code focus]
  immediate: true // 该回调将会在侦听开始之后被立即调用
})
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      {{ count }}
      <button type="button" @click="count++">+</button>
  </div>
  <div>{{ total }}</div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      total: 0
    };
  },
  watch: {
    count: {
      handler: function(newVal, oldVal) {
        this.total = newVal
      }, 
      deep: true, // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深 // [!code focus]
      immediate: true // 该回调将会在侦听开始之后被立即调用
    }
  }
}
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      {{ count }}
      <button type="button" @click="count++">+</button>
  </div>
  <div>{{ total }}</div>
</template>
```

:::

### 读取状态值

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { ref } from 'vue'

// 声明状态
const count = ref(0)

// 脚本读取状态值  // [!code focus:2]
console.log(count.value)
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      <!-- 模版读取状态值 --> // [!code focus:2]
      {{ count }}
      <button type="button" @click="count++">+</button>
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
  }
}
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      <!-- 模版读取状态值 --> // [!code focus:2]
      {{ count }}
      <button type="button" @click="count++">+</button>
  </div>
</template>
```

:::

## 状态变更立即更新 DOM

状态更新后立即获取应用新状态后的 DOM 实例的值。

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

## 自动收集监听依赖

- watchEffect：默认情况下，watcher 回调会进行批处理避免重复调用，在当前组件的 DOM 更新之前，调用 watcher 回调。这意味着，watcher 回调中访问当前组件的 DOM，DOM 将处于更新前的状态。
- watchPostEffect：支持在当前组件的 DOM 更新之后，调用 watcher 回调。
- watchSyncEffect：没有批处理功能，并且每次检测到响应式更新时都会触发，谨慎使用

```vue [Vue3]
<script setup lang="ts">
import { ref } from 'vue'

// 声明状态
const count = ref(0)
const total = ref(0)

// 脚本读取状态值
console.log(count.value)

watchEffect(() => {
  total.value = count.value
})
</script>

<template>
  <div>
      <button type="button" @click="count--">-</button>
      <!-- 模版读取状态值 -->
      {{ count }}
      <button type="button" @click="count++">+</button>
  </div>
  <div>total: {{ total }}</div>
</template>
```

watch 和 watchEffect 的共同点和区别：

- 共同点
  - 两者都允许我们被动的执行副作用
  - 都支持清理副作用（onCleanup/onWatcherCleanup）
  - 都支持编排回调执行的时机，DOM 更新前执行（flush: 'pre'），DOM更新后执行（flush: 'post'）
  - 都支持停止、暂停、恢复监视程序
- 区别
  - 跟踪响应式依赖关系的方式不同
    - watch 仅跟踪指定的源，它不跟踪回调中访问的任何内容。回调仅在源实际更改时触发。watch 将依赖跟踪和副作用分开，使我们能够更精确地控制回调何时触发。
      - watch 默认是懒惰的，在被监视的源发生更改之前，不会调用回调
      - watch 更具体的说明什么状态应该触发回调及重新允许，比如：深度跟踪（deep）、立即执行（immediate）、仅触发一次（once）
      - watch 回调函数具有 newValue 和 oldValue，可以通过他们更精确的控制回调的逻辑
    - watchEffect 自动跟踪（类似于计算属性）在同步执行期间访问的每个响应式属性。watchEffect 将依赖跟踪和副作用结合到一个阶段中，通常这更方便，导致代码更简洁。
      - watchEffect 默认会立即执行
      - watchEffect 在深度跟踪场景比 deep 更有效，因为它只会跟踪回调中使用的属性，而不是跟 deep 那样递归跟踪的所有属性

## Options API 

> data 为什么不能用纯对象来定义？

因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。
