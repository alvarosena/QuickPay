import express from 'express'

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: "Hello, World" })
})

const port = process.env.PORT;
app.listen(port || 8080, () => console.log('Server running on http://localhost:8080'));