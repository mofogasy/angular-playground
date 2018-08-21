/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should find title', () => {
    cy.get('app-root h1').contains('Welcome to app!');
  });
});
