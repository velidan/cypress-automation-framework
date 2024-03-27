/// <reference types="cypress" />

import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";

describe("Add multiple items to basket", () => {
    const autoStoreHomepage_PO = new AutoStore_Homepage_PO();
    const autoStoreHairCare_PO = new AutoStore_HairCare_PO();

    before(() => {
        cy.fixture("products.json").then(data => {
            globalThis.data = data;
        })
    })

    beforeEach(()=> {

        // clears cookies and storate. But CY does it automatically before each test anyway
        // cy.clearLocalStorage();
        // cy.clearCookies();

        autoStoreHomepage_PO.accessHomepage();
        autoStoreHomepage_PO.clickOn_HairCare_Link();

        // cy.visit("https://automationteststore.com/");
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Add specific items to basket", () => {
        autoStoreHairCare_PO.addHairCareProductsToBasket();
   
    //  globalThis.data.productName.forEach((name) => {
    //     cy.addProductToBasket(name);
    //  })
    //  cy.get('.dropdown-toggle > .label').contains(3)
    //  cy.get('.dropdown-toggle > .label').click();
    });

  });
  