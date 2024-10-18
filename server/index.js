const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

const port = 8888;
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
