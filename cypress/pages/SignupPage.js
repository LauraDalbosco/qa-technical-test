class SignupPage {

  elements = {
    signupNameInput: () =>
      cy.get('[data-qa="signup-name"]'),

    signupEmailInput: () =>
      cy.get('[data-qa="signup-email"]'),

    signupButton: () =>
      cy.get('[data-qa="signup-button"]'),
  }

  fillSignupForm(name, email) {
    this.elements.signupNameInput()
      .type(name)

    this.elements.signupEmailInput()
      .type(email)
  }

  clickSignupButton() {
    this.elements.signupButton()
      .click()
  }
}

export default new SignupPage()