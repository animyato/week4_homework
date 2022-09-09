import express from 'express';
import { createUser, getUsers, updateUser, deleteUser, getUserById } from '../controllers/userController.js';

const router = express.Router();

router.post('/create', createUser);

router.get('/get', getUsers);

router.get('/:id', getUserById);

router.get('/delete', deleteUser);

export default router;