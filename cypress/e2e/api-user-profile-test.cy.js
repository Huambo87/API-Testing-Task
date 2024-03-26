///<reference types = 'Cypress'/>

describe('User Profile Test', () => {


    it('male user profile sample', () => {
        cy.request('/user/15').then((response) => {
            console.log(response),
            expect(response.body.user).has.property('age'),
            expect(response.body.user).has.property('city'),
            expect(response.body.user).has.property('gender').eq('male')
            expect(response.body.user).has.property('id').eq(15),
            expect(response.body.user).has.property('name'),
            expect(response.body.user).has.property('registrationDate').contain('202')
            //Since the date is presented as a string, the simplest way to set the cutoff year 
            // without parsing is to specify the first three digits of the year 
        })
    })
})