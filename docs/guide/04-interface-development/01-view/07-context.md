# 组件上下文

依赖注入

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）| 
| :--- | :--- | :--- | :--- |
| 创建和提供 | [provide()](https://vuejs.org/api/composition-api-dependency-injection.html#provide) v3.0 | [`provide`](https://vuejs.org/api/options-composition.html#provide) v3.0 | [`provide`](https://v2.cn.vuejs.org/v2/api/#provide-inject) v2.2 |
| - | [app.provide()](https://vuejs.org/api/application.html#app-provide) v3.0 | - | - |
| - | [app.runWithContext()](https://vuejs.org/api/application.html#app-runwithcontext) v3.3 | - | - |
| 读取和订阅 | - | - | - |
| - | [inject()](https://vuejs.org/api/composition-api-dependency-injection.html#inject) v3.0 | [`inject`](https://vuejs.org/api/options-composition.html#inject) v3.0 | [`inject`](https://v2.cn.vuejs.org/v2/api/#provide-inject) v2.2 |
| - | [hasInjectionContext()](https://vuejs.org/api/composition-api-dependency-injection.html#has-injection-context) v3.3 | - | - |

## 大纲

- 上下文
  - 使用场景
  - 创建
  - 提供
  - 读取和订阅
