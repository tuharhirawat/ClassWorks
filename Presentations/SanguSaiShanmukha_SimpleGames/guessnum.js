const input=document.getElementById("guess")
const btn=document.getElementById("guessbtn")
const score=document.getElementById("score")
const Reset=document.getElementById("Reset")
let spanner=document.createElement('span')

let lifes = 5;
score.textContent=`Lifes :${lifes}`
let num=parseInt(Math.floor((Math.random()*100)+1))



btn.addEventListener('click',(event)=>{
    spanner.textContent=""
    event.preventDefault()
    let val=parseInt(input.value)
    

    
    
    setting(num,val)

    if(lifes===0)
    {
        spanner.textContent="out of lifes"
        lifes=5
        Reset.before(spanner)
        input.readOnly=true;
        return
    }
})


function setting(num,val)
{
    console.log(num)
    

    if (val<=0 || val>100)
        {
            spanner.textContent="Enter a number between 1 and 100"
            input.value=""
            Reset.before(spanner)
            return
        }

    if(num===val)
        {
            spanner.textContent="You are Worthy"
            input.value=""
            num=parseInt(Math.floor((Math.random()*100)+1))
            Reset.before(spanner)
            input.readOnly=true;
            return
        }
        else{
            if(num>val)
            {
                
                spanner.textContent="the number is less than the selected number"
                input.value=""
                Reset.before(spanner)
                lifes=lifes-1
                score.textContent=`Lifes :${lifes}`
                return
            }
            else if(num<val)
            {
                spanner.textContent="the number is greater than the selected number"
                input.value=""
                Reset.before(spanner)
                lifes=lifes-1
                score.textContent=`Lifes :${lifes}`
                return
            }
        }
}