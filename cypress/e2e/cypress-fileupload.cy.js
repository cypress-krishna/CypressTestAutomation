/// <reference types = "cypress"/>

describe('File-Upload in Cypress', ()=> {

    it('File upload test case-SelectFile-1', ()=> {
        cy.visit('https://tus.io/demo.html')
        cy.get('#js-file-input')
          .selectFile('C:/Users/chiyy/Downloads/appleimage.png')
    });

    it('File upload test case-SelectFile-2', ()=> {
        const imagePath = "cypress/fixtures/Image/appleimage.png"
        cy.visit('https://tus.io/demo.html')
        cy.get('#js-file-input')
          .selectFile(imagePath)
        cy.get('.heading').should('have.text', 'The upload is complete!')
    });

    it('File upload test case-Drag-drop', ()=> {
        const imagePath = "cypress/fixtures/Image/appleimage.png"
        cy.visit('https://tus.io/demo.html')
        cy.get('#js-file-input')
          .selectFile(imagePath, {action: 'drag-drop',})
        cy.get('.heading').should('have.text', 'The upload is complete!')
    });

    it.only('File upload test case-Overrite File Name', ()=> {
        const imagePath = "cypress/fixtures/Image/appleimage.png"
        cy.visit('https://tus.io/demo.html')
        cy.get('#js-file-input')
          .selectFile({
            contents: 'cypress/fixtures/Image/appleimage.png',
            fileName: 'orangeImage.png',
          })
        cy.get('.heading').should('have.text', 'The upload is complete!')
    });
});