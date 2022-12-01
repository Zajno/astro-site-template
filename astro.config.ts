import { defineConfig } from 'astro/config';
import * as AppConfig from './config/utils';
import { version, name as appName } from './package.json';
const { env: envConfig, fullVersion } = AppConfig.generateVariables('.env', version, appName);

// https://astro.build/config
export default defineConfig({
    vite: {
        define: envConfig,
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@import './src/styles/common/gem.scss';",
                },
            },
        },
    }
});

