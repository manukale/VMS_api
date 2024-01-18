import contract from "../model/contractdetails.js"


export const addContract = async (req, res, next) => {
    try {
       
        const result = await contract(req.body).save()
        res.status(200).json({ msg: 'Contract Details added successfully...' })

    } catch (error) {

    }
}
export const getContract = async (req, res, next) => {
    try {

        const result = await contract.find()
        res.status(200).json(result)
    } catch (error) {

    }
}
