/// <reference types="cypress" />

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/homePage"; 
import signUpPage from "../pages/signUpPage"; 
import logInPage from "../pages/logInPage";
 
beforeEach(() => {
    cy.viewport(1600, 720);
});

Given("I navigate to the Website {string}", (url) => {
    cy.log('Navigating to: https://www.demoblaze.com/' + url);
    homePage.enterURL(url);
});

Given('I make click on the "Sign Up" link', () => {
    cy.log('Openning the Sign Up form')
    console.log('Openning the Sign Up form')
    homePage.openSignUpPage();
});

When('I see the "Sign Up" modal', () => {
    cy.log('The SignUp modal was loaded successfully');
    console.log('The SignUp modal was loaded successfully');
    signUpPage.actualSignUpPage();
});

Then('I should create a new user with the next credentials', (table) => {
    cy.log('Creating a new user with the next credentials:')
    table.hashes().forEach(data => { 
        signUpPage.fillingForm(data.username, data.password);
    })
});


Given('I make click on the "Log in" link', () => {
    cy.log('Login with user created')
    console.log('Login with user created')
    homePage.openLoginPage();
});

When('The LogIn modal is displayed', () => {
    cy.log('Displaying Login modal')
    console.log('Displaying Login modal')
    logInPage.actuallogInModal();
});


When('I insert the credentials created', () => {
    cy.log('Inserting credentials')
    console.log('Inserting credentials')
    logInPage.fillinglogInForm();
});

Then('I shoud be logged in with the user created', () => {
    cy.log('User was logged in successfully')
    console.log('User was logged in successfully')
    homePage.userloggedIn();
});

Then('I LogOut from the page', () => {
    cy.log('User is loggin out from the page')
    console.log('User is loggin out from the page')
    homePage.userloggedOut();
});

Then('I should be logged out from the page', () => {
    cy.log('The user was logged out successfully')
    console.log('The user was logged out successfully')
    homePage.userloggedOutSuccess();
});
 
When('I go to the Laptops section', () => {
    cy.log('Openning the laptops section')
    console.log('Openning the laptops section')
    homePage.openLaptopsSection();
});

When('I add a laptop to the Cart', () => {
    cy.log('Adding a Laptop to the Cart')
    console.log('Adding a Laptop to the Cart')
    homePage.addingLaptopToCart();
});

Then('I should see the Laptop listed successfully', () => {
    cy.log('The Laptop added is displayed successfully in the Cart')
    console.log('The Laptop added is displayed successfully in the Cart')
    homePage.laptopExistOnTheCart();
});
 
When('I open a phone with the next characteristic', (datatable) => {
    cy.log('Openning individual price')
    console.log('Openning individual price')
    datatable.hashes().forEach((element) => { 
        cy.log('Phone model is: ' + element.phoneModel); 
        cy.log('Phone model is: ' + element.price); 
        console.log('Phone Price is: ' + element.phoneModel);
        console.log('Phone Price is: ' + element.price); 
        homePage.openningIndividualPrice(element.phoneModel, element.price);
    }); 
});