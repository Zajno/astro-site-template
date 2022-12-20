import type { Environments } from 'config';

export type AppConfigType = { e: Environments, l: boolean, v: string, f: any};

declare global {
    export const AppConfig: AppConfigType;
}
const cfg: AppConfigType = (window as any).AppConfig;

export const AppConfig = {
    Env: cfg.e  || 'development',
    EnableLogger: cfg.l,
    FullVersionName: cfg.v,
    Features: cfg.f,
};

export default AppConfig;
