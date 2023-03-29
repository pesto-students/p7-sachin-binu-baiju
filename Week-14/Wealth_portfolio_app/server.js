const express = require("express");
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose");
const app = express();

const userRoute = require("./routes/auth");
const wealthRoute = require("./routes/return_wealth");


dotenv.config();
app.use(express.json());
app.use("/api/users/",userRoute);
app.use("/api/wealth/",wealthRoute);


mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cjewqvh.mongodb.net/wealth?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);

  });

  

app.listen(3000, () => {
  console.log("server started");
});
