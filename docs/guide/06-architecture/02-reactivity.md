# 响应式

| 分类 | Composition API（Vue3） - Proxy | Options API（Vue2）- Object.defineProperty |
| :--- | :--- | :--- |
| - | - | [Vue.observable()](https://v2.cn.vuejs.org/v2/api/#Vue-observable) |
| - | - | [Vue.set()](https://v2.cn.vuejs.org/v2/api/#Vue-set) |
| - | - | [$set()](https://v2.cn.vuejs.org/v2/api/#vm-set) |
| - | - | [Vue.delete()](https://v2.cn.vuejs.org/v2/api/#Vue-delete) |
| - | - | [$delete()](https://v2.cn.vuejs.org/v2/api/#vm-delete) |
| - | [ref()](https://vuejs.org/api/reactivity-core.html#ref) | `data`  |
| - | [shallowRef()](https://vuejs.org/api/reactivity-advanced.html#shallowref) | - |
| - | [isRef()](https://vuejs.org/api/reactivity-utilities.html#isref) | - |
| - | [unref()](https://vuejs.org/api/reactivity-utilities.html#unref) | - |
| - | [triggerRef()](https://vuejs.org/api/reactivity-advanced.html#triggerref) | - |
| - | [customRef()](https://vuejs.org/api/reactivity-advanced.html#customref) | - |
| - | [toRef()](https://vuejs.org/api/reactivity-utilities.html#toref) | - |
| - | [toRefs()](https://vuejs.org/api/reactivity-utilities.html#torefs) | $refs |
| - | [toValue()](https://vuejs.org/api/reactivity-utilities.html#tovalue) | - |
| - | [reactive()](https://vuejs.org/api/reactivity-core.html#reactive) | - |
| - | [shallowReactive()](https://vuejs.org/api/reactivity-advanced.html#shallowreactive) | - |
| - | [readonly()](https://vuejs.org/api/reactivity-core.html#readonly) | - |
| - | [shallowReadonly()](https://vuejs.org/api/reactivity-advanced.html#shallowreadonly) | - |
| - | [isProxy()](https://vuejs.org/api/reactivity-utilities.html#isproxy) | - |
| - | [isReactive()](https://vuejs.org/api/reactivity-utilities.html#isreactive) | - |
| - | [isReadonly()](https://vuejs.org/api/reactivity-utilities.html#isreadonly) | - |
| - | [toRaw()](https://vuejs.org/api/reactivity-advanced.html#toraw) | - |
| - | [markRaw()](https://vuejs.org/api/reactivity-advanced.html#markraw) | - |

- 响应式对象
  - 深度响应
  - 只读响应
  - 实用工具

- 代理
- 原始对象


## 响应式对象

- Vue.observable()
- 可变的响应式对象代理（深度转换）
  - ref()
  - reactive()
- 深度不转换
  - shallowRef()
  - shallowReactive()
- 只读的
  - readonly()
  - shallowReadonly()
- 双向响应
  - toRef()
  - 

## 响应式对象添加属性

## 响应式对象删除属性

## 任务队列

- Vue.nextTick()
- $nextTick()
  - Promise.then
  - MutationObserver
  - setImmediate()
  - setTimeout(fn, 0)

## 响应式原理

![Image](/data.png)
