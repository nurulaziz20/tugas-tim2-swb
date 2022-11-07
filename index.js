const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.status(200).send({
    status: true,
    message: "Selamat datang di API hehe ayam",
  });
});


//routes api
routes(app)

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});