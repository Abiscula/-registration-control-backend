import express from 'express'
import { Contract } from './Controller/ContractControl'
import { Person } from './Controller/PersonControl'

export const routes = express.Router()

routes.post('/person', Person.personData)
routes.get('/people', Person.getAllPeople)
routes.get('/person/:cpf', Person.getPerson)

routes.post('/contract', Contract.contractData)
routes.get('/contracts', Contract.getAllContracts)