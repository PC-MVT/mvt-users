const express = require('express')
import { Express, Request, Response } from 'express';

const port = 3000

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send("Let's get muuving!")
})

app.get('/test', (req: Request, res: Response) => {
  res.send("Hello Test!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})