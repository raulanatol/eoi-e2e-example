export {};

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display the login text', () => {
    cy.findByText(/LoginPage/)
      .should('exist');
  });

  describe('when form', () => {
    describe('is invalid', () => {
      it('should show an error', () => {
        cy.get('[type="email"]')
          .type('hello@example.com');
        cy.get('[type="password"]')
          .type('123456');
        cy.findByRole('button')
          .click();
        cy.findByText(/Incorrect email\/password combination/)
          .should('exist');
      });
    });

    describe('is valid', () => {
      it('should not show an error', () => {
        // cy.intercept('POST', '/auth/signin').as('signin');
        cy.intercept('POST', '/auth/signin', { message: 'ok' }).as('signin');

        cy.get('[type="email"]')
          .type('hello@example.com');
        cy.get('[type="password"]')
          .type('A123456');
        cy.findByRole('button')
          .click();
        cy.findByText(/Incorrect email\/password combination/)
          .should('not.exist');
      });
    });
  });
});
