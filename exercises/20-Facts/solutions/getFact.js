function getFact() {
    return fetch("https://cat-fact.herokuapp.com/facts/random?amount=1&animal_type=cat")
  }
  
  module.exports = { getFact };
  