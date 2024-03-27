// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('navigateTo_webdriveruni_homepage', () => {
  cy.visit(Cypress.env('webdriveruni_homepage'))  
});
Cypress.Commands.add('navigateTo_webdriveruni_Checkbox_Page', () => {
  cy.visit(Cypress.env('webdriveruni_homepage') + '/Dropdown-Checkboxes-RadioButtons/index.html')  
});

Cypress.Commands.add('selectProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
          cy.wrap($el).click()
        }
      })
});

Cypress.Commands.add('addProductToBasket', productName => {
  cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      if ($el.text() === productName) {
        cy.get('.productcart').eq(index).click();
      }
    })
});

Cypress.Commands.add('webdriverUni_ContactForm_Submission', (first_name, last_name, email, comment, $selector, textToLocate) => {
    cy.get('#contact_form [name="first_name"]').type(first_name)
    cy.get('#contact_form [name="last_name"]').type(last_name)
    cy.get('#contact_form [name="email"]').type(email)
    cy.get('#contact_form textarea.feedback-input').type(comment)
    cy.get('#contact_form [type="submit"]').click()
    cy.get($selector).should('contain', textToLocate);
});

//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
