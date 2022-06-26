import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateManyCategories } from "./controllers/CreateManyCategories";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory";
import { GetCategories } from "./controllers/GetCategories";
import { GetProducts } from "./controllers/GetProducts";
import { GetProductsByCategory } from "./controllers/GetProductsByCategory";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductWithExistCategory = new CreateProductWithExistCategory();
const createManyCategories = new CreateManyCategories();

const getProducts = new GetProducts();
const getProductsByCategory = new GetProductsByCategory();
const getCategories = new GetCategories();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/categoryProduct", createProductCategory.handle);
router.post("/productWithCategory", createProductWithExistCategory.handle);
router.post("/categories", createManyCategories.handle);

router.get("/products", getProducts.handle);
router.get("/productsByCategory/:id_category", getProductsByCategory.handle);
router.get("/categories", getCategories.handle);

export { router };
