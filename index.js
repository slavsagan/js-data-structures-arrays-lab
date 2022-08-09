const pets = ["Milo", "Otis", "Garfield"]

const append = [...pets, "Odie"]
const prepend = ["Odie", ...pets]
const removeLast = pets.slice(0,2)
const removeFirst = pets.slice(1)