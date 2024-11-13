# JSX

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 模板 | - | [`template`](https://vuejs.org/api/options-rendering.html#template) v3.0 | [`template`](https://v2.cn.vuejs.org/v2/api/#template) v2.0 |
| - | - | [`<template>`](https://vuejs.org/api/built-in-special-elements.html#template) v3.0 | [`<template>`](https://v2.cn.vuejs.org/v2/guide/single-file-components.html) v2.0 |
| 渲染函数 | - | [render()](https://vuejs.org/api/options-rendering.html#render) v3.0 | [render()](https://v2.cn.vuejs.org/v2/api/#render) v2.0 |
| - | - | [h()](https://vuejs.org/api/render-function.html#h) v3.0 | [createElement()](https://v2.cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0) v2.0 / [h()](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) v2.0 |
| - | [mergeProps()](https://vuejs.org/api/render-function.html#mergeprops) v3.0 | - | - |
| - | [resolveComponent()](https://vuejs.org/api/render-function.html#resolvecomponent) v3.0 | - | - |
| - | [resolveDirective()](https://vuejs.org/api/render-function.html#resolvedirective) v3.0 | - | - |
| - | [withDirectives()](https://vuejs.org/api/render-function.html#withdirectives) v3.0 | - | - |
| - | [withModifiers()](https://vuejs.org/api/render-function.html#withmodifiers) v3.0 | - | - |
| - | [isVNode()](https://vuejs.org/api/render-function.html#isvnode) v3.0 | - | - |
| - | [cloneVNode()](https://vuejs.org/api/render-function.html#clonevnode) v3.0 | - | - |
| - | [defineCustomElement()](https://vuejs.org/api/custom-elements.html#definecustomelement) v3.0 | - | - |
| - | [useShadowRoot()](https://vuejs.org/api/custom-elements.html#useshadowroot) v3.5 | - | - |
| - | [useHost()](https://vuejs.org/api/custom-elements.html#usehost) v3.5 | - | - |
| - | [$host()](https://vuejs.org/api/custom-elements.html#this-host) v3.5 | - | - |
| 函数式组件 | - | - | [`functional`](https://v2.cn.vuejs.org/v2/api/#functional) v2.0 |
| 模板编译 | - | - | [Vue.compile()](https://v2.cn.vuejs.org/v2/api/#Vue-compile) v2.0 |
| 自定义渲染 | [createRenderer()](https://vuejs.org/api/custom-renderer.html#createrenderer) v3.0 | - | - |
| 服务端渲染 | [createSSRApp()](https://vuejs.org/api/application.html#createssrapp) v3.0 | - | [$isServer](https://v2.cn.vuejs.org/v2/api/#vm-isServer) v2.0 / [vue-server-renderer](https://v2.ssr.vuejs.org/zh/) v2.2 |
| - | [renderToString()](https://vuejs.org/api/ssr.html#rendertostring) v3.0 | - | - |
| - | [renderToNodeStream()](https://vuejs.org/api/ssr.html#rendertonodestream) v3.0 | - | - |
| - | [pipeToNodeWritable()](https://vuejs.org/api/ssr.html#pipetonodewritable) v3.0 | - | - |
| - | [renderToWebStream()](https://vuejs.org/api/ssr.html#rendertowebstream) v3.0 | - | - |
| - | [pipeToWebWritable()](https://vuejs.org/api/ssr.html#pipetowebwritable) v3.0 | - | - |
| - | [renderToSimpleStream()](https://vuejs.org/api/ssr.html#rendertosimplestream) v3.0 | - | - |
| - | [useSSRContext()](https://vuejs.org/api/ssr.html#usessrcontext) v3.0 | - | - |

## 模板

- `text/x-template`
- template
- `<template>`

## 渲染函数

- `render()`
- `createElement()` / `h()`

## JSX

在 Vue 中写 JSX 语法风格的组件需要 `babel-plugin-transform-vue-jsx` babel 插件提供转换支持。

- vue-cli
  - `babel-plugin-transform-vue-jsx`
- vite
  - `@vitejs/plugin-vue-jsx`
  - `@vitejs/plugin-vue2-jsx`

## 函数式组件

无状态（没有响应式数据）、无实例（没有 `this` 上下文）。

因为函数式组件只是函数，所以渲染开销也低很多。

- functional

## 模板编译

模板转换为渲染函数：

- `Vue.compile()`
- vue-loader
  - `vue-template-compiler`
- vite SFC
  - `@vitejs/plugin-vue`
  - `@vitejs/plugin-vue2`

## 自定义渲染

- `createRenderer()`

## 服务端渲染

- `createSSRApp()`
  - <https://v2.cn.vuejs.org/v2/guide/ssr.html>
  - <https://v2.ssr.vuejs.org/zh/>
  - Vue 3
    - https://nuxt.com/
  - Vue 2
    - https://v2.nuxt.com/

## 渲染原理
