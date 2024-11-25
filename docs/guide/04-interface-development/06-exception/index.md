# 异常处理

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 类型检查 | TypeScript | - | [类型校验](https://v2.cn.vuejs.org/v2/guide/components-props.html#%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5) | 
| 错误捕获 | [onErrorCaptured()](https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured) v3.0 | [errorCaptured()](https://vuejs.org/api/options-lifecycle.html#errorcaptured) v3.0 | [errorCaptured()](https://v2.cn.vuejs.org/v2/api/?#errorCaptured) v2.5 |
| 全局设置 | [app.config.errorHandler](https://vuejs.org/api/application.html#app-config-errorhandler) v3.0 | - | [Vue.config.errorHandler](https://v2.cn.vuejs.org/v2/api/#errorHandler) v2.0 |
| - | [app.config.warnHandler](https://vuejs.org/api/application.html#app-config-warnhandler) v3.0 | - | [Vue.config.warnHandler](https://v2.cn.vuejs.org/v2/api/#warnHandler) v2.4 |
| - | app.config. <br/> [throwUnhandledErrorInProduction](https://vuejs.org/api/application.html#app-config-throwunhandlederrorinproduction) v3.5 | - | - |
| Vue 日志与警告 | - | - | [Vue.config.silent](https://v2.cn.vuejs.org/v2/api/#silent) v2.0 |
| Vue 生产提示 | - | - | [Vue.config.productionTip](https://v2.cn.vuejs.org/v2/api/#productionTip) v2.2 |

## 大纲

- 异常处理
  - 类型检查
  - 错误边界
  - 全局设置

## 类型检查

- https://v2.cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81
- https://v2.cn.vuejs.org/v2/guide/typescript.html#%E5%A2%9E%E5%BC%BA%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%85%8D%E5%90%88%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8

## 错误边界

- https://v2.cn.vuejs.org/v2/guide/components-edge-cases.html

## 全局设置

- app.config.errorHandler
  - Vue.config.errorHandler
- app.config.warnHandler
  - Vue.config.warnHandler
- app.config.throwUnhandledErrorInProduction
- Vue.config.silent
- Vue.config.productionTip
