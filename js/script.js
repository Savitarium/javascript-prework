{
    const playGame = function (playerInput) {
        clearMessages();
        function getMoveName(argMoveId){
            if(argMoveId == 1){
                return 'kamień';
            } else if(argMoveId == 2){
                return 'papier';
            } else if(argMoveId == 3){
                return 'nożyce';
            }
        }

        const displayResult = function (argComputerMove, argPlayerMove){
            if (argComputerMove == argPlayerMove){
                printMessage('Remis')
            }else if (argComputerMove == 'kamień' && argPlayerMove == 'papier' ){
                printMessage('Wygrałeś')
            }else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Wygrałeś')
            }else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Wygrałeś')
            }else {
                printMessage('Przegrałeś')
            }
        }
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber)
        const playerMove = getMoveName(playerInput);
        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Twój ruch to: ' + playerMove);
        displayResult(computerMove, playerMove)
    }
    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    });
}