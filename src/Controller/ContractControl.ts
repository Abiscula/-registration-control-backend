import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import { Contracts } from '../database/Model/Contract';

interface contractProps {
    cpf: number
    nome: string
    sobrenome: string
    nasc: string
    email: string
    tel: string
    bairro: string
    cep: string
    localidade: string
    logradouro: string
    uf: string
    numero: string
    contractNumber: number
    contractDate: string
    contractValidate: string
}

export class Contract {

    static async contractData(req: Request, res: Response) {
        const { cpf } = req.body

        try {
            const db = await Contracts.findAll({ where: { cpf: Number(cpf) } })
            if (db.length === 0) {
                Contract.createNewContract({ ...req.body })
            } else {
                return res.json({ message: 'Esse usuário já possui um contrato cadastrado' })
            }

            return res.status(200).json(db)
        } catch (err) {
            console.log(err)
            return res.status(400).json(err)
        }
    }

    static async createNewContract({ contractNumber, contractDate, contractValidate, nome, 
        sobrenome, nasc, cpf, email, tel, bairro, cep, localidade, logradouro, uf, numero }: contractProps) {
        await Contracts.create({
            cpf: Number(cpf), contractNumber: Number(contractNumber), contractDate: contractDate, 
            contractValidate: contractValidate, nome: nome, sobrenome: sobrenome, nasc: nasc,
            email: email, tel: tel, bairro: bairro, cep: Number(cep),
            localidade: localidade, logradouro: logradouro, uf: uf, numero: Number(numero)
        })
    }

    static async getAllContracts(req: Request, res: Response) {
        try {
            const db = await (await Contracts.findAll())
            res.status(200).json(db)
        }catch(err) {
            return res.status(400).json({message: 'Não existem usuários cadastrados no banco'})
        }

    }
}