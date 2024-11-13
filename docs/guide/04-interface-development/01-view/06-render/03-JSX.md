# JSX

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 模板 | - | [`template`](https://vuejs.org/api/options-rendering.html#template) | [`template`](https://v2.cn.vuejs.org/v2/api/#template) |
| - | - | [`<template>`](https://vuejs.org/api/built-in-special-elements.html#template) | [`<template>`](https://v2.cn.vuejs.org/v2/guide/single-file-components.html) |
| 渲染函数 | - | [render()](https://vuejs.org/api/options-rendering.html#render) | [render()](https://v2.cn.vuejs.org/v2/api/#render) |
| - | - | [h()](https://vuejs.org/api/render-function.html#h) | [createElement()](https://v2.cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0) / [h()](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) |
| - | [mergeProps()](https://vuejs.org/api/render-function.html#mergeprops) | - | - |
| - | [resolveComponent()](https://vuejs.org/api/render-function.html#resolvecomponent) | - | - |
| - | [resolveDirective()](https://vuejs.org/api/render-function.html#resolvedirective) | - | - |
| - | [withDirectives()](https://vuejs.org/api/render-function.html#withdirectives) | - | - |
| - | [withModifiers()](https://vuejs.org/api/render-function.html#withmodifiers) | - | - |
| - | [isVNode()](https://vuejs.org/api/render-function.html#isvnode) | - | - |
| - | [cloneVNode()](https://vuejs.org/api/render-function.html#clonevnode) | - | - |
| - | [defineCustomElement()](https://vuejs.org/api/custom-elements.html#definecustomelement) | - | - |
| - | [useShadowRoot()](https://vuejs.org/api/custom-elements.html#useshadowroot) | - | - |
| - | [useHost()](https://vuejs.org/api/custom-elements.html#usehost) | - | - |
| - | [$host()](https://vuejs.org/api/custom-elements.html#this-host) | - | - |
| 函数式组件 | - | - | [`functional`](https://v2.cn.vuejs.org/v2/api/#functional) |
| 模板编译 | - | - | [Vue.compile()](https://v2.cn.vuejs.org/v2/api/#Vue-compile) |
| 自定义渲染 | [createRenderer()](https://vuejs.org/api/custom-renderer.html#createrenderer) | - | - |
| 服务端渲染 | [createSSRApp()](https://vuejs.org/api/application.html#createssrapp) | - | [$isServer](https://v2.cn.vuejs.org/v2/api/#vm-isServer) / [vue-server-renderer](https://v2.ssr.vuejs.org/zh/) |
| - | [renderToString()](https://vuejs.org/api/ssr.html#rendertostring) | - | - |
| - | [renderToNodeStream()](https://vuejs.org/api/ssr.html#rendertonodestream) | - | - |
| - | [pipeToNodeWritable()](https://vuejs.org/api/ssr.html#pipetonodewritable) | - | - |
| - | [renderToWebStream()](https://vuejs.org/api/ssr.html#rendertowebstream) | - | - |
| - | [pipeToWebWritable()](https://vuejs.org/api/ssr.html#pipetowebwritable) | - | - |
| - | [renderToSimpleStream()](https://vuejs.org/api/ssr.html#rendertosimplestream) | - | - |
| - | [useSSRContext()](https://vuejs.org/api/ssr.html#usessrcontext) | - | - |

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
