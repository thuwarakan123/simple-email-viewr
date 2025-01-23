const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const emailRoutes = require("./routes/emailRoutes");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/emails", emailRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
