describe("Unauthenticated user", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signin")
        cy.wait(1500)
    })

    it("Should have a signin form", () => {
        cy.get("form").should("exist")
    })

    it("shows email input-field within form", () => {
        cy.get("[data-test='user-email']").should("exist")
    })

    it("shows password input-field within form", () => {
        cy.get("[data-test='user-password']").should("exist")
    })

    it("should include a signin button in form", () => {
        cy.get("[data-test='data-submit']").should("exist")
        cy.contains("Signin")
    })
})
