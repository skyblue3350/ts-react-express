import express from 'express'
import { router as indexRouter } from './routes/index'

export const app = express()


app.use('/', indexRouter)
