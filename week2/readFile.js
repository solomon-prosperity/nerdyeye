const fs = require('fs')

//Read Sync

// try {
//    const data = fs.readFileSync('./newFolder/text.txt', 'utf-8')
//    console.log(data)
// }catch(error){
//     console.log(error)
// }

//Read Async

fs.readFile('./newFolder/index.txt', 'utf-8' , (err, data)=>{
    if (err){
        console.log(err)
    }
    console.log(data)
})


