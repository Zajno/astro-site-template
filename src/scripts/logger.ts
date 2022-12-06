import logger, { setMode, createLogger, ILogger } from '@zajno/common/logger';
import { AppConfig } from 'app/utils/config';

setMode(AppConfig.EnableLogger ? 'console' : false);

export default logger;

logger.log(`${process.env.APP_NAME} v${process.env.APP_VERSION}:${process.env.APP_HASH}`);

export { createLogger };

export type { ILogger };
