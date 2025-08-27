

describe('revision' , ()=>{
    /*it ('test1', ()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();
        cy.wait(4000)
        cy.url().should('include', '/logged-in-successfully')
        cy.get('h1').should('contain.text', 'Logged In Successfully')
        cy.contains('Log out').click()


      





    })*/
    /* it('revision2', ()=>{
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.xpath('//input[@id="username"]').type('student');
      cy.xpath('//input[@id="password"]').type('Password123');
      cy.xpath('//button[@class="btn"]').click();
       



    })
*/
     it ('fixture', function(){
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.fixture('loginData').then((data) =>{
        
      cy.xpath('//input[@id="username"]').type(data.username);
      cy.xpath('//input[@id="password"]').type(data.password);
      cy.xpath('//button[@class="btn"]').click();



      })

     })

})