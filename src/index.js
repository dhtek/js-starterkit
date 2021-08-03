import './index.css'

import numeral from 'numeral'

const courseValue = numeral(1000).format('$0,0.00')

debugger

//ES6 template string feature using backticks
console.log(`I would pay ${courseValue} for this awesome course!`)
