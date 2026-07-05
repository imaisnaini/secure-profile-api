const request = require('supertest');
const app = require('../src/app');

describe('GET /api/users/me', () => {

    it('should return current user', async () => {

        const register = await request(app)
            .post('/api/auth/register')
            .send({
                name: 'John',
                email: 'john@test.com',
                password: 'Password123'
            });

        const token = register.body.token;

        const res = await request(app)
            .get('/api/users/me')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);

        expect(res.body.success).toBe(true);

        expect(res.body.data.email).toBe('john@test.com');
    });

});