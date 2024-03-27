///<reference types = 'Cypress'/>


describe('User Profile Test', () => {

    it('male user profile sample', () => {
        cy.request('/user/15').then((response) => {

            var result = response.body.user

            console.log(response),
            expect(result).has.property('age').to.satisfy(Number.isInteger),
            expect(result).has.property('city').to.be.a('string'),
            expect(result).has.property('gender').eq('male').to.be.a('string'),
            expect(result).has.property('id').eq(15).to.satisfy(Number.isInteger),
            expect(result).has.property('name').to.be.a('string'),
            expect(result).has.property('registrationDate').to.be.a('string')
            //Since the date is presented as a string, the simplest way to set the cutoff year 
            // without parsing is to specify the first three digits of the year 
        })
    })

    it('female user profile sample', () => {
        cy.request('/user/5').then((response) => {

            var result = response.body.user

            console.log(response),
            expect(result).has.property('age').to.satisfy(Number.isInteger),
            expect(result).has.property('city').to.be.a('string'),
            expect(result).has.property('gender').eq('female').to.be.a('string'),
            expect(result).has.property('id').eq(5).to.satisfy(Number.isInteger),
            expect(result).has.property('name').to.be.a('string'),
            expect(result).has.property('registrationDate').to.be.a('string')
            //Since the date is presented as a string, the simplest way to set the cutoff year 
            // without parsing is to specify the first three digits of the year 
        })
    })

    // Negative test: User ID 15 is a duplicate and known to belong to a male user
    it('female user id duplicate', () => {
        cy.request('/user/15').then((response) => {

            var result = response.body.user

            console.log(response),
            expect(result).has.property('age'),
            expect(result).has.property('city'),
            expect(result).has.property('gender').eq('female')
            expect(result).has.property('id').eq(15),
            expect(result).has.property('name'),
            expect(result).has.property('registrationDate').contain('201')
            //Since the date is presented as a string, the simplest way to set the cutoff year 
            // without parsing is to specify the first three digits of the year 
        })
    })

    // // Negative test: User ID is invalid
    it('invalid user id test', () => {
        cy.request('/user/12345678').then((response) => {
            console.log(response)
            // expect(response.body.isSuccess).eq(false),
            // expect(response.body).has.property('errorCode').eq(404)
        })
    })

    // // Negative test: Missing user ID
    it('missing user id test', () => {
        cy.request('/user/').then((response) => {
            console.log(response),
            expect(response.body.isSuccess).eq(false),
            expect(response.body).has.property('errorCode').eq(404),
            expect(response.body).has.property('error').eq('Not Found')
        })
    })
})