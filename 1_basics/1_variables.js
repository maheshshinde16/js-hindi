const accountId = 12345
let accountEmail = "mahesh@gmail.com"
let accountPassword = "98765"
accountCity = "Pune"
let accountstate;
// accountId = 2  // not allowed

accountEmail = "as@as.com"
accountPassword = "212121"
accountCity = "Nanded"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table({accountId,accountEmail,accountPassword,accountCity,accountstate})