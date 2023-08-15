require("dotenv").config();
const express = require("express");
const cors = require("cors")
const twilioRouter = require("./routes/twillio-sms");
const app = express();
app.use(cors())
const { PORT } = process.env;
const port = 8800 || PORT;
app.use(express.json())
app.use("/twilio-sms", twilioRouter);
 
app.get("/",(req, res) => {
    console.log("Hello world !!")
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Server started listen to the port ${port}`);
});
