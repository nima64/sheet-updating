import express from 'express';
import path from 'path';
import sheetRouter from './routes/sheetRouter'; // <-- this is new

// app.ts (top of file, below imports)
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files (HTML, JS, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// API routes (prefixed under /api/sheet)
app.use('/api/sheet', sheetRouter); // <-- mount your API route

// Default route
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/seller1', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/seller1.html'));
});
app.get('/seller2', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/seller2.html'));
});
app.get('/buyer', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/buyer.html'));
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


