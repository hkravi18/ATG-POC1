require("dotenv").config({
  path: `${__dirname}/../.env`,
});

//express app
const app = require("./app");

//port
const port = process.env.PORT || 4000;

//routes
const companyRoutes = require("./routes/companyRoutes.js");

app.use(companyRoutes);

app.on("error", (err) => {
  if (err instanceof Error) {
    console.log("ERROR (App error): " + err?.message);
  } else {
    console.log("ERROR (App error): An unknown error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server listening on ${port}\n`);
});
