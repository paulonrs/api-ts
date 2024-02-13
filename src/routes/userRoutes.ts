import express from 'express';
import { userController } from '../dependencies/userDependencies';

const router = express.Router();

router.get('/', userController.getAllUsers);

export default router;
