import { prismaClient } from '../database/prismaClient';
import { Request, Response } from 'express';

export class createCategoryController {
    async handle(req: Request, res: Response){

        const { name } = req.body;

        const category = await prismaClient.category.create({
            data: { 
                name
            },
        })

        return res.json(category);
    }
}