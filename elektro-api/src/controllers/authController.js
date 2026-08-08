const prisma = require("../prisma/client");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const { checkPassword } = require("../utils/password");

const PRIV_KEY = fs.readFileSync(path.join(__dirname, "../../keys/id_rsa_priv.pem"), "utf8");

async function login(req, res) {
  try {
    const { email, senha } = req.body;

    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ erro: "E-mail ou senha incorretos" });
    }

    const senhaValida = checkPassword(senha, usuario.hash, usuario.salt);
    if (!senhaValida) {
      return res.status(401).json({ erro: "E-mail ou senha incorretos" });
    }

    const payload = {
      sub: usuario.id_usuario,
      iat: Math.floor(Date.now() / 1000)
    };

    const token = jwt.sign(payload, PRIV_KEY, {
      algorithm: "RS256",
      expiresIn: "1d"
    });

    return res.json({
      mensagem: "Login realizado com sucesso",
      token: `Bearer ${token}`
    });
  } catch (error) {
    return res.status(500).json({ erro: error.message });
  }
}

module.exports = { login };