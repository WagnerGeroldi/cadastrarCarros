const ListModel = require("../models/index");


//funcao renderizar pagina inicial
function index(req, res) {
  const { cadastro } = req.query;
    res.render("index", {
      title: "Início",
      cadastro
    });
  }

//funcao renderizar lista de carros
 async function list(req, res) {
    const users = await ListModel.find();
    res.render("list", {
      title: "Lista de Veículos",
      users,
    });
  }

  //funcao renderizar pagina edita carro
  async function pageEdit(req, res) {
    const { id } = req.query;
  
    const carro = await ListModel.findById(id);
  
    res.render("edit", {
      title: "Editar Carro",
      carro,
    });
  }


//funcao enviar
 async function edit(req, res) {
  const { car, brand, year, color } = req.body;

  const { id } = req.params;

  const carro = await ListModel.findById(id);

  carro.car = car;
  carro.brand = brand;
  carro.year = year;
  carro.color = color;

  carro.save();


    res.render("edit", {
      title: "Editar Veículo",
      carro,
      message: "Alterado com sucesso",

    });
  }


  //funcao que adiciona carro na lista
  function add(req, res) {
  const { car, brand, year, color } = req.body;

    const register = new ListModel({
      car: car,
      brand: brand,
      year: year,
      color: color,
    });
  
    register.save();
    res.redirect("/?cadastro=ok");
  }



 
//funcao que remove carro da lista
  async function removeCar(req, res) {
    const { id } = req.params;
  
    await ListModel.deleteOne({ _id: id });
  
      res.redirect("/list");
  }
  

  //exportar modulos
  module.exports = {
      index,
      list,
      pageEdit,
      edit,
      add,
      removeCar,
  
  }