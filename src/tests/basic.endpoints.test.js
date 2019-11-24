import supertest from 'supertest';
import server from '~/server';

describe('Basic endpoint tests', () => {

  const app = server();
  const request = supertest(app);

  it('Should get 200 status for home route', async (done) => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    done();
  });

  it('Should get Hello world for home route', async (done) => {
    const res = await request.get('/');
    expect(res.body.message).toBe('Hello there');
    done();
  });

  it('Should return error for error route', async (done) => {
    const res = await request.get('/error');
    expect(res.status).toBe(500);
    done();
  });

  // it('Should return 401 for not authorised', async (done) => {
  //   const res = await request.get('/protected');
  //   expect(res.status).toBe(401);
  //   done();
  // });

  it('Should return 404 for route not found', async (done) => {
    const res = await request.get('/doesntexist');
    expect(res.status).toBe(404);
    done();
  });
});