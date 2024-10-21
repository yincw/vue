import DefaultTheme from 'vitepress/theme';
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer, App } from '@vitepress-demo-preview/component';
// import { vuePlugin, addImportMap } from "vitepress-demo-editor";
import { VuePreview } from 'vite-plugin-vue-preview';

// import axios from "axios";

// import "vitepress-demo-editor/dist/style.css";
import '@vitepress-demo-preview/component/dist/style.css'
import 'vite-plugin-vue-preview/style.css'

import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
      app.component('demo-preview', AntDesignContainer); //  :::preview
      // addImportMap("axios", axios);
      // app.use(vuePlugin, {  // Markdown 语法 =>  :::demo
      //   defaultDirection: "row", // 默认显示方向, 默认值：row，可选值：row、column
      //   ms: 30, // 编辑器防抖时间
      //   handleError(errs) {}, // 错误信息
      //   onMonacoCreated(monaco) {}, // monaco 创建成功时触发
      // });
      app.component('VuePreview', VuePreview); // iframe 模式  ```vue preview   ```
    }
}
