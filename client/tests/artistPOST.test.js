/// <reference types="Cypress"/>

//--> WIP
cy.intercept('POST', '/api/artist').as('new-artist')
cy.wait('@new-artist').should('have.property', 'response.message')

cy.get('@new-artist')
  .its('request.body')
  .should(
    'deep.equal',
    JSON.stringify({
      _id: '4711',
      artist_name: 'Justify',
    })
  )
cy.wait('new-artist').then(console.log)
