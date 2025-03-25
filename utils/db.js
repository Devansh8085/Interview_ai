import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL='postgresql://neondb_owner:npg_v2XH5DSuEUkp@ep-autumn-recipe-a5ga8kz3-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require');
export const db = drizzle(sql,{schema});
