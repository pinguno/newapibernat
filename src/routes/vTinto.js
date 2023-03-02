var router = require('express').Router()
const vTinto = new Map();

vTinto.set("1", "Peter Wagner");
vTinto.set("2", "Mark Haisma");
vTinto.set("3", "Cortijo los Aguilares");
vTinto.set("4", "Suertes del Marqués");
vTinto.set("5", "Verónica Ortega");
vTinto.set("6", "Descendientes de J. Palacios");
vTinto.set("7", "Abel Mendoza");
vTinto.set("8", "Guímaro");
vTinto.set("9", "Niepoort");
vTinto.set("10", "Emidio Pepe");


router.get('/:id', function(req, res) {
var nombre = vTinto.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe el vino con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(vTinto, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir el vino' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el vino con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el vino con id ' + req.params.id})
})


module.exports = router