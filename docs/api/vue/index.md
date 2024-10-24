# Vue API

## 全局 API

| 分类 | Composition API / Options API（Vue3）| Options API（Vue2）
| :--- | :--- | :--- |
| 创建 | [createApp()](https://vuejs.org/api/application.html#createapp) | [new Vue()](https://v2.cn.vuejs.org/v2/guide/instance.html) | 
| 应用生命周期钩子 | [app.mount()](https://vuejs.org/api/application.html#app-mount) | - | 
| - | [app.onUnmount()](https://vuejs.org/api/application.html#app-onunmount) | - | 
| - | [app.unmount()](https://vuejs.org/api/application.html#app-unmount) | - | 
| 注册组件 | [app.component()](https://vuejs.org/api/application.html#app-component) | [Vue.component()](https://v2.cn.vuejs.org/v2/api/#Vue-component) | 
| 注册指令 | [app.directive()](https://vuejs.org/api/application.html#app-directive) | [Vue.directive()](https://v2.cn.vuejs.org/v2/api/#Vue-directive) | 
| 安装插件 | [app.use()](https://vuejs.org/api/application.html#app-use) | [Vue.use()](https://v2.cn.vuejs.org/v2/api/#Vue-use) | 
| 扩展 | - | [Vue.extend()](https://v2.cn.vuejs.org/v2/api/#Vue-extend) | 
| 混入 | [app.mixin()](https://vuejs.org/api/application.html#app-mixin) | [Vue.mixin()](https://v2.cn.vuejs.org/v2/api/#Vue-mixin) | 
| 依赖注入 | [app.provide()](https://vuejs.org/api/application.html#app-provide) | - | 
| 上下文 | [app.runWithContext()](https://vuejs.org/api/application.html#app-runwithcontext) | - | 
| 配置设置 | [app.config](https://vuejs.org/api/application.html#app-config) | [Vue.config](https://v2.cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE) | 

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
| 属性 | [defineProps()](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [props](https://v2.cn.vuejs.org/v2/api/#props) | 
| 属性默认值 | [withDefaults()](https://vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration) | [props](https://v2.cn.vuejs.org/v2/api/#props) | 
| 属性透传 | [defineOptions()](https://vuejs.org/api/sfc-script-setup.html#defineoptions) | [inheritAttrs](https://v2.cn.vuejs.org/v2/api/#inheritAttrs) | 
| 属性获取 | [useAttrs()](https://vuejs.org/api/composition-api-helpers.html#useattrs) | [$attrs](https://v2.cn.vuejs.org/v2/api/#vm-attrs) | 
| - | [props](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) | [$props](https://v2.cn.vuejs.org/v2/api/#vm-props) | 

## 组件状态

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 状态 | [ref()](https://vuejs.org/api/reactivity-core#ref) | [data()](https://vuejs.org/api/options-state.html#data) | [data()](https://v2.cn.vuejs.org/v2/api/#data) | 
| 计算 | [computed()](https://vuejs.org/api/reactivity-core#computed) | [computed](https://vuejs.org/api/options-state.html#computed) | [computed](https://v2.cn.vuejs.org/v2/api/#computed) | 
| 监听 | [watch()](https://vuejs.org/api/reactivity-core#watch) | [watch](https://vuejs.org/api/options-state.html#watch) | [watch](https://v2.cn.vuejs.org/v2/api/#watch) | 
| 立即渲染 | [nextTick()](https://vuejs.org/api/general.html#nexttick) | [$nextTick()](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) | [Vue.nextTick()](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) | 
| - | [watchEffect()](https://vuejs.org/api/reactivity-core#watcheffect) | - | - | 
| - | [watchPostEffect()](https://vuejs.org/api/reactivity-core#watchposteffect) | - | - | 
| - | [watchSyncEffect()](https://vuejs.org/api/reactivity-core#watchsynceffect) | - | - | 
