// Select elements
let formAdd = document.querySelector('.addNumbers');
let formSearch = document.querySelector('.search');
let showArrRes = document.querySelector('.showArrRes');

// Add numbers form event listener
// Empty arra init
let arr = [];
formAdd.onsubmit = e => {
    // Prevent default reload
    e.preventDefault();
    // Push number inside the array
    arr.push(Number(formAdd.array.value));
    // console.log(formAdd.array.value);
    // Reset form
    formAdd.reset();
    // Reset show area content
    showArrRes.innerHTML = '';
    // Prepend arr values
    showArrRes.prepend(`${arr}`);
};
// Sum number to find
let numToFind = 0;
// Add form search event listener
formSearch.onsubmit = e => {
    // Prevent default reload
    e.preventDefault();
    // Add value
    numToFind = +formSearch.find.value;
    // console.log(numToFind);
    // Reset form
    formSearch.reset();
    // Reset show area content
    showArrRes.innerHTML = '';
    // Run function
    sumArrayNumbers(numToFind, arr);
};
// Find sum inside the array numbers
function sumArrayNumbers(numToFind, arr) {
    // first loop
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        // Second for loop
        for (let b = 0; b < arr.length; b++) {
            // Sum if the index is !== different
            let res = arr[b] + (i !== b ? num : undefined);
            if (res === numToFind) {
                // Create a div
                let div = document.createElement('div');
                // Add content
                div.innerHTML = ` ${arr[b]} + ${num} = ${numToFind}  `;
                // Show Results
                showArrRes.prepend(div);
            }
        }
    }
}