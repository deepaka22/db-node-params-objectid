import express from "express";
// import { client } from "./db.js";
// import { studentsData } from "./timestamp/controller.js";
import { studentsRouter } from "./timestamp/router.js";

import dotenv from "dotenv";

// import {client} from "./timestamp/controller"

// import { client } from "./db.js";
// import { dbconnection } from "./db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started in local host ${PORT}`);
});

// app.get("/", (req, resp) => {
//   resp.send(clienst);
// });
// middle ware..
app.use(express.json());

app.use("/students", studentsRouter);
