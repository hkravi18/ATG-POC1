require("dotenv").config({
  path: `${__dirname}/../.env`,
});

const app = require("./app");
const sequelize = require("./db/connectDB");

const port = process.env.PORT || 4000;

sequelize
  .sync()
  .then(() => {
    console.log("Database synced!");

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
  })
  .catch((err) => {
    console.error(`Failed to sync db: ${err.message} `);
  });
