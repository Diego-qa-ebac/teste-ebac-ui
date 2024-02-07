/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json') //importação do arquivo perfil.json

context('Funcionalidade Login',() => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', ()=> {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')

    })

    it('Deve exibir uma mensagem de erro ao inserir usario inválido', () =>{
        cy.get('#username').type('blabla@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

    }) 

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhaerrada@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Perdeu a senha?')

    })
    
    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')

    });

    it('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario,)
            cy.get('#password').type(dados.senha, { log: false}) //Log false esconde o usuario ou a senha na timeline

        })

    });
    
    it('Deve fazer um login com sucesso usando comandos customizados', () => {
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    });

})

