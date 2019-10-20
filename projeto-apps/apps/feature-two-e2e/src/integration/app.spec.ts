import { getGreeting } from '../support/app.po';

describe('feature-two', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to feature-two!');
  });
});
