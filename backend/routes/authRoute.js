import express from 'express'
const router  = express.Router()
import { loginUser ,signupUser , logoutUser } from '../controllers/authController.js'

router.get('/login' ,loginUser)

router.get('/signup',signupUser)

router.get('/logout',logoutUser)

export default router