const express = require('express');
const app = express();
const cors = require("cors");
const port = 5000;

app.use(express.json());
app.use(cors());

const db = require("./models/model.js");
db.sequelize.sync();

const db_content = db.result;

app.get("/api/", async (req, res) => {
  let result = await db_content.findAndCountAll();
  res.status(200).send(result);
});

app.get("/api/page", async (req,res)=>{
  const {page_num} = req.query;
  let num_per_page = 20;
  let result = await db_content.findAndCountAll({
    limit: num_per_page,
    offset: (page_num) * num_per_page
  });
  res.status(200).send(result);
});


app.listen(port, () => {
  console.log(`App started and is listening at http://localhost:${port}`);
});