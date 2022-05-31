const fs = require('fs')


    try {
        if (!fs.existsSync('deleteMe')){
           fs.mkdirSync('deleteMe')
           console.log(`successful`)
        }
        
        } catch(error){
            console.log(error)
        }


//makeFolder()


