const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function generateKeyPair() {
  const keysDir = path.join(__dirname, "../../keys");

  if (!fs.existsSync(keysDir)) {
    fs.mkdirSync(keysDir, { recursive: true });
  }

  const pubKeyPath = path.join(keysDir, "id_rsa_pub.pem");
  const privKeyPath = path.join(keysDir, "id_rsa_priv.pem");

  if (!fs.existsSync(pubKeyPath) || !fs.existsSync(privKeyPath)) {
    const keyPair = crypto.generateKeyPairSync("rsa", {
      modulusLength: 4096,
      publicKeyEncoding: { type: "pkcs1", format: "pem" },
      privateKeyEncoding: { type: "pkcs1", format: "pem" }
    });

    fs.writeFileSync(pubKeyPath, keyPair.publicKey);
    fs.writeFileSync(privKeyPath, keyPair.privateKey);
  }
}

generateKeyPair();