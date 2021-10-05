const { loremIpsum } = require('lorem-ipsum')

const controller = (req, res) => {
  const { length } = req.body
  if(!length) return res.status(400).send('Length is required')
  if(parseInt(length) <= 0) return res.status(400).send('Length must be positive integer')
  if(!parseInt(length)) return res.status(400).send('Length must be a number')

  const response = loremIpsum({
    count: parseInt(length),
    units: "words"
  })

  return res.status(200).send(response)

}

module.exports = controller