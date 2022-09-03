import { defineConfig } from "cypress"
import "dotenv/config"

module.exports = defineConfig({
    projectId: "y9rmov",

    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_ACCESS_TOKEN: process.env.NEXTAUTH_ACCESS_TOKEN,
        DATABASE_URL: process.env.DATABASE_URL,
        SHADOW_DATABASE_URL: process.env.SHADOW_DATABASE_URL
    },
    e2e: {
        baseUrl: "http://localhost:3000",
        responseTimeout: 120e3,
        setupNodeEvents(on, config) {
            on("task", {
                dbReset: async () => {
                    return await require("./prisma/reset")
                }
            })
            return config
        }
    }
})
