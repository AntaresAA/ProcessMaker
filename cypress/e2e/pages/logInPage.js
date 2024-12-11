/// <reference types ="cypress"/>


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


class logInPage {

    actuallogInModal() {
        cy.xpath('//button[text()="Log in"]')
            .should('be.visible').wait(2000)  
    } 


    fillinglogInForm(){     
        cy.get("#loginusername")
            .clear().type(Cypress.env('username')).wait(2000);   
        cy.get("input#loginpassword")
            .clear().type(Cypress.env('password')).wait(2000);
        cy.xpath("//button[text()='Log in']").click().wait(2000)
 
    } 
 
}

module.exports = new logInPage();








