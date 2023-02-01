import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('User visit website2', () => {
	LoginPage.visit('http://zero.webappsecurity.com/login.html')
})
When('User can search what she want', () => {
	LoginPage.fillUsername('username')
	LoginPage.fillPassword('password_error')
	LoginPage.signIn()
})
Then('User can see data error', () => {
	cy.get('.alert')
		.should('be.visible')
		.contains('Login and/or password are wrong.')
})
