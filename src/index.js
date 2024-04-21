require("dotenv").config({
  path: `${__dirname}/../.env`,
});

//express app
const app = require("./app");

//middlewares
const errorHandler = require("./middlewares/errorHandler.js");

//port
const port = process.env.PORT || 4000;

//routes
const companyRoutes = require("./routes/companyRoutes.js");

//logger
const customLogger = require("./middlewares/logger.js");

//db
const establishConnection = require("./db/establishConnection.js");

app.use(customLogger);

app.use("/api/company", companyRoutes);

app.use(errorHandler);

establishConnection
  .then(() => {
    console.log("Database setup complete.");

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
    console.error("Failed to setup database:", err.message);
  });
