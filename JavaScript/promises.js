const fetchData = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
};
//can do multiple levels of catch using then()
let response = fetchData()
  .then((data) => {
    console.log(data);
    return "anshika";
  })
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  });
