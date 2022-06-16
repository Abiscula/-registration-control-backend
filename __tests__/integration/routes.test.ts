import request from 'supertest'
import { app } from '../../src/server'

const reqObject = {
    "nome": "nome-teste",
    "sobrenome": "sobrenome-teste",
    "nasc": "10/02/1995",
    "cpf": "12345679800",
    "email": "email-teste",
    "tel": "11900000000",
    "bairro": "bairro-teste",
    "cep": "cep-teste",
    "localidade": "localidade-teste",
    "logradouro": "logradouro-teste",
    "uf": "uf-teste",
    "numero": "333"
}

describe('Routes', () => {

    it('should return status 200 when API call is valid', async () => {
        const res = await request(app)
            .post('/person')
            .send(reqObject)
        expect(res.statusCode).toEqual(200)

    })
})
