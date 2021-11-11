const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    car: String,
    brand: String,
    year: Number,
    color: String,
  })
  
  const Model = mongoose.model('lista', schema)

/* testando o servidor
  const enviar = new Model({
    car: 'Bora',
    brand: 'VW',
    year: '2006',
    color: 'Black'
  })

  enviar.save()
  */

module.exports = Model