/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery')
        
        cy.get('#dropdowm-menu-2').select('maven').contains('Maven')
        cy.get('#dropdowm-menu-2').find('option[value="maven"]').should('have.text', 'Maven')
        cy.get('#dropdowm-menu-2').select('TestNG').find('option').contains('TestNG').should('have.value', 'testng')
    });
})