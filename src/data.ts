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