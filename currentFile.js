const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => enteredCode !== correctCode ? false : new Date(currentDate) > new Date(expirationDate) ? false : true

//12abcd3 12abcd3 January 5, 2014 January 1, 2014
console.log(checkCoupon('123', '123', 'January 5, 2014', 'January 1, 2014'))//false
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))//false
console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'))//true