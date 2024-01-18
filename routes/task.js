import express from 'express'
import {addTask, deleteTask,  getTask, getTaskById, updateTask,getTaskAssignedByToday,   getTaskCountByVendorName, getTaskAssignedByVendorToday, addTaskFile} from "../controller/task.js";
import { verifyAccessToken } from '../util/verifyToken.js';
import multer from 'multer';
const router = express.Router();

const uploadeFile = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'task_files')
        },
        filename:(req,file,cb)=>{
            if(file.mimetype === 'application/pdf' ){

                cb(null,file.fieldname+'task_files'+Date.now()+'.pdf')
            }
            if(file.mimetype === 'image/png' ){

                cb(null,file.fieldname+'task_files'+Date.now()+'.png')
            }
            if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){

                cb(null,file.fieldname+'task_files'+Date.now()+'.jpg')
            }
            
        }
    })
}).single('file')

router.post('/addTask',addTask)
router.get('/getTask',getTask)
// router.get('/getTaskCount',getTaskCount)
router.get('/getTaskCountByVendorName/:name',getTaskCountByVendorName) 
router.get('/getTakById/:id',getTaskById)
router.get('/getTaskAssignedByToday/:assignedById',getTaskAssignedByToday)
router.get('/getTaskAssignedByVendorToday/:name',getTaskAssignedByVendorToday)
router.put('/updateTask/:id',updateTask)
router.delete('/deleteTask',deleteTask)

router.post('/addTaskFile',uploadeFile,addTaskFile)

export default router;