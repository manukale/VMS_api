import task from "../model/task.js"
import todolist from "../model/todolist.js";

export const addToDoList = async (req, res, next) => {
    try {
        const date = new Date()
        date.setHours(0,0,0,0)
        const isExist = await todolist.findOne({checklistid:req.body.checklistid,created_date:{$gte:date}})
        if(isExist){
            const result = await todolist.findByIdAndUpdate({_id:isExist._id},req.body)
            res.status(200).json({ msg: "List Updated Successfully..." })
        }else{
            const result = await todolist(req.body).save()
            res.status(200).json({ msg: "List Added Successfully..." })
        }
    } catch (error) {
        next(error)
    }
}

export const getToDoList = async (req, res, next) => {
    try {
        const result = await todolist.find().populate(['user', 'vendor'])
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getToDoListById = async (req, res, next) => {
    try {
        const result = await todolist.findById({_id : req.params.id}).populate(['user', 'vendor'])
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getToDoListFilter = async (req, res, next) => {
    try {
        const fromdate = new Date(req.params.date)
        fromdate.setHours(0, 0, 0, 0)
        const todate = new Date(req.params.date)
        todate.setHours(23, 59, 59, 999)
        const result = await todolist.findOne({
            created_date: { $gte: fromdate, $lte: todate },
            vendor: req.params.vendor,
            checklistid: req.params.checklistid
            // $and: [
            //     { created_date: { $gte: fromdate } },
            //     { created_date: { $lte: todate } },
            //     { vendor: req.params.vendor },
            //     { checklistid: req.params.checklistid }
            // ]
        }).populate(['user', 'vendor'])
        
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getToDoListToday = async (req, res, next) => {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const result = await todolist.find({ vendor:req.params.vendor,created_date: { $gte: today } }).populate(['user', 'vendor'])
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}


export const updateToDoList = async (req, res, next) => {
    try {
        const result = await task.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json({ msg: "List Updated successfully..." })
    } catch (error) {
        next(error)
    }
}

export const deleteToDoList = async (req, res, next) => {
    try {
        const result = await task.findByIdAndDelete({ _id: req.params.id }, req.body)
        res.status(200).json({ msg: "List Deleted Successfully..." })
    } catch (error) {
        next(error)
    }
}