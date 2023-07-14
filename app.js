let cskruns =["1","2","3","4","5","6"];
let miruns =["6","6","6","6","4","4"];

let cskscore =0;
let miscore =0;
let ballCounter =0;

function strikeFunction()
{
    console.log('hi')
    ballCounter++;
    let run =Math.floor((Math.random()*5))*2;

    if(run==8)
    {
        run='W';
    }
    if(ballCounter <= 6)
    {
        if(run != 'W')
        {
            cskscore=cskscore + run;
            document.getElementById("cskscore").textContent=cskscore;
        }
        cskruns[ballCounter-1] =run;
        document.getElementById("cskruns").textContent= cskruns;

    }
    else if(ballCounter<=12)
    {
        if(run != 'W')
        {
            miscore=miscore + run;
            document.getElementById("miscore").textContent=miscore;
        }
        miruns[ballCounter-7] =run;
        document.getElementById("miruns").textContent=miruns;

        if(miscore>cskscore)
        {
         ballCounter=12;
        }

    }
    else if(ballCounter >=12)
    {
        document.getElementById("stike").disable=true;
        let maxScore=Math.max(cskscore,miscore);
        console.log(maxScore)
        if(maxScore == cskscore)
        {
            document.getElementById("CSK").classList.add('winner');
        }
        else  if(maxScore == miscore)
        {
            document.getElementById("MI").classList.add('winner');
        }
    }
})