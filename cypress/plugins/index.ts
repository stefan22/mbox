/// <reference types="cypress" />

const seed = require("../../prisma/seed")

const plugins: Cypress.PluginConfig = on => {
    on("task", {
        seed() {
            return seed()
        },
    })
}

export default plugins
