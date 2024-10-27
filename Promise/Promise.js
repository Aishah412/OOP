const myShoelace = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const success = true; // Change to false to trigger reject
  
      if (success) {
        resolve("Shoe Lace tied!");
      } else {
        reject("Trip and Fall.");
      }
    }, 2000);
  });
  
  myShoelace
    .then((message) => {
      console.log(message); // Will log: "Operation successful!"
    })
    .catch((error) => {
      console.error(error); // Will log: "Operation failed."
    });

    function wait(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }
      
      function waitAndThen() {
        wait(0)
          .then(() => {
            console.log("Apple Candy");
            return wait(1000);
          })
          .then(() => {
            console.log("Cholocate Candy");
          })
        .then(() => {
          console.log("Strawberry Candy");
        });
      }
      
      waitAndThen();
      
