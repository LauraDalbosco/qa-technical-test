import { locators } from '../support/locators'

class ProductsPage {

  accessProductsPage() {
    cy.get(locators.products.productsLink)
      .should('be.visible')
      .click()

    cy.get(locators.products.productsContainer)
      .should('be.visible')
  }

  openFirstProduct() {
    cy.get(locators.products.productDetailsLink).first()
      .should('be.visible')
      .click()

    cy.get(locators.products.productInformation)
      .should('be.visible')
  }

  addProductToCart(quantity = 1, openCart = false) {
    cy.get(locators.products.quantityInput)
      .should('be.visible')
      .clear()
      .type(quantity)
      .should('have.value', quantity.toString())

    cy.get(locators.products.addToCartButton)
      .should('be.visible')
      .click()

    cy.get(locators.products.addToCartModal)
      .should('be.visible')

    if (openCart) {
      cy.get(locators.products.viewCartLink)
        .should('be.visible')
        .click()
    } else {
      cy.get(locators.products.modalCloseButton)
        .should('be.visible')
        .click()
    }
  }
}

export default new ProductsPage()