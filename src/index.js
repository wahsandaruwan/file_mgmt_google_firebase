// ----------Third-party libraries & modules----------
const express = require("express");
require("dotenv/config");

// ----------Custom libraries & modules----------
const Configs = require("./configs");

// ----------Global instances----------
const app = express();
const PORT = Configs.DEV_PORT || 3308;

// ----------Common middleware----------
// Accept json
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.status(200).json({ success: { message: `Welcome to the server!` } });
});

// Error route
app.use((req, res) => {
  res.status(404).json({ error: { message: `Not found!` } });
});

// ----------Initialize the connection----------
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
