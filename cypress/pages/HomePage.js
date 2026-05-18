import { locators } from '../support/locators'

class HomePage {

  accessHomePage() {
    cy.visit('/')
    this.validateHomePage()
  }

  validateHomePage() {
    cy.get(locators.home.logo)
      .should('be.visible')
  }

  clickSignupLogin() {
    cy.get(locators.home.signupLoginLink)
      .should('be.visible')
      .click()
  }
}

export default new HomePage()