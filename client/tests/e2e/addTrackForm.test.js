/// <reference types="Cypress"/>

describe('AddTrack', () => {
  const ERROR_MESSAGE = '[data-testid="error-message"]'
  const ADD_BUTTON = '[data-testid="add-track-btn"]'
  const INPUT_TRACKNAME = '[name="track_name"]'
  const INPUT_VIDEO = '[name="video_id"]'

  beforeEach(() => {
    cy.viewport(375, 667)
    cy.visit('/add')
    cy.get('[data-testid="open-add-track-btn"]').click()
  })

  it('should show an error message if the artist is selected, but the other field are not correctly filled', () => {
    cy.get('select').select('The Winstons').should('have.value', 'The Winstons')
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an error message if track name field is filled, but the other field are not correctly filled', () => {
    cy.get(INPUT_TRACKNAME).type('Amen Brother')
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an error message if the input link of cover image contains no .png or .jpg', () => {
    cy.get('[name="cover_image"]').type(
      'https://images.unsplash.com/photo-1587723958656-ee042cc565a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    )
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an error message if the input link of youtube video contains https://', () => {
    cy.get(INPUT_VIDEO).type('https://youtu.be/GqzFfAmLZBE')
    cy.get(ADD_BUTTON).click()
    cy.get(ERROR_MESSAGE).should('be.visible')
  })
  it('should show an message: "Your track is added', () => {
    cy.get('select').select('The Winstons').should('have.value', 'The Winstons')
    cy.get(INPUT_TRACKNAME).type('Amen Brother')
    cy.get('[name="year"]').type('1969')
    cy.get('[name="cover_image"]').type(
      'https://img.discogs.com/6xeyQsegITUuHges30TI9Gk1WoQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-18515662-1627643475-9598.jpeg.jpg'
    )
    cy.get(INPUT_VIDEO).type('JBR8MKiH2e8')
    cy.get(ADD_BUTTON).click()
    cy.get('[data-testid="send-message"]').contains('Your track is added.')
    cy.visit('/add')
  })
})
