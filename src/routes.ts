import { Router } from 'express';
import { createProductController } from './controllers/createProductController';
import { createCategoryController } from './controllers/createCategoryController';
import { createProductCategoryController } from './controllers/createProductCategoryController';

const router = Router();

const CreateProduct = new createProductController();
const CreateCategory = new createCategoryController();
const CreateProductCategory = new createProductCategoryController();

router.post('/product', CreateProduct.handle);
router.post('/category', CreateCategory.handle);
router.post('/categoryProduct', CreateProductCategory.handle);

export default router;