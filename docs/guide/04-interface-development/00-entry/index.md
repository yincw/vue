# 应用入口

| 分类 | Composition / Options API（Vue3）| Options API（Vue2）
| :--- | :--- | :--- |
| 客户端渲染 | [createApp()](https://vuejs.org/api/application.html#createapp) v3.0 | [new Vue()](https://v2.cn.vuejs.org/v2/guide/instance.html) v2.0 | 
| 挂载 | [app.mount()](https://vuejs.org/api/application.html#app-mount) v3.0| [$mount()](https://v2.cn.vuejs.org/v2/api/#vm-mount) v2.0 | 
| 卸载 | [app.unmount()](https://vuejs.org/api/application.html#app-unmount) v3.0 | [$destroy()](https://v2.cn.vuejs.org/v2/api/#vm-destroy) v2.0 | 
| - | [app.onUnmount()](https://vuejs.org/api/application.html#app-onunmount) v3.5 | 同上 | 
| 配置设置 | [app.config](https://vuejs.org/api/application.html#app-config) v3.0 | [Vue.config](https://v2.cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE) v2.0 | 
| 版本 | [app.version](https://vuejs.org/api/application.html#app-version) v3.0 | [Vue.version](https://v2.cn.vuejs.org/v2/api/#Vue-version) v2.0 |

## 入口配置

Vue 应用入口：`src/main.ts`

::: code-group

```typescript [Vue3]
import { createApp } from 'vue' // [!code focus]

// 导入 App 组件 // [!code focus]
import App from './App.vue' // [!code focus]

// 创建 app // [!code focus]
const app = createApp(App) // [!code focus]

// 挂载到 DOM // [!code focus]
app.mount('#app') // [!code focus]
```

```typescript [Vue2]
// 创建 App 组件 // [!code focus]
var App = Vue.extend({
  template: '<div>Hello!</div>'
});

// 创建 app 并挂载到 #app // [!code focus]
new App().$mount('#app') // [!code focus]

// 同上
new App({ el: '#app' })

// ======
// 同上
new Vue({
  template: '<div>Hello!</div>',
  el: '#app'
});
```

:::
