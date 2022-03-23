import prismaClient from '../database/prismaClient';
import { Request, Response } from 'express';

export class createProductController {
    async handle(req: Request, res: Response){
        
        const { name, bar_code, price } = req.body;
        
        const product = await prismaClient.product.create({
            data: {
                bar_code,
                name,
                price
            }
        });

        return res.json(product);
    }
}