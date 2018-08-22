/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should find title', () => {
    cy.get('app-root h1').contains('Welcome to app!');
  });

  it('should enter a name', () => {
    const inputText = 'Cypress is great!';
    cy.get('input').type(inputText);
    cy.get('button').click();
    cy.get('app-root h1').contains(`Welcome to ${inputText}!`);
    cy.get('.output').contains(inputText);
  });
});
