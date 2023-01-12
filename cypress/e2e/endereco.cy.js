/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha-conta/')
    cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
    
        
    });
    
});

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Fábio', 'Bruno', 'Google', 'Brasil', 'Av João', '238', 'Paranagua', 'São Paulo', '83209212', '419999955', 'teste@teste.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });
});