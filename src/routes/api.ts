import { Router } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

// Get data
router.get('/data', (_req, res) => {
  res.json({ status: 'ok', data: 'This is a placeholder for data' });
});

export default router;