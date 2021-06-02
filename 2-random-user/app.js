import get from './utils/getElement.js'

const URL = 'https://randomuser.me/api/'

const img = get('.user-img')
const ttile = get('.user-title')
const value = get('.user-value')
const btn = get('.btn')
// transforming nodelist to proper array
const btns = [...document.querySelectorAll('.icon')]
console.log(btns)
