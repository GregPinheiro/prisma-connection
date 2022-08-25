const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const CarrosController = {
  async getCarros(req, res) {
    const datas = await prisma.carros.findMany();

    res.status(datas ? 200 : 204).json(datas);
  },
  async getOneCar(req, res) {
    const id = parseInt(req.params.id);

    const datas = await prisma.carros.findUnique({
      where: { id: id },
    });

    res.status(datas ? 200 : 404).json(datas);
  },
};

module.exports = CarrosController;
