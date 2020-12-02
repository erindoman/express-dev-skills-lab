const animals = [
    {id: 1, animal: 'cat', fur: true},
    {id: 2, animal: 'dog', fur: true},
    {id: 3, animal: 'lizard', fur: false},
    {id: 4, animal: 'otter', fur: true},
    {id: 5, animal: 'snake', fur: false}
]

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne,
    update
}

function getAll() {
    return animals
}

function getOne(id) {
    return animals.find(animal => animal.id === parseInt(id))
}

function create(animal) {
    animal.id = Date.now()*1000000
    animal.fur = false
    animals.push(animal)
  }
  
  function deleteOne(id) {
    const idx = animals.findIndex(animal => animal.id === parseInt(id))
    animals.splice(idx, 1)
  }
  
  function update(id, newAnimal) {
    const idx = animals.findIndex(animal => animal.id === parseInt(id))
    animals[idx].animal = newAnimal.animal
    animals[idx].animal = newAnimal.fur === 'Fur?' ? true : false
  }