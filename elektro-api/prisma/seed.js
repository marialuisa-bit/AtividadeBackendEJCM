const prisma = require("../src/prisma/client");
const { generatePassword } = require("../src/utils/password");

async function main() {
  const { hash, salt } = generatePassword("SenhaSegura123");

  const admin = await prisma.usuario.upsert({
    where: { email: "admin@elektro.com" },
    update: {},
    create: {
      nome: "Admin Elektro",
      cpf: "00000000000",
      email: "admin@elektro.com",
      hash: hash,
      salt: salt,
      telefone: "21999999999"
    }
  });

  console.log("Seeder executado com sucesso! Usuário criado:", admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });