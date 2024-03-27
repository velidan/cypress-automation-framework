/// <reference types="Cypress" />

import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

describe('test contact us form with webdriver uni', () => {
    // adds custom command timeout for only this specific tests
    Cypress.config('defaultCommandTimeout', 20000);
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(() => {
        // sets viewport for this test
        cy.viewport(550, 750);
        cy.fixture('example.json').then((data) => {
            // set this fixture to the prototype data property
            // this.data = data;
            globalThis.data = data;
        })
    });

    beforeEach(() => {


        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
        // waits 3 sec
        // cy.wait(3000);
        // cy.pause();
    })



    it('should be able to submit a successful submission via a contact us form', {
        // set a retry attempts for the failed tests for this specific test only 
        retries: {
            runmode: 2,
            openMode: 2
        }
    }, () => {
        // cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // removes the blank attribute to open the new tab cause cypress doesn't support it. So should open in the same browser tab/instance
        // cy.visit(Cypress.env('webdriveruni_homepage'))
        // cy.navigateTo_webdriveruni_homepage();
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', '/Contact-Us/contactus.html')


        contact_Us_PO.contactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, 'Some comment', '#contact_reply > h1', 'Thank You for your Message!')
        // cy.webdriverUni_ContactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, 'Some comment', '#contact_reply > h1', 'Thank You for your Message!')

        // cy.get('#contact_form [name="first_name"]').type(data.firt_name)
        // cy.get('#contact_form [name="last_name"]').type(data.last_name)
        // cy.get('#contact_form [name="email"]').type(data.email)
        // cy.get('#contact_form textarea.feedback-input').type('Some comment')
        // cy.get('#contact_form [type="submit"]').click()
        cy.url().should('be.equal', 'https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
        
        // cy.get('#contact_reply > h1').should('contain', 'Thank You for your Message!');
        // cy.get('#contact-us').click()
    });

    // it.only - runs only this test in the mocka!!!!
    // it.only
    it('should not be able to submit a successful submission via a contact us form as all fields are required', () => {
        // cypress code
        // cy.visit( Cypress.env('webdriveruni_homepage') + '/Contact-Us/contactus.html') 
        // cy.navigateTo_webdriveruni_homepage();



        // cy.get('[name="first_name"]').type(data.firt_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('textarea.feedback-input').type('Some comment')
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')
        // cy.get('body').contains('Error: Invalid email address')


        contact_Us_PO.contactForm_Submission(Cypress.env('first_name'), data.last_name, ' ', 'Some comment', 'body', 'Error: Invalid email address')
        // cy.webdriverUni_ContactForm_Submission(Cypress.env('first_name'), data.last_name, ' ', 'Some comment', 'body', 'Error: Invalid email address')


    });
})
