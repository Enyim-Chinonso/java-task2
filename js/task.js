const result = document.getElementById('result');
const userInput = document.getElementById('input');
const btn = document.querySelector('.btn');
const click = document.getElementById('click');
const refresh = document.getElementById('refresh')
let guess = 30;
let clickcount = 5;
click.textContent = clickcount;
function checkUserinput(){
    if(userInput.value >guess){
        result.innerHTML = 'Your guess is high'
        // alert('Your guess is high')
    }
    else if(userInput.value < guess){
        result.innerHTML = 'Your guess is low'
        // alert('Your guess is low')
    }
    else if(userInput.value == guess){
        result.innerHTML = `You win!! the number is ${guess }`
        // alert('You win!!!')
    }
}
function checkCount(){
    clickcount--;
    click.textContent = clickcount;
    if(clickcount == 0){
        refresh.innerHTML = ('Refresh to play again')
    }
}

btn.addEventListener('click', function(){
    checkCount()
    checkUserinput()
    userInput.value = " "
    
})
