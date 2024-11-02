# 响应式

- `Proxy`
  - `ref()`
    - `shallowRef()`
    - `triggerRef()`
    - `customRef()`
    - `isRef()`
    - `unref()`
    - `toRef()`
    - `toValue()`
    - `toRefs()`
    - `isProxy()`
  - `reactive()`
    - `shallowReactive()`
    - `isReactive()`
  - `readonly()`
    - `shallowReadonly()`
    - `isReadonly()`
  - `toRaw()`
    - `markRaw()`
  - Scope
    - `effectScope()`
    - `getCurrentScope()`
    - `onScopeDispose()`
- `Object.defineProperty`
  - [`Vue.set()`](https://v2.cn.vuejs.org/v2/api/#Vue-set)
  - [`$set()`](https://v2.cn.vuejs.org/v2/api/#vm-set)
  - [`Vue.delete()`](https://v2.cn.vuejs.org/v2/api/#Vue-delete)
  - [`$delete()`](https://v2.cn.vuejs.org/v2/api/#vm-delete)
  - [`Vue.observable()`](https://v2.cn.vuejs.org/v2/api/#Vue-observable)

## 任务队列

- Promise.then
- MutationObserver
- setImmediate()
- setTimeout(fn, 0)
- Vue.nextTick()
- $nextTick()

## 响应式原理

![Image](/data.png)
