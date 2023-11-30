// Part 1: Refactoring Old Code

// BEFORE: 
// const str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,QuizMaster,58\n98,Bill,Doctor’s Assistant,26';

// let rows = str.split('\n'); 

// for (const row of rows) {
//     let cells = row.split(',');
//     console.log(cells[0], cells[1], cells[2], cells[3]);
// };

// AFTER: 
const str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,QuizMaster,58\n98,Bill,Doctor’s Assistant,26';

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

for (let row = 1; row < numOfRows; row++) {
    tableObjArr[row - 1] = {}; // create objs for each row

    for (let col = 1; col < numOfCols; col++) {
        const header = tableArr[0][col]; // get col heading from first row of table arr
        tableObjArr[row - 1][header.toLowerCase()] = tableArr[row][col]; // add key value pair into the appropriate sub objs
    }
}

console.log(tableObjArr);

// Part 4: Sorting and Manipulating Data

// Remove the last element from the sorted array.
// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// 3. Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

tableObjArr.pop();
console.log(tableObjArr);
tableObjArr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(tableObjArr);
tableObjArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(tableObjArr);

// Finally, use the values of each object within the array and the array’s length property to calculate the
// average age of the group. This calculation should be accomplished using a loop.
let avgAge = 0;

for (const entry of tableObjArr) {
    avgAge += entry.age / tableObjArr.length;
}

console.log(avgAge.toFixed(1));


// Part 5: Full Circle

// As a final task, transform the final set of data back into CSV format.
let csv = '';

for (const entry of tableObjArr) {
    for (const key in entry) {
        csv += entry[key] + ',';
    }
    csv = csv.replace(/,$/, '\n');
}

console.log(csv);