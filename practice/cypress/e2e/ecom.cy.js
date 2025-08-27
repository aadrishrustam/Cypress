describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.xpath('//a[contains(text(), "Products")]').click();
    
    cy.wait(3000)
    
    cy.xpath('(//a[contains(text(),"View Product")])[3]').click();
    cy.contains('Add to cart').click()
    cy.wait(2000)
    cy.get('#cartModal a[href="/view_cart"]').click();
    cy.contains("Proceed To Checkout").click()
    cy.wait(2000)
    cy.xpath('//a[.//u[contains(text(), "Register / Login")]]').click();

   // cy.xpath('//a[.//[ucontains(text(), "Register / Login")]]')
   // cy.contains("Register / Login")
   //.should('be.visible')
    //.click();
    //cy.xpath('//a[contains(text(), "Cart")]')
    //cy.wait(2000)
    //cy.xpath('//a[contains(text(), "cart")]');
    //cy.contains('Cart').click();




    //cy.get('.btn.btn-default.cart').click();
   //cy.xpath('//a[contains(text(),"Samsung galaxy s6")]').click();
   //cy.contains('Samsung galaxy s6').click()
   //cy.contains('Add to cart').click()
   //cy.xpath('//a[contains(text(),"Add to cart")]').click();
   //cy.xpath('//a[text() ="Cart"]').click()
   //cy.get(".nav-link").contains('Cart').click
   //cy.contains("Cart").click()
   //cy.wait(4000)
   //cy.contains('Samsung galaxy s6').should('exist')


  })
})