# Vue

## 全局 API

| 分类 | Composition API / Options API（Vue3）| Options API（Vue2）
| :--- | :--- | :--- |
| 创建 | [createApp()](https://vuejs.org/api/application.html#createapp) v3.0 | [new Vue()](https://v2.cn.vuejs.org/v2/guide/instance.html) v2.0 | 
| 应用生命周期钩子 | [app.mount()](https://vuejs.org/api/application.html#app-mount) v3.0| - | 
| - | [app.onUnmount()](https://vuejs.org/api/application.html#app-onunmount) v3.5 | - | 
| - | [app.unmount()](https://vuejs.org/api/application.html#app-unmount) v3.0 | - | 
| 配置设置 | [app.config](https://vuejs.org/api/application.html#app-config) v3.0 | [Vue.config](https://v2.cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE) v2.0 | 
| 注册组件 | [app.component()](https://vuejs.org/api/application.html#app-component) v3.0 | [Vue.component()](https://v2.cn.vuejs.org/v2/api/#Vue-component) v2.0 | 
| 扩展 | [defineComponent()](https://vuejs.org/api/general.html#definecomponent) v3.0 | [Vue.extend()](https://v2.cn.vuejs.org/v2/api/#Vue-extend) v2.0 | 
| 混入 | [app.mixin()](https://vuejs.org/api/application.html#app-mixin) v3.0 | [Vue.mixin()](https://v2.cn.vuejs.org/v2/api/#Vue-mixin) v2.0 | 
| 注册指令 | [app.directive()](https://vuejs.org/api/application.html#app-directive) v3.0 | [Vue.directive()](https://v2.cn.vuejs.org/v2/api/#Vue-directive) v2.0 | 
| 依赖注入 | [app.provide()](https://vuejs.org/api/application.html#app-provide) v3.0 | - | 
| 上下文 | [app.runWithContext()](https://vuejs.org/api/application.html#app-runwithcontext) v3.3 | - | 
| 安装插件 | [app.use()](https://vuejs.org/api/application.html#app-use) v3.0 | [Vue.use()](https://v2.cn.vuejs.org/v2/api/#Vue-use) v2.0 | 

## 组件生命周期方法

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

## 组件属性

| 分类 | Composition API（Vue3）| Options API（Vue3/2）
| :--- | :--- | :--- |
| 声明属性及类型 | [defineProps()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) v3.0 | [`props`](https://v2.cn.vuejs.org/v2/api/#props) v2.0 | 
| 属性默认值 | [withDefaults()](https://vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration) v3.0 | 同上 | 
| 属性透传 | [defineOptions()](https://vuejs.org/api/sfc-script-setup.html#defineoptions) v3.3 | [`inheritAttrs`](https://v2.cn.vuejs.org/v2/api/#inheritAttrs) v2.4 | 
| 属性获取 | [useAttrs()](https://vuejs.org/api/composition-api-helpers.html#useattrs) v3.0 | [$attrs](https://v2.cn.vuejs.org/v2/api/#vm-attrs) v2.4 | 
| - | [var props](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) v3.0 | [$props](https://v2.cn.vuejs.org/v2/api/#vm-props) v2.2 | 

## 组件状态

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 状态 | [ref()](https://vuejs.org/api/reactivity-core#ref) v3.0 | [`data`](https://vuejs.org/api/options-state.html#data) v3.0 | [`data`](https://v2.cn.vuejs.org/v2/api/#data) v2.0 |
| - | - | [$data](https://vuejs.org/api/component-instance.html#data) v3.0 | [$data](https://v2.cn.vuejs.org/v2/api/#vm-data) v2.0 |
| 计算 | [computed()](https://vuejs.org/api/reactivity-core#computed) v3.0 | [`computed`](https://vuejs.org/api/options-state.html#computed) v3.0 | [`computed`](https://v2.cn.vuejs.org/v2/api/#computed) v2.0 |
| 监听 | [watch()](https://vuejs.org/api/reactivity-core#watch) v3.0 | [`watch`](https://vuejs.org/api/options-state.html#watch) v3.0 | [`watch`](https://v2.cn.vuejs.org/v2/api/#watch) v2.0 |
| - | - | [$watch()](https://vuejs.org/api/component-instance.html#watch) v3.0 | [$watch()](https://v2.cn.vuejs.org/v2/api/#vm-watch) v2.0 |
| - | [watchEffect()](https://vuejs.org/api/reactivity-core#watcheffect) v3.0 | - | - |
| - | [watchPostEffect()](https://vuejs.org/api/reactivity-core#watchposteffect) v3.0 | - | - |
| - | [watchSyncEffect()](https://vuejs.org/api/reactivity-core#watchsynceffect) v3.0 | - | - |
| - | [onWatcherCleanup()](https://vuejs.org/api/reactivity-core.html#onwatchercleanup) v3.5 | - | - |
| - | [effectScope()](https://vuejs.org/api/reactivity-advanced.html#effectscope) v3.0 | - | - |
| - | [getCurrentScope()](https://vuejs.org/api/reactivity-advanced.html#getcurrentscope) v3.0 | - | - |
| - | [onScopeDispose()](https://vuejs.org/api/reactivity-advanced.html#onscopedispose) v3.0 | - | - |

## 组件事件

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）| 
| :--- | :--- | :--- | :--- |
| 事件回调声明 | - | [`methods`](https://vuejs.org/api/options-state.html#methods) v3.0 | [`methods`](https://v2.cn.vuejs.org/v2/api/#methods) v2.0 |
| DOM 事件对象 | - | [$event](https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers) v3.0 | [$event](https://v2.cn.vuejs.org/v2/guide/events.html#%E5%86%85%E8%81%94%E5%A4%84%E7%90%86%E5%99%A8%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95) v2.0 |
| 事件绑定/监听 | - | [@](https://vuejs.org/api/built-in-directives.html#v-on) / [v-on](https://vuejs.org/api/built-in-directives.html#v-on) v3.0 | [@ / v-on](https://v2.cn.vuejs.org/v2/api/#v-on) v2.0 |
| - | - | @/v-on | [$on](https://v2.cn.vuejs.org/v2/api/#vm-on) v2.0 |
| - | - | [.once](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers) v3.0 | [$once](https://v2.cn.vuejs.org/v2/api/#vm-once) v2.0 |
| - | - | 组件卸载自动完成 | [$off](https://v2.cn.vuejs.org/v2/api/#vm-off) |
| 事件及类型声明 | [defineEmits()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) v3.0 | [`emits`](https://vuejs.org/api/options-state.html#emits) v3.0 | [`emits`](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html#%E7%A7%BB%E6%A4%8D%E5%9B%9E%E6%9D%A5%E7%9A%84%E7%89%B9%E6%80%A7) v2.7 |
| 事件触发 | [var emit()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) v3.0 | [$emit()](https://vuejs.org/api/component-instance.html#emit) v3.0 | [$emit()](https://v2.cn.vuejs.org/v2/api/#vm-emit) v2.0 |
| - | - | - | [$listeners](https://v2.cn.vuejs.org/v2/api/#vm-listeners) v2.4 |

## 表单输入

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 双向绑定 | - | [v-model](https://vuejs.org/api/built-in-directives.html#v-model) v3.0 | [v-model](https://v2.cn.vuejs.org/v2/api/#v-model) v2.0 |
| 定制绑定行为 | [defineModel()](https://vuejs.org/api/sfc-script-setup.html#definemodel) v3.4 | [useModel()](https://vuejs.org/api/composition-api-helpers.html#usemodel) v3.4 | [`model`](https://v2.cn.vuejs.org/v2/api/#model) v2.2 |

## 指令

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 条件渲染 | - | [v-if](https://vuejs.org/api/built-in-directives.html#v-if) v3.0 | [v-if](https://v2.cn.vuejs.org/v2/api/#v-if) v2.0 |
| - | - | [v-else-if](https://vuejs.org/api/built-in-directives.html#v-else-if) v3.0 | [v-else-if](https://v2.cn.vuejs.org/v2/api/#v-else-if) v2.0 |
| - | - | [v-else](https://vuejs.org/api/built-in-directives.html#v-else) v3.0 | [v-else](https://v2.cn.vuejs.org/v2/api/#v-else) v2.0 |
| 列表渲染 | - | [v-for](https://vuejs.org/api/built-in-directives.html#v-for) v3.0 / [:key](https://vuejs.org/api/built-in-special-attributes.html#key) v3.0 | [v-for](https://v2.cn.vuejs.org/v2/api/#v-for) v2.0 / [:key](https://v2.cn.vuejs.org/v2/api/#key) v2.0 |
| 显示隐藏 | - | [v-show](https://vuejs.org/api/built-in-directives.html#v-show) v3.0 | [v-show](https://v2.cn.vuejs.org/v2/api/#v-show) v2.0 |
| 文本渲染 | - | [v-text](https://vuejs.org/api/built-in-directives.html#v-text) v3.0 | [v-text](https://v2.cn.vuejs.org/v2/api/#v-text) v2.0 |
| HTML渲染 | - | [v-html](https://vuejs.org/api/built-in-directives.html#v-html) v3.0 | [v-html](https://v2.cn.vuejs.org/v2/api/#v-html) v2.0 |
| 跳过编译 | - | [v-pre](https://vuejs.org/api/built-in-directives.html#v-pre) v3.0 | [v-pre](https://v2.cn.vuejs.org/v2/api/#v-pre) v2.0 |
| 隐藏未编译插值 | - | [v-cloak](https://vuejs.org/api/built-in-directives.html#v-cloak) v3.0 | [v-cloak](https://v2.cn.vuejs.org/v2/api/#v-cloak) v2.0 |
| 渲染一次 | - | [v-once](https://vuejs.org/api/built-in-directives.html#v-once) v3.0 | [v-once](https://v2.cn.vuejs.org/v2/api/#v-once) v2.0 |
| 缓存模板 | - | [v-memo](https://vuejs.org/api/built-in-directives.html#v-memo) v3.2 | - |
| 注册指令 | - | [`directives`](https://vuejs.org/api/options-misc.html#directives) v3.0 | [`directives`](https://v2.cn.vuejs.org/v2/api/#directives) v2.0 |
| - | [app.directive()](https://vuejs.org/api/application.html#app-directive) v3.0 | - | [Vue.directive()](https://v2.cn.vuejs.org/v2/api/#Vue-directive) v2.0 |

## 插槽

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 插槽绑定 | - | [v-slot](https://vuejs.org/api/built-in-directives.html#v-slot) v3.0 | [v-slot](https://v2.cn.vuejs.org/v2/api/#v-slot) v2.6 |
| 命名插槽 | - | 同上 | [~~slot~~](https://v2.cn.vuejs.org/v2/api/#slot-%E5%BA%9F%E5%BC%83) v2.0 |
| 作用域插槽 | - | 同上 | [~~slot-scope~~](https://v2.cn.vuejs.org/v2/api/#slot-scope-%E5%BA%9F%E5%BC%83) v2.5 |
| 作用域插槽 | - | 同上 | [~~scope~~](https://v2.cn.vuejs.org/v2/api/#scope-%E7%A7%BB%E9%99%A4) v2.0 |
| 插槽出口 | - | [`<slot>`](https://vuejs.org/api/built-in-special-elements.html#slot) v3.0 | [`<slot>`](https://v2.cn.vuejs.org/v2/api/#slot) v2.0 |
| 定义插槽 | [defineSlots()](https://vuejs.org/api/sfc-script-setup.html#defineslots) v3.3  | [`slots`](https://vuejs.org/api/options-rendering.html#slots) v3.3 | - |
| 插槽实例 | [useSlots()](https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs) v3.0 | [$slots](https://vuejs.org/api/component-instance.html#slots) v3.0 | [$slots](https://v2.cn.vuejs.org/v2/api/#vm-slots) v2.0 |
| - | - | - | [~~$scopedSlots~~](https://v2.cn.vuejs.org/v2/api/#vm-scopedSlots) v2.1 |
| 渲染位置 | - | [`<Teleport>`](https://vuejs.org/api/built-in-components.html#teleport) v3.0 | - |

## JSX

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 模板 | - | [`template`](https://vuejs.org/api/options-rendering.html#template) v3.0 | [`template`](https://v2.cn.vuejs.org/v2/api/#template) v2.0 |
| - | - | [`<template>`](https://vuejs.org/api/built-in-special-elements.html#template) v3.0 | [`<template>`](https://v2.cn.vuejs.org/v2/guide/single-file-components.html) v2.0 |
| 渲染函数 | - | [render()](https://vuejs.org/api/options-rendering.html#render) v3.0 | [render()](https://v2.cn.vuejs.org/v2/api/#render) v2.0 |
| - | - | [h()](https://vuejs.org/api/render-function.html#h) v3.0 | [createElement()](https://v2.cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0) v2.0 / [h()](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) v2.0 |
| - | [mergeProps()](https://vuejs.org/api/render-function.html#mergeprops) v3.0 | - | - |
| - | [resolveComponent()](https://vuejs.org/api/render-function.html#resolvecomponent) v3.0 | - | - |
| - | [resolveDirective()](https://vuejs.org/api/render-function.html#resolvedirective) v3.0 | - | - |
| - | [withDirectives()](https://vuejs.org/api/render-function.html#withdirectives) v3.0 | - | - |
| - | [withModifiers()](https://vuejs.org/api/render-function.html#withmodifiers) v3.0 | - | - |
| - | [isVNode()](https://vuejs.org/api/render-function.html#isvnode) v3.0 | - | - |
| - | [cloneVNode()](https://vuejs.org/api/render-function.html#clonevnode) v3.0 | - | - |
| - | [defineCustomElement()](https://vuejs.org/api/custom-elements.html#definecustomelement) v3.0 | - | - |
| - | [useShadowRoot()](https://vuejs.org/api/custom-elements.html#useshadowroot) v3.5 | - | - |
| - | [useHost()](https://vuejs.org/api/custom-elements.html#usehost) v3.5 | - | - |
| - | [$host()](https://vuejs.org/api/custom-elements.html#this-host) v3.5 | - | - |
| 函数式组件 | - | - | [`functional`](https://v2.cn.vuejs.org/v2/api/#functional) v2.0 |
| 模板编译 | - | - | [Vue.compile()](https://v2.cn.vuejs.org/v2/api/#Vue-compile) v2.0 |
| 自定义渲染 | [createRenderer()](https://vuejs.org/api/custom-renderer.html#createrenderer) v3.0 | - | - |
| 服务端渲染 | [createSSRApp()](https://vuejs.org/api/application.html#createssrapp) v3.0 | - | [$isServer](https://v2.cn.vuejs.org/v2/api/#vm-isServer) v2.0 / [vue-server-renderer](https://v2.ssr.vuejs.org/zh/) v2.2 |
| - | [renderToString()](https://vuejs.org/api/ssr.html#rendertostring) v3.0 | - | - |
| - | [renderToNodeStream()](https://vuejs.org/api/ssr.html#rendertonodestream) v3.0 | - | - |
| - | [pipeToNodeWritable()](https://vuejs.org/api/ssr.html#pipetonodewritable) v3.0 | - | - |
| - | [renderToWebStream()](https://vuejs.org/api/ssr.html#rendertowebstream) v3.0 | - | - |
| - | [pipeToWebWritable()](https://vuejs.org/api/ssr.html#pipetowebwritable) v3.0 | - | - |
| - | [renderToSimpleStream()](https://vuejs.org/api/ssr.html#rendertosimplestream) v3.0 | - | - |
| - | [useSSRContext()](https://vuejs.org/api/ssr.html#usessrcontext) v3.0 | - | - |

## DOM 实例

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| DOM 挂载 | - | - | [`el`](https://v2.cn.vuejs.org/v2/api/#el) v2.0 |
| DOM 实例 | - | [$el](https://vuejs.org/api/component-instance.html#el) v3.0 | [$el](https://v2.cn.vuejs.org/v2/api/#vm-el) v2.0 |
| - | - | [$root](https://vuejs.org/api/component-instance.html#root) v3.0 | [$root](https://v2.cn.vuejs.org/v2/api/#vm-root) v2.0 |
| - | - | [$parent](https://vuejs.org/api/component-instance.html#parent) v3.0 | [$parent](https://v2.cn.vuejs.org/v2/api/#vm-parent) v2.0 |
| - | - | - | [$children](https://v2.cn.vuejs.org/v2/api/#vm-children) v2.0 |
| 模板引用 | - | [ref](https://vuejs.org/api/built-in-special-attributes.html#ref) v3.0 | [ref](https://v2.cn.vuejs.org/v2/api/#ref) v2.0 |
| - | [useTemplateRef()](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) v3.5 | [$refs](https://vuejs.org/api/component-instance.html#refs) v3.0 | [$refs](https://v2.cn.vuejs.org/v2/api/#vm-refs) v2.0 |
| 强制 DOM 更新 | - | [$forceUpdate()](https://vuejs.org/api/component-instance.html#forceupdate) v3.0 | [$forceUpdate()](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate) v2.0 |
| 立即获取 DOM | [nextTick()](https://vuejs.org/api/general.html#nexttick) v3.0 | [$nextTick()](https://vuejs.org/api/component-instance.html#nexttick) v3.0 | [Vue.nextTick()](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) / [$nextTick()](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) v2.0 |
| 公开实例属性 | [defineExpose()](https://vuejs.org/api/sfc-script-setup.html#defineexpose) v3.0 | [`expose`](https://vuejs.org/api/options-state.html#expose) v3.0 | - |

## 可复用性

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 扩展 | - | [`extends`](https://vuejs.org/api/options-composition.html#extends) v3.0 | [`extends`](https://v2.cn.vuejs.org/v2/api/#extends) v2.0 | 
| - | [defineComponent()](https://vuejs.org/api/general.html#definecomponent) v3.0 / [defineAsyncComponent()](https://vuejs.org/api/general.html#defineasynccomponent) v3.0 | - | [Vue.extend()](https://v2.cn.vuejs.org/v2/api/#Vue-extend) v2.0 |
| 混入 | - | [`mixins`](https://vuejs.org/api/options-composition.html#mixins) v3.0 | [`mixins`](https://v2.cn.vuejs.org/v2/api/#mixins) v2.0 |
| - | [app.mixin()](https://vuejs.org/api/application.html#app-mixin) v3.0 | - | [Vue.mixin()](https://v2.cn.vuejs.org/v2/api/#Vue-mixin) v2.0 |
| 指令 | - | [`directives`](https://vuejs.org/api/options-misc.html#directives) v3.0 | [`directives`](https://v2.cn.vuejs.org/v2/api/#directives) v2.0 |
| - | [app.directive()](https://vuejs.org/api/application.html#app-directive) v3.0 | - | [Vue.directive()](https://v2.cn.vuejs.org/v2/api/#Vue-directive) v2.0 |
| 依赖注入/上下文 | [provide()](https://vuejs.org/api/composition-api-dependency-injection.html#provide) v3.0 | [`provide`](https://vuejs.org/api/options-composition.html#provide) v3.0 | [`provide`](https://v2.cn.vuejs.org/v2/api/#provide-inject) v2.2 |
| - | [app.provide()](https://vuejs.org/api/application.html#app-provide) v3.0 | - | - |
| - | [inject()](https://vuejs.org/api/composition-api-dependency-injection.html#inject) v3.0 | [`inject`](https://vuejs.org/api/options-composition.html#inject) v3.0 | [`inject`](https://v2.cn.vuejs.org/v2/api/#provide-inject) v2.2 |
| - | [hasInjectionContext()](https://vuejs.org/api/composition-api-dependency-injection.html#has-injection-context) v3.3 | - | - |
| - | [app.runWithContext()](https://vuejs.org/api/application.html#app-runwithcontext) v3.3 | - | - |
| 插件 | [app.use()](https://vuejs.org/api/application.html#app-use) v3.0 | - | [Vue.use()](https://v2.cn.vuejs.org/v2/api/#Vue-use) v2.0 |
| 过滤器 | - | - | [`filters`](https://v2.cn.vuejs.org/v2/api/#filters) v2.0 / [Vue.filter()](https://v2.cn.vuejs.org/v2/api/#Vue-filter) v2.0 |
| 实例层级 | [useShadowRoot()](https://vuejs.org/api/custom-elements.html#useshadowroot) v3.5 | - | [$root](https://v2.cn.vuejs.org/v2/api/#vm-root) v2.0 |
| - | - | $parent | [$parent](https://v2.cn.vuejs.org/v2/api/#vm-parent) v2.0 |
| - | - | - | [$children](https://v2.cn.vuejs.org/v2/api/#vm-children) v2.0 |

## 响应式

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
