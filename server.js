'use strict'

process.env.NODE_ENV = 'development'
process.env.PORT = process.env.PORT || 3333

let express     = require('express')
,   serveStatic = require('serve-static')
,   compression = require('compression')
,   path        = require('path')
,   fs          = require('fs')
,   app = express()

app.use(compression())

app.get('/', (req, res, next) => {
  fs.readdir('./pages', (err, files) => {
    var data = { folders: [] }
    files.map(file => { if (file.indexOf('.') < 0) data.folders.push(file) })
    res.render(path.join(__dirname, 'pages/index.ejs'), { data: data })
  })
})

app.get('/c/:folder', (req, res, next) => {
  fs.readdir('./pages/' + req.params.folder, (err, files) => {
    var data = {
      folder: req.params.folder,
      paths: []
    }
    files.map(file => { if (file.substr(-5) === '.html') data.paths.push(file.split(/\./g)[0]) })
    res.render(path.join(__dirname, 'pages/index.ejs'), { data: data })
  })
})

app.get('/c/:folder/:component', (req, res, next) => {
  try {
    res.render(path.join(__dirname, 'pages/index.ejs'), {
      data: {
        folder: req.params.folder,
        path: req.params.folder + '/' + req.params.component + '.html',
        component: req.params.component
      }
    })
  } catch(err) {
    res.send(err)
  }
})

app.use(serveStatic(path.join(__dirname, 'dependencies')))
app.use(serveStatic(path.join(__dirname, 'bower_components')))

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port ' + process.env.PORT)
})
