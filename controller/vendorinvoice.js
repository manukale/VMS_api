import invoice from "../model/vendorinvoice.js"

export const addInvoice = async (req, res, next) => {
    try {
        const result = await invoice(req.body).save()
        res.status(200).json({ msg: 'Invoice added successfully...' })

    } catch (error) {

    }
}
export const getInvoice = async (req, res, next) => {
    try {
       
            const result = await invoice.find()
            res.status(200).json(result)
    } catch (error) {

    }
}
