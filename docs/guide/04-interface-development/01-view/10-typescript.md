# TypeScript 支持

## 大纲

- 为啥需要“类型检查”
  - TypeScript
- 类型
  - TypeScript 类型
  - Vue 类型
    - 组合式类型示例
    - 常用类型
- 类型定义
  - 语法：类型注解
  - 类型：正确性
    - 数据结构的类型
    - 函数参数及返回值的类型
  - 校验：必填规则
- 类型检查（类型检查器）
  - 类型推断
  - 静态类型提示：编辑器中提供内联文档
- Vite 与 TypeScript

## 为啥需要“类型检查”

### TypeScript

## 类型

### TypeScript 类型

### Vue 类型

```vue
<script lang="ts">
  // use TypeScript
</script>
```

- https://v2.cn.vuejs.org/v2/guide/typescript.html#ad
- https://vuejs.org/guide/typescript/overview#using-vue-with-typescript
- https://vuejs.org/guide/scaling-up/tooling#typescript
- https://vuejs.org/guide/extras/reactivity-transform#typescript-integration

#### TypeScript 范型

范型类型可以使用 `<script>` 标签上的 `generic` 属性来声明：

```vue
<script setup lang="ts" generic="T">
defineProps<{
  items: T[]
  selected: T
}>()
</script>
```

`generic` 属性的值与 TypeScript 中的参数列表 `<...>` 完全相同，例如，你可以使用多个参数、`extends` 约束、默认类型和引用导入的类型：

```vue
<script
  setup
  lang="ts"
  generic="T extends string | number, U extends Item"
>
import type { Item } from './types'
defineProps<{
  id: T
  list: U[]
}>()
</script>
```

为了在 `ref` 中使用对范型组件的引用。你需要使用 `vue-component-type-helpers` 库，使其 `InstanceType` 正常工作。

```vue
<script
  setup
  lang="ts"
>
import componentWithoutGenerics from '../component-without-generics.vue';
import genericComponent from '../generic-component.vue';

import type { ComponentExposed } from 'vue-component-type-helpers';

// Works for a component without generics
ref<InstanceType<typeof componentWithoutGenerics>>();

ref<ComponentExposed<typeof genericComponent>>();
</script>
```

#### 组合式类型示例

- defineComponent()
- defineProps()
- defineEmits()
- computed()
- defineSlots()
- defineModel()
- provide()
- inject()
- useTemplateRef()
- ref()
- reactive()

参考

- https://vuejs.org/api/sfc-script-setup.html#usage-with-typescript
- https://vuejs.org/api/sfc-script-setup.html#type-only-props-emit-declarations
- https://vuejs.org/guide/typescript/composition-api#typescript-with-composition-api
- https://vuejs.org/guide/typescript/options-api#typescript-with-options-api

#### 常用类型

- ComponentCustomProperties
- ComponentCustomOptions
- ComponentExposed
- https://vuejs.org/api/utility-types

## 类型定义

## 类型检查

## Vite 与 TypeScript
