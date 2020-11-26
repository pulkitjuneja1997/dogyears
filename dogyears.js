var ageinhy, ageindy;
var i = 0;
var rem = 0;
var k=0;
var restr, restr1;

function converter(){
    ageinhy = document.getElementById("age").value;
    monthno = document.getElementById("months").value;
    month = monthno/12;

    if(ageinhy >= 21){
        ageinhy -=21;
        rem = (ageinhy + month)/4;
        console.log(rem);
        rest = rem - parseInt(rem); 
        round = rem- rest;
        console.log(rest);
        console.log(round);
  
       document.getElementById("screen").innerHTML = (round + 2) + " " +  "years" + " " + (rest*12) + " " + "months";
       document.getElementById("resultheading").innerHTML = "Your age in dog years are:"  ;
    }

    else{        
        
        rem = (parseFloat(ageinhy) + parseFloat(month))/10.5;
        console.log(rem);
        rest =  rem - parseInt(rem); 
        round = rem - rest;
        console.log(rest);
        console.log(round);

        restr = parseFloat(rest).toFixed(2) * 12 ;
        console.log(restr);
        restr1 = parseInt(restr) ;
        console.log(restr1) ;
    
        document.getElementById("screen").innerHTML = (round) + " " +  "years" + " " + (restr1) + " " + "months";
        document.getElementById("resultheading").innerHTML =  "Your age in dog years are:"  ;
    }
}

