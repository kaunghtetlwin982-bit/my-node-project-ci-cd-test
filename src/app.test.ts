import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('Basic API Tests', () => {
    test('should return 200 OK and success message', async () => {
        const response = await fetch('http://localhost:3005/');
        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.message, "Hello TypeScript Node.js CI/CD!");
    });
});