/// <reference types="cypress" />
    var faker = require ('faker');


    describe('Funcionalidade Pré Cadastro', () => {
       
        var nomeFaker = faker.name.firstName()
        var sobrenomeFaker = faker.name.lastName()
        var emailFaker = faker.internet.email()
        var senhaFaker = faker.internet.password()

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    it.only('Deve completar o pré cadastro com sucesso', () => {
    
        cy.get('#reg_email').type(emailFaker)
        cy.log(emailFaker) //console log
        cy.get('#reg_password').type(senhaFaker)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })

    it('Deve completar o cadastro com sucesso - usando comandos customizados', () => {
        cy.preCadastro(emailFaker, senhaFaker, nomeFaker, sobrenomeFaker)

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});