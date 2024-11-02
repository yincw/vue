# 应用入口

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
