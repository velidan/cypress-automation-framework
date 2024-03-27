/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("https://www.webdriveruniversity.com")
        // scrollIntoView is unnecessary, it will click anyway on it. But just in case just if you want to scroll to the view of the element
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    });

    
    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // simulates press on the draggable elements and that's all. Does not move it
        cy.get('#draggable').trigger('mousedown', {which: 1});

        // just moves the previously presseed on the draggable element on the required droppable area simulating mousemove and then drops it releasing it
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it("I should be able to do double mouse click", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#double-click').dblclick();
    });

    it("I should be able to hold down the left mouse click button on a given element", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) => {
            expect($el).to.include.css('background-color', 'rgb(0, 255, 0)')
        })
    });
}) 

