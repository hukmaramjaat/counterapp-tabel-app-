let numberSh = document.querySelector('.container h1')
const decrement = document.querySelector('#decrement')
const increment = document.querySelector('#increment')
const input = document.querySelector('input')
const rest = document.querySelector('.rest-btn button')


decrement.addEventListener('click',() =>{
   const inputval = parseInt(input.value)
   const countValue = parseInt(numberSh.innerText)
    numberSh.innerText = countValue - inputval
    
}) 

increment.addEventListener('click',() =>{
    const inputval = parseInt(input.value)
   const countValue = parseInt(numberSh.innerText)
    numberSh.innerText = countValue + inputval;
}) 

rest.addEventListener('click',() =>{
    numberSh.innerText = 0;
})
