# 插槽

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 插槽绑定 | - | [v-slot](https://vuejs.org/api/built-in-directives.html#v-slot) | [v-slot](https://v2.cn.vuejs.org/v2/api/#v-slot) |
| - | - | [`<slot>`](https://vuejs.org/api/built-in-special-elements.html#slot) | [`<slot>`](https://v2.cn.vuejs.org/v2/api/#slot) |
| 定制绑定行为 | [defineSlots()](https://vuejs.org/api/sfc-script-setup.html#defineslots) | - | [slot](https://v2.cn.vuejs.org/v2/api/#slot-%E5%BA%9F%E5%BC%83) |
| - | - | - | [slot-scope](https://v2.cn.vuejs.org/v2/api/#slot-scope-%E5%BA%9F%E5%BC%83) |
| - | [useSlots()](https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs) | [slots](https://vuejs.org/api/options-rendering.html#slots) | - |
| 插槽实例 | - | [$slots](https://vuejs.org/api/component-instance.html#slots) | [$slots](https://v2.cn.vuejs.org/v2/api/#vm-slots) |
| - | - | - | [$scopedSlots](https://v2.cn.vuejs.org/v2/api/#vm-scopedSlots) |
| 默认子内容 | - | - | [$children](https://v2.cn.vuejs.org/v2/api/#vm-children) |
| 渲染位置 | - | [`<Teleport>`](https://vuejs.org/api/built-in-components.html#teleport) | - |
| 动态组件渲染 | - | [`<component>`](https://vuejs.org/api/built-in-special-elements.html#component) | [`<component>`](https://v2.cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6) |
| 异步组件渲染 | - | [defineAsyncComponent()](https://vuejs.org/api/general.html#defineasynccomponent) | [import()](https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6) |

- 插槽
  - 插槽绑定
    - `v-slot`
  - 定制插槽行为
    - `defineSlots()`
    - slots
    - `useSlots()`
    - 默认插槽
    - 具名插槽
      - `<slot>` name
    - 动态插槽
    - 作用域插槽
      - `slot`
      - `slot-scope`
  - 插槽获取
    - `$slots`
    - `$scopedSlots`
    - `$children`
