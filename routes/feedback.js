import express  from "express";
import { addFeedbackQuestion, deleteFeedbackQuestionById, getFeedbackQuestion, getFeedbackQuestionByName, updateFeedbackQuestionById } from "../controller/feedback.js";
import { addFeedbackData, getFeedbackDataToVendor, getFeedbackDataByVendorName } from "../controller/feedbackdata.js";
const router = express.Router();
router.post('/addFeedbackQuestion',addFeedbackQuestion)
router.get('/getFeedbackQuestion',getFeedbackQuestion)
router.get('/getFeedbackQuestionByName/:vendor_name',getFeedbackQuestionByName)
router.delete('/deleteFeedbackQuestionById/:id',deleteFeedbackQuestionById)
router.put('/updateFeedbackQuestionById/:id',updateFeedbackQuestionById)
// router.get('/getAnnouncementDateRange/:fromDate/:toDate',getAnnouncementDateRange)

router.post('/addFeedbackData',addFeedbackData)
router.get('/getFeedbackDataByVendorName/:vendor_name',getFeedbackDataByVendorName)
router.get('/getFeedbackDataToVendor/:id',getFeedbackDataToVendor)
export default router;