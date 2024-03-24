import express from 'express'
import { sendMessage ,getMessage } from '../controllers/messageController.js';
import protectedRoute from '../middlewares/protectedRoute.js'

const router = express.Router();

router.post('/send/:id',protectedRoute,sendMessage)
router.get('/:id',protectedRoute,getMessage)

export default router