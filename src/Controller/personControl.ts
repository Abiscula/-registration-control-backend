import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import { People } from '../database/Model/Person';

interface userProps {
    nome: string
    sobrenome: string
    nasc: string
    cpf: number
    email: string
    tel: string
    bairro: string
    cep: number
    localidade: string
    logradouro: string
    uf: string
    numero: number
}

export class Person {

    static async personData(req: Request, res: Response) {
        const { cpf } = req.body

        try {
            const db = await People.findAll({ where: { cpf: Number(cpf) } })
            if (db.length === 0) {
                Person.createNewPerson({ ...req.body })
            } else {
                return res.json({ message: 'cpf já cadastrado em nosso banco de dados' })
            }

            return res.status(200).json(db)
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)
        }
    }

    static async createNewPerson({ nome, sobrenome, nasc, cpf, email, tel, bairro,
        cep, localidade, logradouro, uf, numero }: userProps) {
        await People.create({ 
            cpf: Number(cpf), nome: nome, sobrenome: sobrenome, nasc: nasc,
            email: email, tel: tel, bairro: bairro, cep: Number(cep),
            localidade: localidade, logradouro: logradouro, uf: uf, numero: Number(numero)
        })
    }


    static async getAllPeople(req: Request, res: Response) {
        try {
            const db = await (await People.findAll({attributes: ['nome', 'sobrenome', 'cpf']}))
            res.status(200).json(db)
        }catch(err) {
            return res.status(400).json({message: 'Não existem usuários cadastrados no banco'})
        }

    }

    static async getPerson(req: Request, res: Response) {
        const { cpf } = req.params
        console.log(cpf)
        try {
            const db = await People.findAll({ where: { cpf: Number(cpf) } })
            res.status(200).json(db)
        }catch(err) {
            return res.status(400).json({message: 'Não existem usuários cadastrados no banco'})
        }
    }
}