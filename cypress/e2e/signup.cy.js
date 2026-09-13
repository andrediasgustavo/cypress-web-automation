/// <reference types="cypress" />
import commonPage from '../support/pages/common_page';
import signupPage from '../support/pages/signup_page';
import { faker }  from '@faker-js/faker';

describe('Signup', () => {

    beforeEach(() => {
        commonPage.visitSignupPage();
    }); 

    // happy path
    it('should sign up successfully with valid information', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password({ length: 6 });
        signupPage.fillNameField(randomName);
        signupPage.fillEmailField(randomEmail);
        signupPage.fillPasswordField(randomPassword);
        signupPage.clickSignupButton();
        signupPage.validateSuccessMessage(randomName);
        signupPage.typeConfirmSuccessModal();
    });

    // sad path
    it('should display error message when name is empty', () => {
        signupPage.clickSignupButton();
        signupPage.validateErrorMessage('O campo nome deve ser prenchido');
    });

    it('should display error message when email is empty', () => {
        const randomName = faker.person.fullName();
        signupPage.fillNameField(randomName);
        signupPage.clickSignupButton();
        signupPage.validateErrorMessage('O campo e-mail deve ser prenchido corretamente');
    });

    it('should display error message when email is invalid', () => {
        const randomName = faker.person.fullName();
        signupPage.fillNameField(randomName);
        signupPage.fillEmailField('invalid-email');
        signupPage.clickSignupButton();
        signupPage.validateErrorMessage('O campo e-mail deve ser prenchido corretamente');
    });

    it('should display error message when password is empty', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        signupPage.fillNameField(randomName);
        signupPage.fillEmailField(randomEmail);
        signupPage.clickSignupButton();
        signupPage.validateErrorMessage('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('should display error message when password is invalid, less than 6 characters', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password({ length: 5 });
        signupPage.fillNameField(randomName);
        signupPage.fillEmailField(randomEmail);
        signupPage.fillPasswordField(randomPassword);
        signupPage.clickSignupButton();
        signupPage.validateErrorMessage('O campo senha deve ter pelo menos 6 dígitos');
    });

    
});


