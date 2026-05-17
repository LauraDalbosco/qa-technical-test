class ProductsPage {

  elements = {
    productsContainer: () =>
      cy.get('.features_items'),

    firstProductLink: () =>
      cy.get('[href*="/product_details/"]').first(),

    quantityInput: () =>
      cy.get('#quantity'),

    addToCartButton: () =>
      cy.get('button.btn-default.cart'),

    addToCartSuccess: () =>
      cy.get('.modal-content'),

    viewCartLink: () =>
      cy.get('.modal-content a[href="/view_cart"]'),
  }

  accessProductsPage() {
    cy.get('a[href="/products"]')
      .should('be.visible')
      .click()

    this.elements.productsContainer()
      .should('be.visible')
  }

  openFirstProduct() {
    this.elements.firstProductLink()
      .should('be.visible')
      .click()

    cy.get('.product-information')
      .should('be.visible')
  }

  addProductToCart(quantity = 1, openCart = false) {
    this.elements.quantityInput()
      .should('be.visible')
      .clear()
      .type(quantity)
      .should('have.value', quantity.toString())

    this.elements.addToCartButton()
      .should('be.visible')
      .click()

    this.elements.addToCartSuccess()
      .should('be.visible')

    if (openCart) {
      this.elements.viewCartLink()
        .should('be.visible')
        .click()
    } else {
      cy.get('.modal-body .btn-default')
        .should('be.visible')
        .click()
    }
  }
}

export default new ProductsPage()