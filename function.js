function fetchData(callback) {
  console.log("Callback executed1");
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 6000);
  
  console.log("Callback executed3");// Simulates a 2-second delay
}

fetchData(() => {
  console.log("Callback executed")
});
