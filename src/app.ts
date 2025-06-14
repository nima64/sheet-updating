import express, { Request, Response } from 'express';
import path from 'path';
import apiRoutes from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});