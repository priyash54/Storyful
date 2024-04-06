//SCENARIO2: Signup with user credentials
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
        cy.get('#first_name').type('Priyash1'),
        cy.get('#last_name').type('Alapnavar1'),
        cy.get('#user_email').type('priyash.alapnavar1@gmail.com'),
        cy.get('#user_password').type('1!Qa1234'),

        //Accepting the terms
        cy.get('#terms').click()

        //NOTE: User needs to manually verify the CAPTCHA

        //Once CAPTCHA verified, SIGNUP becomes viivlble and clickable
        cy.get('#send', { timeout: 120000 }).should('be.visible').click()


    })