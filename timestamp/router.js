import express from "express";
import { studentsData } from "./controller.js";
import { newstudentsData } from "./controller.js";

const router = express.Router();

// get all students data...

router.get("/all", async (req, resp) => {
  try {
    const requestquery = req.query;

    const students = await studentsData(requestquery);
    console.log(requestquery);

    if (!students) {
      return resp.status(400).json({ message: "No data available" });
    }

    resp.status(200).json({ students_data: students });
  } catch (error) {
    resp.status(500).json(error, { error, message: "internal server error" });
  }
});

router.get("/respstu/:id", async (req, resp) => {
  try {
    const { id } = req.params;

    const newStudent = await newstudentsData(id);

    if (newStudent.length === 0) {
      resp.status(400).json({ message: "no data available" });
    }
    resp.status(200).json({ data: newStudent });
  } catch (error) {
    resp.status(500).json({ message: "internal server error" });
  }
});

export const studentsRouter = router;
