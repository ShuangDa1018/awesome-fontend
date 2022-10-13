const fs = require('fs')
const path = require('path') //解析需要遍历的文件夹
const url = './src/svg'
const url1 = 'README.md'
//调用文件遍历方法
let addSvg = ''
fileDisplay(url)
//文件遍历方法
function fileDisplay(filePath) {
  //根据文件路径读取文件，返回文件列表
  let files = fs.readdirSync(filePath)
  //遍历读取到的文件列表
  files.forEach(function (filename) {
    //获取当前文件的绝对路径
    const filedir = path.join(filePath, filename)
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    let stats = fs.statSync(filedir)

    const isFile = stats.isFile() //是文件
    const isDir = stats.isDirectory() //是文件夹
    if (isFile) {
      addSvg += `![${filedir}](${filedir})  `
    }
    if (isDir) {
      fileDisplay(filedir) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  })
  // 写文件
  // let wirteFile = fs.readFileSync(url1).toString()
  // const svgMatch = /svg((.|\n)*)canvas/
  // delWite = wirteFile.match(svgMatch)
  // const newwirteFile = wirteFile.replace(delWite[1],addSvg)
  // console.log(delWite[1])
  // console.error(newwirteFile)
  fs.writeFileSync(path.join(__dirname, '../README.md'), JSON.stringify(addSvg))
}
