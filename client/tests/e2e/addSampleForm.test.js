/// <reference types="Cypress"/>

describe('AddTrack', () => {
  const ERROR_MESSAGE = '[data-testid="error-message"]'
  const ADD_BUTTON = '[data-testid="add-sample-btn"]'
  const SELECT_FIRST_ARTIST = '[name="firstArtist"]'
  const SELECT_SECOND_ARTIST = '[name="secondArtist"]'
  const SELECT_FRIST_TRACK = '[name="first"]'
  const SELECT_SECOND_TRACK = '[name="second"]'
  beforeEach(() => {
    cy.viewport(375, 667)
    cy.visit('/add')
    cy.get('[data-testid="open-add-sample-btn"]').click()
  })
  it('should show an error message if just the first artist/track is selected', () => {
    cy.get(SELECT_FIRST_ARTIST)
      .select('The Winstons')
      .should('have.value', 'The Winstons')
    cy.get(SELECT_FRIST_TRACK)
      .select('Amen Brother')
      .should('have.value', '61f7dd82bb49755f4aebe0a5')
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an error message if just the second artist/track is selected', () => {
    cy.get(SELECT_SECOND_ARTIST)
      .select('The Winstons')
      .should('have.value', 'The Winstons')
    cy.get(SELECT_SECOND_TRACK)
      .select('Amen Brother')
      .should('have.value', '61f7dd82bb49755f4aebe0a5')
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an error message if artist/track is selected twice', () => {
    cy.get(SELECT_FIRST_ARTIST)
      .select('The Winstons')
      .should('have.value', 'The Winstons')
    cy.get(SELECT_FRIST_TRACK)
      .select('Amen Brother')
      .should('have.value', '61f7dd82bb49755f4aebe0a5')
    cy.get(SELECT_SECOND_ARTIST)
      .select('The Winstons')
      .should('have.value', 'The Winstons')
    cy.get(SELECT_SECOND_TRACK)
      .select('Amen Brother')
      .should('have.value', '61f7dd82bb49755f4aebe0a5')
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an message: "Your track is added', () => {
    cy.get(SELECT_FIRST_ARTIST)
      .select('The Winstons')
      .should('have.value', 'The Winstons')
    cy.get(SELECT_FRIST_TRACK)
      .select('Amen Brother')
      .should('have.value', '61f7dd82bb49755f4aebe0a5')
    cy.get(SELECT_SECOND_ARTIST).select('Burial').should('have.value', 'Burial')
    cy.get(SELECT_SECOND_TRACK)
      .select('Archangel')
      .should('have.value', '61f1575ec6500ac13ba3e655')
    cy.get(ADD_BUTTON).click()
    cy.get('[data-testid="send-message"]').contains('Your Sample is added.')
    cy.visit('/add')
  })
})
