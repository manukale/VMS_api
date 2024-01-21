import complain from "../model/complain.js"
export const addComplain = async(req,res,next) =>{
    try {
      const result = await complain(req.body).save()  
      res.status(200).json({msg:'Complain Added Successfully...'})
    } 
    catch (error) {
        next(error)
    }
}
export const getComplain = async(req,res,next) =>{
    try {
      const result = await complain.findById({_id : req.params.id})  
      res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getComplains = async(req,res,next) =>{
    try {
      const result = await complain.find({vendor : req.params.vendor}).populate(['by','against']).sort({ created: 'desc' })  
      res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const updateComplain = async(req,res,next) =>{
    try {
      req.body.modified_date = Date.now()
      const result = await complain.findByIdAndUpdate({_id:req.params.id},req.body, { new: true })  
      res.status(200).json({msg:'Complain Updated'})
    } catch (error) {
        next(error)
    }
}
export const deleteComplain = async(req,res,next) =>{
    try {
      const result = await complain.findByIdAndDelete({_id:req.params.id},req.body)  
      res.status(200).json({msg:'Complain Deleted Successfully...'})
    } catch (error) {
        next(error)
    }
}