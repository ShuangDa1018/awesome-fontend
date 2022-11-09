const fs = require('fs')
function copyFile(originFilePath, targetFilePath) {
	fs.readFile(originFilePath, (err, res) => {
		if (err) {
			return console.log(err)
		}
		fs.writeFile(targetFilePath, res, function(err, res) {
			if (err) {
				return console.log(err)
			}
			console.log('copy over')
			fs.appendFile(targetFilePath, `\r\n${new Date().toLocaleString()}`, (err, res) => {
			
			})
		})

	})
}
copyFile('/Users/haizhi/Desktop/tanshuang/mygithub/awesome-fontend/README.md', '/Users/haizhi/Desktop/tanshuang/mygithub/awesome-fontend/README1.md')