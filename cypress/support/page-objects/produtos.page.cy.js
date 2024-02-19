class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('[class="product-block grid"]')
        .contains(nomeProduto)
        .click()

    }

    visitarProduto(nomeProduto) {
        //cy.visit(`produtos/${nomeProduto}`) //`` interpolação uso da cráse ``

        var urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)

    }

    addProdCarrinho(tamanho, cor, quantidade){
        cy.wait(1000)
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear() .type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage() //estou exportando page objects e seus métodos