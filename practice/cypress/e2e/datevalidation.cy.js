describe('datevalidation', ()=> {

  // Ignore known app error
  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('process is not defined')) {
      return false;
    }
  });

  it('Select July Date Range', ()=> {
    cy.visit('https://stage.ikhub.biz/');

    cy.get('input[name="username"]').type('owner');
    cy.get('input[name="password"]').type('Password@123');
    cy.get('#kt_login_signin_submit').click();

    cy.url().should('include','/dashboard');

    // Open date picker
    cy.get('.ant-picker-range').click();

    // Wait for calendar animation
    cy.wait(1000);

    // Check current month
    cy.get('.ant-picker-month-btn').then(($month) => {
      if (!$month.text().includes('Jul')) {
        // Force-click Next Month button (even if hidden)
        cy.xpath("//button[contains(@class, 'ant-picker-header-next-btn')]")
          .first()
          .click({ force: true });
      }
    });

    // Wait for calendar update
    cy.wait(1000);

    // Select July 1 to July 31
    cy.xpath("//td[@title='2025-07-01']").click();
    cy.xpath("//td[@title='2025-07-31']").click();
  });

});
