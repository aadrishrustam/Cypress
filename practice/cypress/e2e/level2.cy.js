describe("form testing" , ()=>{
    beforeEach(()=>{
          it ("test case " , ()=>{
        cy.visit("https://practice.cydeo.com/")
        
    })
  it ("test case 1" , ()=>{
       cy.title ().should("eq","Practice" )
       cy.get('h1').should ("have.text", "Test Automation Practic")
       
    })

    })
   
})