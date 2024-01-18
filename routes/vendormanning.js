import express  from "express";
import { addManning, getManning, updateManning } from "../controller/vendormanning.js";

const router = express.Router();
router.post('/addManning',addManning)
router.get('/getManning',getManning)
router.put('/updateManning/:id',updateManning)

export default router;