const skills = [
    {id: 1, skill: 'javascript', learned: true},
    {id: 2, skill: 'html', learned: true},
    {id: 3, skill: 'css', learned: true},
]

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne,
}

function getAll() {
    return skills
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill) {
    skill.id = Date.now()*10
    skill.learned = false
    skills.push(skill)
  }
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
  }
  