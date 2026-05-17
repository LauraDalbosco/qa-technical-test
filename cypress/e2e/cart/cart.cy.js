import homePage from '../../pages/HomePage'
import productsPage from '../../pages/ProductsPage'
import cartPage from '../../pages/CartPage'

describe('Desafio 02: Manipulação de Inventário', () => {

  it('Adicionar 4 unidades de um produto ao carrinho e validar se o resumo da compra reflete a quantidade e os valores corretos.', () => {
    const quantityToAdd = 4

    homePage.accessHomePage()
    productsPage.accessProductsPage()
    productsPage.openFirstProduct()
    productsPage.addProductToCart(quantityToAdd, true)
    
    cartPage.validateCartPageLoaded()
    cartPage.validateProductQuantity(quantityToAdd)
    cartPage.validateProductCorrect()
    cartPage.validateProductPrice(quantityToAdd)
  })
})
