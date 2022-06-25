//using date.parse() returns milliseconds from January 1, 1970 00:00:00 UTC to date entered
//31557600000 is 24 * 3600 * 365.25 * 1000 - which is a year in ms
// Date.Now returns ms elapsed since January 1, 1970 00:00:00 UTC.

//Test case: 1972-12-04 should return 50

function getAge() {
  let birthDate = Math.floor(
    Date.parse(prompt("Please enter your birthday:")) / 31557600000
  );
  let today = Math.floor(Date.now() / 31557600000);
  //console.log(birthDate);
  //console.log(today);
  console.log("You will be " + (today - birthDate) + " years old this year!");
}

getAge();
