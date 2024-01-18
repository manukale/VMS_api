import express  from "express";
import { addContract, getContract } from "../controller/contractdetails.js";

const router = express.Router();
router.post('/addContract',addContract)
router.get('/getContract',getContract)

export default router;