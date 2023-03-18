const app = require("express")();

app.get("/home", (req, res) => {
  res.send("Getting server so be happy");
});

app.listen(5600, () => {
  console.log("Connected to server");
});
//====================
