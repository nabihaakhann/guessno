let guessno=Math.floor(Math.random()*100)+1
function check()
{
    let val=document.getElementById('in').value 
    if(val==='')
    {
        alert('Please enter a number')
    }
    else{
    let num=parseInt(document.getElementById('in').value)
    if(num==guessno)
    {
        document.getElementById('out').innerHTML='Congrats! You guessed it right'
    }
    else if(num>guessno){
        document.getElementById('out').innerHTML='Guess a smaller number'
    }
    else{
        document.getElementById('out').innerHTML='Guess a bigger number'
    }
}
}