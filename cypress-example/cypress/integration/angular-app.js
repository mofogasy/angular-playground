/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should find title', () => {
    cy.get('app-root h1').should('contain', 'Welcome to app!');
  });

  it('should enter a name', () => {
    const inputText = 'Cypress is great!';
    cy.get(':text').type(inputText); //jQuery selector, equals input[type=text]
    cy.contains('Click me!').click(); // perhaps more readable than: cy.get('button').click();
    cy.get('app-root h1').should('contain', `Welcome to ${inputText}!`);
    cy.get('.output').should('contain', inputText);
  });

  it('should check the checkbox', () => {
    cy.get(':checkbox')
      .should('not.be.checked')
      .check()
      .should('be.checked')
      .click()
      .should('not.be.checked');
  });

  it('should display the title UPPERCASE', () => {
    const inputText = 'myapp';
    cy.get(':checkbox').check();
    cy.get(':text').type(inputText);
    cy.contains('Click me!').click();
    cy.get('app-root h1').should('contain', 'Welcome to MYAPP!');
    cy.get('.output').should('contain', 'MYAPP');
  });

  // it('should contain three links', () => {
  //   cy.get('ul').should('contain', 'Welcome to app!');
  // });
});
