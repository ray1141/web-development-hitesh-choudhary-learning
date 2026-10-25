//while loop that calculates the sum of all numbers for 1 to 5 and stores the result in a variable called sum
/*let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);
*/
//while loop that counts down from 5 to 1 and stores the numbers in an array named countdown
/*const countdown = [];
let i = 5;
while (i > 0) {
  console.log(i);
  countdown.push(i);
  i--;
}
console.log(countdown);
*/

//do-while loop that prompts a user to enter their favorite tea type until they enter stop. store each tea type in an array named teaCollection

/*const teaCollection = [];
let tea = "";

do {
  tea = prompt(`Enter your favorite tea type ("stop" to finish):`);
  if (tea != `stop`) teaCollection.push(tea);
} while (tea != `stop`);
*/

//do-while loop that adds numbers from 1 to 3 and stores the result in a variable named total

/*let total = 0;
let i = 1;
do {
  total += i;
  i++;
} while (i <= 3);
console.log(total);
*/

//for loop that multiplies each element in the array [2,4,6] by 2 and stores the results in a new array named multipliedNumbers

/*let numbers = [2, 4, 6];
let multipliedNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  multipliedNumbers.push(numbers[i] * 2);
}
console.log(multipliedNumbers);
*/

//for loop that lists all the cities in the array [Paris, New York, Tokyo, London] and stores each city in a new array named cityList
/*
const cities = ["Paris", "New York", "Tokyo", "London"];
const cityList = [];
for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}
console.log(cityList);
*/

//for loop that loops through the array [green tea, black tea, chai, oolong tea] and stops the loop when it finds chai. Store all teas before chai in a new array named selectedTeas

/*const teas = ["green tea", "black tea", "chai", "oolong tea"];
const selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] == "chai") break;
  selectedTeas.push(teas[i]);
}
console.log(selectedTeas);*/

//for loop that loops through the array [London, New York, Paris, Berlin] and skips Paris. Store the other cities in a new array named visitedCities.

/*const cities = ["London", "New York", "Paris", "Berlin"];
const visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Paris") continue;
  visitedCities.push(cities[i]);
}
console.log(visitedCities);*/

//for-of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found. Store the numbers before 4 in an array named smallNumbers.
/*const numbers = [1, 2, 3, 4, 5];
const smallNumbers = [];
for (const num of numbers) {
  if (num == 4) break;
  smallNumbers.push(num);
}
console.log(smallNumbers);
*/
//for-of loop to iterate through the array [chai, green tea, herbal tea, black tea] and skip herbal tea. Store the other teas in an array named preferredTeas.
/*const teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
const preferredTeas = [];
for (const teaType of teaTypes) {
  if (teaType === "herbal tea") continue;
  preferredTeas.push(teaType);
}
console.log(preferredTeas);
*/

//for-in loop to loop through an object containing city populations. Stop the loop when the population of Berlin is found and store all the previous cities' populations in a new object named cityPopulations.
/*const cityPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
const cityPopulations = {};

for (const city in cityPopulation) {
  if (city == "Berlin") break;
  cityPopulations[city] = cityPopulation[city];
}
console.log(cityPopulations);
*/

//for-in loop to loop through an object containing city populations. Skip any city with a population below 3 mil and store teh rest in a new object named largeCities

/*const worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
const largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) continue;
  largeCities[city] = worldCities[city];
}
console.log(largeCities);
*/

//forEach loop that iterates through the array [earl grey, green tea, chai, oolong tea]. stop the loop when chai is found and store all previous tea types in an array named availableTeas.
/*const teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
const availableTeas = [];
teaTypes.forEach(function (teaType) {
  if (teaType === "chai") return;
  availableTeas.push(teaType);
});
console.log(availableTeas);
*/

//forEach loop that iterates through the array [Berlin, Tokyo, Sydney, Paris]. Skip Sydney and store the other cities in a new array named traveledCities.

/*const cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
const traveledCities = [];
cities.forEach(function (city) {
  if (city === "Sydney") return;
  traveledCities.push(city);
});
console.log(traveledCities);
*/
//for loop that iterates through the array [2,5,7,9]. Skip the value 7 and multiply the rest by 2. Store the results in an new array named doubledNumbers.

/*const nums = [2, 5, 7, 9];
const doubledNumbers = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 7) continue;
  doubledNumbers.push([nums[i]] * 2);
}
console.log(doubledNumbers);
*/

//for-of loop to iterate through the array [chai, green tea, black tea, jasmine tea, herbal tea] and stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named shortTeas.

const teas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
const shortTeas = [];
for (const tea of teas) {
  if (tea.length > 10) break;
  shortTeas.push(tea);
}
console.log(shortTeas);
