import app from './app.js';
import config from './config/env.js';
import logger from './config/logger.js';

const { port, nodeEnv } = config;

app.listen(port, () => {
    logger.info(`🚀 Kairos API running on port ${port} [${nodeEnv}]`);
});
