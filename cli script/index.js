#!/usr/bin/env node

console.log('I am building a CLI')

let cmdArgs = require('minimist')

var name = process.argv[2]
var argv = cmdArgs(['help', 'jsjdj'],cmdArgs.string)
    // (process.argv.slice(2), {
    //     Boolean: ['help', 'isLive'],
    //     String: ['file']
    // })
console.log(cmdArgs)


// how do I add arguments to this

/**
 * To add cmd arguments use  this syntax
 * 
 *  node nameOfThefile.js the args
 * we use minimist to beautify the output and also set rules
 */

//add help thingy just like git cli

function help() {
    console.log(` mycliName
    
    This is how to use myCliName

    --help              description of the help
    example

    --action or text    this is used to calculate sum


    `)
}
// help()
