const express = require("express");
const expressProxy = require("express-http-proxy");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use("/user", expressProxy("http://localhost:3001"));

app.listen(3000, () => {
  console.log(`Gateway Server is listening on http://localhost:3000`);
});
