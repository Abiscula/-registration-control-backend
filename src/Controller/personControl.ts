import { Request, Response } from 'express';

export class Person {

    static async personData(req: Request, res: Response) {
        const { nome, sobrenome, nasc, cpf, email, tel, bairro, 
            cep, localidade, logradouro, uf, numero } = req.body

        
    }
}