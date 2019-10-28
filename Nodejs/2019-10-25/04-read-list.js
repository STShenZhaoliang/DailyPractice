var fs = require('fs')

fs.readdir('/Users/Shenzhaoliang/Sites/demo-suning', function (err, files) {
    if (err) {
        return console.log('目录不存在')
    }
    console.log(files)
})
