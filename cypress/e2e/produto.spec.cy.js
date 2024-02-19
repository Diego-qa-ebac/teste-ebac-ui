/// <reference types="cypress" />
import produtosPageCy from "../support/page-objects/produtos.page.cy";

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        produtosPageCy.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        
        
    });

    it('Deve buscar um produto com sucesso', () => {
        var produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPageCy.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)

    });

    it('Deve visitar a página do produto', () => {
        produtosPageCy.visitarProduto('Atlas Fitness Tank')
        cy.get('.product_title').should('contain' , 'Atlas Fitness Tank')

    });

    it('Deve adicionar produto ao carrinho', () => {
        var qtd = 2
        produtosPageCy.buscarProduto('Aero Daily Fitness Tee')
        produtosPageCy.addProdCarrinho('S', 'Black', qtd)

        cy.get('.woocommerce-message').should('contain', 'Fitness Tee')
        
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos') .then(dados =>{
            
        produtosPageCy.buscarProduto(dados[1].nomeProduto)
        produtosPageCy.addProdCarrinho(
            dados[1].tamanho, 
            dados[1].cor,
            dados[1].quantidade)

        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

        })

        
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