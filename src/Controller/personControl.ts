import { Request, Response } from 'express';
import { People } from '../database/Model/Person';

interface userProps {
    nome: string
    sobrenome: string
    nasc: string
    cpf: string
    email: string
    tel: string
    bairro: string
    cep: string
    localidade: string
    logradouro: string
    uf: string
    numero: string
}

export class Person {

    static async personData(req: Request, res: Response) {
        const { cpf } = req.body

        try {
            const db = await People.findAll({ where: { cpf: cpf } })
            if (db.length === 0) {
                Person.createNewPerson({ ...req.body })
            } else {
                return res.json({ message: 'cpf já cadastrado em nosso banco de dados' })
            }

            return res.status(201).json(db)
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)
        }
    }

    static async createNewPerson({ nome, sobrenome, nasc, cpf, email, tel, bairro,
        cep, localidade, logradouro, uf, numero }: userProps) {
        await People.create({ 
            cpf: cpf, nome: nome, sobrenome: sobrenome, nasc: nasc,
            email: email, tel: tel, bairro: bairro, cep: cep,
            localidade: localidade, logradouro: logradouro, uf: uf, numero: numero
        })
    }
}