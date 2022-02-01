/// <reference types="Cypress"/>
describe('add/delete favourite Artist to user profile', () => {
  beforeEach(() => {
    cy.viewport(375, 667)
  })
  it('log in as Jane, expect Jane as user', () => {
    cy.visit('/')
    cy.get('[data-testid="jane-btn"]').click()
    cy.url().should('include', '/profile/Jane')
  })

  it('click search in nav, got to search, search for "The Winstons"', () => {
    cy.get('[data-testid="search-nav-btn"]').click()
    cy.get('[data-testid="search-artist-btn"]').click()
    cy.get('[name="search"]').type('The Winstons')
    cy.get('[data-testid="artist-link"]').click()
  })
  it('select artist as favourite by clicking the arrow, go to user profile to check results', () => {
    cy.get('[data-testid="favourite-link"]').click('right')
    cy.get('[data-testid="profile-nav-btn"]').click()
  })
})
