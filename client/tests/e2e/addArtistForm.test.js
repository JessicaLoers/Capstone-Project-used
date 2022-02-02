/// <reference types="Cypress"/>

describe('AddTrack', () => {
  const ERROR_MESSAGE = '[data-testid="error-message"]'
  const ADD_BUTTON = '[data-testid="add-artist-btn"]'
  const INPUT_ARTISTNAME = '[name="artist_name"]'
  const INPUT_IMAGE = '[name="artist_image"]'
  const INPUT_INFO = '[name="infos"]'

  beforeEach(() => {
    cy.viewport(375, 667)
    cy.visit('/add')
    cy.get('[data-testid="open-add-artist-btn"]').click()
  })
  it('should show an error message if artist input is filled, the orthers not', () => {
    cy.get(INPUT_ARTISTNAME).type('The Winstons')
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an error message if info input is filled, the orthers not', () => {
    cy.get(INPUT_INFO).type('Nice Band')
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an error message if the input link of image contains no .png or .jpg', () => {
    cy.get(INPUT_IMAGE).type(
      'https://images.unsplash.com/photo-1587723958656-ee042cc565a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    )
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an message: "Your track is added', () => {
    cy.get(INPUT_ARTISTNAME).type('Amen Brother')
    cy.get(INPUT_INFO).type('Nice Band')
    cy.get(INPUT_IMAGE).type(
      'https://img.discogs.com/6xeyQsegITUuHges30TI9Gk1WoQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-18515662-1627643475-9598.jpeg.jpg'
    )
    cy.get(ADD_BUTTON).click()
    cy.get('[data-testid="send-message"]').contains('Your artist is added.')
    cy.visit('/add')
  })
})
