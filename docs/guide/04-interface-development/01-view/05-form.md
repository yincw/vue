# 表单输入绑定

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 双向绑定 | - | [v-model](https://vuejs.org/api/built-in-directives.html#v-model) | [v-model](https://v2.cn.vuejs.org/v2/api/#v-model) |
| 定制绑定行为 | [defineModel()](https://vuejs.org/api/sfc-script-setup.html#definemodel)| [useModel()](https://vuejs.org/api/composition-api-helpers.html#usemodel) | [`model`](https://v2.cn.vuejs.org/v2/api/#model) |

## 双向绑定

如下示例所示：父级状态（count）和子级模型（defineModel 创建）通过 `v-model` 创建数据双向绑定。

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 父级
import { ref } from 'vue';
const count = ref(10);

// 子级：CustomInput // [!code focus:2]
const model = defineModel()
function update() {
  model.value++
}
</script>

<template>
  <!-- 父级 -->
   <CustomInput v-model="count" /> // [!code focus]
  <button @click="count++">增加</button>
  
  <!-- 子级：CustomInput -->
  <div>Parent bound v-model is: {{ model }}</div> // [!code focus]
  <button @click="update">CustomInput 增加</button>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 父级
  data() {
    return {
      count: 10
    }
  },
  // 子级：CustomInput // [!code focus:13]
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<template>
  <!-- 父级 -->
  <CustomInput v-model="count" /> // [!code focus]
  <button @click="count++">增加</button>
  
  <!-- 子级：CustomInput -->
  <div>Parent bound v-model is: {{ model }}</div> // [!code focus]
  <!-- <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->
  <!-- <input type="text" v-model="model" /> -->
  <button @click="update">CustomInput 增加</button>
</template>
```

:::

使用 `useModel()`，通过 `v-model` 也可实现双向绑定。

`useModel()` 可以用于非 SFC 组件。与 `defineModel()` 不同的是，需要自己手动管理 props 和 emits。

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 父级
import { ref } from 'vue';
const count = ref(10);

// 子级：CustomInput // [!code focus:2]
import { useModel } from 'vue'
interface Props {
  modelValue: number // 通过 ?: 校验是否必填项，string 校验类型
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: 0 // 通过 withDefaults 第二个参数设置默认值
})
const model = useModel(props, 'modelValue')

function update() {
  model.value++
}
</script>

<template>
  <!-- 父级 --> // [!code focus:2]
   <CustomInput v-model="count" />
  <button @click="count++">增加</button>
  
  <!-- 子级：CustomInput --> // [!code focus:2]
  <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">CustomInput 增加</button>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 父级
  data() {
    return {
      count: 10
    }
  },
  // 子级：CustomInput // [!code focus:13]
  props: {
    modelValue: Number
  },
  setup(props) {
    const model = useModel(props, 'modelValue')

    return {
      model
    }
  }
}
</script>

<template>
  <!-- 父级 --> // [!code focus:2]
  <CustomInput v-model="count" />
  <button @click="count++">增加</button>
  
  <!-- 子级：CustomInput --> // [!code focus:2]
  <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">CustomInput 增加</button>
</template>
```

:::

Vue2 方案：

- [model](https://v2.cn.vuejs.org/v2/api/#model)

### 自定义双向绑定参数

`v-model` 可以接受一个参数，利用这个特性可以在单个组件实例上创建多个绑定。

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 父级
const first = ref('first');
const last = ref('last');

// 子级
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <!-- 父级 -->
   <CustomInput v-model:first-name="first" v-model:last-name="last" /> // [!code focus]
  
  <!-- 子级：CustomInput -->
   <input tye="text" v-model="firstName" /> // [!code focus]
   <input tye="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)" />
   <input tye="text" v-model="lastName" /> // [!code focus]
   <input tye="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)" />
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 父级
  data() {
    return {
      first: 'first',
      last: 'last'
    }
  },

  // 子级：CustomInput // [!code focus:4]
  props: {
    firstName: String,
    lastName: String,
  },
  emits: ['update:firstName', 'update:lastName'],
}
</script>

<template>
  <!-- 父级 -->
  <CustomInput v-model:first-name="first" v-model:last-name="last" /> // [!code focus]
  
  <!-- 子级：CustomInput -->
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

:::

### 自定义双向绑定修饰符

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 父级
const title = ref('title');

// 子级
const [title, modifiers] = defineModel('title', { required: true })
</script>

<template>
  <!-- 父级 -->
   <CustomInput v-model:title.capitalize="title" /> // [!code focus]
  
  <!-- 子级：CustomInput -->
   <input tye="text" v-model="title" /> // [!code focus]
   <input tye="text" :value="title" @input="$emit('update:title', $event.target.value)" />
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 父级
  data() {
    return {
      first: 'first',
      last: 'last'
    }
  },

  // 子级：CustomInput // [!code focus:4]
  props: {
    firstName: String,
    lastName: String,
  },
  emits: ['update:firstName', 'update:lastName'],
}
</script>

<template>
  <!-- 父级 -->
  <CustomInput v-model:first-name="first" v-model:last-name="last" /> // [!code focus]
  
  <!-- 子级：CustomInput -->
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

:::

### 多根节点双向绑定

```vue [Vue3]
<script setup lang="ts">
// 父级
const first = ref('first');
const last = ref('last');

// 子级
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <!-- 父级 -->
   <CustomInput v-model:first-name="first" v-model:last-name="last" /> // [!code focus]
  
  <!-- 子级：CustomInput -->
   <input tye="text" v-model="firstName" /> // [!code focus]
   <input tye="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)" />
   <input tye="text" v-model="lastName" /> // [!code focus]
   <input tye="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)" />
</template>
```

Vue2 方案：

- [$listeners](https://v2.cn.vuejs.org/v2/api/#vm-listeners)

## 表单输入绑定

`v-model` 可以自定义表单控件值属性及默认事件的行为。在表单控件或者组件上创建双向绑定。

`v-model` 在内部为不同的输入元素使用不用的属性并抛出不同的事件：

- `input[text]` 和 `textarea` 元素使用 `value` 属性和 `input` 事件
- `input[checkbox]` 和 `input[radio]` 使用 `checked` 属性和 `change` 事件
- `select` 元素使用 `value` 属性和 `change` 事件

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 父级
const title = ref('title');

// 子级
const model = defineModel()
</script>

<template>
  <!-- 父级 -->
   <CustomInput v-model="title" />
  
  <!-- 子级：CustomInput -->
   <input tye="text" v-model="model" />
   <!-- 类似于上面写法 -->
   <input tye="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 父级
  data() {
    return {
      title: 'title'
    }
  },

  // 子级：CustomInput
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <!-- 父级 -->
  <CustomInput v-model="title" />
  
  <!-- 子级：CustomInput -->
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

:::

## 原生表单控件

表单控件 | 说明
---|---
`<input>` | 输入类型：`text`、`search`、`number`、`password`、`hidden`、`email`、`tel`、`url`；选择类型：`radio`、`checkbox`、`file`、`color`、`month`、`week`、`date`、`time`、`datetime-local`、`datetime`；拖动类型：`range`；按钮类型：`button`、`submit`、`reset`、`image`
`<select>` | 多选属性：`multiple`；分组标签：`optgroup`、分组名属性：`label`；选项标签：`option`
`<textarea>` | 行属性：`rows`；列属性：`cols`

## 表单（双向绑定）修饰符

表单修饰符 | 说明
---|---
`.lazy` | 取代 `input` 监听 `change` 事件
`.number` | 输入字符串转为有效的数字
`.trim` | 输入首尾空格过滤

## 参考

- <https://vuejs.org/api/sfc-script-setup.html#definemodel>
- <https://v2.cn.vuejs.org/v2/api/#model>
- <https://v2.cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model>
- <https://vuejs.org/api/composition-api-helpers.html#usemodel>
- <https://vuejs.org/api/built-in-directives.html#v-model>
- <https://v2.cn.vuejs.org/v2/api/#v-model>
