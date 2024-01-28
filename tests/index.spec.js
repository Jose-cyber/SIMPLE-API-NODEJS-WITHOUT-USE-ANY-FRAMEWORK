const request = require('supertest'); // supertest é uma biblioteca para testar APIs HTTP
const server = require('../src/index');

describe('Testando a Aplicação HTTP', () => {
  // method get
  it('Testing method get in /users', async () => {
    const response = await request(server).get('/users');
    expect(response.text).toBe('[]');
    expect(response.status).toBe(200);
  });
  
  // method post
  it('Testing method post in /users', async () => {
    const response = await request(server).post('/users').send({"user": "James","nickname": "Jas"});
    let idResponse = JSON.parse(response.text)
    expect(response.text).toBe('[{"id":"'+idResponse[0].id+'","user":"James","nickname":"Jas"}]');
    expect(response.status).toBe(200);
  });

  // method put
  it('Testing method put in /users', async () => {
    // getting all users again
    const getAllUsers = await request(server).get('/users');
    let idResponse = JSON.parse(getAllUsers.text)
    let updatedUser = {"user": "James","nickname": "Jam"}
    
    // updatting an existent user
    const response = await request(server)
     .put(`/users/${idResponse[0].id}`)
     .send(updatedUser)
     .set('Content-Type', 'application/json');


    let responseObj = JSON.parse(response.text)
    expect(response.status).toBe(200);
    expect(responseObj[0].id).toBe(idResponse[0].id);
    expect(responseObj[0].user).toBe(updatedUser.user);
    expect(responseObj[0].nickname).toBe(updatedUser.nickname);
  });  
});