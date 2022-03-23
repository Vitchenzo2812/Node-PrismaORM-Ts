import { Router } from 'express';

import { createProductController } from './controllers/createProductController';
import { createCategoryController } from './controllers/createCategoryController';
import { createProductCategoryController } from './controllers/createProductCategoryController';
import { createProductWithExistCategoryController } from './controllers/createProductWithExistCategoryController';

import { findProductController } from './controllers/findProductController';
import { findCategoryController } from './controllers/findCategoryController';

const router = Router();

const CreateProduct = new createProductController();
const CreateCategory = new createCategoryController();
const CreateProductCategory = new createProductCategoryController();
const CreateProductWithExistCategory = new createProductWithExistCategoryController();

const FindProduct = new findProductController();
const FindCategory = new findCategoryController();

router.post('/product', CreateProduct.handle);
router.post('/category', CreateCategory.handle);
router.post('/categoryProduct', CreateProductCategory.handle);
router.post('/productWithCategory', CreateProductWithExistCategory.handle);

router.get('/product/:id', FindProduct.handle);
router.get('/category/:id', FindCategory.handle);

export default router;