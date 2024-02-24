import express  from "express";
import { addAnnouncement, addClientAnnouncement, getAnnouncement, getAnnouncementByDate, getAnnouncementDateRange } from "../controller/announcement.js";

const router = express.Router();
router.post('/addAnnouncement',addAnnouncement)
router.post('/addClientAnnouncement',addClientAnnouncement)
router.get('/getAnnouncement',getAnnouncement)
router.get('/getAnnouncementByDate',getAnnouncementByDate)
router.get('/getAnnouncementDateRange/:fromDate/:toDate',getAnnouncementDateRange)


export default router;