import express from 'express'
import { Person } from './Controller/PersonControl'

export const routes = express.Router()

routes.post('/person', Person.personData)