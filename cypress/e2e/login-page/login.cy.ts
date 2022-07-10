export {};

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display the login text', () => {
    cy.findByText(/LoginPage/)
      .should('exist');
  });
});
