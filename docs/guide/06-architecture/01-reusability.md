# 可复用性

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

逻辑复用手段：

## 扩展

## 混入

## 指令

## 依赖注入/上下文

## 插件

## Vue 2

### 过滤器

### 实例层级
