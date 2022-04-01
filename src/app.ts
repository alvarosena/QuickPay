import express, { NextFunction, Request, Response } from 'express'
import { router } from './modules/Retailers/routes';

const app = express();
app.use(express.json())
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    })

  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.get('/', (request, response) => {
  return response.json({ message: "QuickPay" })
})

const port = process.env.PORT;
app.listen(port || 8080, () => console.log('Server running on http://localhost:8080'));