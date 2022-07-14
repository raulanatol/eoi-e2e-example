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
    cy.fixture('events').then((json) => {
      cy.intercept('GET', '/events', json).as('getEvents');
    });
    cy.findByText(/playa Las Canteras/)
      .should('exist');
    cy.wait('@getEvents');

    cy.findByText(/Event 1/)
      .should('exist');
  });

  it('should not render a list when events Api fails', () => {
    cy.intercept('GET', '/events', 'events.json').as('getEvents');
    cy.findByText(/playa Las Canteras/)
      .should('exist');
    cy.wait('@getEvents');

    cy.findByText(/playa Las Canteras/).should('not.exist');
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
