import { LoggersManager } from '@zajno/common/logger';
import { AppConfig } from 'scripts/utils/config';

const manager = new LoggersManager();
const { setMode, createLogger, logger } = manager.expose();

setMode(AppConfig.EnableLogger ? 'console' : false);

logger.log(AppConfig.FullVersionName);

export { createLogger, logger };
export default logger;
