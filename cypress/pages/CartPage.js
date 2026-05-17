import { parsePrice } from '../support/helpers'

class CartPage {

  elements = {
    cartTable: () =>
      cy.get('#cart_info_table'),

    firstProductName: () =>
      cy.get('.cart_description').first(),

    firstProductQuantity: () =>
      cy.get('.cart_quantity').first(),

    firstProductPrice: () =>
      cy.get('.cart_price').first(),

    firstProductTotal: () =>
      cy.get('.cart_total_price').first(),
  }

  validateCartPageLoaded() {
    this.elements.cartTable()
      .should('be.visible')
  }

  validateProductQuantity(quantity) {
    this.elements.firstProductQuantity()
      .invoke('text')
      .then((text) => {
        expect(Number(text.trim())).to.equal(quantity)
      })
  }

  validateProductCorrect() {
    this.elements.firstProductName()
      .should('be.visible')
      .should('not.be.empty')
  }

  validateProductPrice(quantity) {
    this.elements.firstProductPrice()
      .invoke('text')
      .then((priceText) => {
        const unitPrice = parsePrice(priceText)
        expect(unitPrice).to.be.greaterThan(0)

        this.elements.firstProductTotal()
          .invoke('text')
          .then((totalText) => {
            const totalPrice = parsePrice(totalText)
            expect(totalPrice).to.equal(unitPrice * quantity)
          })
      })
  }
}

export default new CartPage()