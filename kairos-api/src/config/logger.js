import pino from 'pino';
import config from './env.js';

const logger = pino({
    level: config.nodeEnv === 'production' ? 'info' : 'debug',
    ...(config.nodeEnv !== 'production' && {
        transport: {
            target: 'pino/file',
            options: { destination: 1 }, // stdout
        },
    }),
});

export default logger;
