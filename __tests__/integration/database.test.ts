
import { Person } from "../../src/Controller/PersonControl"
import { startDB } from "../../src/database/config"

describe('Database', () => {
    it('should sync all models to the database when connection is valid', async () => {
        const db = await startDB()
        expect(db).toBe(200)
    })

    it('should create game data in database when attributes is valid', async () => {
        const createData = Person
        createData.createNewPerson({
            nome: 'nome-teste',
            sobrenome: 'sobrenome-teste',
            nasc: '10/02/1995',
            cpf: 12345678900,
            email: 'email-teste',
            tel: '(11) 900000000',
            bairro: 'bairro-teste',
            cep: 11111111,
            localidade: 'localidade-teste',
            logradouro: 'logradouro-teste',
            uf: 'uf-teste',
            numero: 333
        })
        expect(createData).toThrow()
    })
})


