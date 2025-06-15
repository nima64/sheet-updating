import express from 'express';
import { batchUpdateSheet, getSheet } from '../controllers/sheetController';

const router = express.Router();

router.get('/', getSheet); 
router.post('/batch-update', batchUpdateSheet);

export default router;
