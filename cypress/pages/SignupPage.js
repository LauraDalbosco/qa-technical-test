import { locators } from '../support/locators'

class SignupPage {

  fillSignupForm(name, email) {
    cy.get(locators.signup.nameInput)
      .type(name)

    cy.get(locators.signup.emailInput)
      .type(email)
  }

  clickSignupButton() {
    cy.get(locators.signup.button)
      .click()
  }
}

export default new SignupPage()