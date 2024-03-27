///<reference types = 'Cypress'/>

describe('User Profile Test', () => {

    it('male user profile sample', () => {
        cy.request('/user/15').then((response) => {

            var result = response.body.user

            console.log(response),
            expect(result).has.property('age').to.satisfy(Number.isInteger),
            expect(result).has.property('city'),
            expect(result).has.property('gender').eq('male')
            expect(result).has.property('id').eq(15),
            expect(result).has.property('name'),
            expect(result).has.property('registrationDate').contain('201')
            //Since the date is presented as a string, the simplest way to set the cutoff year 
            // without parsing is to specify the first three digits of the year 
        })
    })

    it('female user profile sample', () => {
        cy.request('/user/5').then((response) => {

            var result = response.body.user

            console.log(response),
            expect(result).has.property('age').to.satisfy(Number.isInteger),
            expect(result).has.property('city'),
            expect(result).has.property('gender').eq('female')
            expect(result).has.property('id').eq(5),
            expect(result).has.property('name'),
            expect(result).has.property('registrationDate').contain('201')
            //Since the date is presented as a string, the simplest way to set the cutoff year 
            // without parsing is to specify the first three digits of the year 
        })
    })

    // Negative test: User ID 15 is a duplicate and known to belong to a male user
    it('female user profile sample', () => {
        cy.request('/user/15').then((response) => {

            var result = response.body.user

            console.log(response),
            expect(result).has.property('age').to.satisfy(Number.isInteger),
            expect(result).has.property('city'),
            expect(result).has.property('gender').eq('female')
            expect(result).has.property('id').eq(15),
            expect(result).has.property('name'),
            expect(result).has.property('registrationDate').contain('201')
            //Since the date is presented as a string, the simplest way to set the cutoff year 
            // without parsing is to specify the first three digits of the year 
        })
    })
})