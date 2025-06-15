import { Request, Response } from 'express';
import { templateSheet, sellerSheet1, sellerSheet2,  RowData } from '../data'; // 👈 importing from app.ts

// Get
export const getSheet = (req: Request, res: Response) => {
    const user = req.query.user; 
    let currenSheet =  templateSheet; 
    if (user =="seller1"){
      currenSheet = sellerSheet1;
    } else if (user == "seller2") {
      currenSheet = sellerSheet2;
    }

    res.json({ sheet: currenSheet});
  };

// Post
export const batchUpdateSheet = (req: Request, res: Response) => {
  const { op, data } = req.body;
  const user = req.query.user; 
  console.log(`Received operation: ${op} for user: ${user}`);
  let currentSheet =  templateSheet; 
  if (user =="seller1"){
    currentSheet = sellerSheet1;
  } else if (user == "seller2") {
    currentSheet = sellerSheet2;
  }

  if (op !== 'batch_update' || !data?.updates) {
    return res.status(400).json({ error: 'Invalid payload format' });
  }

  data.updates.forEach(({ rowId, col, value }: { rowId: string; col: keyof RowData; value: string }) => {
    const row = currentSheet.find(r => r.rowId === rowId); // ← 👈 this line

    if (row && (col === 'price' || col === 'qty')) {
      row[col] = value;
      console.log(`Updated ${rowId}: ${col} = ${value}`);
    }
  });

  res.json({ success: true, updated: data.updates.length, sheet: currentSheet });
};
