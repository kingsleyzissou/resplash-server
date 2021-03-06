import supertest from 'supertest';
import config from '~/config';
import server from '~/server';
import db from '~/database';
import User from '~/models/user';
import { login } from '~/services/auth';

describe('Auth endpoint tests', () => {

  const app = server();
  const request = supertest(app);

  let existingUser;

  const userData = {
    name: 'Gianluca',
    username: 'gianluca',
    email: 'gianluca@test.com',
    password: 'hello',
  }

  const newUserData = {
    name: 'Test',
    username: 'test',
    email: 'test@test.com',
    password: 'test123',
    confirm: 'test123',
  }

  beforeAll(async () => {
    let host = await config.db.host;  //mongodb memory server returns a promise
    await db.connect({ host, options: config.db.options });
    existingUser = new User(userData);
    await existingUser.save();
  });

  afterAll(async () => {
    await db.reset();
    await db.disconnect();
  })

  it('Should return a valid user id for authenticated user', async (done) => {
    const res = await request
      .post('/login')
      .send({
        email: userData.email,
        password: userData.password
      });
    const authUser = res.body.user;
    expect(authUser._id).toBeDefined();
    done();
  }, 30000);

  it('Should return correct user for authenticated user', async (done) => {
    const res = await request
      .post('/login')
      .send(userData);
    const authUser = res.body.user;
    expect(authUser.name).toBe(existingUser.name);
    expect(authUser.email).toBe(existingUser.email);
    done();
  }, 30000);

  it('Should return correct user for new registration', async (done) => {
    const res = await request
      .post('/register')
      .send(newUserData);
    expect(res.status).toBe(200);
    done();
  }, 30000);

  // it('Should allow access to protected endpoint for logged in user', async (done) => {
  //   const { token } = await login(userData.username, userData.password);
  //   const res = await request
  //     .get('/protected')
  //     .set('Authorization', `Bearer ${token}`);
  //   expect(res.status).toBe(200);
  //   done();
  // }, 30000);

});