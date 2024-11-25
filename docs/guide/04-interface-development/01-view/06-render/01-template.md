# 模板

| 分类 | Composition API（Vue3）| Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- | :--- |
| 模板 | - | [`template`](https://vuejs.org/api/options-rendering.html#template) v3.0 | [`template`](https://v2.cn.vuejs.org/v2/api/#template) v2.0 |
| - | - | [`<template>`](https://vuejs.org/api/built-in-special-elements.html#template) v3.0 | [`<template>`](https://v2.cn.vuejs.org/v2/guide/single-file-components.html) v2.0 |
| - | [app.config.compilerOptions](https://vuejs.org/api/application.html#app-config-compileroptions) v3.0 | - | [Vue.compile()](https://v2.cn.vuejs.org/v2/api/#Vue-compile) v2.0 |
| - | [.whitespace](https://vuejs.org/api/application.html#app-config-compileroptions-whitespace) v3.0 | - | - |
| - | - | - | [`name`](https://v2.cn.vuejs.org/v2/api/#name) v2.0 |
| - | [.delimiters](https://vuejs.org/api/application.html#app-config-compileroptions-delimiters) v3.0 | - | [`delimiters`](https://v2.cn.vuejs.org/v2/api/#delimiters) v2.0 |
| - | [.comments](https://vuejs.org/api/application.html#app-config-compileroptions-comments) v3.0 | - | [`comments`](https://v2.cn.vuejs.org/v2/api/#comments) v2.4 |
| Web Components | [app.config.isCustomElement](https://vuejs.org/api/application.html#app-config-compileroptions-iscustomelement) v3.0 | - | [Vue.config.ignoredElements](https://v2.cn.vuejs.org/v2/api/#ignoredElements) v2.0 |
| - | [defineCustomElement()](https://vuejs.org/api/custom-elements.html#definecustomelement) v3.0 | - | - |
| - | customElements.define() v3.0 | - | - |
| - | [useShadowRoot()](https://vuejs.org/api/custom-elements.html#useshadowroot) v3.5 | - | - |
| - | [useHost()](https://vuejs.org/api/custom-elements.html#usehost) v3.5 | [$host()](https://vuejs.org/api/custom-elements.html#this-host) v3.5 | - |
| 渲染函数 | - | [render()](https://vuejs.org/api/options-rendering.html#render) v3.0 | [render()](https://v2.cn.vuejs.org/v2/api/#render) v2.0 |
| - | - | [h()](https://vuejs.org/api/render-function.html#h) v3.0 | [createElement()](https://v2.cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0) v2.0 <br/> [h()](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) v2.0 |
| - | - | [mergeProps()](https://vuejs.org/api/render-function.html#mergeprops) v3.0 | - |
| - | - | [resolveComponent()](https://vuejs.org/api/render-function.html#resolvecomponent) v3.0 | - |
| - | - | [resolveDirective()](https://vuejs.org/api/render-function.html#resolvedirective) v3.0 | - |
| - | - | [withDirectives()](https://vuejs.org/api/render-function.html#withdirectives) v3.0 | - |
| - | - | [withModifiers()](https://vuejs.org/api/render-function.html#withmodifiers) v3.0 | - |
| - | - | [isVNode()](https://vuejs.org/api/render-function.html#isvnode) v3.0 | - |
| - | - | [cloneVNode()](https://vuejs.org/api/render-function.html#clonevnode) v3.0 | - |
| 强制重新渲染 | - | [$forceUpdate()](https://vuejs.org/api/component-instance.html#forceupdate) v3.0 | [$forceUpdate()](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate) v2.0 |
| 服务端渲染 | [createSSRApp()](https://vuejs.org/api/application.html#createssrapp) v3.0 | - | [$isServer](https://v2.cn.vuejs.org/v2/api/#vm-isServer) v2.0 <br/> [vue-server-renderer](https://v2.ssr.vuejs.org/zh/) v2.2 |
| - | [useSSRContext()](https://vuejs.org/api/ssr.html#usessrcontext) v3.0 | - | - |
| - | [renderToString()](https://vuejs.org/api/ssr.html#rendertostring) v3.0 | - | - |
| - | [renderToNodeStream()](https://vuejs.org/api/ssr.html#rendertonodestream) v3.0 | - | - |
| - | [pipeToNodeWritable()](https://vuejs.org/api/ssr.html#pipetonodewritable) v3.0 | - | - |
| - | [renderToWebStream()](https://vuejs.org/api/ssr.html#rendertowebstream) v3.0 | - | - |
| - | [pipeToWebWritable()](https://vuejs.org/api/ssr.html#pipetowebwritable) v3.0 | - | - |
| - | [renderToSimpleStream()](https://vuejs.org/api/ssr.html#rendertosimplestream) v3.0 | - | - |
| 自定义渲染 | [createRenderer()](https://vuejs.org/api/custom-renderer.html#createrenderer) v3.0 | - | - |

## 大纲

- 模板
- Web Components
- 渲染函数
- 强制重新渲染
- 服务端渲染
- 自定义渲染
- 渲染原理

## 模板

- `text/x-template`
- `template`
- `<template>`
- `name`
- `delimiters`
- `comments`

### 模板编译

模板转换为渲染函数：

- app.config.compilerOptions
- app.config.compilerOptions.whitespace
- app.config.compilerOptions.delimiters
- app.config.compilerOptions.comments
- `Vue.compile()`
- vue-loader
  - `vue-template-compiler`
- vite SFC
  - `@vitejs/plugin-vue`
  - `@vitejs/plugin-vue2`

## Web Components

- app.config.isCustomElement
- Vue.config.ignoredElements
- defineCustomElement()
- customElements.define()
- useShadowRoot()
- useHost()
- $host()

## 渲染函数

- render()
- h()
  - createElement()
- mergeProps()
- resolveComponent()
- resolveDirective()
- withDirectives()
- withModifiers()
- isVNode()
- cloneVNode()

### 强制重新函数

- $forceUpdate()

`$forceUpdate()` 可以强制组件实例重新渲染。

::: info
考虑到 Vue 的全自动响应式系统，这应该很少需要。唯一可能需要它的情况是当你使用高级响应式 API 显式创建非响应式组件状态时。
:::

## JSX

在 Vue 中写 JSX 语法风格的组件需要 `babel-plugin-transform-vue-jsx` babel 插件提供转换支持。

- vue-cli
  - `babel-plugin-transform-vue-jsx`
- vite
  - `@vitejs/plugin-vue-jsx`
  - `@vitejs/plugin-vue2-jsx`

## 服务端函数

- createSSRApp()
- useSSRContext() 
- $isServer
- renderToString() 
- renderToNodeStream() 
- pipeToNodeWritable() 
- renderToWebStream() 
- pipeToWebWritable() 
- renderToSimpleStream() 
- <https://v2.cn.vuejs.org/v2/guide/ssr.html>
- <https://v2.ssr.vuejs.org/zh/>
  
## 自定义函数

- createRenderer() 

## 函数原理
