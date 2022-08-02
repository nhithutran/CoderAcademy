function generate_table() {
     // create a <table> element
     const tbl = document.createElement("table");
     const tblbody = document.createElement("tbody");

     const numRows = 2;
     const numCols = 2;

    for(let i= 0; i < numRows; i++) {
        // create a table row
        const row = document.createElement("tr");

        // create a table row
        for(let j= 0; j < numRows; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);

            cell.append(cellText);
            row.append(cell);
        }

        // add the row to the end of the table body
        tblBody.append(row);
    }

    // put the <tbody> in the <table>
    tbl.append(tblBody);

    document.body.append(tbl);

    //  add border to table
    tbl.setAttribute("body");
    
}