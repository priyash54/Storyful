/// <reference types = "cypress"/>
import 'cypress-wait-until';

describe('check the page navigation',()=>{

    //SCENARIO1: Signup without user credentials
    it('Signup without username & password page',()=>{
        
        //Entering the URL
        cy.visit('https://signin.storyful.com/trial/signup-form-01489905846464720243'),
        cy.url().should('include','/signup-form-01489905846464720243'),
        
        //Cookies Dialog box
        cy.get('#hs-eu-cookie-confirmation-inner').then(($cookieConfirmation) => {
            // Check if the element is found
            if ($cookieConfirmation.length > 0) {
              // Element exists, perform actions related to cookie confirmation
              cy.get('#hs-eu-confirmation-button').click();
            }
        })

        //Verifying the Signup option is disabled
        cy.get('#send').should('be.disabled').then(($button)=>{
            expect($button).to.be.disabled
            // cy.wrap($button).click()
        })

    })

})