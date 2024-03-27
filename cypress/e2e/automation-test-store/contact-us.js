/// <reference types="Cypress" />

describe('Ttest Contact us with automation test store', () => { 

    
    before(() => {
        cy.fixture('userDetails.json').as('user');
    });

    it('Should be able to submit a success submission by conact form', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get("a[href$='contact']").click().then(function(item) {
            cy.log("Selected the followind item. " + item.text())
        });
        cy.get('@user').then(user => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
  
        cy.get('#ContactUsFrm_email').should("have.attr", "name", "email");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
 })