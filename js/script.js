function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove){
        if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis')
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Wygrałeś')
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Przegrałeś')
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrałeś')
        } else if(argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis')
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrałeś')
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrałeś')
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrałeś')
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis')
        } else if(argPlayerMove == 'nieznany ruch') {
            printMessage('Nie no... Młotkiem na mnie?')
        } else if(argComputerMove == undefined && argPlayerMove == undefined) {
            printMessage('I mamy undefined')
        }
    }
    let randomNumber = Math.floor(Math.random() * 3 + 1);


    let computerMove = getMoveName(randomNumber)
    /*if(randomNumber == 1){
        computerMove = 'kamień';
    } else if(randomNumber == 2){
        computerMove = 'papier'
    } else if(randomNumber == 3) {
        computerMove = 'nożyce'
    }*/

    printMessage('Mój ruch to: ' + computerMove);

    let playerMove = getMoveName(playerInput);

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