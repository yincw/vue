# 性能优化

| 分类 | Composition / Options API（Vue3）| Options API（Vue2）|
| :--- | :--- | :--- |
| 分析 | [app.config.performance](https://vuejs.org/api/application.html#app-config-performance) v3.0 | [Vue.config.performance](https://v2.cn.vuejs.org/v2/api/#performance) v2.2 |
| - | Chrome DevTools - performance | - |
| - | - | [Vue.config.devtools](https://v2.cn.vuejs.org/v2/api/#devtools) v2.0 |
| - | [Vue DevTools](https://vuejs.org/guide/scaling-up/tooling.html#browser-devtools) - performance | - |
| 优化 | - | - |
| `\-逻辑优化` | v-once | - |
| - | v-memo | - |
| - | `key` | - |
| - | computed() | - |
| - | watchEffect() | - |
| - | onWatcherCleanup() | - |
| - | `<KeepAlive>` | `<keep-alive>` |
| - | shallowRef() | - |
| - | shallowReactive() | - |
| `\-资源加载` | defineAsyncComponent() | import() |

## 大纲

- 性能优化
  - 分析
  - 策略设计
    - **逻辑优化**
    - **资源优化**
      - 大小/质量
    - **资源加载**
      - 预加载
      - 懒加载
      - 浏览器缓存
    - **网络分发**
      - Gzip 传输
      - CDN 分发
  - 优化
    - Vue 源码优化
    - Webpack/Vite 打包优化
  - 监控
    - 统计分析

## 分析

- 浏览器：Chrome DevTools - performance
- Vue：
  - app.config.performance
  - Vue.config.performance
  - Vue.config.devtools
  - Vue DevTools - performance
- Webpack：webpack-bundle-analyzer
- Vite：
- https://vuejs.org/guide/best-practices/performance.html

## 策略设计

- 逻辑优化
- 资源优化
  - 大小/质量
- 资源加载
  - 预加载
  - 懒加载
  - 浏览器缓存
- 网络分发
  - Gzip 传输
  - CDN 分发

## 优化

- Vue 源码优化
  - 逻辑优化
    - 记忆和缓存: 记忆计算结果和缓存函数定义
      - v-once
      - v-memo
      - `key`
      - computed()
      - watchEffect()
    - 其他
      - 适时销毁自定义事件、定时任务、业务对象
        - onWatcherCleanup()
      - “虚拟滚动”技术
        - 这项技术会在有限的时间内仅渲染有限的内容，并奇迹般地降低重新渲染组件消耗的时间，以及创建 DOM 节点的数量
          - vue-virtual-scroller
      - 时间分片，上传/下载
      - 多线程技术：web worker
      - 使用业务支持的较新的 API
      - 使用 GPU 加速
      - 优化算法复杂度
  - 资源优化
  - 资源加载
    - 懒加载
      - defineAsyncComponent()
      - import()
  - 网络分发
- Webpack/Vite 打包优化
  - 逻辑优化
    - 代码拆分 code-splitting
    - trumk 大小限制
  - 资源优化
    - 摇树 Tree-Sharking
      - JavaScript
      - CSS
      - HTML
      - SVG
    - 压缩 Terser
    - 混淆
  - 资源加载
    - 预加载 Prefetch
      - DllPlugin 通用模块提取
      - ProvidePlugin 全局提供
    - 懒加载/按需加载
    - 请求合并
      - 雪碧图 Sprite
        - 图片
        - SVG
    - 浏览器缓存
      - 文件指纹 Hashed
  - 网络分发

## 监控

- 统计分析

## 参考

- https://developer.mozilla.org/en-US/blog/optimize-web-performance/
- https://developer.mozilla.org/en-US/blog/fix-javascript-performance/
- https://developer.mozilla.org/en-US/blog/static-site-generation-with-nextjs/
