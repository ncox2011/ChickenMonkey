function incrementCounterOutput () {
    for (i = 1; i <= 100; i ++) {
      document.getElementById("content").innerHTML += [i];
           if (i % 7 === 0 && i % 5 === 0) {
        console.log("ChickenMonkey");
       }  else if (i % 5 === 0 ) {
           console.log("Chicken");
       }  else if (i % 7 === 0) {
           console.log("monkey")
       }  else {
           console.log(i);
       }
  }
}

incrementCounterOutput();