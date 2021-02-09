import dotenv from 'dotenv'
import 'reflect-metadata'
import app from './app'
import './database'

dotenv.config()

app.listen(4000)
