Cypress.Commands.add('hasLocation', (path: string) => {
  cy.url().should('eq', Cypress.config().baseUrl + path);
});

export {};
