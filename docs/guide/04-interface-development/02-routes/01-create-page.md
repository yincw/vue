# 创建页面

| 分类 | Composition API（Vue3）| Options API（Vue3/2）
| :--- | :--- | :--- |
| 路由链接 | `<RouterLink>` | - | 
| 路由视图 | `<RouterView>` | - | 
| 路由配置 | createRouter() | - | 
| 路由类型 | createWebHistory() | - | 

## 创建视图

`src/views/AboutView.vue`

::: code-group

```vue [Vue3]
// 视图脚本
<script lang="ts" step>
</script>

// 视图模板
<template>
  <main>
    <div>About View</div>
  </main>
</template>

// 视图样式
<style></style>
```

```vue [Vue2]
// 视图脚本
<script lang="ts" step>
</script>

// 视图模板
<template>
  <main>
    <div>About View</div>
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
    },
    { // [!code focus:8]
      path: '/about',
      name: 'about',  // 路由名称
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue') // 路由懒加载的视图组件
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
    },
    { // [!code focus:8]
      path: '/about',
      name: 'about',  // 路由名称
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue') // 路由懒加载的视图组件
    }
  ]
})

export default router
```

:::

## 创建导航菜单

`src/App.vue`

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
      <RouterLink to="/about">About</RouterLink> // [!code focus]
    </nav>
  </header>

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
      <RouterLink to="/about">About</RouterLink> // [!code focus]
    </nav>
  </header>

  <RouterView />
</template>

// 样式
<style></style>
```

:::

访问 `/about` 即可查看页面内容。
