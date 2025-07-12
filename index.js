const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("sciss")
let comp = document.getElementById("Ai")
let result = document.getElementById("result")
let robo = ["🪨","📄","✂️"]



function play(input){
    let rand =  robo.sort(() => 0.5 - Math.random())[0];
    if(input === "🪨" && rand === "🪨"){
        comp.innerHTML = "🪨 vs 🪨";
        result.innerHTML = "Draw, Play Again";

    } else if(input === "📄" && rand === "📄"){
        comp.innerHTML = "📄 Vs. 📄";
        result.innerHTML = "Draw, Play Again";
    }else if(input === "✂️" && rand === "✂️"){
        comp.innerHTML = "✂️ Vs. ✂️";
        result.innerHTML = "Draw, Play Again";
        } else if(input === "🪨" && rand === "✂️"){
            comp.innerHTML = "🪨 Vs. ✂️";
            result.innerHTML = "You Win!!";
        }else if(input === "🪨" && rand === "📄"){
            comp.innerHTML = "🪨 Vs. 📄";
            result.innerHTML = "Computer Wins!!";
        } else if(input === "📄" && rand === "🪨"){
            comp.innerHTML = "📄 Vs. 🪨";
            result.innerHTML = "You Win!!";
        }else if(input === "📄" && rand === "✂️" ){
            comp.innerHTML = "📄 Vs. ✂️";
            result.innerHTML = "Computer Wins!!";
        }else if(input === "✂️" && rand === "📄"){
            comp.innerHTML = "✂️ Vs. 📄";
            result.innerHTML = "You Win!!";
        }else if(input === "✂️" && rand === "🪨"){
            comp.innerHTML = "✂️ Vs. 🪨";
            result.innerHTML = "Computer Wins!!";
        }
    
        


}