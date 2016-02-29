/*eslint no-console:0*/
import React from 'react'
import { createServer } from 'react-project/server'
import { RouterContext } from 'react-router'
import Document from '../modules/components/Document'
import routes from '../modules/routes'
import morgan from 'morgan'

function renderDocument(props, cb) {
  cb(null, <Document {...props}/>)
}

function renderApp(props, cb) {
  const use404 = props.location.pathname === '/throws-an-error'
  const err = use404 ? { status: 404 } : null
  cb(err, <RouterContext {...props}/>)
}

function devMiddlewares(server) {
  server.use(morgan('dev'))
}

function prodMiddlewares(server) {
  server.use(morgan('combined'))
}

createServer({
  renderDocument,
  renderApp,
  routes,
  devMiddlewares,
  prodMiddlewares
}).start()
