const http = require('http')
const fs = require('fs')
const url = require('url')
http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true)
    if (urlObj.pathname === '/getWeather') {
        if (urlObj.query.city === 'beijing') {
            res.end(JSON.stringify({ city: 'beijing', weather: 'sunny' }))
        } else {
            res.end(JSON.stringify({ city: urlObj.query.city, weather: 'unkonw' }))
        }
    } else {
        res.writeHead(404, 'Not Found')
        res.end('/getWeather')
    }
}).listen(8000)