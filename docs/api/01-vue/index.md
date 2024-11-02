# Vue

## 全局 API

| 分类 | Composition API / Options API（Vue3）| Options API（Vue2）
| :--- | :--- | :--- |
| 创建 | [createApp()](https://vuejs.org/api/application.html#createapp) | [new Vue()](https://v2.cn.vuejs.org/v2/guide/instance.html) | 
| 应用生命周期钩子 | [app.mount()](https://vuejs.org/api/application.html#app-mount) | - | 
| - | [app.onUnmount()](https://vuejs.org/api/application.html#app-onunmount) | - | 
| - | [app.unmount()](https://vuejs.org/api/application.html#app-unmount) | - | 
| 配置设置 | [app.config](https://vuejs.org/api/application.html#app-config) | [Vue.config](https://v2.cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE) | 
| 注册组件 | [app.component()](https://vuejs.org/api/application.html#app-component) | [Vue.component()](https://v2.cn.vuejs.org/v2/api/#Vue-component) | 
| 扩展 | [defineComponent()](https://vuejs.org/api/general.html#definecomponent) | [Vue.extend()](https://v2.cn.vuejs.org/v2/api/#Vue-extend) | 
| 混入 | [app.mixin()](https://vuejs.org/api/application.html#app-mixin) | [Vue.mixin()](https://v2.cn.vuejs.org/v2/api/#Vue-mixin) | 
| 注册指令 | [app.directive()](https://vuejs.org/api/application.html#app-directive) | [Vue.directive()](https://v2.cn.vuejs.org/v2/api/#Vue-directive) | 
| 依赖注入 | [app.provide()](https://vuejs.org/api/application.html#app-provide) | - | 
| 上下文 | [app.runWithContext()](https://vuejs.org/api/application.html#app-runwithcontext) | - | 
| 安装插件 | [app.use()](https://vuejs.org/api/application.html#app-use) | [Vue.use()](https://v2.cn.vuejs.org/v2/api/#Vue-use) | 

## 组件生命周期方法

| 分类 | Composition API（Vue3） | Options API（Vue3） | Options API（Vue2）
| :--- | :---| :--- | :--- | 
| 创建 | 无 | [beforeCreate()](https://vuejs.org/api/options-lifecycle.html#beforecreate) | [beforeCreate()](https://v2.cn.vuejs.org/v2/api/?#beforeCreate) | 
| - | 无 | [created()](https://vuejs.org/api/options-lifecycle.html#created) | [created()](https://v2.cn.vuejs.org/v2/api/?#created) | 
| 挂载 | [onBeforeMount()](https://vuejs.org/api/composition-api-lifecycle.html#onbeforemount) | [beforeMount()](https://vuejs.org/api/options-lifecycle.html#beforemount) | [beforeMount()](https://v2.cn.vuejs.org/v2/api/?#beforeMount) | 
| - | [onRenderTracked()](https://vuejs.org/api/composition-api-lifecycle.html#onrendertracked) - DEV | [renderTracked()](https://vuejs.org/api/options-lifecycle.html#rendertracked) - DEV | 无 | 
| - | [onMounted()](https://vuejs.org/api/composition-api-lifecycle.html#onmounted) | [mounted()](https://vuejs.org/api/options-lifecycle.html#mounted) | [mounted()](https://v2.cn.vuejs.org/v2/api/?#mounted) | 
| 更新 | [onRenderTriggered()](https://vuejs.org/api/composition-api-lifecycle.html#onrendertriggered) - DEV | [renderTriggered()](https://vuejs.org/api/options-lifecycle.html#rendertriggered) - DEV | 无 | 
| - | [onBeforeUpdate()](https://vuejs.org/api/composition-api-lifecycle.html#onbeforeupdate) | [beforeUpdate()](https://vuejs.org/api/options-lifecycle.html#beforeupdate) | [beforeUpdate()](https://v2.cn.vuejs.org/v2/api/?#beforeUpdate) | 
| - | [onDeactivated()](https://vuejs.org/api/composition-api-lifecycle.html#ondeactivated) | [deactivated()](https://vuejs.org/api/options-lifecycle.html#deactivated) | [deactivated()](https://v2.cn.vuejs.org/v2/api/?#deactivated) | 
| - | [onActivated()](https://vuejs.org/api/composition-api-lifecycle.html#onactivated) | [activated()](https://vuejs.org/api/options-lifecycle.html#activated) | [activated()](https://v2.cn.vuejs.org/v2/api/?#activated) | 
| - | [onUpdated()](https://vuejs.org/api/composition-api-lifecycle.html#onupdated) | [updated()](https://vuejs.org/api/options-lifecycle.html#updated) | [updated()](https://v2.cn.vuejs.org/v2/api/?#updated) | 
| 卸载 | [onBeforeUnmount()](https://vuejs.org/api/composition-api-lifecycle.html#onbeforeunmount) | [beforeUnmount()](https://vuejs.org/api/options-lifecycle.html#beforeunmount) | [beforeDestroy()](https://v2.cn.vuejs.org/v2/api/?#beforeDestroy) | 
| - | [onUnmounted()](https://vuejs.org/api/composition-api-lifecycle.html#onunmounted) | [unmounted()](https://vuejs.org/api/options-lifecycle.html#unmounted) | [destroyed()](https://v2.cn.vuejs.org/v2/api/?#destroyed) | 
| 错误捕获 | [onErrorCaptured()](https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured) | [errorCaptured()](https://vuejs.org/api/options-lifecycle.html#errorcaptured) | [errorCaptured()](https://v2.cn.vuejs.org/v2/api/?#errorCaptured) | 
| SSR | [onServerPrefetch()](https://vuejs.org/api/composition-api-lifecycle.html#onserverprefetch) | [serverPrefetch()](https://vuejs.org/api/options-lifecycle.html#serverprefetch) | 无 | 

## 组件属性

| 分类 | Composition API（Vue3）| Options API（Vue3/2）
| :--- | :--- | :--- |
| 声明属性及类型 | [defineProps()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [props](https://v2.cn.vuejs.org/v2/api/#props) | 
| 属性默认值 | [withDefaults()](https://vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration) | 同上 | 
| 属性透传 | [defineOptions()](https://vuejs.org/api/sfc-script-setup.html#defineoptions) | [inheritAttrs](https://v2.cn.vuejs.org/v2/api/#inheritAttrs) | 
| 属性获取 | [useAttrs()](https://vuejs.org/api/composition-api-helpers.html#useattrs) | [$attrs](https://v2.cn.vuejs.org/v2/api/#vm-attrs) | 
| - | [var props](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [$props](https://v2.cn.vuejs.org/v2/api/#vm-props) | 

## 组件状态

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 状态 | [ref()](https://vuejs.org/api/reactivity-core#ref) | [data](https://vuejs.org/api/options-state.html#data) | [data](https://v2.cn.vuejs.org/v2/api/#data) | 
| - | - | [$data](https://vuejs.org/api/component-instance.html#data) | $data | 
| 计算 | [computed()](https://vuejs.org/api/reactivity-core#computed) | [computed](https://vuejs.org/api/options-state.html#computed) | [computed](https://v2.cn.vuejs.org/v2/api/#computed) | 
| 监听 | [watch()](https://vuejs.org/api/reactivity-core#watch) | [watch](https://vuejs.org/api/options-state.html#watch) /  | [watch](https://v2.cn.vuejs.org/v2/api/#watch) | 
| - | - | [$watch()](https://vuejs.org/api/component-instance.html#watch) | [$watch()](https://v2.cn.vuejs.org/v2/api/#vm-watch) | 
| - | [watchEffect()](https://vuejs.org/api/reactivity-core#watcheffect) | - | - | 
| - | [watchPostEffect()](https://vuejs.org/api/reactivity-core#watchposteffect) | - | - | 
| - | [watchSyncEffect()](https://vuejs.org/api/reactivity-core#watchsynceffect) | - | - | 
| - | [onWatcherCleanup()](https://vuejs.org/api/reactivity-core.html#onwatchercleanup) | - | - | 

## 组件事件

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）| 
| :--- | :--- | :--- | :--- |
| 事件回调声明 | - | [methods](https://vuejs.org/api/options-state.html#methods) | [methods](https://v2.cn.vuejs.org/v2/api/#methods) |
| DOM 事件对象 | - | [$event](https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers) | [$event](https://v2.cn.vuejs.org/v2/guide/events.html#%E5%86%85%E8%81%94%E5%A4%84%E7%90%86%E5%99%A8%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95) |
| 事件绑定/监听 | - | [@](https://vuejs.org/api/built-in-directives.html#v-on) / [v-on](https://vuejs.org/api/built-in-directives.html#v-on) | [@ / v-on](https://v2.cn.vuejs.org/v2/api/#v-on) |
| - | - | @/v-on | [$on](https://v2.cn.vuejs.org/v2/api/#vm-on) |
| - | - | [.once](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers) | [$once](https://v2.cn.vuejs.org/v2/api/#vm-once) |
| - | - | 组件卸载自动完成 | [$off](https://v2.cn.vuejs.org/v2/api/#vm-off) |
| 事件及类型声明 | [defineEmits()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [emits](https://vuejs.org/api/options-state.html#emits) | [emits](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html#%E7%A7%BB%E6%A4%8D%E5%9B%9E%E6%9D%A5%E7%9A%84%E7%89%B9%E6%80%A7) +v2.7 |
| 事件触发 | [var emit()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [$emit()](https://vuejs.org/api/component-instance.html#emit) | [$emit()](https://v2.cn.vuejs.org/v2/api/#vm-emit) |
| - | - | - | [$listeners](https://v2.cn.vuejs.org/v2/api/#vm-listeners) |

## 表单输入

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 双向绑定 | - | [v-model](https://vuejs.org/api/built-in-directives.html#v-model) | [v-model](https://v2.cn.vuejs.org/v2/api/#v-model) |
| 定制绑定行为 | [defineModel()](https://vuejs.org/api/sfc-script-setup.html#definemodel)| [useModel()](https://vuejs.org/api/composition-api-helpers.html#usemodel) | [model](https://v2.cn.vuejs.org/v2/api/#model) |

## 指令

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 条件渲染 | - | [v-if](https://vuejs.org/api/built-in-directives.html#v-if) | [v-if](https://v2.cn.vuejs.org/v2/api/#v-if) |
| - | - | [v-else-if](https://vuejs.org/api/built-in-directives.html#v-else-if) | [v-else-if](https://v2.cn.vuejs.org/v2/api/#v-else-if) |
| - | - | [v-else](https://vuejs.org/api/built-in-directives.html#v-else) | [v-else](https://v2.cn.vuejs.org/v2/api/#v-else) |
| 列表渲染 | - | [v-for](https://vuejs.org/api/built-in-directives.html#v-for) / [`:key`](https://vuejs.org/api/built-in-special-attributes.html#key) | [v-for](https://v2.cn.vuejs.org/v2/api/#v-for) / [`:key`](https://v2.cn.vuejs.org/v2/api/#key) |
| 显示隐藏 | - | [v-show](https://vuejs.org/api/built-in-directives.html#v-show) | [v-show](https://v2.cn.vuejs.org/v2/api/#v-show) |
| 文本渲染 | - | [v-text](https://vuejs.org/api/built-in-directives.html#v-text) | [v-text](https://v2.cn.vuejs.org/v2/api/#v-text) |
| HTML渲染 | - | [v-html](https://vuejs.org/api/built-in-directives.html#v-html) | [v-html](https://v2.cn.vuejs.org/v2/api/#v-html) |
| 跳过编译 | - | [v-pre](https://vuejs.org/api/built-in-directives.html#v-pre) | [v-pre](https://v2.cn.vuejs.org/v2/api/#v-pre) |
| 隐藏未编译插值 | - | [v-cloak](https://vuejs.org/api/built-in-directives.html#v-cloak) | [v-cloak](https://v2.cn.vuejs.org/v2/api/#v-cloak) |
| 渲染一次 | - | [v-once](https://vuejs.org/api/built-in-directives.html#v-once) | [v-once](https://v2.cn.vuejs.org/v2/api/#v-once) |
| 缓存模板 | - | [v-memo](https://vuejs.org/api/built-in-directives.html#v-memo) | - |
| 注册指令 | - | [directives](https://vuejs.org/api/options-misc.html#directives) | [directives](https://v2.cn.vuejs.org/v2/api/#directives) |
| - | [app.directive()](https://vuejs.org/api/application.html#app-directive) | - | [Vue.directive()](https://v2.cn.vuejs.org/v2/api/#Vue-directive) |

## 插槽

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

## JSX

- function

## DOM 实例

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| DOM 引用 | [useTemplateRef()](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) | - | [el](https://v2.cn.vuejs.org/v2/api/#el) |
| DOM 实例 | - | [$el](https://vuejs.org/api/component-instance.html#el) | [$el](https://v2.cn.vuejs.org/v2/api/#vm-el) |
| DOM 实例层级 | - | [$root](https://vuejs.org/api/component-instance.html#root) | [$root](https://v2.cn.vuejs.org/v2/api/#vm-root) |
| - | - | [$parent](https://vuejs.org/api/component-instance.html#parent) | [$parent](https://v2.cn.vuejs.org/v2/api/#vm-parent) |
| - | - | - | [$children](https://v2.cn.vuejs.org/v2/api/#vm-children) |
| 获取DOM | - | [$refs](https://vuejs.org/api/component-instance.html#refs) | [$refs](https://v2.cn.vuejs.org/v2/api/#vm-refs) |
| 立即获取 | [nextTick()](https://vuejs.org/api/general.html#nexttick) | [$nextTick()](https://vuejs.org/api/component-instance.html#nexttick) | [Vue.nextTick()](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) / [$nextTick()](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) |
| - | - | [$forceUpdate()](https://vuejs.org/api/component-instance.html#forceupdate) | [$forceUpdate()](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate) |

## 可复用性

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 扩展 | - | [`extends`](https://vuejs.org/api/options-composition.html#extends) | [`extends`](https://v2.cn.vuejs.org/v2/api/#extends) | 
| - | [`defineComponent()`](https://vuejs.org/api/general.html#definecomponent) / [`defineAsyncComponent()`](https://vuejs.org/api/general.html#defineasynccomponent) | - | [`Vue.extend()`](https://v2.cn.vuejs.org/v2/api/#Vue-extend) |
| 混入 | - | [`mixins`](https://vuejs.org/api/options-composition.html#mixins) | [`mixins`](https://v2.cn.vuejs.org/v2/api/#mixins) |
| - | [`app.mixin()`](https://vuejs.org/api/application.html#app-mixin) | - | [`Vue.mixin()`](https://v2.cn.vuejs.org/v2/api/#Vue-mixin) |
| 指令 | - | [`directives`](https://vuejs.org/api/options-misc.html#directives) | [`directives`](https://v2.cn.vuejs.org/v2/api/#directives) |
| - | [`app.directive()`](https://vuejs.org/api/application.html#app-directive) | - | [`Vue.directive()`](https://v2.cn.vuejs.org/v2/api/#Vue-directive) |
| 依赖注入/上下文 | [`provide()`](https://vuejs.org/api/composition-api-dependency-injection.html#provide) | [`provide`](https://vuejs.org/api/options-composition.html#provide) | [`provide`](https://v2.cn.vuejs.org/v2/api/#provide-inject) |
| - | [`app.provide()`](https://vuejs.org/api/application.html#app-provide) | - | - |
| - | [`inject()`](https://vuejs.org/api/composition-api-dependency-injection.html#inject) | [`inject`](https://vuejs.org/api/options-composition.html#inject) | [`inject`](https://v2.cn.vuejs.org/v2/api/#provide-inject) |
| - | [`hasInjectionContext()`](https://vuejs.org/api/composition-api-dependency-injection.html#has-injection-context) | - | - |
| - | [`app.runWithContext()`](https://vuejs.org/api/application.html#app-runwithcontext) | - | - |
| 插件 | [`app.use()`](https://vuejs.org/api/application.html#app-use) | - | [`Vue.use()`](https://v2.cn.vuejs.org/v2/api/#Vue-use) |
| 过滤器 | - | - | [`filters`](https://v2.cn.vuejs.org/v2/api/#filters) / [`Vue.filter()`](https://v2.cn.vuejs.org/v2/api/#Vue-filter) |
| 实例层级 | [`useShadowRoot()`](https://vuejs.org/api/custom-elements.html#useshadowroot) | - | [`$root`](https://v2.cn.vuejs.org/v2/api/#vm-root) |
| - | - | `$parent` | [`$parent`](https://v2.cn.vuejs.org/v2/api/#vm-parent) |
| - | - | - | [`$children`](https://v2.cn.vuejs.org/v2/api/#vm-children) |

## 响应式

- 
