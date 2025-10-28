require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

connectDB(process.env.DB_URI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
