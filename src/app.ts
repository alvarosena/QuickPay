import express from 'express'
import { router } from './routes';

const app = express();
app.use(express.json())
app.use(router);

app.get('/', (request, response) => {
  return response.json({ message: "Hello, World" })
})

const port = process.env.PORT;
app.listen(port || 8080, () => console.log('Server running on http://localhost:8080'));