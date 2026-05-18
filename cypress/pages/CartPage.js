import { parsePrice } from '../support/helpers'
import { locators } from '../support/locators'

class CartPage {

  validateCartPageLoaded() {
    cy.get(locators.cart.cartTable)
      .should('be.visible')
  }

  validateProductQuantity(quantity) {
    cy.get(locators.cart.cartQuantity).first()
      .invoke('text')
      .then((text) => {
        expect(Number(text.trim())).to.equal(quantity)
      })
  }

  validateProductCorrect() {
    cy.get(locators.cart.cartDescription).first()
      .should('be.visible')
      .should('not.be.empty')
  }

  validateProductPrice(quantity) {
    cy.get(locators.cart.cartPrice).first()
      .invoke('text')
      .then((priceText) => {
        const unitPrice = parsePrice(priceText)
        expect(unitPrice).to.be.greaterThan(0)

        cy.get(locators.cart.cartTotalPrice).first()
          .invoke('text')
          .then((totalText) => {
            const totalPrice = parsePrice(totalText)
            expect(totalPrice).to.equal(unitPrice * quantity)
          })
      })
  }
}

export default new CartPage()