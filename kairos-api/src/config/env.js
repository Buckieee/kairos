import dotenv from 'dotenv';

// Load .env file in non-production environments
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

/**
 * Validated application configuration.
 * Throws at startup if required variables are missing.
 */
const requiredVars = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];

for (const varName of requiredVars) {
    if (!process.env[varName]) {
        throw new Error(`Missing required environment variable: ${varName}`);
    }
}

const config = Object.freeze({
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT, 10) || 3000,

    // CORS
    corsOrigins: process.env.CORS_ORIGINS
        ? process.env.CORS_ORIGINS.split(',').map((o) => o.trim())
        : ['http://localhost:3000', 'http://localhost:5173'],

    // Rate limiting
    rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 900_000,
    rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,

    // Supabase
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || null,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
});

export default config;
