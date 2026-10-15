//access the first element of the array and store it in a variable
let teaFlavors = [`green tea`, `black tea`, `oolong tea`];
let teaFl = new Array(`green tea`, `black tea`, `oolong tea`);
const firstTea = teaFlavors[0];
console.log(firstTea);

//access the third element of the array and store it in a variable
const cities = [`London`, `Tokyo`, `Paris`];
const favoriteCity = cities[2];
console.log(favoriteCity);

//change the second element of the array to a new value
const teaTypes = [`herbal tea`, `white tea`, `masala chai`];
teaTypes[1] = `jasmine tea`;
console.log(teaTypes);

//add an element using the push method
const citiesVisited = [`Mumbai`, `Sydney`];
citiesVisited.push(`Berlin`);
console.log(citiesVisited);

//remove the last element of the array using pop method and store it in a method
const teaOrders = [`chai`, `iced tea`, `matcha`, `earl grey`];
const lastElement = teaOrders.pop();
console.log(lastElement);
console.log(teaOrders);

//create a soft copy of an array
const popularTeas = [`green tea`, `oolong tea`, `chai`];
const softCopyTeas = popularTeas;
softCopyTeas[1] = "a";
//both the arrays are changed ==> this is known as soft copy
console.log(softCopyTeas);
console.log(popularTeas);

//create a hard copy of an array
const topCities = [`Berlin`, `Singapore`, `New York`];
const hardCopyCities = [...topCities];
topCities[1] = `Mumbai`;
console.log(topCities);
console.log(hardCopyCities);

//merge two arrays in a new array
const europeanCities = [`Paris`, `Rome`];
const asianCities = [`Tokyo`, `Bangkok`];
// const worldCities = [...europeanCities, ...asianCities];
const worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

//find lengthh of an array and store it in a variable
const teaMenu = [`masala chai`, `oolong tea`, `green tea`, `earl grey`];
const menuLength = teaMenu.length;
console.log(menuLength);

//check if an element is present in an array and store the result in a variable
const cityBucketList = [`Kyoto`, `London`, `Cape Town`, `Vancouver`];
const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
