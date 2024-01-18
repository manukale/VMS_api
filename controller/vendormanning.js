import manning from '../model/vendormanning.js'

export const addManning = async (req, res, next) => {
    try {
        const result = await manning(req.body).save()
        res.status(200).json({msg:"Data Added Successfully..."})
    } catch (error) {
        next(error)
    }
}
export const getManning = async (req, res, next) => {
    try {
        const result = await manning.find()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const updateManning = async (req, res, next) => {
    try {
        console.log('****');
        const result = await manning.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).json({msg:"Manning Updated successfully..."})
    } catch (error) {
        next(error)
    }
}