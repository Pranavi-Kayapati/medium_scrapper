const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const os = require("os");
const tempDir = os.tmpdir();
const DB_FILE = path.join(tempDir, "db.json");

// function to write to db.json
const writeDB = async (data) => {
  try {
    await fsPromises.writeFile(DB_FILE, JSON.stringify(data, null, 2), "utf8");
    console.log("Data written to db.json");
  } catch (err) {
    console.error("Error writing to db.json:", err);
    throw err;
  }
};

// function to read from db.json
const readDB = async () => {
  try {
    const data = await fsPromises.readFile(DB_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading from db.json:", err);
    throw err;
  }
};

module.exports = { writeDB, readDB };
