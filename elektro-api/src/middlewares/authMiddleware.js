const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const fs = require("fs");
const path = require("path");
const prisma = require("../prisma/client");

const PUB_KEY = fs.readFileSync(path.join(__dirname, "../../keys/id_rsa_pub.pem"), "utf8");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"]
};

passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id_usuario: jwtPayload.sub }
      });

      if (usuario) {
        return done(null, usuario);
      }
      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport.authenticate("jwt", { session: false });