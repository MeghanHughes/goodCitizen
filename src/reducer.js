const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)
    return newState
}

// function reducer (state, action) {
//   const newState = clone(state)
//
//   switch (action.type) {
//
//     case 'SUBMIT_SENDS_FORM_TO_DB':
//       const form = action.payload
//       const submit = newState.products[productId]
//
//       if (product.stock === 0) return newState
//       // early return
//
//       product.quantity +=1
//       product.stock -=1
//
//       product.subtotal += product.price
//       newState.total += product.price
//
//       return newState
//   }
//
// }
