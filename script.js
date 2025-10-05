///Constructor Function for Screen Transitions
    function screenTransition(screen1,screen2,displayType){
      currentPage = document.querySelector(screen1);
      desiredPage = document.querySelector(screen2);
      currentPage.style.display = "none"
      desiredPage.style.display = displayType;
        }

    function startGame(){
        screenTransition(".present", ".buttonDiv", "flex");
        let count = 0
        const theButton = document.getElementById("theButton");
        theButton.addEventListener("click", function(){
            count++;
            theButton.innerHTML = count;
            if(checkForVictory(count)){
                screenTransition(".buttonDiv", ".end", "flex");
                return
            }
        });
    }
    function checkForVictory(counter){
        victoryCondition = 1234 //Number of clicks to win da game
        return counter >= victoryCondition
    }
