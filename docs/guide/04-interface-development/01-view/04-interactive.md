# 组件交互/事件

| 分类 | Composition API（Vue3）| Options API（Vue3/2）| 
| :--- | :--- | :--- |
| 状态 | defineEmits() | - |
| 状态 | - | emits |
| 状态 | - | methods |
| 状态 | emit | $emit() |

- 指令
  - v-on
  - v-bind
  - v-model
    - defineModel()
    - useModel()
  - $on
  - $once
  - $off
  - $emit
    - defineEmits
    - emits
  - $listeners
- 组件事件
- 事件绑定及传参
- 事件类型（复合事件）
- 自定义事件
- 事件原理

## 问题

> 方法可以定义在 methods 外面吗？

不行，定义在 methods 外面，无法通过实例的 this.方法名 获取到。

- $options
