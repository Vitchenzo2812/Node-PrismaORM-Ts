import prismaClient from '../database/prismaClient';
import { Request, Response } from 'express';

export class createProductCategoryController {
    async handle(req: Request, res: Response){

        const { id_product, id_category } = req.body;

        const productCategory = await prismaClient.productCategory.create({
            data: { 
                id_category,
                id_product
            },
        })

        return res.json(productCategory);
    }
}