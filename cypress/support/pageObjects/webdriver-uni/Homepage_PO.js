// PO - Page Objects

class HomePage_PO {
    visitHomepage() {
        // timeout adds some timeout for this url only the waiting till url be failed or not
        cy.visit(Cypress.env('webdriveruni_homepage'), {timeout: 60000});
    }

    clickOn_ContactUs_Button() {
        // also applies a specific timeout for this specific commad
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true}, {timeout: 8000});
    }
}

export default HomePage_PO;