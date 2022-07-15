// import test from "jest";
// import { getNewUser, mapObjectToArray } from "./test.mjs";
const {mapObjectToArray, getNewUser} = require('./test.mjs')


describe('mapObjectToArray()', ()=>{
    test('adds values to array using callbCK', ()=>{
        const asert = mapObjectToArray({type: 'meat', temp: 'warm', taste: 'sour'}, (key, value)=>{
            return value 
        })
        expect(asert).toEqual(['meat', 'warm', 'sour'])


    })
})

describe('a new function()', ()=>{
    test('returns a user succsfully', async ()=>{
        const result = await getNewUser(1)

        expect(result).toBeTruthy()
        expect(result.id).toBe(1)
    })
})