const app = require("express")();

app.get("/home", (req, res) => {
  // res.send("Getting server so be happy");
  res.send("Getting server 2(two)");
});

app.listen(5600, () => {
  console.log("Connected to server");
});

//====================
