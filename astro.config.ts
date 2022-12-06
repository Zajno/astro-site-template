import { defineConfig } from 'astro/config';
import * as AppConfig from './config/utils';
import { version, name as appName } from './package.json';
import sitemap from "@astrojs/sitemap";
import { CurrentConfig } from './config';
const {
  env: envConfig,
  fullVersion
} = AppConfig.generateVariables('.env', version, appName);

// https://astro.build/config

export default defineConfig({
  vite: {
    define: envConfig,
    build: {
      rollupOptions: {
        // output: {
        //   chunkFileNames: 'js/[name]-[hash].js',
        //   entryFileNames: 'js/[name]-[hash].js',

        //   assetFileNames: ({name}) => {
        //     if (/\.css$/.test(name ?? '')) {
        //       return 'css/[name]-[hash][extname]';
        //     }
        //     if (/\.(png|jpe?g|gif|webp|ico)$/.test(name ?? '')){
        //         return 'assets/img/[name]-[hash][extname]';
        //     }
        //     if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')){
        //       return 'assets/fonts/[name]-[hash][extname]';
        //     }
        //     if (/\.(webm|mp4|ogv|mov)$/.test(name ?? '')){
        //       return 'assets/video/[name]-[hash][extname]';
        //     }
        //     if (/\.mp3$|\.wav$/.test(name ?? '')){
        //       return 'assets/audio/[name]-[hash][extname]';
        //     }
        //     if (/lottie[\\/].*\.json$/.test(name ?? '')){
        //       return 'assets/lottie/[name]-[hash][extname]';
        //     }

        //     return 'assets/[name]-[hash][extname]';
        //   },
        // },
      }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "@import './src/styles/common/gem.scss';\r\n",
            },
            sass: {
              additionalData: "@import './src/styles/common/gem.scss'\r\n",
            },
        },
    },
  },

  server: {
    port: 8080,
    host: true
  },
  site: CurrentConfig.Hostname,
  integrations: [sitemap()]
});