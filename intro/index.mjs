import { readFile, writeFile } from 'fs/promises'



let template = await readFile(new URL('index.html', import.meta.url), 'UTF-8') // without the utf-8 it remains as abuffer 
//also we are trying to read the content of the file index.html

const data = {
    tit: 'This is a new day',
    cont: 'This ia  a paragraph in athis file'
}

for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value) // this will replace the found data that has the format  {key} with the new value in data variable
}

await writeFile(new URL('newhtml.html', import.meta.url), template) // the new url takes in the name of the new file we are creatng and the second argument in the write file takes in wjat we want to wite into the new file that we are creating
// if the second argument is in quote then it writes the thing that is enclosed in qutoes into the file

