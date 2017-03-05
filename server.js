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
  fs.readdir('./src', (err, files) => {
    var data = { folders: [] }
    files.map(file => { if (file.indexOf('.') < 0) data.folders.push(file) })
    res.render(path.join(__dirname, 'index.ejs'), { data: data })
  })
})

app.get('/dist/:folder', (req, res, next) => {
  fs.readdir('./src/' + req.params.folder, (err, files) => {
    var data = {
      folder: req.params.folder,
      paths: []
    }
    files.map(file => { if (file.substr(-5) === '.html') data.paths.push(file.split(/\./g)[0]) })
    res.render(path.join(__dirname, 'index.ejs'), { data: data })
  })
})

app.get('/dist/:folder/:component', (req, res, next) => {
  try {
    res.render(path.join(__dirname, 'index.ejs'), {
      data: {
        folder: req.params.folder,
        path: 'dist/' + req.params.folder + '/' + req.params.component + '.html',
        component: req.params.component
      }
    })
  } catch(err) {
    res.send(err)
  }
})

app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(serveStatic(path.join(__dirname, 'bower_components')))

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port ' + process.env.PORT)
})
