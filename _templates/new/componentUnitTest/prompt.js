module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'Component unit test must have a name.'
      }
      return true
    },
  },
  {
    type: 'list',
    name: 'type',
    message: 'Component Type:',
    choices: ['Atom', 'Molecule'],
    default: 'Atom',
  },
]
