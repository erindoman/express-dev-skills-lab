const Animal = require('../models/animal')

module.exports = {
    index,
    show,
    new: newAnimal,
    create,
    delete: deleteAnimal,
    edit,
    update
}

function index(req, res) {
    res.render('animals/index', {animals: Animal.getAll()})
}

function show(req, res) {
    res.render('animals/show', {animals: Animal.getOne(req.params.id)})
}

function newAnimal(req, res) {
    res.render('animals/new')
}

function create(req, res) {
    Animal.create(req.body)
    res.redirect('/animals')
}

function deleteAnimal(req, res) {
    Animal.deleteOne(req.params.id)
    res.redirect('/animals')
}

function edit(req, res) {
    res.render('animals/edit', {animal: Animal.getOne(req.params.id)})
}

function update(req, res) {
    Animal.update(req.params.id, req.body)
    res.redirect(`/animals/${req.params.id}`)
}