const { default: mongoose } = require("mongoose");

exports.connect_db = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("MongoDB connection error:", err));
  } catch (error) {
    console.log("error--->", error);
    throw error;
  }
};
