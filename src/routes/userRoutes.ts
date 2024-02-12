import express from 'express';
import userController from '../controllers/user/userController';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/teste', userController.getAllUsers);

export default router;
