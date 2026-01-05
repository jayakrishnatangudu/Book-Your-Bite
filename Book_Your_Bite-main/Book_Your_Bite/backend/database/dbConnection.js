// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "RESERVATIONS",
//     })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log(`Some error occured while connecing to database: ${err}`);
//     });
// };

import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/reservvation");
    console.log("Connected to local MongoDB database!");
  } catch (err) {
    console.error("Error connecting to local MongoDB:", err.message);
  }
};
