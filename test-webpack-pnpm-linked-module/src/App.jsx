import React from 'react'
import { renderToString } from 'react-dom/server'
// import { Menu } from 'mock-aria-components'
const { Menu } = require('mock-aria-components')

const html = renderToString(<div>hello<Menu /></div>)

console.log(html)
