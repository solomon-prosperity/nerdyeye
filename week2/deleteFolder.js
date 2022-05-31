const fs = require('fs')

fs.rm('./deleteMe', {recursive: true}, (err)=>{
    if (err) {
        console.log(err)
    }
    console.log(`successful`)
})