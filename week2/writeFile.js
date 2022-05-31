const fs = require('fs')

//Write Sync
// const data = `write a new text`
// try {
//    fs.writeFileSync('./newFolder/index.txt', data)
//    console.log('successful')
// }catch(error){
//     console.log(error)
// }

//write Async
let data = `Something Else`
try {
    fs.writeFile('./newFolder/text.txt', data, err =>{
        if (err){
            console.log(err)
        }
        console.log(`successful`)
    })
 }catch(error){
     console.log(error)
 }