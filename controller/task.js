import task from "../model/task.js"

export const addTask = async(req,res,next) =>{
try {
    const today = new Date()
    today.setHours(0,0,0,0)
    const result = await task(req.body).save()
    res.status(200).json({msg:"Task Added Successfully..."})
} catch (error) {
  next(error)  
}
}

export const getTask = async(req,res,next) =>{
    try {
        const result = await task.find()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const   getTaskCountByVendorName = async(req,res,next) =>{
    try {
        const result = await task.find({vendor_name: req.params.name})
        res.status(200).json(result.length)
    } catch (error) {
        next(error)
    }
}
export const getTaskById = async(req,res,next) =>{
    try {
       const result = await task.findById({_id:req.params.id}).populate(['assignedBy','assignedTo']) 
       res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getTaskAssignedByToday = async(req,res,next) =>{
    try {
        const today = new Date()
        today.setHours(0,0,0,0)
       const result = await task.find({assignedBy:req.params.assignedById,created_date:{$gte:today}}).populate(['assignedBy','assignedTo']) 
       res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getTaskAssignedByVendorToday = async(req,res,next) =>{
    try {
        const today = new Date()
        today.setHours(0,0,0,0)
       const result = await task.find({vendor_name:req.params.name,created_date:{$gte:today}}).populate(['assignedBy','assignedTo']) 
       res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const updateTask = async(req,res,next) =>{
    try {
        const result = await task.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).json({msg:"Task Updated successfully..."})
    } catch (error) {
        next(error)
    }
}

export const deleteTask = async(req,res,next) =>{
    try {
        const result = await task.findByIdAndDelete({_id:req.params.id},req.body)
        res.status(200).json({msg:"Task Deleted Successfully..."})
    } catch (error) {
        next(error)
    }
}

export const addTaskFile = async(req,res,next)=>{
    try {
        console.log(req.body.filename);
        req.body.file = '/task_files/'+req.file.filename
        
        const result = await task.findByIdAndUpdate({_id:req.body.id},{file:req.body.file})
        res.status(200).json({file:req.file,path:req.body.file,msg:"File uploaded successfully"})
    } catch (error) {
        next(error)
    }
}