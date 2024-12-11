Feature: ProcessMaker Navigation

    # Flow 1:
    #    Steps:
    #        •	1. Register a new user.
    #        •	2. Login and logout with the registered user.
    #        •	3. Add a laptop to the cart.
    #        •	4. Verify that the laptop was added to the cart.
    # Flow 2:
    #    •	1. Check that the thumbnail price in the product gallery 
    #         is the same for the individual product page


     Background: 
         Given I navigate to the Website "https://www.demoblaze.com/index.html"
       
     
       Scenario: I create a new user 
            Given I make click on the "Sign Up" link 
            When I see the "Sign Up" modal 
            Then I should create a new user with the next credentials  
                |    username    |  password   |           
                |     Maker18  |  Test1234#  |   

        Scenario: Login and logout with the registered user 
          Given I make click on the "Log in" link   
          When The LogIn modal is displayed
          When I insert the credentials created
          Then I shoud be logged in with the user created 
          When I LogOut from the page
          Then I should be logged out from the page
       
        Scenario: Add a laptop to the cart 
          Given I make click on the "Log in" link   
          When The LogIn modal is displayed
          When I insert the credentials created
          Then I shoud be logged in with the user created 
          When I go to the Laptops section 
          When I add a laptop to the Cart   
          Then I should see the Laptop listed successfully  

        Scenario: Check that the thumbnail price 
          Given I make click on the "Log in" link   
          When The LogIn modal is displayed
          When I insert the credentials created
          Then I shoud be logged in with the user created 
          Then I open a phone with the next characteristic
                |    phoneModel         |  price   |           
                |    Nokia lumia 1520   |   $820   |    