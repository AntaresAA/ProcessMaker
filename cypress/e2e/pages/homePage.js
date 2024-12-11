/// <reference types ="cypress"/>


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


class homePage {
      
    
    enterURL(url) {
        cy.visit(url);  
    }

    openSignUpPage() {
        cy.get("a#signin2").click().wait(2000); 
    }


     openLoginPage() {
        cy.get("#login2").click().wait(2000); 
     } 
 
     userloggedIn(){
        cy.get('#logout2')
            .should('be.visible').wait(3000)   
    }

    userloggedOut(){
        cy.get('#logout2').click().wait(2000);  
    }

    userloggedOutSuccess() {
        cy.get("#login2").should('be.visible').wait(2000)   
     } 

     openLaptopsSection() {
        cy.xpath("//a[text()='Laptops']").click().wait(2000); 
        cy.xpath("//a[text()='MacBook air']").should('be.visible').wait(2000)   
     } 

     addingLaptopToCart() { 
        cy.xpath("//a[text()='MacBook air']").click(2000)
        cy.xpath("//a[text()='Add to cart']").click(2000)  
        cy.on('window:alert', (text) => {
            expect(text).to.eq('Product added.')   
            done()                        
        })
        cy.get('#cartur').click().wait(2000);

     } 
 
     laptopExistOnTheCart() {
        cy.xpath("//td[text()='MacBook air']").should('be.visible').wait(2000)   
     } 
     
     openningIndividualPrice(phoneModel, price){
        cy.xpath("//a[text()='Nokia lumia 1520']").click().wait(2000);
        cy.xpath("//h2[text()='Nokia lumia 1520']").should('have.text', phoneModel).wait(2000);
        cy.xpath("//h3[text()='$820']").contains(price).wait(2000);
    }
  
}

module.exports = new homePage();