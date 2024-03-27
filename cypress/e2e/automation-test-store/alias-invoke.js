/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    // @ symbol uses when you want to use previous defined alias
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Counts products thumbnails on the home page and check if their car title has Add to Cart text", () => {
    cy.visit("https://automationteststore.com/");
    // making alias
    cy.get(".thumbnail").as("productThumbnail");

    cy.get("@productThumbnail").then((val) => {
      cy.log("Thumbnails on page: ", val.length);
    });

    cy.get("@productThumbnail").should("have.length", 16);

    cy.get("@productThumbnail").each(($el) => {
      const cart = $el.find(".productcart");
      // check if the element exists
      if (cart.length > 0) {
        cy.wrap(cart).invoke("attr", "title").should("eq", "Add to Cart");
      }
    });
    // the same as above but shorter
    cy.get("@productThumbnail")
      .find("productcart")
      .invoke("attr", "title")
      .should("eq", "Add to Cart");
  });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //   cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text())

    //   })
    // })

    cy.get("@productThumbnail")
      .find(".oneprice")
      .invoke("text")
      .as("itemPrice");

      let itemsTotal = 0;

      cy.get('@itemPrice').then($linkText => {
        let itemsPriceTotal = 0;
        let itemPrice = $linkText.split('$')
        for (let i = 0; i < itemPrice.length; i++) {
          itemsPriceTotal += Number(itemPrice[i])
        }

        itemsTotal += itemsPriceTotal;

      })


      cy.get("@productThumbnail")
      .find(".pricenew")
      .invoke("text")
      .as("saleItemPrice");

      cy.get('@saleItemPrice').then($linkText => {
        let itemsPriceTotal = 0;
        let saleItemPrice = $linkText.split('$')
        for (let i = 0; i < saleItemPrice.length; i++) {
          itemsPriceTotal += Number(saleItemPrice[i])
        }

        itemsTotal += itemsPriceTotal;
        cy.log('items total: ' + itemsTotal)
      })
      .then(() => {
        expect(itemsTotal).to.equal(660.5)
      })



  });
});
