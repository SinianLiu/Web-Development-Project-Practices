// name: Sinian Liu
// NEU ID: 002790887
// email: liu.sini@northeastern.edu
// Slack handle: @Sinian Liu
// github username: SinianLiu



const path = require('path')

const people = `
Name         |  NEUID      | Email                     | Slack handle  | github username
Sinian Liu   | 002790887   | liu.sini@northeastern.edu | @Sinian Liu   | SinianLiu

`.split('\n') // convert to array of lines
  .filter(line => !!line.replace(/\s/g, '')) // Remove empty lines

if (require.main === module) {
  // Run if we are being run directly

  // List the people
  for (person of people) {
    console.log(person)
  }
}
// If not being run directly, return the text
module.exports = people
