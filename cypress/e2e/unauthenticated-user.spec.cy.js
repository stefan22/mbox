describe("Unauthenticated user", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("should redirect user to '/signin'", () => {
        cy.location("pathname").should("eq", "/signin")
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
        cy.contains("signin")
    })
})
