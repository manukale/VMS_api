import complain from "../model/complain.js"
export const addComplain = async(req,res,next) =>{
    try {
      const today = new Date()
      today.setHours(0,0,0,0)
      if(req.file){
        req.body.complain_doc = `/documents/${req.file.filename}`
      }
      const result = await new complain(req.body).save()  
      res.status(200).json({msg:'Complain Added Successfully...'})
    } 
    catch (error) {
        next(error)
    }
}
export const getComplainById = async(req,res,next) =>{
    try {
      const result = await complain.findOne({_id : req.params.id}).populate(['by','against'])
      res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getComplainBy = async(req,res,next) =>{
    try {
      const result = await complain.find({by : req.params.id}).populate(['by','against']).sort({complaint_number:'asc'}) 
      res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getComplainAgainst = async(req,res,next) =>{
    try {
      const result = await complain.find({against : req.params.id}).populate(['against','by']).sort({complaint_number:''})  
      res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const getComplainCountByVendorName = async(req,res,next) =>{
  try {
    const result = await complain.find({vendor_name: req.params.name}).populate(['by','against'])
    res.status(200).json(result.length)
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
      const result = await complain.findByIdAndUpdate({_id:req.params.id},{ $set: { resolve:req.body.resolve  }}, { new: true })  
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

export const getComplaintRange = async (req, res, next) => {
  try {
      const result = await complain.find({created:{$gte:new Date(req.params.fromDate),$lte:new Date(req.params.toDate)}}).populate(['by','against']).sort({created:'desc'})
          res.status(200).json(result)
  } catch (error) {
      next(error)   
  }
}