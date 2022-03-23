import { prismaClient } from '../database/prismaClient';
import { Request, Response } from 'express';

export class findCategoryController {
    async handle(req: Request, res: Response){

        const { id } = req.params;

        const category = await prismaClient.category.findFirst({
            where: {
                id,
            },
            include: {
                ProductCategory: true,
            }
        });

        return res.json(category);
    }
}