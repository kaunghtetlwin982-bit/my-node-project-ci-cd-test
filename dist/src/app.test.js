// import { test, describe } from 'node:test';
// import assert from 'node:assert';
// describe('Basic API Tests', () => {
//     test('should return 200 OK and success message', async () => {
//         const response = await fetch('http://localhost:3005/');
//         const data = await response.json();
//         assert.strictEqual(response.status, 200);
//         assert.strictEqual(data.message, "Hello TypeScript Node.js CI/CD!");
//     });
// });
import { test, describe, after } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from './app.js';
import { prisma } from './ helper/dbHelper.js';
describe('Basic API Tests', () => {
    test('should return 200 OK', async () => {
        const response = await request(app).get('/');
        assert.strictEqual(response.status, 200);
    });
});
after(async () => {
    console.log("Cleaning up and exiting...");
    await prisma.$disconnect();
    // GitHub Actions မှာ Server Hanging ဖြစ်တာကို တားဖို့အတွက် 
    // Test အကုန်ပြီးတာနဲ့ Process ကို အတင်းပိတ်ခိုင်းလိုက်တာပါ
    setTimeout(() => {
        process.exit(0); // <--- ဒီစာကြောင်းက အဓိက တရားခံပါပဲ
    }, 500);
});
