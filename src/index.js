require("dotenv").config({
  path: `${__dirname}/../.env`,
});

const app = require("./app");

const port = process.env.PORT || 4000;

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
