let http = require('http')  // 引入http核心模块，创建web服务器
let fs = require('fs')  // 引入fs核心模块，操作服务器资源文件
let server = http.createServer()
server.on('request', (req, res) => {
  let url = req.url 
  if (url === '/') {
    fs.readFile('./resource/index.html', (error, data) => {
      if (error) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('你要的资源不存在，请稍后再试！')
      } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
      }
    }) // 当请求路径为‘/’，返回index.html文档，所以这里需要借助fs.readFile()来读取文档内容
  } else if (url === '/img') {
    fs.readFile('./resource/05.jpg', (error, data) => {
      if (error) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('你要的资源不存在，请稍后再试！')
      } else {
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    }) // 同理，这里也需要对文档的操作
  } else {
    res.end('404 NOT FOUND')
  }
})
server.listen(3000, () => {
  console.log('服务器已经启动，可以访问了。。。')
})