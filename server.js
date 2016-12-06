'use strict'

process.env.NODE_ENV = 'development'
process.env.PORT = 5555

let express     = require('express')
,   serveStatic = require('serve-static')
,   compression = require('compression')
,   path        = require('path')
,   app = express()

app.use(compression())

app.get('/bootstrap/:component', (req, res, next) => {
  // res.sendFile(req.params.component + '.html', { root: path.join(__dirname, 'pages/bootstrap') })
  try {
    res.render(path.join(__dirname, 'pages/index.ejs'), {
      path: 'bootstrap/' + req.params.component + '.html'
    })
  } catch(err) {
    res.send(err)
  }
})

app.use(serveStatic(path.join(__dirname, 'dependencies')))

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port ' + process.env.PORT)
})
