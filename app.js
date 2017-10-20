/**
 * Created by LangK on 2016/12/20.
 */
var path = require('path');
var http = require('http');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware')

require('./API/config.js')
var app = express()

app.use(express.static(path.join(__dirname, '/dist/')))
// var port = 3034
// app.set('port', port)
var proxyTable = {
    '/V1.0.0/pageContext': {
        target: "http://" + global.Ip + ":" + global.port,
        changeOrigin: true
    }
}

Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(context, options))
})


// server.listen(port);
app.listen(3010, function () {
    console.log('server start')
})
