/// <reference types="Cypress" />


describe('Validate webdriveruni homepage links', () => {
    it('Confirm links redirect to the corect pages', () => {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});

        cy.url().should('include', 'contactus');

        // performs browser actions (back/forward etc.)
        cy.go('back')
        cy.reload();

        cy.go('forward');
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});

        cy.url().should('include', 'Login-Portal');
        cy.go('back');
    });
    it('Check Todo List url and go back', () => {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true});

        cy.url().should('include', 'To-Do-List');


        cy.go('back')
    });

})
