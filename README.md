 
## Assestment
### In Cypress automated the following flow for the website: https://www.demoblaze.com/index.html ###
### Flow 1:
### Steps:
### •	1. Register a new user.
### •	2. Login and logout with the registered user.
### •	3. Add a laptop to the cart.
### •	4. Verify that the laptop was added to the cart.
### Flow 2:
### •	1. Check that the thumbnail price in the product gallery is the same ### for the individual product page


 
## ---------

> **Note**:
 
Cypress tool was used to develop the test suite integrated with Cucumber and Gherkin.


#### You need to install

* Node
* npm


#### Instruction to run the test

Clone this repository
+ run `npm install`


Change the username in the processMakerPage.spec.js file
+ E.g.: maker546

Open Cypress runner by the following command and start the execution from there

+ `npm run cy:open`

or run the project by console

+ `npx cypress run --spec "cypress/e2e/features/ProcessMaker.feature" --browser chrome`

 

```
project  
│
└───cypress
│   │
│   └───e2e
│       │
│       └─── features (Gherkin file with test cases description)
│       │
│       └─── page-objects (POM files with models)
│       │
│       └─── Tests (Code)

```
<h3> Screenshot:</h3>


https://github.com/AntaresAA/ProcessMaker/blob/main/cypress/videos/ProcessMakerScreen.png


<h3> Video execution:</h3>

https://github.com/AntaresAA/ProcessMaker/blob/main/cypress/videos/ProcessMakerVideo.mp4


