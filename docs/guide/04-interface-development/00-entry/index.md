# 应用入口

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

## 入口配置

Vue 应用入口：`src/main.ts`

::: code-group

```typescript [Vue3]
import { createApp } from 'vue' // [!code focus]

// 导入 App 组件 // [!code focus]
import App from './App.vue' // [!code focus]
// 导入路由配置
import router from './router'

// 创建 App // [!code focus]
const app = createApp(App) // [!code focus]

// 使用路由配置
app.use(router)

// 挂载到 DOM // [!code focus]
app.mount('#app') // [!code focus]
```

```typescript [Vue2]
// TODO:
```

:::
