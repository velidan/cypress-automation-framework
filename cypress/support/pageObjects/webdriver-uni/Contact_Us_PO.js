// PO - Page Objects

class Contact_Us_PO {
    contactForm_Submission = (first_name, last_name, email, comment, $selector, textToLocate) => {
        cy.get('#contact_form [name="first_name"]').type(first_name)
        cy.get('#contact_form [name="last_name"]').type(last_name)
        cy.get('#contact_form [name="email"]').type(email)
        cy.get('#contact_form textarea.feedback-input').type(comment)
        cy.get('#contact_form [type="submit"]').click()
        cy.get($selector).contains(textToLocate, {timeout: 6000});

        // if this line will fall the next won't run
        cy.screenshot();
        cy.screenshot('Make a contact us form submission')
        // adds some pause to the execution which you can manually continue
        // cy.get($selector).pause().contains(textToLocate, {timeout: 6000});
        // cy.get($selector).should('contain', textToLocate);
    };
}

export default Contact_Us_PO;