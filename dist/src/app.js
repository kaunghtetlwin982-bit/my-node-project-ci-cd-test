import express from 'express';
const app = express();
const port = 3005;
app.get('/', (req, res) => {
    res.json({ message: "Hello TypeScript Node.js CI/CD! to test" });
});
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
export default app;
