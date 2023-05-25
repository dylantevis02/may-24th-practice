// As the backend dev at a health insurance company, you've discovered a deadly issue that could potentially cost the company millions of dollars, if not more. And it's all due to an off by one error... All of the insurance claims have been mislabeled by one single digit, and have to be corrected before claim payments are issued for this quarter.

// First, write some JS code such that customer #12345's claims are corrected in 2 ways:
    // 1) That all the elements with a class of .customer12345-claims have their id attribute changed to the appropriate number (i.e. if the id is 18590, than the new id would be 18591). 
    // 2) That all the elements with a class of .customer12345-claims have their inner text changed to the appropriate claim number text. 
let customer12345Claims = document.getElementsByClassName("customer12345-claims")

for (i = 0; i < customer12345Claims.length; i++){
    let currentClaimsIdNumber = parseInt(customer12345Claims[i].id) + 1

    customer12345Claims[i].id = currentClaimsIdNumber
    customer12345Claims[i].innerText = `Claim #${currentClaimsIdNumber}`
}
// Next, write some JS code such that customer #98765's claims are corrected, in the same 2 ways as customer #12345 above.

let customer98765Claims = document.getElementsByClassName("customer98765-claims")

for (i = 0; i < customer98765Claims.length; i++){
    let currentClaimsIdNumber = parseInt(customer98765Claims[i].id) + 1

    customer98765Claims[i].id = currentClaimsIdNumber
    customer98765Claims[i].innerText = `Claim #${currentClaimsIdNumber}`

// Lastly, write some JS code such that customer #00000's claims are corrected, in the same 2 ways as customer #98765 and customer #12345 above. 

let customer00000Claims = document.getElementsByClassName("customer00000-claims")

for (i = 0; i < customer00000Claims.length; i++){
    let currentClaimsIdNumber = parseInt(customer00000Claims[i].id) + 1

    customer00000Claims[i].id = currentClaimsIdNumber
    customer00000Claims[i].innerText = `Claim #${currentClaimsIdNumber}`
    