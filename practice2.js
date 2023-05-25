// First, let's style up Mom's header. Give it a new color, border, and font family, of your choice beyond the original default settings.

let myTextElement = document.getElementsByTagName("h2")[0]

myTextElement.style.color = "blue"
myTextElement.style.border = "solid black 2px"
myTextElement.style.fontFamily = "times-new-roman"

// Next, we want to style each set of lists and their respective items. Let's handle the grocery list first. Using the JavaScript tools you've learned so far, style each .moms-grocery-list-item element so that its font color is green rather than black. 
let momsGroceryListItems = document.getElementsByClassName("moms-grocery-list-item")

for (let i = 0; i < momsGroceryListItems.length; i++){
    momsGroceryListItems[i].style.color = "green"
}

// Next, let's do the house supplies list. Target each .house-supplies-list-item element so that its font color is blue rather than black.
// let myTextElement3 = document.getElementsByTagName('ul')[1]

// myTextElement3.style.color = 'blue'

let supplyList = document.getElementsByClassName("house-supplies-list-item")

for (let i = 0; i < supplyList.length; i++){
    supplyList[i].style.color = "blue"
}


// Lastly, let's do the pet supplies. Target each .pet-supplies-list-item so that its font color is orange rather than black. 

let petSupplies = document.getElementsByClassName("pet-supplies-list-item")

for (let i = 0; i < petSupplies.length; i++){
    petSupplies[i].style.color = "orange"
}



