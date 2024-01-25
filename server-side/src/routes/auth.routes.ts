import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/auth.controllers';

const router = Router();

// register user
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

export default router;
