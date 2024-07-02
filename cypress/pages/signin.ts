import { N8N_AUTH_COOKIE } from '../constants';
import { BasePage } from './base';
import { WorkflowsPage } from './workflows';

export class SigninPage extends BasePage {
	url = '/signin';

	getters = {
		form: () => cy.getByTestId('auth-form'),
		email: () => cy.getByTestId('email'),
		password: () => cy.getByTestId('password'),
		submit: () => cy.get('button'),
	};

	actions = {
		loginWithEmailAndPassword: (email: string, password: string) => {
			const signinPage = new SigninPage();
			const workflowsPage = new WorkflowsPage();
			cy.setCookie(N8N_AUTH_COOKIE, "true")
			cy.url().should('include', workflowsPage.url);			
		},
	};
}
