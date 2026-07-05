const request = require('supertest');
const app = require('../src/app');

describe('POST /api/auth/register', () => {

    it('should register a new user', async () => {

        const res = await request(app)
            .post('/api/auth/register')
            .send({
                name: 'John Doe',
                email: 'john@test.com',
                password: 'Password123'
            });

        expect(res.statusCode).toBe(201);

        expect(res.body.success).toBe(true);

        expect(res.body.data.email).toBe('john@test.com');

        expect(res.body.token).toBeDefined();
    });

});

describe('POST /api/auth/login', () => {

    it('should login successfully', async () => {

        await request(app)
            .post('/api/auth/register')
            .send({
                name: 'John',
                email: 'john@test.com',
                password: 'Password123'
            });

        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'john@test.com',
                password: 'Password123'
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.token).toBeDefined();

    });

});