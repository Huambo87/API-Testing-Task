///<reference types = 'Cypress'/>

describe('User Registration Date Test', () => {
    it('registration date test', () => {
        cy.request('/user/10')
            .then((response) => {

                const registrationDate = response.body.user.registrationDate
                const parsedDate = new Date(registrationDate)
                const currentDate = new Date()

                expect(parsedDate.getFullYear()).to.be.at.least(2000)
                expect(parsedDate.getTime()).to.be.at.most(currentDate.getTime())
            })
    })

    //Negative case: Invalid user registration date.
    it('invalid registration date test', () => {
        cy.request('/user/15')
            .then((response) => {

                const registrationDate = response.body.user.registrationDate
                const parsedDate = new Date(registrationDate)
                const currentDate = new Date()

                expect(parsedDate.getFullYear()).to.be.at.least(2000)
                expect(parsedDate.getTime()).to.be.at.most(currentDate.getTime())
            })
    })
})