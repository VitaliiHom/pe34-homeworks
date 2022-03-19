const types = ['hello', 'world', 23, '23', null]

const filterBy = (arr, incomingTypes) =>{
    return arr.filter(item => typeof item !== incomingTypes)
}

const newTypes = filterBy(types, 'string')

console.log(newTypes)




