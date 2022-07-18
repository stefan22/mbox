const prisma = require("../lib/db")

const resetDB = async () => {
    return prisma.reset()
}

const reset = async () => {
    await resetDB()
        .catch(e => {
            // eslint-disable-next-line no-console
            console.error(e)
            process.exit(1)
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
}

module.exports = {
    reset,
}
