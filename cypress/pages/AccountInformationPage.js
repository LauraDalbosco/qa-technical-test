import { faker } from '@faker-js/faker'
import { locators } from '../support/locators'

class AccountInformationPage {

  validateAccountInformationPage() {
    cy.contains('h2', locators.accountInformation.pageTitle)
      .should('be.visible')
  }

  selectGender(gender = 'Mr') {
    if (gender.toLowerCase() === 'mr') {
      cy.get(locators.accountInformation.titleRadioButton)
        .check({ force: true })
    } else if (gender.toLowerCase() === 'mrs') {
      cy.get(locators.accountInformation.titleFemaleRadioButton)
        .check({ force: true })
    }
  }

  fillPassword(password) {
    cy.get(locators.accountInformation.passwordInput)
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

    cy.get(locators.accountInformation.daysSelect)
      .should('be.visible')
      .select(day)

    cy.get(locators.accountInformation.monthsSelect)
      .should('be.visible')
      .select(month)

    cy.get(locators.accountInformation.yearsSelect)
      .should('be.visible')
      .select(year)
  }

  fillAddressInformation() {
    const countries = [
      'India', 'United States', 'Canada', 'Australia',
      'Israel', 'New Zealand', 'Singapore'
    ]

    cy.get(locators.accountInformation.firstNameInput)
      .should('be.visible')
      .clear()
      .type(faker.person.firstName())

    cy.get(locators.accountInformation.lastNameInput)
      .should('be.visible')
      .clear()
      .type(faker.person.lastName())

    cy.get(locators.accountInformation.companyInput)
      .should('be.visible')
      .clear()
      .type(faker.company.name())

    cy.get(locators.accountInformation.addressInput)
      .should('be.visible')
      .clear()
      .type(faker.location.streetAddress())

    cy.get(locators.accountInformation.countrySelect)
      .should('be.visible')
      .select(faker.helpers.arrayElement(countries))

    cy.get(locators.accountInformation.stateInput)
      .should('be.visible')
      .clear()
      .type(faker.location.state())

    cy.get(locators.accountInformation.cityInput)
      .should('be.visible')
      .clear()
      .type(faker.location.city())

    cy.get(locators.accountInformation.zipcodeInput)
      .should('be.visible')
      .clear()
      .type(faker.location.zipCode())

    cy.get(locators.accountInformation.mobileNumberInput)
      .should('be.visible')
      .clear()
      .type(faker.string.numeric(10))
  }

  clickCreateAccount() {
    cy.get(locators.accountInformation.createAccountButton)
      .should('be.visible')
      .should('not.be.disabled')
      .click()
  }

  validateAccountCreated() {
    cy.contains(locators.accountInformation.accountCreationSuccess)
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