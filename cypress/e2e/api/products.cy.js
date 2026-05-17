describe('Desafio 03: API', () => {

  it('Status Code 200 e verificação de que a lista de produtos contém dados válidos (não nula)', () => {
    cy.request('GET', '/api/productsList').then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.exist
      expect(response.body).to.not.be.null

      const { products } = response.body

      if (products && products.length > 0) {
        products.forEach((product) => {
          expect(product).to.have.property('id')
          expect(product).to.have.property('name')
          expect(product).to.have.property('price')
          expect(product).to.have.property('category')
        })
      }
    })
  })
})
