import homePage from '../../pages/HomePage'
import signupPage from '../../pages/SignupPage'
import accountInformationPage from '../../pages/AccountInformationPage'
import { faker } from '@faker-js/faker'

describe('Desafio 01: Registro E2E', () => {
  
  it('Fluxo de registo de um novo utilizador, garantindo o uso de dados dinâmicos e a validação do sucesso', () => {
    const email = faker.internet.email()
    const name = faker.person.firstName()
    const password = faker.internet.password({ length: 12 })

    homePage.accessHomePage()
    homePage.clickSignupLogin()
    signupPage.fillSignupForm(name, email)
    signupPage.clickSignupButton()

    accountInformationPage.completeAccountCreation(password, 'Mr')
  })
})
