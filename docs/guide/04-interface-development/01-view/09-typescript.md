# TypeScript 支持

## TypeScript

```vue
<script lang="ts">
  // use TypeScript
</script>
```

## TypeScript 范型

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

## 参考

- https://v2.cn.vuejs.org/v2/guide/typescript.html#ad
- https://vuejs.org/guide/typescript/overview#using-vue-with-typescript
- https://vuejs.org/guide/typescript/composition-api#typescript-with-composition-api
- https://vuejs.org/guide/typescript/options-api#typescript-with-options-api
