const { join } = require('path')
const oak = require('oak')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const port = process.env.PORT ? _.toNumber(process.env.PORT) : 9001

let publicPath = join(__dirname,'public')
let barcode = []
let window = null

app.use(bodyParser.json())
app.use(express.static(publicPath))

let opts = {
  url: 'file://' + join(__dirname, 'index.html'),
  ontop: false,
  background: '#ffffff',
  size: '1920x1080',
  scripts: [
    {
      name: "BarcodeScanner",
      path: join(__dirname, '..', 'node_modules', 'simple-barcode-scanner')
    }
  ]
}

app.listen(port, function () {
  oak.on('ready', () => loadWindow(opts))
})

function loadWindow (opts) {
  console.log('Oak page is ready')
  window = oak.load({
    url: `http://localhost:${port}/`,
    ontop: false,
    background: '#ffffff',
    size: '1920x1080',
    scripts: [
      {
        name: "BarcodeScanner",
        path: join(__dirname, '..', 'node_modules', 'simple-barcode-scanner')
      },
      join(__dirname, 'public', 'js', 'scanner.js')

    ]
  }).on('scanned', function(obj){
    console.log('Barcode Scanned: ', obj)
  })
}

