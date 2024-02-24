import feedback from "../model/feedback.js"

export const addFeedbackQuestion = async (req, res, next) => {
    try {
       
        const result = await new feedback(req.body).save()
            res.status(200).json({ msg: 'Question added successfully...' })
       
    } catch (error) {
      next(error);
    }
}
export const getFeedbackQuestion = async (req, res, next) => {
    try {
        const result = await feedback.find()
            res.status(200).json(result)
       
    } catch (error) {

    }
}
export const getFeedbackQuestionByName = async (req, res, next) => {
    try {
       
        const result = await feedback.find({vendor:req.params.vendor_name})
            res.status(200).json(result)
       
    } catch (error) {

    }
}
export const deleteFeedbackQuestionById = async (req, res, next) => {
    try {
        const result = await feedback.findByIdAndDelete({_id:req.params.id})
            res.status(200).json({msg:'Question Deleted Successfully'})
       
    } catch (error) {

    }
}
export const updateFeedbackQuestionById = async (req, res, next) => {
    try {
        const result = await feedback.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
            res.status(200).json({msg:'Question Updated Successfully'})
       
    } catch (error) {

    }
}
