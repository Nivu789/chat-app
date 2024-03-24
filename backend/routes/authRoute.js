import express from 'express'
const router  = express.Router()
import { loginUser ,signupUser , logoutUser } from '../controllers/authController.js'

router.post('/login' ,loginUser)

router.post('/signup',signupUser)

router.post('/logout',logoutUser)

export default router