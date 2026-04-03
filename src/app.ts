import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port = 3005;



app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello TypeScript Node.js CI/CD!" });
});

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
    // connectDb()
});



export default app;