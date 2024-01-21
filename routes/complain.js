import express  from "express";
import { addComplain,deleteComplain,getComplain,getComplains,updateComplain } from "../controller/complain.js";

const router = express.Router();
router.post('/addComplain',addComplain)
router.get('/deleteComplain/:id',deleteComplain)
router.get('/getComplain/:vendor',getComplain)
router.put('/getComplains/:id',getComplains)
router.delete('/updateComplain/:id',updateComplain)

export default router;