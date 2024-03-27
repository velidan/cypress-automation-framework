// PO - Page Objects

class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach((name) => {
            cy.addProductToBasket(name).then(() => {
                // it must be in the then to work after the flow chain
                // debugger;
            });
         })
         // trigger debug point
         cy.get('.dropdown-toggle > .fa').click().debug();
        //  cy.get('.dropdown-toggle > .fa').click();
        //  cy.get('.dropdown-toggle > .label').contains(3)
        //  cy.get('.dropdown-toggle > .label').click();
    }
 }
 
 export default AutoStore_HairCare_PO;