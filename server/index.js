require("dotenv").config();
const express = require("express");
const router = require("./routes");
const { connectToMongoDb } = require("./dataBase");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", router);

async function startServer() {
  await connectToMongoDb();
  console.log("MongoDB Connected");

  app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`);
  });
}

startServer();
