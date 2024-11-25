# 创建组件

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 创建 | - | [SFC](https://vuejs.org/guide/scaling-up/sfc.html#why-sfc) v3.0 | [SFC](https://v2.cn.vuejs.org/v2/guide/single-file-components.html) v2.0 |
| - | - | - | [functional](https://v2.cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6) v2.5 <br/> [`functional`](https://v2.cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6) v2.0 |
| - | [defineComponent()](https://vuejs.org/api/general.html#definecomponent) v3.0 | - | [new Vue()](https://v2.cn.vuejs.org/v2/guide/instance.html) v2.0 <br/> [Vue.extend()](https://v2.cn.vuejs.org/v2/api/#Vue-extend) v2.0 |
| 注册 | [app.component()](https://vuejs.org/api/application.html#app-component) v3.0 | - | [Vue.component()](https://v2.cn.vuejs.org/v2/api/#Vue-component) v2.0 <br/> [`components`](https://v2.cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C) v2.0 | 
| 懒加载 | [defineAsyncComponent()](https://vuejs.org/api/general.html#defineasynccomponent) v3.0 | - | [import()](https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6) v2.0/ES2020 |
| `\-加载状态` | [defineAsyncComponent()](https://vuejs.org/api/general.html#defineasynccomponent) v3.0 | - | [loading](https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%A4%84%E7%90%86%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81) v2.3 |
| `\-回退方案` | [`<Suspense>`](https://vuejs.org/api/built-in-components.html#suspense) | - | - |
| `\-动态组件` | [`<component>`](https://vuejs.org/api/built-in-special-elements.html#component) v3.0 | - | [`<component>`](https://v2.cn.vuejs.org/v2/api/#component) v2.0 |
| 性能优化 | [`<KeepAlive>`](https://vuejs.org/api/built-in-components.html#keepalive) v3.0 | - | [`<keep-alive>`](https://v2.cn.vuejs.org/v2/api/#keep-alive) v2.0 |
| `\-记忆渲染结果` | - | [v-memo](https://vuejs.org/api/built-in-directives.html#v-memo) v3.2 | - |
| `\-渲染一次`| - | [v-once](https://vuejs.org/api/built-in-directives.html#v-once) v3.0 | [v-once](https://v2.cn.vuejs.org/v2/api/#v-once) v2.0 |

## 大纲

- 组件
  - 创建
    - SFC组件
    - 函数式组件
  - 注册
    - 全局注册
    - 局部注册
  - 加载
    - 懒加载组件
      - 动态加载
    - 回退方案（加载状态）
    - 动态组件
      - `<component>` / :is
  - 性能优化
    - 缓存不活动的组件实例
      - `<KeepAlive>`
      - `<keep-alive>`
    - 记忆渲染结果
      - v-memo
      - v-once
- 调试

## 创建

### SFC 组件

### 函数式组件

- functional

无状态（没有响应式数据）、无实例（没有 `this` 上下文）。

因为函数式组件只是函数，所以渲染开销也低很多。

## 加载组件

### 异步组件

### 动态组件

## 性能优化

### 缓存不活动的组件实例

### 记忆渲染结果

## 创建视图

`src/views/HomeView.vue`

::: code-group

```vue [Vue3]
// 视图脚本
<script lang="ts">
</script>

// 视图模板
<template>
  <main>
    <div>Home View</div>
  </main>
</template>

// 视图样式
<style></style>
```

```vue [Vue2]
// 视图脚本
<script lang="ts">
</script>

// 视图模板
<template>
  <main>
    <div>Home View</div>
  </main>
</template>

// 视图样式
<style></style>
```

:::

## 创建路由配置

`src/router/index.ts`

::: code-group

```typescript [Vue3]
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
```

```typescript [Vue2]
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
```

:::

## 创建导航菜单

创建 Vue 应用 App 组件（全局布局组件）：`src/App.vue`

::: code-group

```vue [Vue3]
// 脚本
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router' 
</script>

// 模板
<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  // 视图容器
  <RouterView />
</template>

// 样式
<style></style>
```

```vue [Vue2]
// 脚本
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router' 
</script>

// 模板
<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  // 视图容器
  <RouterView />
</template>

// 样式
<style></style>
```

:::

访问 `/` 即可查看页面（首页）内容。
