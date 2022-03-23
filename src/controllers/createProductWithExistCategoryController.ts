import { prismaClient } from '../database/prismaClient';
import { Request, Response } from 'express';

export class createProductWithExistCategoryController {
    async handle(req: Request, res: Response){

        const { name, bar_code, price, id_category } = req.body;

        const product = await prismaClient.productCategory.create({
            data: {
                product: {
                    create: {
                        name,
                        bar_code,
                        price
                    }
                },

                category: {
                    connect: {
                        id: id_category
                    }
                }
            }
        });

        return res.json(product);
    }
}