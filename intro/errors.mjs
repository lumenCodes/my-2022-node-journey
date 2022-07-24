// handling async errors (1)

import { readFile } from 'fs/promises'
//using callback
readFile(new URL('index.mjs', import.meta.url), 'utf-8', (error, data)=> {
    if (error) {
        throw error
    } else {
        console.log(data)
    }
})


// using try catch
// try {
//     const result = await readFile(new URL('index.mjs', import.meta.url), 'utf-8')
// } catch (er) {
//     console.error(er)
//     console.log('Hi dear ❤')
// }

// using promise

const result = readFile(new URL('index.ms', import.meta.url), 'utf-8')
   .catch(err => {
    console.error(err)
   })
    console.log('Hi dear ❤')