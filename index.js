const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(kittens) {
  kittens.push("Ralph");
  return kittens
}

function destructivelyAppendKitten(kittens) {
  kittens.unshift("Bob");
  return kittens
}
