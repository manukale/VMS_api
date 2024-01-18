import express  from "express";
import { addToDoList, deleteToDoList, getToDoList, updateToDoList, getToDoListToday,getToDoListFilter,getToDoListById } from "../controller/todolist.js";
const router = express.Router();
router.post('/addtodolist',addToDoList)
router.get('/gettodolist',getToDoList)
router.get('/getToDoListById/:id',getToDoListById)
router.get('/getToDoListFilter/:date/:vendor/:checklistid',getToDoListFilter)
router.get('/gettodolisttoday/:vendor',getToDoListToday)
router.put('/updatetodolist/:id',updateToDoList)
router.delete('/deletetodolist/:id',deleteToDoList)

export default router;