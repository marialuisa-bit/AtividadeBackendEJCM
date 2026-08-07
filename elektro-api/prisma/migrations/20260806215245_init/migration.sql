/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the `Avaliacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Aviso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Carrinho` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Imagem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemCarrinho` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemCompra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mensagem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pagamento` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_categoria` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Aviso" DROP CONSTRAINT "Aviso_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Carrinho" DROP CONSTRAINT "Carrinho_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Imagem" DROP CONSTRAINT "Imagem_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "ItemCarrinho" DROP CONSTRAINT "ItemCarrinho_carrinhoId_fkey";

-- DropForeignKey
ALTER TABLE "ItemCarrinho" DROP CONSTRAINT "ItemCarrinho_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "ItemCompra" DROP CONSTRAINT "ItemCompra_compraId_fkey";

-- DropForeignKey
ALTER TABLE "ItemCompra" DROP CONSTRAINT "ItemCompra_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_destinatarioId_fkey";

-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_remetenteId_fkey";

-- DropForeignKey
ALTER TABLE "Pagamento" DROP CONSTRAINT "Pagamento_compraId_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "categoriaId",
DROP COLUMN "quantidade",
DROP COLUMN "titulo",
DROP COLUMN "usuarioId",
ADD COLUMN     "id_categoria" INTEGER NOT NULL,
ADD COLUMN     "id_usuario" INTEGER NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;

-- DropTable
DROP TABLE "Avaliacao";

-- DropTable
DROP TABLE "Aviso";

-- DropTable
DROP TABLE "Carrinho";

-- DropTable
DROP TABLE "Compra";

-- DropTable
DROP TABLE "Endereco";

-- DropTable
DROP TABLE "Imagem";

-- DropTable
DROP TABLE "ItemCarrinho";

-- DropTable
DROP TABLE "ItemCompra";

-- DropTable
DROP TABLE "Mensagem";

-- DropTable
DROP TABLE "Pagamento";

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
