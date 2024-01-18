import announcement from "../model/announcement.js"

export const addAnnouncement = async (req, res, next) => {
    try {
        const result = await announcement(req.body).save()
            res.status(200).json({ msg: 'Announcement added successfully...' })
       
    } catch (error) {

    }
}
export const addClientAnnouncement = async (req, res, next) => {
    try {
        const result = await announcement(req.body).save()
            res.status(200).json({ msg: 'Client announcement added successfully...' })
       
    } catch (error) {

    }
}


export const getAnnouncement = async (req,res,next)=>{
    try {
      
        const result = await announcement.find()
        res.status(200).json(result)
    } catch (error) {
        
    }
}
export const getAnnouncementByDate = async (req,res,next)=>{
    try {
        const today = new Date()
        today.setHours(0,0,0,0)
        const result = await announcement.find({date:{$gte:today}})
        res.status(200).json(result)
    } catch (error) {
        
    }
}