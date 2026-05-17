class HomePage {

  elements = {
    signupLoginButton: () =>
      cy.get('a[href="/login"]'),
    
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