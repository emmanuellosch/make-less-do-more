/// <reference types="Cypress" />;

describe("<Navigation /> component", () => {
  it("navigates me through my pages", () => {
    cy.visit("/");

    cy.get('[data-cy="nav-link-Reusable"]').click();
    cy.location("pathname").should("match", /\/Reusable$/);
    cy.contains("Reusable").should("be.visible");

    cy.get('[data-cy="nav-link-Favorites"]').click();
    cy.location("pathname").should("match", /\/Favorites$/);
    cy.contains("h1", "Favorites").should("be.visible");

    cy.get('[data-cy="nav-link-Homemade"]').click();
    cy.location("pathname").should("match", /\/Homemade$/);
    cy.contains("h1", "Homemade").should("be.visible");

    cy.get('[data-cy="nav-link-Profil"]').click();
    cy.location("pathname").should("match", /\/Profil$/);
    cy.contains("h1", "Profil").should("be.visible");
  });
});
