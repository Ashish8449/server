const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(PORT, () => {
  console.log("server started runing on port 5000");
});
