import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({
    hi: "djfkdfj",
  });
});

const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(PORT, () => {
  console.log("server started runing on port 5000");
});
