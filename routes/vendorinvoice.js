import express  from "express";
import { addInvoice, getInvoice } from "../controller/vendorinvoice.js";

const router = express.Router();
router.post('/addInvoice',addInvoice)
router.get('/getInvoice',getInvoice)

export default router;