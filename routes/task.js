import express from 'express'
import {addTask, deleteTask,  getTask, getTaskById, updateTask,getTaskAssignedByToday,   getTaskCountByVendorName} from "../controller/task.js";
const router = express.Router();

router.post('/addTask',addTask)
router.get('/getTask',getTask)
// router.get('/getTaskCount',getTaskCount)
router.get('/getTaskCountByVendorName/:name',getTaskCountByVendorName) 
router.get('/getTakById/:id',getTaskById)
router.get('/getTaskAssignedByToday/:assignedById',getTaskAssignedByToday)
router.put('/updateTask/:id',updateTask)
router.delete('/deleteTask',deleteTask)

export default router;