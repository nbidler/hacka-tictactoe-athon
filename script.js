$(document).ready(function () {
    console.log('doc loaded');
    $(".square").click(function () {
        if ($(this).hasClass('x') || $(this).hasClass('o')){
            console.log("already clicked");
            return;
        }
        console.log(this);

        $(this).addClass(player);//mark the cell with the current player's mark

        //mark the cell with the current player's mark




        addToIndex($(this).attr('id'), player);//store the location of the click into your storage variable
        console.log("player:"+player);


        //checkWin();//check for win
        console.log('checked win'+ checkWin());
        square_clicked(player);//toggle the player to the next one after processing the click


    });
    //This is the click handler that fires the reset function when the reset button is clicked
    $('#reset').click(function(){
        console.log('reset clicked');
        reset();
    });
    //this checks if the user wants to be on a 3x3 or 5x5 game board, it also changes the gameArea array size
    $('#3x3').click(function(){
        $('.game_board3').css('display','block');
        $('.game_board5').css('display','none');
        gameArea = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9']
        ];
    });

    $('#5x5').click(function(){
        $('.game_board3').css('display','none');
        $('.game_board5').css('display','block');
        gameArea = [
            ['1', '2', '3', '4', '5'],
            ['6','7', '8', '9', '10'],
            ['11','12', '13', '14', '15'],
            ['16','17', '18', '19', '20'],
            ['21','22', '23', '24', '25']
        ];
    });
});


function square_clicked(a){
    if (player=='x'){
        player = 'o';
    }
    else {
        player = 'x';
    }
    console.log("player:"+player);
}
//this is the reset function that resets the x and o classes and resets the gameArea Array
function reset(){
    console.log('reset recieved');
    $('.square').removeClass('x o');
    gameArea = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ];
}

