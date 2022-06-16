import express from 'express'
import { Person } from './Controller/PersonControl'

export const routes = express.Router()

routes.post('/person', Person.personData)
routes.get('/people', Person.getAllPeople)
routes.get('/person/:cpf', Person.getPerson)