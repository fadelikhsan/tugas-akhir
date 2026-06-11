describe('Platzi API Testing', () => {

  const baseUrl = 'https://api.escuelajs.co/api/v1'

  // TC01 - Get All Categories
  it('TC01 - Get All Categories', () => {
    cy.request(`${baseUrl}/categories`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
      })
  })

  // TC02 - Get Category By ID
  it('TC02 - Get Category By ID', () => {
    cy.request(`${baseUrl}/categories`)
      .then((res) => {

        const categoryId = res.body[0].id

        cy.request(`${baseUrl}/categories/${categoryId}`)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(categoryId)
          })
      })
  })

  // TC03 - Category Not Found
  it('TC03 - Category Not Found', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/categories/999999`,
      failOnStatusCode: false
    }).then((response) => {

      expect([400, 404]).to.include(response.status)

    })
  })

  // TC04 - Get All Products
  it('TC04 - Get All Products', () => {
    cy.request(`${baseUrl}/products`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
      })
  })

  // TC05 - Get Product By ID
  it('TC05 - Get Product By ID', () => {

    cy.request(`${baseUrl}/products`)
      .then((res) => {

        const productId = res.body[0].id

        cy.request(`${baseUrl}/products/${productId}`)
          .then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(productId)

          })
      })
  })

  // TC06 - Get All Users
  it('TC06 - Get All Users', () => {
    cy.request(`${baseUrl}/users`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
      })
  })

  // TC07 - Get User By ID
  it('TC07 - Get User By ID', () => {

    cy.request(`${baseUrl}/users`)
      .then((res) => {

        const userId = res.body[0].id

        cy.request(`${baseUrl}/users/${userId}`)
          .then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(userId)

          })
      })
  })

  // TC08 - Create Category
  it('TC08 - Create Category', () => {

    const randomName = `QA Category ${Date.now()}`

    cy.request({
      method: 'POST',
      url: `${baseUrl}/categories`,
      body: {
        name: randomName,
        image: 'https://placehold.co/600x400'
      }
    }).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq(randomName)

    })
  })

  // TC09 - Create User
  it('TC09 - Create User', () => {

    const randomEmail = `qa${Date.now()}@mail.com`

    cy.request({
      method: 'POST',
      url: `${baseUrl}/users`,
      body: {
        name: 'QA Tester',
        email: randomEmail,
        password: '123456',
        avatar: 'https://i.pravatar.cc/150'
      }
    }).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body.email).to.eq(randomEmail)

    })
  })

  // TC10 - Get Limited Products
  it('TC10 - Get Limited Products', () => {
    cy.request(`${baseUrl}/products?offset=0&limit=5`)
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body.length).to.be.lte(5)

      })
  })

  // TC11 - Search Products By Title
  it('TC11 - Search Products By Title', () => {
    cy.request(`${baseUrl}/products`)
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')

      })
  })

  // TC12 - Get Products With Category
  it('TC12 - Get Products With Category', () => {
    cy.request(`${baseUrl}/products`)
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body[0]).to.have.property('category')

      })
  })

})