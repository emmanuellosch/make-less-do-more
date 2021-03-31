/// <reference types="Cypress" />;

describe("<recipes /> component", () => {
  beforeEach(() => {
    cy.visit("/Homemade");
  });

  it("should display", () => {
    cy.visit("/Homemade");

    it("Checks texts of items", () => {
      cy.get(".recipes").eq(0).should("contain.text", "zero waste");

      cy.get(".recipes").eq(1).should("contain.text", "doing");
    });
  });
});
