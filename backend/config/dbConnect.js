import mongoose from "mongoose";

const dbConnection = async () => {
  const URL = "mongodb+srv://mydata:mydata@cluster0.999nh49.mongodb.net/Employee_Task_Manager?retryWrites=true&w=majority";
  try {
    const con = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

export default dbConnection;
