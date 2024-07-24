const fs = require("fs");
const DB_FILE = "./db.json";

// Helper function to write to db.json
const writeDB = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), "utf8", (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

// Helper function to read from db.json
const readDB = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(DB_FILE, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        resolve(JSON.parse(data));
      } catch (e) {
        reject(e);
      }
    });
  });
};

module.exports = { writeDB, readDB };
