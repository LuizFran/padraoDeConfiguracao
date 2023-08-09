

describe('Deve validar os filtros', () => {
    beforeEach(() => {
cy.clearCookies()
    })
    it('Login com sucesso ', () => {
        // cy.clearCookies()
        cy.visit('https://mapa52-frontend')
        cy.get('#userId').type('C0659295')
        cy.get('.p-dropdown-trigger').click({force:true})
        cy.contains('Admin').click({force:true})
        cy.get('.footer-area > .p-element').click()
        cy.wait(3000)
    })
    
    it('Valid: Ambiente de DEV', () => {
        cy.get('.welcome-message').should('be.visible', 'Ambiente de Dev')
    })

    it('Menu: Lista de paradas', () => {
        cy.get(':nth-child(2) > .p-component > #undefined_header').click()
        cy.get(':nth-child(2) > .p-toggleable-content > #undefined_content > .ng-tns-c341-7 > .ng-trigger > :nth-child(2) > .p-menuitem-link').click()
        cy.wait(4000)
        cy.get('.p-paginator-last > .p-paginator-icon').click({force:true})
    })

    it('Filtro', () => {
        cy.get('#floating-menu-icon').click()
        cy.get('#floating-menu-btn-Filtros').click({waitforanimations: false})
        // cy.get('.b-green').click()
        cy.wait(1000)
    })
    it('Centro de planejamento', () => {
        cy.get('.filter-content > :nth-child(1) > .filter-label').should('be.visible', 'Centro de Planejamento')
    })
    it('Centro de Localização', () => {
        cy.get(':nth-child(2) > .filter-label').should('be.visible', "Centro de Localização (0/20)")
    })
    it('Grupo de Ativos', () => {
        cy.get('#functionalLocationGroup > .filter-label').should('be.visible', 'Grupo de Ativos')
    })
    it('Data Inicio', () => {
        cy.get(':nth-child(4) > .filter-label').should('be.visible', 'Data Início')
    })
    it('Data Fim', () => {
        cy.get(':nth-child(5) > .filter-label').should('be.visible', 'Data Fim')
    })
    it('Criador', () => {
        cy.get('#createdBy > .filter-label').should('be.visible', 'Criador')
        cy.scrollTo(0, 500)
    })
    it('Proprietário', () => {
        cy.get('#owners > .filter-label').should('be.visible', 'Proprietário')
        cy.scrollTo(0, 500)
    })
    it('Mostrar Paradas Onde Sou', () => {
        cy.get(':nth-child(8) > .filter-label').should('be.visible', 'Mostrar Paradas Onde Sou')
    })
    it('Nome da Parada', () => {
        cy.get(':nth-child(9) > .filter-label').should('be.visible', 'Nome da Parada')
    })
    it('Descrição completa', () => {
        cy.get(':nth-child(10) > .filter-label').should('be.visible', 'Descrição completa')
    })
    it('Status', () => {
        cy.get(':nth-child(11) > .filter-label').should('be.visible', 'Status')
    })
    it('Grande Parada', () => {
        cy.get(':nth-child(12) > .filter-label').should('be.visible', 'Grande Parada')
    })
    it('Localidade', () => {
        cy.get(':nth-child(13) > .filter-label').should('be.visible', 'Localidade')
    })
    it('Data de Criação Início', () => {
        
    })
    it('Data de Criação Fim', () => {
        
    })
    it('Demandas do projeto', () => {
        
    })
    it('Fase', () => {
        
    })
    it('Sistema', () => {
        
    })
    it('Categoria', () => {
        
    })
    it('Gerência Executiva', () => {
        
    })
    it('Gerência de Área', () => {
        
    })
    it('Aderência a data', () => {
        
    })
    it('23 - Aderência a Duração', () => {
        
    })
    
})
