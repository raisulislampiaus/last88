
import express from "express";

const app = express();


app.use(express.json());



app.get("/", (req, res) =>
  res.send('hello word')
);



const port = 4000;

app.listen(
  port,
  console.log(`server running  on port ${port}`)
);
