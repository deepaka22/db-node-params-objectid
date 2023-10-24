import { client } from "../db.js";
import { ObjectId } from "mongodb";
// import obj from "mongodb";

export const studentsData = (req) => {
  return client.db("zenclass").collection("usersInfo").find(req).toArray();
};

export const newstudentsData = (id) => {
  return client
    .db("zenclass")
    .collection("usersInfo")
    .find({ _id: new ObjectId(id) })
    .toArray();
};

export var object = ObjectId;
console.log(object);
