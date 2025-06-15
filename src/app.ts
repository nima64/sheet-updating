import express from 'express';
import path from 'path';
import sheetRouter from './routes/sheetRouter'; // <-- this is new

// app.ts (top of file, below imports)

export type RowData = {
  rowId: string;
  make: string;
  model: string;
  config: string;
  price: string;
  qty: string;
};

export const templateSheet: RowData[] = [
  {
    rowId: 'r0',
    make: 'Bixolon',
    model: 'Srp-F310II',
    config: 'SRP-F310IICOSK',
    price: '',
    qty: ''
  },
  {
    rowId: 'r1',
    make: 'Brady',
    model: 'BMP51',
    config: '139814',
    price: '',
    qty: ''
  },
  {
    rowId: 'r2',
    make: '',
    model: '',
    config: '',
    price: '',
    qty: ''
  },
  {
    rowId: 'r3',
    make: '',
    model: '',
    config: '',
    price: '',
    qty: ''
  },
  {
    rowId: 'r4',
    make: '',
    model: '',
    config: '',
    price: '',
    qty: ''
  },
  {
    rowId: 'r5',
    make: '',
    model: '',
    config: '',
    price: '',
    qty: ''
  },
  {
    rowId: 'r6',
    make: '',
    model: '',
    config: '',
    price: '',
    qty: ''
  }
];

 export const sellerSheet: RowData[] = [...templateSheet,  
  {
    rowId: 'r7',
    make: 'seller sheet',
    model: '',
    config: '',
    price: '',
    qty: ''
  }];
//  export sellerSheet;


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
app.get('/seller', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/seller.html'));
});
app.get('/buyer', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/buyer.html'));
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


