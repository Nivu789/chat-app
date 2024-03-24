import express from 'express'
import protectedRoute from '../middlewares/protectedRoute.js'
import { getUserForSidebar } from '../controllers/userController.js'

const router = express.Router()

router.get('/get-user-sidebar',protectedRoute,getUserForSidebar)

export default router