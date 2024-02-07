/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')    
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.eq(3) serve para buscar um item especifico da lista, começando sempre pelo zero
        .first() //pegou o primeiro item da lista se for o últomo é .last()
        .contains('Abominable Hoodie')
        .click()
    });
    
        it('Deve adicionar um produto ao carrinho', () => {
            var quantidade = 3

            cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
            cy.wait(1000)
            cy.get('.button-variable-item-Red').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            //cy.get('.woocommerce-message').should('contain', quantidade + 'x “Abominable Hoodie” foram adicionados no seu carrinho')
                        
        });

    
});