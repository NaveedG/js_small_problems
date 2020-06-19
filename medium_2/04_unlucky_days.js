/* Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. 
Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year. 
You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. 
You may also assume that the same calendar will remain in use for the foreseeable future. */

fridayThe13ths = year => {
  let num = 0
  for (let i = 0; i < 11; i++) { 
    if (new Date(year, i, 13).getDay() === 5) num += 1 
  }
  return num
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
