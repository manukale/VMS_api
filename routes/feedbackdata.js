import express  from "express";import { addFeedbackData, getFeedbackDataToVendor, getFeedbackDataByVendorName } from "../controller/feedbackdata.js";
const router = express.Router();


router.post('/addFeedbackData',addFeedbackData)
router.get('/getFeedbackDataByVendorName/:vendor_name',getFeedbackDataByVendorName)
router.get('/getFeedbackDataToVendor/:id',getFeedbackDataToVendor)
export default router;