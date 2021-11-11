const router = require("express").Router();

const LisController = require("../controllers/index");

//rota pagina inicial
router.get("/", LisController.index);
router.post("/add", LisController.add);

//rota pagina lista
router.get("/list", LisController.list);


router.use((req, res) => {
    //pagina de erro 404
    res.send("Página não encontrada");
  });

//exportar
module.exports = router;
