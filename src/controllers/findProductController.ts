import { prismaClient } from '../database/prismaClient';
import { Request, Response } from 'express';

export class findProductController {
    async handle(req: Request, res: Response){

        const { id } = req.params;

        const product = await prismaClient.product.findFirst({
            where: {
                id
            },
            select: {
                ProductCategory: {
                    
                }
            }
        })

        return res.json(product);
    }
}