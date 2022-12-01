import type { Envs } from 'config/envs';
import { getFullVersionName } from 'config/version';

export const AppConfig = {
    Env: __APP_ENV__ as Envs || 'development',
    Name: 'Astro static site template',
    Version: __APP_VERSION__ || '0.0.0',
    Hash: __APP_HASH__ || '',
    EnableLogger: __ENABLE_LOGGER__ === true || __ENABLE_LOGGER__ as any === 'true' || false,
    get FullVersionName() { return getFullVersionName(AppConfig.Version, AppConfig.Env, AppConfig.Hash); },
    Features: {
    },
};

export default AppConfig;
