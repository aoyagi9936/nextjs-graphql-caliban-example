import express from 'express'
import next from 'next'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { IncomingMessage, ServerResponse } from 'http'

const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = express()
  const host = 'http://localhost:8090'
  const apiOptions = {
    target: host,
    changeOrigin: true,
    pathFilter: '/api',
  }
  const wsOptions = {
    target: host,
    changeOrigin: true,
    ws: true,
    pathFilter: '/ws',
  }
  server.use(createProxyMiddleware(apiOptions))
  server.use(createProxyMiddleware(wsOptions))
  server.all('*', (req: IncomingMessage, res: ServerResponse) => {
    return handle(req, res)
  })
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
    console.log(`> Ready on ws://localhost:${port}`)
  })
})
