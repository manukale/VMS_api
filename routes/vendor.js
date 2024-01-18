import express  from "express";
import { addVendor, deleteVendor, getVendor, updateVendor ,getVendorById, addVendorNote} from "../controller/vendor.js";

const router = express.Router();
router.post('/addVendor',addVendor)
router.get('/getVendor',getVendor)
router.get('/getVendorById/:id',getVendorById)
router.put('/updateVendor/:id',updateVendor)
router.delete('/deleteVendor/:id',deleteVendor)

export default router;