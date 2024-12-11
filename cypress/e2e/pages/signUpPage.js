/// <reference types ="cypress"/>


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


class signUpPage {

    actualSignUpPage() {
        cy.get('h5#signInModalLabel')
            .should('be.visible').wait(2000)  
    } 

    fillingForm(username, password){   
        Cypress.env('username', username)
        Cypress.env('password', password)

        cy.get("input#sign-username")
            .clear().type(username).wait(1000);   
        cy.get("input#sign-password")
            .clear().type(password).wait(1000);
        cy.xpath("//div[contains(@class,'modal-dialog')]//button[text()='Sign up']").click()

    
        cy.on('window:alert', (text) => {
            expect(text).to.eq('Sign up successful.')   
            done()                        
        })
  
    }
   

}

module.exports = new signUpPage();








