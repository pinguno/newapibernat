var router = require('express').Router()
const vBlanco = new Map();

vBlanco.set("1", "Matarromera");
vBlanco.set("2", "Tussío");
vBlanco.set("3", "Viura");
vBlanco.set("4", "Vailet");
vBlanco.set("5", "Tío Pepe");
vBlanco.set("6", "Pavina Verdejo 2019");
vBlanco.set("7", "Condes de Albarei 2019");
vBlanco.set("8", "Peique Godello sobre lías 2019");
vBlanco.set("9", "Enate Chardonnay 234 - 2019");
vBlanco.set("10", "Cuarenta Vendimias Cuvée");


router.get('/:id', function(req, res) {
var nombre = vBlanco.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe el vino con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(vBlanco, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un vino' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el vino con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el vino con id ' + req.params.id})
})


module.exports = router