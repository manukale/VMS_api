import feedbackdata from "../model/feedbackdata.js"

export const addFeedbackData = async (req, res, next) => {
    try {
        console.log('***',req.body);
        const today = new Date()
        today.setHours(0,0,0,0)
        const result = await new feedbackdata(req.body).save()
        res.status(200).json({ msg: 'Feedback added successfully...' })
    } catch (error) {
      next(error);
    }
}
export const getFeedbackDataByVendorName = async (req, res, next) => {
    try {
       console.log(req.params.vendor_name);
        const result = await  feedbackdata.find({feedback_by:req.params.vendor_name})
        res.status(200).json(result)
    } catch (error) {
      next(error);
    }
}
export const getFeedbackDataToVendor = async (req, res, next) => {
    try {
     
        const result = await  feedbackdata.find({feedback_to:req.params.id}).populate(['feedback_by','feedback_to'])
        res.status(200).json(result)
    } catch (error) {
      next(error);
    }
}

