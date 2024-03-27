/// <reference types="Cypress" />


describe('Cypress web security', () => {

    // it.only - runs only this test in the mocka!!!!
    // it.only
    it('Validate visiting two different domains via user actions', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });

    // it('Origin command', () => {
    //     cy.origin('webdriveruniversity.com', () => {
    //         cy.visit('https://selectors.webdriveruniversity.com');
    //     })
    //     cy.origin('automationteststore.com', () => {
    //         cy.visit('/');
    //     })
    // });
})
