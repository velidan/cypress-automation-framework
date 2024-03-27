/// <reference types="Cypress" />


describe('Verify checkboxes via webdriveruni', () => {
    beforeEach(function() {
        cy.navigateTo_webdriveruni_Checkbox_Page();
        // cy.visit('https://www.webdriveruniversity.com')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it('Check and validate checkbox', () => {


        cy.get('#checkboxes > :nth-child(1) > input').check()
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
   
    });

    it('Uncheck the checkbox and check it', () => {
        cy.get('#checkboxes > :nth-child(5) > input').as('third-checkbox');

  
        cy.get('@third-checkbox').check().should('be.checked');

        cy.get('@third-checkbox').uncheck().should('not.be.checked');

    });

    it('Check multiple checkbox', () => {
        cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });

})
