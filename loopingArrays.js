for (let i=1000; i>=0; i--) {
  if (i%2 === 0) {
    console.log(i);
    }
  }

  for (let i = 0; i<=10000; i++) {
    if (i===2500) {
      alert("A quarter of the way there!")
    } else if (i===5000) {
      alert("Halfway there!")
    } else if (i===10000) {
      alert( "The loop is done!")
    }
  }

  const favShows = ["Murder She Wrote", "Psych", "Lost", "Newhart", "Friends"];

  for (let i=0; i<5; i++) {
    console.log("My #" + (i + 1) + " favorite tv show is " + favShows[i] + ".")
  };