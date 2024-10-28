# 创建组件

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

## 定义组件

- [defineComponent()](https://vuejs.org/api/general.html#definecomponent)
- Vue.extend()

## 问题

- 组件写法
  - 有状态组件
    - Class
    - 函数
  - 无状态组件
- 如何划分组件功能（数据+方法）？
