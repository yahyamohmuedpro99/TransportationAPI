import express from 'express';
import { createClient, getClients } from '../controllers/clientControler.js';

const router = express.Router();

router.post('/', createClient);
router.get('/', getClients);

export default router;
