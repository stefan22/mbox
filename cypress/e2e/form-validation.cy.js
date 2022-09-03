describe("Signup", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signup")
        cy.wait(2000)
        cy.get("[data-test='user-firstname']").as("first")
        cy.get("[data-test='user-lastname']").as("last")
        cy.get("[data-test='user-email']").as("email")
        cy.get("[data-test='user-password']").as("password")
        cy.get("[data-test='data-submit']").as("submit")
    })

    it("should require an email", () => {
        cy.get("@submit").click()
        cy.get("[data-test='user-email']:invalid").should("have.length", 1)
    })

    it("should return a message when missing user email", () => {
        cy.wait(1000)
        cy.get("[data-test='user-email']:invalid")
            .invoke("prop", "validationMessage")
            .should("contain", "Please fill out this field.")

        cy.get("[data-test='user-email']:invalid")
            .invoke("prop", "validity")
            .its("valueMissing")
            .should("be.true")
    })

    it("should require a password", () => {
        cy.get("@submit").click()
        cy.get("[data-test='user-password']:invalid").should("have.length", 1)
    })

    it("should return a message when missing user password", () => {
        cy.wait(1000)
        cy.get("[data-test='user-password']:invalid")
            .invoke("prop", "validationMessage")
            .should("contain", "Please fill out this field.")

        cy.get("[data-test='user-password']:invalid")
            .invoke("prop", "validity")
            .its("valueMissing")
            .should("be.true")
    })

    it("should require email to be an actual email address", () => {
        cy.get("@email").type("notanemail")

        cy.get("@submit").click()
        cy.get("[data-test='user-email']:invalid").should("have.length", 1)

        cy.get("@email")
            .invoke("prop", "validationMessage")
            .should("contain", "Please include an '@' in the email address.")

        cy.get("[data-test='user-email']:invalid")
            .invoke("prop", "validity")
            .its("typeMismatch")
            .should("be.true")
    })
})
