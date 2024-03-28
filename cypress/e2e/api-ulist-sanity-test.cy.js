///<reference types = 'Cypress'/>

describe('Get IDs Test', () => {
  it('get male ulist', () => {
    cy.request('/users?gender=male').then((response) => {
      console.log(response),
        expect(response.status).equal(200),
        expect(response.statusText).equal('OK')
    })
  })

  it('check male ulist content', () => {
    cy.request('/users?gender=male').then((response) => {
      let resultslist = response.body.idList
      console.log(response.body),
        expect(response.body).not.empty
        expect(resultslist).not.empty

        for (let i = 0; i < resultslist.length; i++ ){
          expect(resultslist[i]).to.satisfy(Number.isInteger)
        }

    })
  })

  it('get female ulist', () => {
    cy.request('/users?gender=female').then((response) => {
      console.log(response),
        expect(response.status).equal(200),
        expect(response.statusText).equal('OK')
    })
  })

  it('check female ulist content', () => {
    cy.request('/users?gender=female').then((response) => {
      let resultslist = response.body.idList
      console.log(response.body),
        expect(response.body).not.empty
        expect(resultslist).not.empty

        for (let i = 0; i < resultslist.length; i++ ){
          expect(resultslist[i]).to.satisfy(Number.isInteger)
        }

    })
  })

  // it('get ulist negative', () => {
  //   cy.request('/users?gender=magic').then((response) => {
  //     console.log(response),
  //     expect(response.status).equal(500)
  //   })
  // })

})