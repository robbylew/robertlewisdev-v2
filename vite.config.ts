import { resolve } from 'node:path'
import { VitePluginRadar } from 'vite-plugin-radar'
import { defineConfig } from 'vite'
import fs from 'fs-extra'
import Inspect from 'vite-plugin-inspect'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import Vue from '@vitejs/plugin-vue'
import matter from 'gray-matter'
import AutoImport from 'unplugin-auto-import/vite'
import anchor from 'markdown-it-anchor'
import LinkAttributes from 'markdown-it-link-attributes'
import GitHubAlerts from 'markdown-it-github-alerts'
import UnoCSS from 'unocss/vite'
import SVG from 'vite-svg-loader'
import MarkdownItShiki from '@shikijs/markdown-it'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import MarkdownItMagicLink from 'markdown-it-magic-link'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// @ts-expect-error missing types
import TOC from 'markdown-it-table-of-contents'
import { slugify } from './scripts/slugify'

const promises: Promise<any>[] = []

export default defineConfig({
  resolve: {
    alias: [{ find: '~/', replacement: `${resolve(__dirname, 'src')}/` }],
  },
  server: {
    host: true, // or '0.0.0.0'
    port: 3333,
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'dayjs',
      'dayjs/plugin/localizedFormat',
    ],
  },
  plugins: [
    UnoCSS(),

    VueRouter({
      extensions: ['.vue', '.md'],
      routesFolder: 'pages',
      logs: true,
      extendRoute(route) {
        const path = route.components.get('default')
        if (!path)
          return

        if (!path.includes('projects.md') && path.endsWith('.md')) {
          const { data } = matter(fs.readFileSync(path, 'utf-8'))
          route.addToMeta({
            frontmatter: data,
          })
        }
      },
    }),

    Vue({
      include: [/\.vue$/, /\.md$/],
      script: {
        defineModel: true,
      },
    }),

    Markdown({
      wrapperComponent: id => id.includes('/demo/')
      ? 'WrapperDemo'
      : 'WrapperPost',
      wrapperClasses: (id, code) =>
        code.includes('@layout-full-width')
          ? ''
          : 'prose m-auto slide-enter-content',
      headEnabled: true,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      async markdownItSetup(md) {
        md.use(
          await MarkdownItShiki({
            themes: {
              dark: 'vitesse-dark',
              light: 'vitesse-light',
            },
            defaultColor: false,
            cssVariablePrefix: '--s-',
            transformers: [
              transformerTwoslash({
                explicitTrigger: true,
                renderer: rendererRich(),
              }),
            ],
          }),
        )

        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })

        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        md.use(TOC, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml:
            '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>',
        })

        md.use(MarkdownItMagicLink, {
          linksMap: {
            'Pandas': 'https://pandas.pydata.org/',
            'Python': 'https://www.python.org/',
            'JavaScript': 'https://www.javascript.com/',
            'HTML': 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
            'CSS': '/path/to/csslogo',
            'TailwindCSS': 'https://tailwindcss.com',
            'React.js': 'https://reactjs.org',
            'Next.js': 'https://nextjs.org',
            'Node.js': 'https://nodejs.org',
            'Express.js': 'https://expressjs.com',
            'SQL': 'https://www.sql.org',
            'PostgreSQL': 'https://www.postgresql.org',
            'C++': 'https://isocpp.org/',
            'MySQL': 'https://www.mysql.com/',
            'AWS': 'https://aws.amazon.com',
            'Docker': 'https://www.docker.com',
            'Apache Spark': 'https://spark.apache.org/',
            'Apache Hadoop': 'https://hadoop.apache.org/',
            'Apache Kafka': 'https://kafka.apache.org/',
            'TensorFlow': 'https://www.tensorflow.org/',
            'PyTorch': 'https://pytorch.org/',
            'Java': 'https://www.java.com/en/',
            'MongoDB': 'https://www.mongodb.com/',
            'Django': 'https://www.djangoproject.com/',
            'Tableau': 'https://www.tableau.com/',
            'R': 'https://www.r-project.org/about.html',
            'Kubernetes': 'https://kubernetes.io/',
            'Power BI':
              'https://www.microsoft.com/en-us/power-platform/products/power-bi',
            'Matplotlib': 'https://matplotlib.org/',
            'Scikit-Learn': 'https://scikit-learn.org/stable/',
            'Numpy': 'https://numpy.org/',
            'Georgia Tech': 'https://www.gatech.edu/',
          },
          imageOverrides: [
            ['https://github.com/vuejs/core', 'https://vuejs.org/logo.svg'],
            [
              'https://github.com/nuxt/nuxt',
              'https://nuxt.com/assets/design-kit/icon-green.svg',
            ],
            ['https://github.com/vitejs/vite', 'https://vitejs.dev/logo.svg'],
            ['https://nuxtlabs.com', 'https://github.com/nuxtlabs.png'],
            [/opencollective\.com\/vite/, 'https://github.com/vitejs.png'],
            [/opencollective\.com\/elk/, 'https://github.com/elk-zone.png'],
          ],
        })

        md.use(GitHubAlerts)
      },
    }),

    AutoImport({
      imports: ['vue', VueRouterAutoImports, '@vueuse/core'],
    }),

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    Inspect(),

    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
    }),

    SVG({
      svgo: false,
      defaultImport: 'url',
    }),

    {
      name: 'await',
      async closeBundle() {
        await Promise.all(promises)
      },
    },
  ],

  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT')
          next(warning)
      },
    },
  },

  ssgOptions: {
    formatting: 'minify',
  },
})
