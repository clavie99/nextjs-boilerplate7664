export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Next.js 入门指南",
    date: "2026-01-05",
    summary: "从零开始搭建你的第一个 Next.js 应用，了解 App Router 的基本概念。",
    content: [
      "Next.js 是一个基于 React 的全栈框架，提供了路由、渲染、数据获取等开箱即用的能力。",
      "使用 create-next-app 可以快速初始化项目，App Router 通过文件系统来定义路由，每个 page.tsx 文件对应一个可访问的页面。",
      "建议从理解 layout 与 page 的关系开始，再逐步学习服务端组件与客户端组件的区别。",
    ],
  },
  {
    slug: "server-and-client-components",
    title: "服务端组件与客户端组件",
    date: "2026-01-18",
    summary: "理解 React Server Components 的工作方式，以及何时使用 'use client'。",
    content: [
      "在 App Router 中，组件默认是服务端组件，它们在服务器上渲染，不会把组件代码发送到浏览器。",
      "当组件需要使用状态、副作用或浏览器 API（如 onClick、useState）时，需要在文件顶部声明 'use client'。",
      "合理拆分服务端与客户端组件，可以显著减少前端 JavaScript 体积，提升页面加载速度。",
    ],
  },
  {
    slug: "dynamic-routes",
    title: "动态路由实践",
    date: "2026-02-02",
    summary: "使用 [slug] 动态段与 generateStaticParams 构建博客详情页。",
    content: [
      "通过把文件夹命名为 [slug]，可以创建动态路由段，例如 app/blog/[slug]/page.tsx。",
      "params 在新版本中是一个 Promise，需要使用 await 或 React 的 use 来读取。",
      "配合 generateStaticParams，可以在构建时预渲染所有已知的页面，获得静态页面的性能。",
    ],
  },
  {
    slug: "data-fetching-patterns",
    title: "数据获取的几种模式",
    date: "2026-02-20",
    summary: "在服务端组件中直接 fetch 数据，以及缓存与重新验证策略。",
    content: [
      "服务端组件可以是 async 函数，直接在组件内 await 数据请求，无需额外的数据获取钩子。",
      "对于需要实时性的数据，可以按请求动态渲染；对于变化不频繁的数据，可以使用缓存并按需重新验证。",
      "把数据请求放在离使用位置最近的组件中，能让代码结构更清晰。",
    ],
  },
  {
    slug: "styling-with-tailwind",
    title: "使用 Tailwind CSS 编写样式",
    date: "2026-03-08",
    summary: "Tailwind CSS v4 的配置方式与常用实践技巧。",
    content: [
      "Tailwind CSS v4 通过 @import \"tailwindcss\" 即可引入，配置更加简洁。",
      "原子化类名让样式与结构紧密结合，减少了在多个文件之间来回切换的成本。",
      "借助 dark: 前缀，可以很方便地实现深色模式适配。",
    ],
  },
  {
    slug: "web-analytics-on-vercel",
    title: "在 Vercel 上开启 Web Analytics",
    date: "2026-03-25",
    summary: "几行代码集成 @vercel/analytics，掌握站点访问数据。",
    content: [
      "安装 @vercel/analytics 后，在根布局中加入 <Analytics /> 组件即可自动统计页面访问。",
      "通过 track() 方法可以上报自定义事件，例如按钮点击、表单提交等关键行为。",
      "部署后在 Vercel 控制台的 Analytics 页面即可查看访问数据与事件统计。",
    ],
  },
  {
    slug: "image-optimization",
    title: "图片优化与 next/image",
    date: "2026-04-10",
    summary: "利用 next/image 自动完成图片尺寸适配、懒加载与格式转换。",
    content: [
      "next/image 组件会根据设备自动提供合适尺寸的图片，并默认开启懒加载。",
      "为首屏关键图片设置 priority，可以提升 LCP（最大内容绘制）指标。",
      "务必提供 width 与 height，或使用 fill 模式，避免页面布局偏移。",
    ],
  },
  {
    slug: "metadata-and-seo",
    title: "Metadata 与 SEO",
    date: "2026-05-01",
    summary: "通过 metadata 与 generateMetadata 为每个页面配置标题与描述。",
    content: [
      "在 layout 或 page 中导出 metadata 对象，可以为页面设置静态的标题与描述。",
      "对于动态路由，可以使用 generateMetadata 根据参数生成个性化的元信息。",
      "良好的元信息有助于搜索引擎收录，也能提升社交平台分享时的展示效果。",
    ],
  },
  {
    slug: "deploying-to-vercel",
    title: "部署到 Vercel",
    date: "2026-06-15",
    summary: "连接 Git 仓库，实现推送即部署的持续交付流程。",
    content: [
      "将项目推送到 GitHub 等代码托管平台后，在 Vercel 中导入仓库即可完成首次部署。",
      "每次推送代码都会自动触发构建，Pull Request 还会生成独立的预览地址。",
      "环境变量应在 Vercel 项目设置中配置，避免把密钥提交到代码仓库。",
    ],
  },
  {
    slug: "performance-best-practices",
    title: "性能优化最佳实践",
    date: "2026-07-30",
    summary: "从渲染策略、代码拆分到资源加载，全面提升应用性能。",
    content: [
      "优先使用静态渲染，只有在确实需要时才使用动态渲染。",
      "减少客户端组件的范围，按需动态导入体积较大的依赖。",
      "持续关注 Core Web Vitals 指标，结合真实用户数据进行针对性优化。",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
