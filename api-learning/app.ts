import cors from 'cors'
import express from 'express'
var morgan = require('morgan')
import { router } from './src/routes/index'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/', router)