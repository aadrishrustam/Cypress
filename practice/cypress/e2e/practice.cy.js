describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.xpath('//input[@id="username"]').type('aadrish')
    cy.xpath('//input[@placeholder="Enter password"]').type('test123')
    
    cy.xpath('//button[contains(text(),"Login")]').click()
    cy.wait(4000)
    cy.xpath('//input[@type="checkbox" and @value ="automation"]').check()
    cy.xpath('//select[@id="role"]').select('dev')
    cy.xpath("//button[@id='submitBtn']").click()
  })
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.xpath('//input[@id="username"]').type('aadrish');
    cy.xpath('//input[@id="username"]').should('not.have.value','test');
    cy.xpath('//input[@placeholder="Enter password"]').type('test123')
    
    cy.xpath('//button[contains(text(),"Login")]').click()
  
  })
    it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.xpath('//input[@id="username"]').type('aadrish');
    cy.xpath('//input[@id="username"]').should('have.value','aadrish');

    cy.xpath('//input[@placeholder="Enter password"]').type('test123')
    
    cy.xpath('//button[contains(text(),"Login")]').click()
  
  })
})

