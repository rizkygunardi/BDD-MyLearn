import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('User visit website', () => {
	LoginPage.visit('http://zero.webappsecurity.com/login.html')
})
When('User can search he want', () => {
	LoginPage.fillUsername('username')
	LoginPage.fillPassword('password')
	LoginPage.signIn()
})
Then('User can see data', () => {
	cy.get('.brand').should('be.visible')
	cy.get('#searchTerm').type('zero {enter}')
	cy.get('h2').contains('Search Results:')
	cy.get('a').contains('Zero - Contact Us').click()
	cy.get('#feedback-title').should('be.visible').contains('Feedback')
})
