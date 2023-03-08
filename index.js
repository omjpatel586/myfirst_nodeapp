const http = require('http')

http.createServer((resq, resp) => {
    resp.writeHead(200 ,{'Content-Type': 'html'})
    resp.write("<div style='background-color: yellow'>")
    resp.write("<h1>Hello</h1>")
    resp.write("</div>")
    resp.end()
}).listen(3000)