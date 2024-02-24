import express from "express";
import { addComplain, deleteComplain, getComplainAgainst, getComplainBy, getComplainById, getComplainCountByVendorName, getComplains, getComplaintRange, updateComplain } from "../controller/complain.js";
import multer from "multer";

const complainDoc = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'documents')
        },
        filename: (req, file, cb) => {
            if (file.mimetype === 'application/pdf') {
                cb(null, file.fieldname + Date.now() + '.pdf')
            }
            if (file.mimetype === 'image/png') {
                cb(null, file.fieldname + Date.now() + '.png')
            }
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
                cb(null, file.fieldname + Date.now() + '.jpeg')
            }
        }
    })
}).single('complain_doc')


const router = express.Router();
router.post('/addComplain', complainDoc, addComplain)
router.delete('/deleteComplain/:id', deleteComplain)
router.get('/getComplainById/:id', getComplainById)
router.get('/getComplainBy/:id', getComplainBy)
router.get('/getComplainAgainst/:id', getComplainAgainst)
router.get('/getComplainCountByVendorName/:vendor', getComplainCountByVendorName)
router.put('/getComplains/:id', getComplains)
router.put('/updateComplain/:id', updateComplain)
router.get('/getComplaintRange/:fromDate/:toDate',getComplaintRange)

export default router;