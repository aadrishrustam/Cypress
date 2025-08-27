describe('API Testing', () => {

  it('GET method', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        expect(response.status).to.eq(200);

        // Access the first user from the response array
        const firstUser = response.body[0];

        expect(firstUser).to.have.property('name');
        expect(firstUser.username.toLowerCase()).to.include('bret'); // case-insensitive check
      });
  });

});
