/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_v2XH5DSuEUkp@ep-autumn-recipe-a5ga8kz3-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
};