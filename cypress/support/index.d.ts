declare namespace Cypress {
  interface Chainable {
    hasLocation(path: string): Chainable<Element>;
  }
}
