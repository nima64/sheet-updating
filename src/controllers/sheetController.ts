import { Request, Response } from 'express';
import { mockSheet, RowData } from '../app'; // 👈 importing from app.ts

// Get
export const getSheet = (_req: Request, res: Response) => {
    res.json({ sheet: mockSheet });
  };
// Post
export const batchUpdateSheet = (req: Request, res: Response) => {
  const { op, data } = req.body;

  if (op !== 'batch_update' || !data?.updates) {
    return res.status(400).json({ error: 'Invalid payload format' });
  }

  data.updates.forEach(({ rowId, col, value }: { rowId: string; col: keyof RowData; value: string }) => {
    const row = mockSheet.find(r => r.rowId === rowId); // ← 👈 this line

    if (row && (col === 'price' || col === 'qty')) {
      row[col] = value;
      console.log(`Updated ${rowId}: ${col} = ${value}`);
    }
  });

  res.json({ success: true, updated: data.updates.length, sheet: mockSheet });
};
