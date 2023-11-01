import { client } from "../db.js";
import { ObjectId } from "mongodb";
// import obj from "mongodb";

export const studentsData = (req) => {
  return client.db("newDB").collection("stuData").find(req).toArray();
};

export const newstudentsData = (id) => {
  return client
    .db("newDB")
    .collection("stuData")
    .find({ _id: new ObjectId(id) })
    .toArray();
};

export const postnewStudents = (data) => {
  return client.db("newDB").collection("stuData").insertOne(data);
};

export const editStudents = (params, bodyMsg) => {
  return client
    .db("newDB")
    .collection("stuData")
    .findOneAndUpdate({ _id: new ObjectId(params) }, { $set: bodyMsg });
};

export const deleteStudents = (id) => {
  return client
    .db("newDB")
    .collection("stuData")
    .deleteOne({ _id: new ObjectId(id) });
};
export var object = ObjectId;
// console.log(object);
