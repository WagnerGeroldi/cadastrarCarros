const router = require("express").Router();

const ListController = require("../controllers/index");

//rota pagina inicial
router.get("/", ListController.index);
router.post("/add", ListController.add);

//rota pagina lista
router.get("/list", ListController.list);

//rota pagina editar carro
router.get("/edit", ListController.pageEdit);
router.post('/edit/:id', ListController.edit);

//remover usuarios
router.get('/remove/:id', ListController.removeCar)


router.use((req, res) => {
    //pagina de erro 404
    res.send("Página não encontrada");
  });

//exportar
module.exports = router;
