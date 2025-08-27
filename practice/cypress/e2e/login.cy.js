describe('Login with fixture data', () => {
  it('logs in using fixture', () => {
    cy.visit('http://localhost:3000/');
    cy.fixture('user').then ((user) =>{
        cy.get('#username').type(user.username)
        cy.get('#password').type(user.password)
        cy.contains('Login').click()
    
    })



  })
  })

  