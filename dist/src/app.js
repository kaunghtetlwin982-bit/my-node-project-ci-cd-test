import express from 'express';
import { connectDb } from './ helper/dbHelper.js';
const app = express();
const port = 3005;
app.get('/', (req, res) => {
    res.json({ message: "Hello TypeScript Node.js CI/CD!" });
});
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
    connectDb();
});
