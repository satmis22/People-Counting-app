/*Counting People (Pseudo-Code) --->

--> Initialize the count as 0
--> listen for clilcks on the increment button
--> increment the count variable when the button is clicked
--> change the count-el in HTML to reflect the new count.
*/

/* // Code For Welcome Back
let welcomEl = document.getElementById("welcome-el")
let name = "Satvik Mishra"
let greeting = "Welcome Back "


welcomEl.innerText = greeting + name 

//  Add an emoji to the end :)
// Write Your Code Below Here
// Hint: count = count + 1

welcomeEl.innerText += " :)"
console.log(welcomEl) */


 //  Counting Code --->
let count = 0;// ------> Let Count Be Zero
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// count + 1 ------> increment :)
console.log(count);

function increment() {
    count += 1;
    // console.log("The button was clicked");
    // console.log(count);
    countEl.textContent = count;
}

function save(){
    let countStr = `${count} - `
    saveEl.textContent += countStr // ----> innerText can have problems in displaying spaces so we can use an alternative i.e. (.textContent) :)
    count  = 0
    countEl.textContent = 0;
} 



