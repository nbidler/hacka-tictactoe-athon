//ON DOCUMENT LOAD
$(document).ready(function () {
    console.log('doc loaded');

    //when a square on either board is clicked
    $(".square3, .square5").click(function () {

        //if clicked after game is won, reset the game
        if (won == 1) {
            reset();
            won = 0;
            return;
        }

        if (anarchyMode) // if anarchyMode is not 0, i.e. on
        {
            //if clicked square is already selected by a player
            if ( $(this).hasClass('x') || $(this).hasClass('o'))
            {
                // there is 65% chance to take over clicked square
                if (Math.random() < 0.64)
                {
                    //if does not have the player's class, steal
                    if (!($(this).hasClass(player)))
                    {
                        $(this).toggleClass('x');
                        $(this).toggleClass('o');
                        addToIndex($(this).attr('id'), player);
                    }
                }
                //if already has player's class OR unlucky, do nothing/lose one turn
            }
            //if unclaimed, take square normally
            else {
                console.log(this);
                $(this).addClass(player);//mark the cell with the current player's mark
                addToIndex($(this).attr('id'), player);//store the location of the click into your storage variable
                console.log("player:" + player);
            }
        }// otherwise, anarchyMode is off and continue as normal
        else {
            //if square was already claimed,
            if ($(this).hasClass('x') || $(this).hasClass('o')) {
                $('.square_occupied').effect('drop');
                setTimeout(function () {
                    $('.square_occupied').effect('drop');
                }, 1500);
                console.log("already clicked");
                return;
            }
            console.log(this);
            $(this).addClass(player);//mark the cell with the current player's mark
            addToIndex($(this).attr('id'), player);//store the location of the click into your storage variable
            console.log("player:" + player);
        }

        var gameResult = checkWin();//check for win and increment the stat counters
        if (gameResult == 'w'){
            if (player == 'x'){
                player1wins++;
                $('.player_1_stat h2').text(player1wins).effect('highlight').effect('highlight');
                won = 1;
            } else {
                player2wins++;
                $('.player_2_stat h2').text(player2wins).effect('highlight').effect('highlight');
                won = 1;
            }
        } else if (gameResult == 't'){
            tiewins++;
            $('.tie_stats h2').text(tiewins).effect('highlight').effect('highlight');

            won = 1;
        }

        console.log('checked win '+ gameResult);
        square_clicked(player);//toggle the player to the next one after processing the click
    });

    //This is the click handler that fires the reset function when the reset button is clicked
    $('#reset').click(function(){
        console.log('reset clicked');
        reset();
    });
    //this checks if the user wants to be on a 3x3 game board, it also changes the gameArea array size
    $('#3x3').click(function(){
        gameAreaSize = 3;
        $('.game_board3').css('display','block');
        $('.game_board5').css('display','none');
        gameArea = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9']
        ];
    });
    //this checks if the user wants to be on a 5x5 game board, it also changes the gameArea array size

    $('#5x5').click(function(){
        gameAreaSize = 5;
        $('.game_board3').css('display','none');
        $('.game_board5').css('display','block');
        gameArea = [
            ['1', '2', '3', '4', '5'],
            ['6', '7', '8', '9', '10'],
            ['11','12', '13', '14', '15'],
            ['16','17', '18', '19', '20'],
            ['21','22', '23', '24', '25']
        ];
    });

    $('#normal').click(function(){
       anarchyMode = 0;
        console.log('anarchymode= ' +anarchyMode);
    });
    $('#anarchy').click(function(){
        anarchyMode = 1;
        console.log('anarchymode= ' +anarchyMode);
    });
    //This chunk of code is for selecting the symbols for player 1 and player 2, currently both player 1 and 2 can select the same symbol, but it will be fixed
    $('#player1_icon1').click(function(){
        var style= $('<style>.x {background-image:url("images/battletoads.png")}</style>');
        $('html > head').append(style);
        var battletoads = new Audio('Audio/battletoads.mp3');
        battletoads.play();
    });
    $('#player1_icon2').click(function(){
        var style= $('<style>.x {background-image:url("images/contra.png")}</style>');
        $('html > head').append(style);
        var contra = new Audio('Audio/contra.mp3');
        contra.play();
    });
    $('#player1_icon3').click(function(){
        var style= $('<style>.x {background-image:url("images/duckhunt.png")}</style>');
        $('html > head').append(style);
        var duckhunt = new Audio('Audio/duckhunt.mp3');
        duckhunt.play();
    });
    $('#player1_icon4').click(function(){
        var style= $('<style>.x {background-image:url("images/kinghippo.png")}</style>');
        $('html > head').append(style);
        var kinghippo = new Audio('Audio/kinghippo.mp3');
        kinghippo.play();
    });
    $('#player1_icon5').click(function(){
        var style= $('<style>.x {background-image:url("images/link.png")}</style>');
        $('html > head').append(style);
        var zelda = new Audio('Audio/zelda.mp3');
        zelda.play();
    });
    $('#player1_icon6').click(function(){
        var style= $('<style>.x {background-image:url("images/mario.png")}</style>');
        $('html > head').append(style);
        var mario = new Audio('Audio/mario.mp3');
        mario.play();
    });
    $('#player1_icon7').click(function(){
        var style= $('<style>.x {background-image:url("images/megaman.png")}</style>');
        $('html > head').append(style);
        var megaman = new Audio('Audio/megaman.mp3');
        megaman.play();
    });
    $('#player1_icon8').click(function(){
        var style= $('<style>.x {background-image:url("images/metroid.png")}</style>');
        $('html > head').append(style);
        var metroid = new Audio('Audio/metroid.mp3');
        metroid.play();
    });

    $('#player2_icon1').click(function(){
        var style= $('<style>.o {background-image:url("images/battletoads.png")}</style>');
        $('html > head').append(style);
        var battletoads = new Audio('Audio/battletoads.mp3');
        battletoads.play();
    });

    $('#player2_icon2').click(function(){
        var style= $('<style>.o {background-image:url("images/contra.png")}</style>');
        $('html > head').append(style);
        var contra = new Audio('Audio/contra.mp3');
        contra.play();
    });

    $('#player2_icon3').click(function(){
        var style= $('<style>.o {background-image:url("images/duckhunt.png")}</style>');
        $('html > head').append(style);
        var duckhunt = new Audio('Audio/duckhunt.mp3');
        duckhunt.play();
    });
    $('#player2_icon4').click(function(){
        var style= $('<style>.o {background-image:url("images/kinghippo.png")}</style>');
        $('html > head').append(style);
        var kinghippo = new Audio('Audio/kinghippo.mp3');
        kinghippo.play();
    });
    $('#player2_icon5').click(function(){
        var style= $('<style>.o {background-image:url("images/link.png")}</style>');
        $('html > head').append(style);
        var zelda = new Audio('Audio/zelda.mp3');
        zelda.play();
    });
    $('#player2_icon6').click(function(){
        var style= $('<style>.o {background-image:url("images/mario.png")}</style>');
        $('html > head').append(style);
        var mario = new Audio('Audio/mario.mp3');
        mario.play();
    });
    $('#player2_icon7').click(function(){
        var style= $('<style>.o {background-image:url("images/megaman.png")}</style>');
        $('html > head').append(style);
        var megaman = new Audio('Audio/megaman.mp3');
        megaman.play();
    });
    $('#player2_icon8').click(function(){
        var style= $('<style>.o {background-image:url("images/metroid.png")}</style>');
        $('html > head').append(style);
        var metroid = new Audio('Audio/metroid.mp3');
        metroid.play();
    })

});


function square_clicked(a){
    if (player=='x'){
        player = 'o';
        $('.player2_turn').show();
        $('.player1_turn').hide();
        var player1 = new Audio('Audio/player1.wav');
        player1.play();
    }
    else {
        player = 'x';
        $('.player1_turn').show();
        $('.player2_turn').hide();
        var player2 = new Audio('Audio/player2.wav');
        player2.play();

    }
    console.log("player:"+player);
}
//this is the reset function that resets the x and o classes and resets the gameArea Array
function reset(){
    console.log('reset recieved');
    $('.square3, .square5').removeClass('x o');
    if(gameAreaSize == 3){
        gameArea = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9']
        ];
    } else if(gameAreaSize==5){
        gameArea = [
            ['1', '2', '3', '4', '5'],
            ['6','7', '8', '9', '10'],
            ['11','12', '13', '14', '15'],
            ['16','17', '18', '19', '20'],
            ['21','22', '23', '24', '25']
        ];
    }

}

