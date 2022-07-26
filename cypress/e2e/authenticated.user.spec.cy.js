const user = {
    firstName: "Admino22",
    lastName: "Admino",
    email: "admino22@admino.com",
    password: "12345",
}

describe("User Signup", () => {
    beforeEach(() => {
        // reset db
        cy.task("dbReset")
        cy.task("dbSeed")
    })

    it("should successfully signup a new user", () => {
        cy.visit("/signup")
        cy.get("[data-test='user-firstname']").type(user.firstName)
        cy.get("[data-test='user-lastname']").type(user.lastName)
        cy.get("[data-test='user-email']").type(user.email)
        cy.get("[data-test='user-password']").type(user.password)
        cy.get("[data-test='data-submit']").click();
    })

})

describe("User Signin", () => {
    it("should successfully signin a user", () => {
        cy.visit("/signin")
        cy.get("[data-test='user-email']").type(user.email)
        cy.get("[data-test='user-password']").type(user.password)
        cy.get("[data-test='data-submit']").click();
    })

})
