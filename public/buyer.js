function addRow() {
}

function updateGrid(sheet) {
    const gridContainer = document.getElementById('product-grid');

    // Clear existing grid
    let cells = gridContainer.querySelectorAll('.grid-cell');
    if (cells) {
        cells.forEach(cell => {
            cell.remove();
        });
    };

    // create from sheet
    sheet.forEach(row => {
        const rowId = row.rowId;

        gridContainer.insertAdjacentHTML('beforeend', `
            <div class="grid-cell">
              <input class="grid-input" type="text" data-row-id="${rowId}" data-col="price" value="${row.make}">
            </div>
            <div class="grid-cell">
              <input class="grid-input" type="text" data-row-id="${rowId}" data-col="price" value="${row.model}">
            </div>
            <div class="grid-cell">
              <input class="grid-input" type="text" data-row-id="${rowId}" data-col="price" value="${row.config}">
            </div>

            <div class="grid-cell">
              <textarea class="grid-input" type="text" data-row-id="${rowId}" data-col="price">${row.price}</textarea>
            </div>
            <div class="grid-cell">
              <textarea class="grid-input" type="text" data-row-id="${rowId}" data-col="qty">${row.qty}</textarea>
            </div>
            `);
    });

    // Add event listeners to inputs
    gridContainer.querySelectorAll('.grid-input').forEach(input => {
        input.addEventListener('keyup', e => {
            const target = e.target;
            const rowId = target.dataset.rowId;
            const col = target.dataset.col;
            const value = target.value.trim();
            dirtyCells.set(`${rowId}|${col}`, { rowId, col, value });
            console.log(`Edited ${rowId} / ${col} = ${value}`);
        });
    });
}

const dirtyCells = new Map();


// get buyer sheet data
fetch('/api/sheet?user=buyer')
    .then(res => res.json())
    .then(({ sheet }) => {
        // let rowIndex = 0;
        console.log('Initial sheet data:', sheet);
        updateGrid(sheet);
    });


