/* eslint-disable no-console */
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as git from 'git-rev-sync';
import { Environments } from '.';
import { getFullVersionName } from './version';
import { CurrentConfig } from '.';

const DefaultEnvironment = 'development';

// fill *required* env variables here. they might not exist, but should be listed anyway
const knownEnv = {
    __APP_ENV__: process.env.APP_ENV || process.env.NODE_ENV || DefaultEnvironment,
    __APP_HASH__: process.env.APP_HASH || git.short(__dirname),
    __ENABLE_LOGGER__: JSON.stringify(CurrentConfig.EnableLogger),
    __HOSTNAME__: CurrentConfig.Hostname,
};

type EnvVariablesInfo = {
    env: Record<string, any>,
    fullVersion: string,
};

export function generateVariables(pathToEnv: string, appVersion?: string, appName?: string): EnvVariablesInfo {
    const envResult = {};

    let envLocal: any = {};
    // parse local .env file
    if (pathToEnv && fs.existsSync(pathToEnv)) {
        envLocal = dotenv.parse(fs.readFileSync(pathToEnv));
    }

    // Keys are taken from knownEnv OR envLocal but will be overriden by process.env

    // override envLocal with system env variables (only for known keys from requiredEnv)
    Object.keys(knownEnv).forEach(k => {
        const v = knownEnv[k] || envLocal[k];
        if (v) {
            envLocal[k] = v;
        }
    });

    // generate correct keys for resulting envConfig, allowing to override with process.env values
    Object.keys(envLocal).forEach(k => {
        const resValue = process.env[k] || envLocal[k];
        envResult[k] = resValue
            ? JSON.stringify(resValue)
            : resValue;
    });

    const currentEnv = process.env.APP_ENV || envLocal.APP_ENV;
    console.log('[App Config] current env:', currentEnv, envResult);

    const flat: Record<string, any> = {};
    Object.keys(envResult).forEach(k => {
        flat[k] = envResult[k];
    });

    if (appVersion) {
        flat.__APP_VERSION__ = JSON.stringify(appVersion);
    }

    if (appName) {
        flat.__APP_NAME__ = JSON.stringify(appName);
    }

    const fullVersion = getFullVersionName(appVersion, currentEnv, knownEnv.__APP_HASH__);
    return {
        env: flat,
        fullVersion,
    };
}

export function getConfig(obj: Record<Environments, any>, environment: string, stringify = false) {
    const env = environment || DefaultEnvironment;
    const config = obj[env];
    if (!config) {
        throw new Error('Config not found for environment: ' + env);
    }
    return stringify
        ? JSON.stringify(config)
        : config;
}

