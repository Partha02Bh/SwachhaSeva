export default {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out: './drizzle',

    dbCredentials: {
        url: "postgresql://neondb_owner:qS4VcrZ0XFzI@ep-orange-bird-a5npy8sw.us-east-2.aws.neon.tech/waste-manage?sslmode=require",
        connectionString: process.env.DATABASE_URL,
    }
}




