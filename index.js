/*
    when we click start button
        if we are playing
            reload the page
        if we are not playing
            make end page not visible
            make time page visible
            start counter and decrease the timer by 1 sec
            generate a new question
    

    check the answer when a div is clicked
        if the answer is correct
            increase the score by one
            generate a new question
            display the correct for 1 sec

        if the answer is not correct
            display the tryagain for 1 sec
    

    when we generate a new question
        generate a question
        generate its correct answer
        place the answer in any one optionbox
        generate the wrong options
        place the wrong options in the remaining optionbox
        check weather the wrong option is not same as correct answer
        check weather the wrong option is not same from other wrong answer
*/

var play=false;
var score;
var i;
var correctanswer;
var z;
var arr;
document.getElementById("startreset").onclick=function(){
    if(play==true){
        location.reload();
    }
    else{
        play=true;
        score=0;
        document.getElementById("end").style.display="none";
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("scorevalue1").innerHTML=score;
        document.getElementById("time").style.display="block";
        i=60;
        document.getElementById("startreset").innerHTML="Reset Game";
        document.getElementById("timevalue").innerHTML=i;
        generatequestion();
        var time=setInterval(function(){
            i-=1;
            if(i==0){
                play=false;
                clearInterval(time);
                document.getElementById("time").style.display="none";              
                document.getElementById("end").style.display="block";
                document.getElementById("startreset").innerHTML="Start Game";
            }
            else{
                document.getElementById("timevalue").innerHTML=i;               
            }
        },1000)
    }
}
var q;
for(q=1;q<5;q++){
    document.getElementById("option"+ q).onclick=function(){
        window.console.log("yoyo");
        if(play==true){
            if(this.innerHTML==correctanswer){
                document.getElementById("correct").style.display="block";
                document.getElementById("tryagain").style.display="none";
                score+=1;
                document.getElementById("scorevalue").innerHTML=score;
                document.getElementById("scorevalue1").innerHTML=score;
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000);
                generatequestion();
            }
            else{
                document.getElementById("tryagain").style.display="block";
                document.getElementById("correct").style.display="none";
                setTimeout(function(){
                    document.getElementById("tryagain").style.display="none";
                },1000);     
            }       
        }
    }
}


function generatequestion(){
    var x=Math.round(1+9*Math.random());
    var y=Math.round(1+9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x + " x " + y;
    z=Math.round(1+3*Math.random());
    document.getElementById("option" + z).innerHTML=correctanswer;
    arr=[correctanswer];
    wronganswer();
}

function wronganswer(){
    for(q=1;q<5;q++){
        var counter=0;
        if(q!=z){
            var x=Math.round(1+9*Math.random());
            var y=Math.round(1+9*Math.random());
            wrong=x*y;
            if(wrong==correctanswer){
                q--;
            }else{
                for(k=0;k<4;k++){
                    if(arr[k]==wrong){
                        counter=1;
                    }
                }
                if(counter!=1){
                    document.getElementById("option" + q).innerHTML=wrong;
                    arr.push(wrong);
                }
            }
        }
    }
}


