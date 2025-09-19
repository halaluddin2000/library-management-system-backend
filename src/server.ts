require("dotenv").config();
import { Server } from "http";
import mongoose from "mongoose";

import app from "./app";

let server: Server;

const PORT = 5000;

// userName: library_management_System;
// pass: dminmecndYjPHNj7;

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log(process.env.DB_URL);
    console.log("Connected to MongoDB Using Mongoose!!");
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
