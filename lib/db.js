import { PrismaClient } from "@prisma/client"

let prisma

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
} else {
    // re-use prisma client instance in development
    global.prisma = global.prisma || new PrismaClient()
    prisma = global.prisma
}

export default prisma
