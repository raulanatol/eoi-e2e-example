export { };

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the home text', () => {
    cy.findByText(/Home/)
      .should('exist');
  });

  describe('navigation', () => {
    it('should redirect to login after click on the Login link', () => {
      cy.findByText(/login/)
        .click();

      cy.url().should('eq', Cypress.config().baseUrl + '/login');
      cy.hasLocation('/login');
    });
  });
});
