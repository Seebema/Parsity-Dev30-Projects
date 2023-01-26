var myAge = 27;
//My human age for dog years conversion

var earlyYears = 2;
// first two years of a dogs life

earlyYears = 2 * 10.5; //21
// the first 2 years in dog years = 21 in human years

myAge-= 2;
var laterYears = myAge;
//updating myAge - 2 years since there are 2 seperate year increments
// laterYears will equal the amount of years needed to calculate the second increment

laterYears = 25 * 4; // 100
// calculating the rest of dog years

// console.log(earlyYears + laterYears); // 121
//oldest dog recoreded in history... it was a beautiful life

var myAgeInDogYears = (earlyYears = laterYears);
// creating a var for my total years as a dog 

var myName =('Max'.toLowerCase())
// setting the value for name1 as my name,
// setting name1 to all lowercase using a built.in.method

console.log(`My name is ${myName}. I am ${myAge} in human years, which is ${myAgeInDogYears} years in dog years`);
// My name is max. I am 25 in human years, which is 100 years in dog years
