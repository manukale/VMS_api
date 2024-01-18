import invoice from "../model/vendorinvoice.js"

export const addInvoice = async (req, res, next) => {
    try {
        const result = await invoice(req.body).save()
        res.status(200).json({ msg: 'Invoice added successfully...' })

    } catch (error) {
        next(error)   
    }
}
export const getInvoice = async (req, res, next) => {
    try {
       
            const result = await invoice.find()
            res.status(200).json(result)
    } catch (error) {
        next(error)   
    }
}

export const getMonthCount = async(req,res,next) =>{
    try {
       
       const result = await invoice.countDocuments({month: req.params.month , vendor: req.params.vendor }) 
       res.status(200).json(result)
    } catch (error) {
     next(error)   
    }
}
export const updateInvoice = async(req,res,next) =>{
    try {
       
        const result = await invoice.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).json({msg:"Invoice Updated successfully..."})
    } catch (error) {
     next(error)   
    }
}
export const deleteInvoice = async(req,res,next) =>{
    try {
       
        const result = await invoice.findByIdAndDelete({ _id: req.params.id }, req.body)
        res.status(200).json({ msg: "Invoice Deleted Successfully..." })
    } catch (error) {
     next(error)   
    }
}
