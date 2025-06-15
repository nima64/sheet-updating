import { Request, Response } from 'express';
import { templateSheet, sellerSheet,  RowData } from '../app'; // 👈 importing from app.ts

// Get
export const getSheet = (req: Request, res: Response) => {
    const user = req.query.user; 
    if(user === 'seller') 
        return res.json({ sheet: sellerSheet });
    res.json({ sheet: templateSheet });
  };

// Post
export const batchUpdateSheet = (req: Request, res: Response) => {
  const { op, data } = req.body;

  if (op !== 'batch_update' || !data?.updates) {
    return res.status(400).json({ error: 'Invalid payload format' });
  }

  data.updates.forEach(({ rowId, col, value }: { rowId: string; col: keyof RowData; value: string }) => {
    const row = templateSheet.find(r => r.rowId === rowId); // ← 👈 this line

    if (row && (col === 'price' || col === 'qty')) {
      row[col] = value;
      console.log(`Updated ${rowId}: ${col} = ${value}`);
    }
  });

  res.json({ success: true, updated: data.updates.length, sheet: templateSheet });
};
