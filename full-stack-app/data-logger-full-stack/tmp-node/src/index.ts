require('dotenv').config()
const express = require('express')
import transcribeRoutes from './routes/transcribe'
import actionsRoutes from './routes/actions'
import { Request, Response } from 'express'

const app = express()
app.use(express.json({limit: '50mb'}));
const PORT = process.env.PORT || 3000

app.use(transcribeRoutes)
app.use(actionsRoutes)

app.get('/test', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({
    message: 'Hello World'
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

