import type { NuxtConfig } from '@nuxt/types';
import Sass from 'sass';
import Fiber from 'fibers';
import { config as dotenvConfig } from 'dotenv';

const envPath = `env/.env.${process.env.NODE_ENV || 'development'}`;
dotenvConfig({ path: envPath });

const environment = process.env.NODE_ENV || 'development';
const isDev = environment === 'development';

// meta
const title = 'Naoki Takahashi blog';
const description = '';

const config: NuxtConfig = {
    // Nuxt target (https://nuxtjs.org/api/configuration-target)
    target: 'static',
    ssr: true,

    srcDir: 'src/',
    generate: {
        fallback: true,
    },
    router: {
        base: process.env.URL_BASE || '',
    },
    render: {},

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        htmlAttrs: {
            lang: 'ja',
            prefix: 'og: http://ogp.me/ns#',
        },
        title,
        titleTemplate: `%s | ${title}`,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: description },
            // @ts-ignore
            { hid: 'X-UA-Compatible', 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
            { hid: 'og:url', property: 'og:url', content: `${process.env.URL}` },
            { hid: 'og:image', property: 'og:image', content: `${process.env.URL}/icon.png` },
            { hid: 'og:site_name', property: 'og:site_name', content: title },
            { hid: 'og:title', property: 'og:title', content: title },
            { hid: 'og:description', property: 'og:description', content: description },
            { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
            { hid: 'twitter:site', property: 'twitter:site', content: '@' },
            { hid: 'twitter:creator', property: 'twitter:creator', content: '@' },
            { hid: 'google-site-verification', name: 'google-site-verification', content: '' },
            { property: 'apple-mobile-web-app-title', content: title },
            { property: 'application-name', content: title },
            { property: 'msapplication-TileColor', content: '#ffffff' },
            { property: 'theme-color', content: '#ffffff' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: `${process.env.URL_BASE}/favicon.ico` },
            { hid: 'canonical', rel: 'canonical', href: process.env.URL },
        ],
        script: [],
    },

    // Customize the progress-bar color
    loading: { color: '#fff', continuous: true },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['ress', '~/assets/styles/main.scss'],

    styleResources: {
        scss: [
            '~/assets/styles/function/_fluid_style.scss',
            '~/assets/styles/base/_variables.scss',
            '~/assets/styles/base/_variables_easing.scss',
            '~/assets/styles/function/_mixin_mq.scss',
        ],
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: false,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxt/typescript-build',
        [
            '@nuxtjs/dotenv',
            {
                filename: `../env/.env.${environment}`,
            },
        ],
        '@nuxtjs/google-fonts',
    ],
    serverMiddleware: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        '@nuxt/content',
        '@nuxtjs/gtm',
    ],

    gtm: {
        id: 'GTM-PZHTZ9N',
    },

    googleFonts: {
        families: {
            'Noto+Sans+JP': {
                wght: [400, 700],
            },
        },
        display: 'swap',
        download: true,
        inject: true,
    },

    content: {
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-nord.css',
            },
        },
    },

    // PWA config
    pwa: {
        workbox: {
            dev: false,
            runtimeCaching: [
                {
                    urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
                    handler: 'CacheFirst',
                },
                {
                    urlPattern: process.env.URL_BASE || '' + '.*',
                    handler: 'StaleWhileRevalidate',
                    strategyOptions: {
                        cacheName: 'my-cache',
                        cacheExpiration: {
                            maxAgeSeconds: 24 * 60 * 60 * 30,
                        },
                    },
                },
            ],
        },
        manifest: {
            name: title,
            short_name: title,
            description,
            theme_color: '#ffffff',
            background_color: '#ffffff',
            lang: 'ja',
            display: 'standalone',
            start_url: '/?utm_source=pwa_app',
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        filenames: {
            app: () => (!isDev ? '[name].[chunkhash:7].js' : '[name].js'),
            chunk: () => (!isDev ? '[name].[chunkhash:7].js' : '[name].js'),
            css: () => (!isDev ? '[name].[chunkhash:7].js' : '[name].js'),
            img: () => (!isDev ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
            font: () => (!isDev ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
            video: () => (!isDev ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
        },
        /*
         ** You can extend webpack config here
         */
        extend(config) {
            config.devtool = !isDev ? false : 'source-map';
        },
        loaders: {
            scss: {
                implementation: Sass,
                sassOptions: {
                    fiber: Fiber,
                },
            },
        },
        babel: {
            presets({ isServer }) {
                return [
                    [
                        require.resolve('@nuxt/babel-preset-app'),
                        {
                            buildTarget: isServer ? 'server' : 'client',
                            useBuiltIns: 'usage',
                            corejs: { version: '3.8' },
                        },
                    ],
                ];
            },
        },
        postcss: {
            preset: {
                autoprefixer: {
                    grid: 'autoplace',
                    cascade: false,
                },
            },
        },
        terser: {
            terserOptions: {
                compress: { drop_console: false },
            },
        },
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                removeComments: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
            },
        },
    },
};

export default config;
