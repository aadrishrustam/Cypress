describe ('ab testing' , ()=>{

  /* it ('abtesting', ()=>{
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Add/Remove Elements').click()
    cy.xpath('//button[text()="Add Element"]').click()
        cy.xpath('//button[text() ="Delete"]').should('be.visible')

    cy.xpath('//button[text() ="Delete"]').click()
    cy.xpath('//button[text() ="Delete"]').should('not.exist')


    
    
    }) */
    it ('image', ()=>{
      cy.visit('https://the-internet.herokuapp.com/')
      cy.contains('Broken Images').click()
      

      cy.get('img').each(($img)=> {
        expect($img[0].naturalWidth, `Image ${$img[0].src}`).to.be.greaterThan(0);

        
      })
    })
    

   })



