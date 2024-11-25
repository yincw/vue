# 组件样式

## 大纲

- 外联样式
  - 预处理
    - lang="less"
  - 样式隔离
    - scoped
      - :deep()
      - :slotted()
      - :global()
    - CSS Modules
      - useCssModule()
      - $style
  - CSS 工具库
    - Tailwind CSS
- 行内样式
  - 样式绑定
    - v-bind()
- 内联样式
- CSS-in-JS
  - styled-components
- CSS 优化
  - UnoCSS
- CSS 特性
  - CSS 动画
  - CSS 主题
  - CSS 响应式设计

## 预处理

```vue
<style lang="less">  // Less
// <style lang="sass"> // Sass
// <style lang="scss"> // Scss
// <style lang="stylus"> // Stylus
// <style lang="postcss"> // PostCSS
</style>
```

## 样式隔离

### Scoped CSS

```vue
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

#### 深度选择器 :deep()

```vue
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```

#### 插槽选择器 :slotted()

```vue
<style scoped>
:slotted(div) {
  color: red;
}
</style>
```

#### 全局选择器 :global()

```vue
<style scoped>
:global(.red) {
  color: red;
}
</style>
```

### CSS Modules

#### $style

```vue [Vue3]
<template>
  <p :class="$style.red">This should be red</p>
</template>

<style module>
.red {
  color: red;
}
</style>
```

#### useCssModule()

::: code-group

```vue [Vue3]
<script setup lang="ts">
import { useCssModule } from 'vue'

const classes = useCssModule()
// const classes = useCssModule('classes')
</script>

<template>
  <p :class="classes.red">red</p>
</template>

<style module>
/* <style module="classes"> */
.red {
  color: red;
}
</style>
```

```vue [Vue2]
<template>
  <p :class="classes.red">red</p>
</template>

<style module="classes">
.red {
  color: red;
}
</style>
```

## 样式绑定

### v-bind()

::: code-group

```vue [Vue3]
<script setup>
import { ref } from 'vue'
const theme = ref({
    color: 'red',
})
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```

```vue [Vue2]
<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<template>
  <div class="text">hello</div>
</template>

<style>
.text {
  color: v-bind(color);
}
</style>
```

:::

- https://v2.cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F

## 问题

> CSS 如何保持空格显示

- `white-space: pre-line`

## 参考

- https://vuejs.org/api/sfc-spec.html#pre-processors
- https://vuejs.org/api/sfc-css-features.html
- https://cn.vitejs.dev/guide/features#css-pre-processors
- https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8
- https://vue-loader.vuejs.org/zh/guide/pre-processors.html
