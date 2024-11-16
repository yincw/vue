import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { SearchPlugin } from 'vitepress-plugin-search';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';
// import markdownPlugin from "vitepress-demo-editor/markdownPlugin";

// https://vitepress.dev/zh/
// ✅https://vitepress-sidebar.jooy2.com/  // 根据 docs 目录文件结构自动生成侧边栏导航
// ✅https://github.com/emersonbottero/vitepress-plugin-search // 本地文档搜索
// ✅https://www.npmjs.com/package/@vitepress-demo-preview/plugin // vue 组件预览，不支持实时编辑
// ✅https://vite-plugin-vue-preview.netlify.app/  // playground 实时编辑预览，支持 选项式 API（Options） 和 响应式 API（Composition）。只能配置在 vite.config.ts 文件中
  // https://www.npmjs.com/package/vitepress-demo-editor  // demo 实时编辑预览，仅支持选项式 API（setup()），不支持 setup 语法糖写法
  // https://www.npmjs.com/package/vite-plugin-vue-component-preview  // 在 SFC 组件内写 MD 示例文档，命令行一键生成静态 HTML 站点

// 单侧边栏
// const vitepressSidebarOptions = {
//   documentRootPath: '/docs',
//   collapsed: false,
//   sortMenusByFrontmatterOrder: true, // 按指定的 frontmatter order 值排序
//   removePrefixAfterOrdering: true, // 移除排序用的文件名前缀
//   prefixSeparator: '.',
//   useFolderTitleFromIndexFile: true,
//   useTitleFromFileHeading: true,
//   hyphenToSpace: true, // 转换文件名中的 - 为空格
//   manualSortFileNameByPriority: [
//     'markdown',
//     'front-matter',
//     'emoji',
//   ], // 排序规则，指定目录及文件的排序规则
//   excludeFiles: [
//     'team.md',
//   ], // 排除文件
//   excludeFolders: [
//     'docusaurus',
//     'tutorial-basics',
//     'tutorial-extras',
//   ], // 排除目录及文件
// };

// 多侧边栏
const vitepressSidebarOptions = [
  {
    documentRootPath: '/docs',
    scanStartPath: 'guide',
    resolvePath: '/guide/',
    collapsed: false,
    useTitleFromFileHeading: true,
    prefixSeparator: '-',
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    // sortMenusByName: true, // 按文件名排序
    sortMenusByFrontmatterOrder: true, // 按指定的 frontmatter order 值排序
    removePrefixAfterOrdering: true, // 移除排序用的文件名前缀
    // hyphenToSpace: true, // 转换文件名中的 - 为空格
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'components',
    resolvePath: '/components/',
    collapsed: false,
    useTitleFromFileHeading: true,
    prefixSeparator: '-',
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    // sortMenusByName: true, // 按文件名排序
    sortMenusByFrontmatterOrder: true, // 按指定的 frontmatter order 值排序
    removePrefixAfterOrdering: true, // 移除排序用的文件名前缀
    // hyphenToSpace: true, // 转换文件名中的 - 为空格
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'api',
    resolvePath: '/api/',
    collapsed: false,
    useTitleFromFileHeading: true,
    prefixSeparator: '-',
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    // sortMenusByName: true, // 按文件名排序
    sortMenusByFrontmatterOrder: true, // 按指定的 frontmatter order 值排序
    removePrefixAfterOrdering: true, // 移除排序用的文件名前缀
    // hyphenToSpace: true, // 转换文件名中的 - 为空格
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'faq',
    resolvePath: '/faq/',
    collapsed: false,
    useTitleFromFileHeading: true,
    prefixSeparator: '-',
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    // sortMenusByName: true, // 按文件名排序
    sortMenusByFrontmatterOrder: true, // 按指定的 frontmatter order 值排序
    removePrefixAfterOrdering: true, // 移除排序用的文件名前缀
    // hyphenToSpace: true, // 转换文件名中的 - 为空格
  }
];

export default defineConfig({
    // 站点级选项
    title: 'Vue 笔记',
    description: '一个 Vue 教程文档。',
    ignoreDeadLinks: true, // 构建的时候不检查死链

    // 部署
    base: '/vue-notes/', // TODO: 部署到 github 需要更改此处，添加 /repo/

    locales: {
      root: {
        label: '简体中文',
        lang: 'zh'
      },
    },

    vite: {
      plugins: [
        SearchPlugin({
          buttonLabel: "搜索",
          placeholder: "搜索文档",
          previewLength: 62,
          encode: false,
          tokenize: 'full'
        }),
      ]
    },

    markdown: {
      config(md) {
        md.use(containerPreview);  // demo 预览，:::preview
        md.use(componentPreview); // demo 预览
        // md.use(markdownPlugin); // demo 实时编辑预览，仅支持选项式 API（setup()），不支持 setup 语法糖写法
      },
      container: {
        tipLabel: '提示',
        warningLabel: '警告',
        dangerLabel: '危险',
        infoLabel: '信息',
        detailsLabel: '详细信息',
      },
    },

    // 最后更新于
    lastUpdated: true,

    themeConfig: {
      // 主题级选项
      logo: '/vue.svg',
      // siteTitle: 'Rework', // 默认使用 title 值

      // home & doc
      nav: [
        // { text: '主页', link: '/' },

        { text: '教程', link: '/guide/00-intro/' },
        { text: 'API 参考', link: '/api/' },
        { text: '组件库', link: '/components/' },
        { text: '场景问题', link: '/faq/' },

        // { text: '文档页', link: '/markdown/markdown' },
        // { text: 'Front Matter', link: '/front-matter/front-matter' },
        // { text: 'Emoji', link: '/emoji/emoji' },

        // { text: '团队页', link: '/team' },

        // { text: '下拉导航', items: [
        //   { text: 'Item A', link: '/item-1' },
        //   { text: 'Item B', link: '/item-2' },
        //   { text: 'Item C', link: '/item-3' }
        // ] },
        // { text: 'Changelog', link: 'https://github.com/' }
      ],

      // 社交账户链接
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/yincw/vue-notes',
        },
      ],

      // doc
      sidebar: generateSidebar(vitepressSidebarOptions),

      // 中文本地化
      // ============

      // home
      footer: {
        // message: '基于 MIT 许可发布',
        copyright: '版权所有 © 2024-present <a class="vp-external-link-icon" href="https://github.com/yincw" target="_black">yincw</a>'
      },

      // outline: false, // 禁用页面导航（大纲）
      outline: {
        label: '页面导航',
        level: [2,4],
      },
      // aside: 'left', // 页面导航渲染在左侧
      sidebarMenuLabel: '菜单',  // 移动端视图中显示
      returnToTopLabel: '回到顶部',  // 移动端视图中显示

      editLink: {
        pattern: 'https://github.com/yincw/vue-notes/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页面'
      },

      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },

      docFooter: {
        prev: '上一页',
        next: '下一页'
      },

      langMenuLabel: '多语言',  // 仅当使用 i18n 时才使用此选项
      darkModeSwitchLabel: '主题',  // 移动端视图中显示
      darkModeSwitchTitle: '切换到深色模式',
      lightModeSwitchTitle: '切换到浅色模式',
    }
  });
