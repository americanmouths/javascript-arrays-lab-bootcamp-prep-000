const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(kittens) {
  return kittens.push("Ralph");
}

function destructivelyAppendKitten(name) {
  return kittens.unshift("Bob");
}
