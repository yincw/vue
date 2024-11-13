# 组件生命周期方法

| 分类 | Composition API（Vue3） | Options API（Vue3） | Options API（Vue2）
| :--- | :---| :--- | :--- | 
| 创建 | 无 | [beforeCreate()](https://vuejs.org/api/options-lifecycle.html#beforecreate) v3.0 | [beforeCreate()](https://v2.cn.vuejs.org/v2/api/?#beforeCreate) v2.0 | 
| - | 无 | [created()](https://vuejs.org/api/options-lifecycle.html#created) v3.0 | [created()](https://v2.cn.vuejs.org/v2/api/?#created) v2.0 | 
| 挂载 | [onBeforeMount()](https://vuejs.org/api/composition-api-lifecycle.html#onbeforemount) v3.0 | [beforeMount()](https://vuejs.org/api/options-lifecycle.html#beforemount) v3.0 | [beforeMount()](https://v2.cn.vuejs.org/v2/api/?#beforeMount) v2.0 | 
| - | [onRenderTracked()](https://vuejs.org/api/composition-api-lifecycle.html#onrendertracked) - DEV v3.0 | [renderTracked()](https://vuejs.org/api/options-lifecycle.html#rendertracked) - DEV v3.0 | 无 | 
| - | [onMounted()](https://vuejs.org/api/composition-api-lifecycle.html#onmounted) v3.0 | [mounted()](https://vuejs.org/api/options-lifecycle.html#mounted) v3.0 | [mounted()](https://v2.cn.vuejs.org/v2/api/?#mounted) v2.0 | 
| 更新 | [onRenderTriggered()](https://vuejs.org/api/composition-api-lifecycle.html#onrendertriggered) - DEV v3.0 | [renderTriggered()](https://vuejs.org/api/options-lifecycle.html#rendertriggered) - DEV v3.0 | 无 | 
| - | [onBeforeUpdate()](https://vuejs.org/api/composition-api-lifecycle.html#onbeforeupdate) v3.0 | [beforeUpdate()](https://vuejs.org/api/options-lifecycle.html#beforeupdate) v3.0 | [beforeUpdate()](https://v2.cn.vuejs.org/v2/api/?#beforeUpdate) v2.0 | 
| - | [onDeactivated()](https://vuejs.org/api/composition-api-lifecycle.html#ondeactivated) v3.0 | [deactivated()](https://vuejs.org/api/options-lifecycle.html#deactivated) v3.0 | [deactivated()](https://v2.cn.vuejs.org/v2/api/?#deactivated) v2.0 | 
| - | [onActivated()](https://vuejs.org/api/composition-api-lifecycle.html#onactivated) v3.0 | [activated()](https://vuejs.org/api/options-lifecycle.html#activated) v3.0 | [activated()](https://v2.cn.vuejs.org/v2/api/?#activated) v2.0 | 
| - | [onUpdated()](https://vuejs.org/api/composition-api-lifecycle.html#onupdated) v3.0 | [updated()](https://vuejs.org/api/options-lifecycle.html#updated) v3.0 | [updated()](https://v2.cn.vuejs.org/v2/api/?#updated) v2.0 | 
| 卸载 | [onBeforeUnmount()](https://vuejs.org/api/composition-api-lifecycle.html#onbeforeunmount) v3.0 | [beforeUnmount()](https://vuejs.org/api/options-lifecycle.html#beforeunmount) v3.0 | [beforeDestroy()](https://v2.cn.vuejs.org/v2/api/?#beforeDestroy) v2.0 | 
| - | [onUnmounted()](https://vuejs.org/api/composition-api-lifecycle.html#onunmounted) v3.0 | [unmounted()](https://vuejs.org/api/options-lifecycle.html#unmounted) v3.0 | [destroyed()](https://v2.cn.vuejs.org/v2/api/?#destroyed) v2.0 | 
| 错误捕获 | [onErrorCaptured()](https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured) v3.0 | [errorCaptured()](https://vuejs.org/api/options-lifecycle.html#errorcaptured) v3.0 | [errorCaptured()](https://v2.cn.vuejs.org/v2/api/?#errorCaptured) v2.5 | 
| SSR | [onServerPrefetch()](https://vuejs.org/api/composition-api-lifecycle.html#onserverprefetch) v3.0 | [serverPrefetch()](https://vuejs.org/api/options-lifecycle.html#serverprefetch) v3.0 | 无 | 

## 生命周期钩子函数

::: code-group

```vue [Composition API]
<script step lang="ts">
import { 
  onBeforeMount,
  onRenderTracked,
  onMounted,

  onRenderTriggered,
  onBeforeUpdate,
  onDeactivated,
  onActivated,
  onUpdated,

  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onServerPrefetch,
 } form 'vue';

  // 组件注册
  // ============
  // 自动注册，自动命名

  // 生命周期钩子函数
  // ============
  // 挂载
  onBeforeMount(() => {}); // 挂载之前，render 函数首次被调用
  onRenderTracked((e: DebuggerHook) => {}); // 开发模式，执行N次
  onMounted(() => {}); // 当前组件 DOM 已准备完成，

  // 更新
  onRenderTriggered((e: DebuggerHook) => {}); // 开发模式，执行1次
  onBeforeUpdate(() => {}); // 数据发生改变后，DOM 更新之前调用
  //  onRenderTracked((e: DebuggerHook) => {}); // 开发模式，执行N-1次
  onDeactivated(() => {}); // 被 keep-alive 缓存的组件 失活时 调用
  onActivated(() => {}); // 被 keep-alive 缓存的组件 激活时 调用
  onUpdated(() => {}); // 当前组件 DOM 已更新完成，

  // 卸载
  onBeforeUnmount(() => {}); // 销毁（卸载）前调用
  onUnmounted(() => {}); // 销毁（卸载）后调用

  // 错误捕获
  onErrorCaptured((callback: ErrorCapturedHook) => {
    // return ?boolean;
  });

  // 服务端渲染
  onServerPrefetch(() => Promise<any>)
</script>
```

```vue [Options API]
<script lang="ts">
export default {
  // 组件注册
  // ============
  // 手动声明注册，命名

  // 生命周期钩子函数
  // ============
  // 实例
  beforeCreate(this: ComponentPublicInstance) {}, // 初始化后
  created(this: ComponentPublicInstance) {}, // 创建完成后，数据侦听、计算属性、方法、事件/侦听器回调 等配置完成
  // 挂载
  beforeMount(this: ComponentPublicInstance) {}, // 挂载之前，render 函数首次被调用
  renderTracked(this: ComponentPublicInstance, e: DebuggerEvent) {}, // 开发模式，执行N次
  mounted(this: ComponentPublicInstance) {}, // 挂载完成，当前组件 DOM 已准备完成，this.$nextTick() 可保证所有子组件的 DOM 也挂载完成

  // 更新
  renderTriggered(this: ComponentPublicInstance, e: DebuggerEvent) {}, // 开发模式，执行1次
  beforeUpdate(this: ComponentPublicInstance) {}, // 数据发生改变后，DOM 更新之前
  // renderTracked(this: ComponentPublicInstance, e: DebuggerEvent) {},  // 开发模式，执行N-1次
  deactivated(this: ComponentPublicInstance) {},  // 被 keep-alive 缓存的组件 失活时 调用
  activated(this: ComponentPublicInstance) {}, // 被 keep-alive 缓存的组件 激活时 调用
  updated(this: ComponentPublicInstance) {}, // 当前组件 DOM 已更新完成，this.$nextTick() 可保证所有子组件的 DOM 也更新完成。状态改变请使用 computed 或 watcher 

  // 卸载，Vue3 Options
  beforeUnmount(this: ComponentPublicInstance) {}, // 销毁（卸载）前调用
  unmounted(this: ComponentPublicInstance) {}, // 销毁（卸载）后调用，指令、事件监听器及子实例都将被销毁
  // 销毁，Vue2 Options
  // beforeDestroy() {}, // 销毁前调用
  // destroyed() {}, // 销毁后调用，指令、事件监听器及子实例都将被销毁

  // 错误捕获
  // 捕获来自后代组件的错误，返回 false 可以阻止错误继续向上传播
  errorCaptured(this: ComponentPublicInstance, err: unknown, instance: ComponentPublicInstance | null, info: string) {
    // return ?boolean;
  }

  // 服务端渲染 Vue3 Options
  serverPrefetch(this: ComponentPublicInstance) {
    // return Promise<any>;
  }

}
</script>
```

:::

## 调用顺序

嵌套组件生命周期钩子函数调用顺序：

- 挂载/卸载 前（Before*）：**从外向内** 依次执行
  - beforeCreate(外) -> created(外) ->
  - onBeforeMount(外) -> onBeforeMount(中) -> onBeforeMount(内)
  - onBeforeUnmount(外) -> onBeforeUnmount(中) -> onBeforeUnmount(内)
- 挂载/卸载 后（*ed）及 激活/失活：**从内向外** 依次执行
  - onMounted(内) -> onMounted(中) -> onMounted(外)
  - onUnmounted(内) -> onUnmounted(中) -> onUnmounted(外)
  - onActivated(内) -> onActivated(中) -> onActivated(外)
  - onDeactivated(内) -> onDeactivated(中) -> onDeactivated(外)

## 生命周期图示

![Image](/lifecycle.png)


## 参考

- https://vuejs.org/api/composition-api-lifecycle.html
- https://vuejs.org/api/options-lifecycle.html
- https://v2.cn.vuejs.org/v2/api/?#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90
