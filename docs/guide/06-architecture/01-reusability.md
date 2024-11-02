# 可复用性

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

逻辑复用手段：

## 扩展

## 混入

## 指令

## 依赖注入/上下文

## 插件

## Vue 2

### 过滤器

### 实例层级
