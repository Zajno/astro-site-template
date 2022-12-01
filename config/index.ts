/*
    This module is supposed to be used in build time only.
*/

export type Environments = 'production' | 'staging' | 'development';

/* global process */
export const APP_ENV = (process.env.APP_ENV || 'development') as Environments;

export type EnvironmentConfig = {
    Hostname: string,
    EnableLogger: boolean,
};

const Configs: Partial<Record<Environments, EnvironmentConfig>> = {
    development: {
        Hostname: 'http://localhost:5173',
        EnableLogger: true,
    },
    staging: {
        Hostname: 'https://five-years.web.app/',
        EnableLogger: true,
    },
    production: {
        Hostname: 'https://five-years.web.app/',
        EnableLogger: false,
    },
};

export const CurrentConfig = Configs[APP_ENV] || Configs.development;
