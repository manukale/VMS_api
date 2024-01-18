import express from 'express'
import { getUsers, login, register,getUserById, updateUser, uploadProfilePhoto, verifyPassword, userInfoChange } from '../controller/auth.js';
import multer from 'multer';

const router =express.Router();
// const profilePhotoUploader = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "profile_photos");
//         },
//         filename: function (req, file, cb) {
//             console.log(file);
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//         },
        
//     }),
// }).single("profile_photo");
const profilePhotoUploader = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'profile_photos')
        },
        filename:(req,file,cb)=>{
            
            cb(null,file.fieldname+Date.now()+'.jpeg')
        }
    })
}).single('profile_photo')

router.post('/login',login)
router.post('/register',register)
router.get('/getUsers',getUsers)
router.put('/updateUser/:id',updateUser)
router.get('/getUserById/:id',getUserById)
router.post("/verifyPassword/:email",verifyPassword);
router.post('/userInfoChange/:id',userInfoChange)

router.post("/uploadProfilePhoto",profilePhotoUploader,uploadProfilePhoto);
// router.post('/signin',signin)

export default router;