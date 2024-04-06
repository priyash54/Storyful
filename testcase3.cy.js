//SCENARIO2: Signup with already registerred user
it('Signup with username & password page',()=>{
        
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

    //Entering the User Details & Password
    cy.get('#first_name').type('119222178'),
    cy.get('#last_name').type('119222178'),
    cy.get('#user_email').type('119222178@umail.ucc.ie'),

    //Verifying the error messages user gets
    cy.get('.error-message').should('exist')

})