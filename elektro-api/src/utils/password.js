const crypto = require("crypto");

function generatePassword(password) {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

  return { salt, hash };
}

function checkPassword(password, hash, salt) {
  const hashFromRequest = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return hashFromRequest === hash;
}

module.exports = { generatePassword, checkPassword };