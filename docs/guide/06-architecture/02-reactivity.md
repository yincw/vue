# 响应式

| 分类 | Composition API（Vue3） - Proxy | Options API（Vue2）- Object.defineProperty |
| :--- | :--- | :--- |
| 响应式对象 | - | [Vue.observable()](https://v2.cn.vuejs.org/v2/api/#Vue-observable) v2.6 |
| 添加属性 | - | [Vue.set()](https://v2.cn.vuejs.org/v2/api/#Vue-set) v2.0 |
| `\-` | - | [$set()](https://v2.cn.vuejs.org/v2/api/#vm-set) v2.0 |
| 删除属性 | - | [Vue.delete()](https://v2.cn.vuejs.org/v2/api/#Vue-delete) v2.0 |
| `\-` | - | [$delete()](https://v2.cn.vuejs.org/v2/api/#vm-delete) v2.0 |
| 引用 | [ref()](https://vuejs.org/api/reactivity-core.html#ref) v3.0 | `data`  |
| `\-` | [isRef()](https://vuejs.org/api/reactivity-utilities.html#isref) v3.0 | - |
| `\-` | [unref()](https://vuejs.org/api/reactivity-utilities.html#unref) v3.0 | - |
| `\-` | [toRef()](https://vuejs.org/api/reactivity-utilities.html#toref) v3.3 | - |
| `\-` | [toRefs()](https://vuejs.org/api/reactivity-utilities.html#torefs) v3.0 | - |
| `\-` | [toValue()](https://vuejs.org/api/reactivity-utilities.html#tovalue) v3.3 | - |
| `\-` | [shallowRef()](https://vuejs.org/api/reactivity-advanced.html#shallowref) v3.0 | - |
| `\-` | [triggerRef()](https://vuejs.org/api/reactivity-advanced.html#triggerref) v3.0 | - |
| `\-` | [customRef()](https://vuejs.org/api/reactivity-advanced.html#customref) v3.0 | - |
| 代理 | [isProxy()](https://vuejs.org/api/reactivity-utilities.html#isproxy) v3.0 | - |
| `\- 响应式对象` | [reactive()](https://vuejs.org/api/reactivity-core.html#reactive) v3.0 | - |
| `\-` | [shallowReactive()](https://vuejs.org/api/reactivity-advanced.html#shallowreactive) v3.0 | - |
| `\-` | [isReactive()](https://vuejs.org/api/reactivity-utilities.html#isreactive) v3.0 | - |
| `\- 只读对象` | [readonly()](https://vuejs.org/api/reactivity-core.html#readonly) v3.0 | - |
| `\-` | [shallowReadonly()](https://vuejs.org/api/reactivity-advanced.html#shallowreadonly) v3.0 | - |
| `\-` | [isReadonly()](https://vuejs.org/api/reactivity-utilities.html#isreadonly) v3.0 | - |
| 原始对象 | [toRaw()](https://vuejs.org/api/reactivity-advanced.html#toraw) v3.0 | - |
| `\-` | [markRaw()](https://vuejs.org/api/reactivity-advanced.html#markraw) v3.0 | - |

## Ref

## 代理

### 响应式对象

### 只读对象

## 原始对象

## 响应式原理

![Image](/data.png)

## 其他

- Vue.nextTick() / $nextTick()
  - Promise.then
  - MutationObserver
  - setImmediate()
  - setTimeout(fn, 0)
