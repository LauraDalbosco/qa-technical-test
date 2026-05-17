class HomePage {

  elements = {
    signupLoginButton: () =>
      cy.contains('a', 'Signup / Login'),
    
    logo: () =>
      cy.get('.logo'),
  }

  accessHomePage() {
    cy.visit('/')
    this.validateHomePage()
  }

  validateHomePage() {
    this.elements.logo()
      .should('be.visible')
  }

  clickSignupLogin() {
    this.elements.signupLoginButton()
      .should('be.visible')
      .click()
  }
}

export default new HomePage()