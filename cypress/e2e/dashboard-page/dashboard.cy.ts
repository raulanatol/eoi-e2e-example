export { };

describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('should display the dashboard text', () => {
    cy.findByText(/Dashboard/)
      .should('exist');
  });

  it('should display an event list', () => {
    cy.findByText(/playa Las Canteras/)
      .should('exist');
  });

  // describe('navigation', () => {
  //   it('should redirect to login after click on the Login link', () => {
  //     cy.findByText(/login/)
  //       .click();

  //     cy.url().should('eq', Cypress.config().baseUrl + '/login');
  //     cy.hasLocation('/login');
  //   });
  // });
});
