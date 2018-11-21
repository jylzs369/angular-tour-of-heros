const Koa = require('koa')
const route = require('koa-route')
const static = require('koa-static')
const path = require('path')
const fs = require('fs')
const proxy = require('http-proxy-middleware')
app = new Koa()

const port = process.env.PORT || '3333'

const index = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, './dist/angular-tour-of-heros/index.html'))
}


const assets = static(path.join(__dirname, 'dist', 'angular-tour-of-heros'))


app.use(assets)
app.use(route.get('/', index))
app.listen(port)
