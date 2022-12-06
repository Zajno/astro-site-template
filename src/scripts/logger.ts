import logger, { setMode, createLogger, ILogger } from '@zajno/common/logger';
import { AppConfig } from 'app/utils/config';

setMode(AppConfig.EnableLogger ? 'console' : false);

export default logger;

logger.log(`${__APP_NAME__} v${__APP_VERSION__}:${__APP_HASH__}`);

export { createLogger };

export type { ILogger };
