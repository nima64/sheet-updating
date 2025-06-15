import { Request, Response } from 'express';
import { templateSheet, sellerSheet1, sellerSheet2, RowData } from '../data'; // 👈 importing from app.ts

function getCombinedSellerSheets() {
  const displaySheet:RowData[] = structuredClone(templateSheet);
  displaySheet.forEach((r, i) => {
    let sellerSheets = [sellerSheet1, sellerSheet2];
    sellerSheets.forEach((ssheet, s_i) => {
      if (ssheet[i] == undefined)
        return;
      if (ssheet[i].price.length)
        r.price +=  `${ssheet[i].price}/ Seller ${s_i + 1}\n`;
      if (ssheet[i].qty.length)
        r.qty +=  `${ssheet[i].qty}\n`;
    });
  });
  return displaySheet;
}

// Get
export const getSheet = (req: Request, res: Response) => {
  const combinedSellerSheets = getCombinedSellerSheets();
  let selectedSheet: RowData[] = combinedSellerSheets;
  const user = req.query.user;
  console.log(`Fetching sheet for user: ${user}`);
  if (user == "seller1") {
    selectedSheet = sellerSheet1;
  } else if (user == "seller2") {
    selectedSheet = sellerSheet2;
  }
  return res.json({ sheet: selectedSheet });
};

// Post


export const batchUpdateSheet = (req: Request, res: Response) => {
  const { op, data } = req.body;
  const user = req.query.user;
  console.log(`Received operation: ${op} for user: ${user}`);
  let matchingSheet = templateSheet;

  if (user == "seller1") {
    matchingSheet = sellerSheet1;
  } else if (user == "seller2") {
    matchingSheet = sellerSheet2;
  }

  if (op !== 'batch_update' || !data?.updates) {
    return res.status(400).json({ error: 'Invalid payload format' });
  }

  data.updates.forEach(({ rowId, col, value }: { rowId: string; col: keyof RowData; value: string }) => {
    const row = matchingSheet.find(r => r.rowId === rowId); 

    if (row && (col === 'price' || col === 'qty')) {
      row[col] = value;
      console.log(`Updated ${rowId}: ${col} = ${value}`);
    }
  });

  res.json({ success: true, updated: data.updates.length, sheet: matchingSheet });
};
