const React = require('react')
const _ = require('lodash')
// const Map = require('./map')
//components

module.exports = function App (props) {
  console.log('props', props)
  console.log('state', props.store.getState())

  return (
    <body>
      <h3>Good Citizen</h3>
      <h4>Keeping Wellington nice</h4>
      <span><ul><li>Zoom to your position</li><li>Click to drop a pin</li><li>Click on pin to register hazard</li><li>Submit to log the hazard</li></ul></span>
    </body>
  )
}
