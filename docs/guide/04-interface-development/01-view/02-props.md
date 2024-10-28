# 组件属性

| 分类 | Composition API（Vue3）| Options API（Vue3/2）
| :--- | :--- | :--- |
| 声明属性及类型 | [defineProps()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [props](https://v2.cn.vuejs.org/v2/api/#props) | 
| 属性默认值 | [withDefaults()](https://vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration) | [props](https://v2.cn.vuejs.org/v2/api/#props) | 
| 属性透传 | [defineOptions()](https://vuejs.org/api/sfc-script-setup.html#defineoptions) | [inheritAttrs](https://v2.cn.vuejs.org/v2/api/#inheritAttrs) | 
| 属性获取 | [useAttrs()](https://vuejs.org/api/composition-api-helpers.html#useattrs) | [$attrs](https://v2.cn.vuejs.org/v2/api/#vm-attrs) | 
| - | [var props](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [$props](https://v2.cn.vuejs.org/v2/api/#vm-props) | 

## 属性声明

组件属性声明、类型声明及自定义校验，设置属性默认值等

::: code-group

```vue [Vue3]
<script setup lang="ts">
// 属性声明、属性类型声明及自定义校验，设置属性默认值
interface Props {
  xa?: string // 通过 ?: 校验是否必填项，string 校验类型
  xb?: string
}
// 通过 defineProps 声明属性
const props = withDefaults(defineProps<Props>(), {
  xa: 'a', // 通过 withDefaults 第二个参数设置默认值
  xb: 'b'
})

console.log('props', props.xa);
</script>

<template>
  <div>
    <div>{{ $attrs.a }}</div>
    <div>{{ props.xa }}</div>
  </div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 属性声明、属性类型声明及自定义校验，设置属性默认值
  props: {
    xa: { // 声明属性
      type: String, // 设置属性类型
      required: false, // 自定义校验
      default: 'xa' // 设置默认值
    },
    xb: {
      type: String,
      required: false,
      default: 'xb'
    }
  },
  mounted() {
    console.log('this.$props', this.$props)
    console.log('this.$props.xa', this.xa)
  }
}
</script>

<template>
  <div>
    <div>{{ $attrs.a }}</div>
    <div>{{ $props.xa }}</div>
    <div>{{ xa }}</div>
  </div>
</template>
```

:::

## 属性透传（继承）

::: code-group

```vue [Vue3]
<script setup lang="ts">
defineOptions({
  // 属性透传（继承）
  inheritAttrs: false // 默认为 true，禁用透传可传入 false
})
</script>

<template>
  <!-- 禁用透传将不传递 list- inherit -->
  <!-- <div class="list list-inherit"> -->
  <div class="list">
  </div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 属性透传（继承）
  inheritAttrs: false // 默认为 true，禁用透传可传入 false
}
</script>

<template>
  <!-- 禁用透传将不传递 list- inherit -->
  <!-- <div class="list list-inherit"> -->
  <div class="list">
  </div>
</template>
```

:::

### 多根节点属性透传

和单根节点组件不同，有着多个根节点的组件没有自动 attribute 透传行为。但可以手动绑定。

::: code-group

```vue [Vue3]
<script setup lang="ts">
defineOptions({
  // 属性透传（继承）
  inheritAttrs: false // 多根节点属性透传默认关闭
})
</script>

<template>
  <div>list1</div>
  <div class="list" v-bind="$attrs">list2</div> // [!code focus]
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 属性透传（继承）
  inheritAttrs: false, // 多根节点属性透传默认关闭
}
</script>

<template>
  <div>list1</div>
  <div class="list" v-bind="$attrs">list2</div> // [!code focus]
</template>
```

:::

## 读取属性值

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { useAttrs } from 'vue'

// 属性声明、属性类型声明及自定义校验，设置属性默认值
interface Props {
  xa?: string // 通过 ?: 校验是否必填项，string 校验类型
  xb?: string
}
// 通过 defineProps 声明属性
const props = withDefaults(defineProps<Props>(), {
  xa: 'a', // 通过 withDefaults 第二个参数设置默认值
  xb: 'b'
})

// 脚本内读取所有属性
const attrs = useAttrs()
console.log('attrs', attrs)
// 读取组件自定义属性
console.log('props', props)
</script>

<template>
  <div>
    <!-- 模板内读取所有属性 -->
    <div>{{ $attrs.a }}</div>
    <!-- 读取组件自定义属性 -->
    <div>{{ props.xa }}</div>
  </div>
</template>
```

```vue [Vue2]
<script lang="ts">
export default {
  // 属性声明、属性类型声明及自定义校验，设置属性默认值
  props: {
    xa: { // 声明属性
      type: String, // 设置属性类型
      required: false, // 自定义校验
      default: 'xa' // 设置默认值
    },
    xb: {
      type: String,
      required: false,
      default: 'xb'
    }
  },
  mounted() {
    // 脚本内读取所有属性
    console.log('this.$attrs', this.$attrs)
    // 读取组件自定义属性
    console.log('this.$props', this.$props)
    console.log('this.$props.xa', this.xa)
  }
}
</script>

<template>
  <div>
    <!-- 模板内读取所有属性 -->
    <div>{{ $attrs.a }}</div>
    <!-- 读取组件自定义属性 -->
    <div>{{ $props.xa }}</div>
    <div>{{ xa }}</div>
  </div>
</template>
```

:::

## 属性绑定

- v-bind/:

## 属性修饰符

- .prop
- .camel
- .sync

## 公共属性

- expose
- defineExpose()
