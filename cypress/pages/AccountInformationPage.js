import { faker } from '@faker-js/faker'

class AccountInformationPage {

  elements = {
    pageTitle: () =>
      cy.contains('h2', 'Enter Account Information'),

    titleRadioButton: () =>
      cy.get('#id_gender1'),

    titleFemaleRadioButton: () =>
      cy.get('#id_gender2'),

    passwordInput: () =>
      cy.get('[data-qa="password"]'),

    daysSelect: () =>
      cy.get('[data-qa="days"]'),

    monthsSelect: () =>
      cy.get('[data-qa="months"]'),

    yearsSelect: () =>
      cy.get('[data-qa="years"]'),

    firstNameInput: () =>
      cy.get('[data-qa="first_name"]'),

    lastNameInput: () =>
      cy.get('[data-qa="last_name"]'),

    companyInput: () =>
      cy.get('[data-qa="company"]'),

    addressInput: () =>
      cy.get('[data-qa="address"]'),

    countrySelect: () =>
      cy.get('[data-qa="country"]'),

    stateInput: () =>
      cy.get('[data-qa="state"]'),

    cityInput: () =>
      cy.get('[data-qa="city"]'),

    zipcodeInput: () =>
      cy.get('[data-qa="zipcode"]'),

    mobileNumberInput: () =>
      cy.get('[data-qa="mobile_number"]'),

    createAccountButton: () =>
      cy.get('[data-qa="create-account"]'),

    accountCreatedLabel: () =>
      cy.get('[data-qa="account-created"]'),
      
    accountCreationSuccess: () =>
      cy.contains('Account Created!'),
  }

  validateAccountInformationPage() {
    this.elements.pageTitle()
      .should('be.visible')
  }

  selectGender(gender = 'Mr') {
    if (gender.toLowerCase() === 'mr') {
      this.elements.titleRadioButton()
        .check({ force: true })
    } else if (gender.toLowerCase() === 'mrs') {
      this.elements.titleFemaleRadioButton()
        .check({ force: true })
    }
  }

  fillPassword(password) {
    this.elements.passwordInput()
      .should('be.visible')
      .clear()
      .type(password)
  }

  selectDateOfBirth() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ]

    const day = faker.number.int({ min: 1, max: 28 }).toString()
    const month = faker.helpers.arrayElement(months)
    const year = faker.number.int({ min: 1980, max: 2005 }).toString()

    this.elements.daysSelect()
      .should('be.visible')
      .select(day)

    this.elements.monthsSelect()
      .should('be.visible')
      .select(month)

    this.elements.yearsSelect()
      .should('be.visible')
      .select(year)
  }

  fillAddressInformation() {
    const countries = [
      'India', 'United States', 'Canada', 'Australia',
      'Israel', 'New Zealand', 'Singapore'
    ]

    this.elements.firstNameInput()
      .should('be.visible')
      .clear()
      .type(faker.person.firstName())

    this.elements.lastNameInput()
      .should('be.visible')
      .clear()
      .type(faker.person.lastName())

    this.elements.companyInput()
      .should('be.visible')
      .clear()
      .type(faker.company.name())

    this.elements.addressInput()
      .should('be.visible')
      .clear()
      .type(faker.location.streetAddress())

    this.elements.countrySelect()
      .should('be.visible')
      .select(faker.helpers.arrayElement(countries))

    this.elements.stateInput()
      .should('be.visible')
      .clear()
      .type(faker.location.state())

    this.elements.cityInput()
      .should('be.visible')
      .clear()
      .type(faker.location.city())

    this.elements.zipcodeInput()
      .should('be.visible')
      .clear()
      .type(faker.location.zipCode())

    this.elements.mobileNumberInput()
      .should('be.visible')
      .clear()
      .type(faker.string.numeric(10))
  }

  clickCreateAccount() {
    this.elements.createAccountButton()
      .should('be.visible')
      .should('not.be.disabled')
      .click()
  }

  validateAccountCreated() {
    this.elements.accountCreationSuccess()
      .should('be.visible')
  }

  completeAccountCreation(password, gender = 'Mr') {
    this.validateAccountInformationPage()
    this.selectGender(gender)
    this.fillPassword(password)
    this.selectDateOfBirth()
    this.fillAddressInformation()
    this.clickCreateAccount()
    this.validateAccountCreated()
  }
}

export default new AccountInformationPage()