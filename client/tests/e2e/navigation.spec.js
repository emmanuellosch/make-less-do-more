/// <reference types="Cypress" />;

describe("<Navigation /> component", () => {
  it("navigates me through my pages", () => {
    cy.visit("/");

    cy.get('[data-cy="nav-link-Favorites"]').click();
    cy.location("pathname").should("match", /\/Favorites$/);
    cy.contains("h1", "Favorites").should("be.visible");
  });
});
