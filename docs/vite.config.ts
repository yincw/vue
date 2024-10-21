import { defineConfig } from 'vite'
// import { SearchPlugin } from 'vitepress-plugin-search'
import { vuePreviewPlugin } from 'vite-plugin-vue-preview';

export default defineConfig({
  plugins: [
    // SearchPlugin({
    //   buttonLabel: "搜索",
    //   placeholder: "搜索文档",
    //   previewLength: 62,
    //   encode: false,
    //   tokenize: 'full'
    // }),
    vuePreviewPlugin({
      props: {
        previewBodyStyle: {
          padding: '20px',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
        },
        previewAppStyle: {
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // flexDirection: 'row', // column: 上下布局，row：左右布局
        },
        importMap: {
          // '@vue/shared': 'https://unpkg.com/@vue/shared@latest/dist/shared.esm-bundler.js',
        },
      },
    }), // 实时编辑预览，支持 选项式 API（Options） 和 响应式 API（Composition）
  ]
})