const ListModel = require("../models/index");

function index(req, res) {
  const { cadastro } = req.query;
    res.render("index", {
      title: "Início",
      cadastro
    });
  }


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

  async function list(req, res) {
    const users = await ListModel.find();
    res.render("list", {
      title: "Lista de Veículos",
      users,
    });
  }
  
  module.exports = {
      index,
      list,
      add
  
  }