// Part 1: Refactoring Old Code

// BEFORE: 
// const str = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

// let rows = str.split('\n'); 

// for (const row of rows) {
//     let cells = row.split(',');
//     console.log(cells[0], cells[1], cells[2], cells[3]);
// };

// AFTER: 
const str = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

const rows = str.split('\n'); 
rows.forEach(row => console.log(row.split(',')));


// Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of
// columns. This should be calculated dynamically based on the first row of data.
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

const rowsArr = str.split('\n'); 
const columns = rowsArr[0].split(',').length;
const tableArr = [];

rowsArr.forEach(row => tableArr.push(row.split(',')));
console.log(tableArr);


// Part 3: Transforming Data

// For each row of data in the result array produced by your code above, create an object where the
// key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an
// object for the heading row itself.

const tableObjArr = [];
const numOfRows = tableArr.length;
const numOfCols = tableArr[0].length;

let rowCount = 0;

while (rowCount < numOfRows) {
    tableObjArr[rowCount] = {}; // create objs for each row

    let colCount = 0;

    while (colCount < numOfCols) {
        const header = tableArr[0][colCount]; // get col heading from first row of table arr
        tableObjArr[rowCount][header.toLowerCase()] = tableArr[rowCount][colCount]; // add key value pair into the appropriate sub objs

        colCount++;
    }
    rowCount++;
}

console.log(tableObjArr);

