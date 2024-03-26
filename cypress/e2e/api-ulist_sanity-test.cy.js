///<reference types = 'Cypress'/>


describe('Get IDs Test', () => {
  it('get male ulist', () => {
    cy.request('https://hr-challenge.dev.tapyou.com/api/test/users?gender=male').then((response) => {
      console.log(response),
      expect(response.status).equal(200)
    })
  })

  it('get female ulist', () => {
    cy.request('https://hr-challenge.dev.tapyou.com/api/test/users?gender=female').then((response) => {
      console.log(response),
      expect(response.status).equal(200)
    })
  })

  // it('get ulist negative', () => {
  //   cy.request('https://hr-challenge.dev.tapyou.com/api/test/users?gender=magic').then((response) => {
  //     console.log(response),
  //     expect(response.status).equal(200)
  //   })
  // })
  
})