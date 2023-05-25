// #1: First, change the font family and font color of the h2 header to "Times New Roman" and pink, respectively. 

let myTextElement = document.getElementById("jesse-p-header")

myTextElement.style.fontFamily = "times-new-roman";
myTextElement.style.color = "pink";

// #2: Then, change the #main-banner-text id element to a larger font size than its default size, and give it a new border and font color of your choice. 

let myTextElementTwo = document.getElementById("main-banner-text")

myTextElementTwo.style.fontSize = "18px"
myTextElementTwo.style.color = "lightblue"
myTextElementTwo.style.border = "solid black 2px"

// #3: Lastly, change the display styling of the form to be a flexbox rather than its default value. Then, make sure that the form's flex direction is set to a column, rather than its default row alignment. 

let myTextElement3 = document.getElementsByClassName("contact-forms")

myTextElement3.style.display = "flex"

myTextElement3.style.displayDirection = 'column'

