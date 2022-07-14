export { };

describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('should display the dashboard text', () => {
    cy.findByText(/Dashboard/)
      .should('exist');
  });

  it('should display an event list', async () => {
    cy.intercept('GET', '/events', [{ name: 'otro evento' }]).as('getEvents');
    cy.findByText(/playa Las Canteras/)
      .should('exist');
    cy.wait('@getEvents');

    cy.findByText(/otro evento/)
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
