import express from "express";
import { client } from "./db.js";
// import { studentsData } from "./timestamp/controller.js";
import { studentsRouter } from "./timestamp/router.js";

// import {client} from "./timestamp/controller"

// import { client } from "./db.js";
// import { dbconnection } from "./db.js";

const app = express();

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server started in local host ${PORT}`);
});

app.get("/", (req, resp) => {
  resp.send(client);
});

app.use(express.json());

app.use("/students", studentsRouter);
