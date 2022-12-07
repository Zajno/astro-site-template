import logger, { setMode, createLogger, ILogger } from '@zajno/common/logger';
import { AppConfig } from 'app/utils/config';

setMode(AppConfig.EnableLogger ? 'console' : false);

export default logger;

logger.log(AppConfig.FullVersionName);

export { createLogger };

export type { ILogger };
