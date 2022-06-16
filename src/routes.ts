import express from 'express'
import { Person } from './Controller/personControl'

export const routes = express.Router()

routes.post('/person', Person.personData)