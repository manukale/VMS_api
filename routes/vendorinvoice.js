import express  from "express";
import { addInvoice, deleteInvoice, getInvoice, getInvoiceRange, getMonthCount, updateInvoice } from "../controller/vendorinvoice.js";

const router = express.Router();
router.post('/addInvoice',addInvoice)
router.get('/getInvoice',getInvoice)
router.get('/getInvoiceRange/:fromDate/:toDate',getInvoiceRange)
router.put('/updateInvoice/:id',updateInvoice)
router.get('/getMonthCount/:month/:vendor',getMonthCount)
router.delete('/deleteInvoice/:id',deleteInvoice)

export default router;