$(document).ready(function () {
    console.log('doc loaded');
    $(".square3, .square5").click(function () {
        if ($(this).hasClass('x') || $(this).hasClass('o')){
            console.log("already clicked");
            return;
        }
        console.log(this);

        $(this).addClass(player);//mark the cell with the current player's mark


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
            ['6','7', '8', '9', '10'],
            ['11','12', '13', '14', '15'],
            ['16','17', '18', '19', '20'],
            ['21','22', '23', '24', '25']
        ];
    });

    $('#player1_icon1').click(function(){
        var style= $('<style>.x {background-image:url("images/x.png")}</style>')
        $('html > head').append(style);
    });
    $('#player1_icon2').click(function(){
        var style= $('<style>.x {background-image:url("images/o.png")}</style>')
        $('html > head').append(style);
    });
    $('#player1_icon3').click(function(){
        var style= $('<style>.x {background-image:url("images/skull.png")}</style>')
        $('html > head').append(style);
    });
    $('#player1_icon4').click(function(){
        var style= $('<style>.x {background-image:url("images/bunny.png")}</style>')
        $('html > head').append(style);
    })
    $('#player1_icon5').click(function(){
        var style= $('<style>.x {background-image:url("images/Pokeball.png")}</style>')
        $('html > head').append(style);
    });
    $('#player1_icon6').click(function(){
        var style= $('<style>.x {background-image:url("images/toad.png")}</style>')
        $('html > head').append(style);
    });
    $('#player1_icon7').click(function(){
        var style= $('<style>.x {background-image:url("images/fawks.png")}</style>')
        $('html > head').append(style);
    });
    $('#player1_icon8').click(function(){
        var style= $('<style>.x {background-image:url("images/java.png")}</style>')
        $('html > head').append(style);
    });

    $('#player2_icon1').click(function(){
        var style= $('<style>.o {background-image:url("images/x.png")}</style>')
        $('html > head').append(style);
    });
    $('#player2_icon2').click(function(){
        var style= $('<style>.o {background-image:url("images/o.png")}</style>')
        $('html > head').append(style);
    });
    $('#player2_icon3').click(function(){
        var style= $('<style>.o {background-image:url("images/skull.png")}</style>')
        $('html > head').append(style);
    });
    $('#player2_icon4').click(function(){
        var style= $('<style>.o {background-image:url("images/bunny.png")}</style>')
        $('html > head').append(style);
    });
    $('#player2_icon5').click(function(){
        var style= $('<style>.o {background-image:url("images/Pokeball.png")}</style>')
        $('html > head').append(style);
    });
    $('#player2_icon6').click(function(){
        var style= $('<style>.o {background-image:url("images/toad.png")}</style>')
        $('html > head').append(style);
    });
    $('#player2_icon7').click(function(){
        var style= $('<style>.o {background-image:url("images/fawks.png")}</style>')
        $('html > head').append(style);
    });
    $('#player2_icon8').click(function(){
        var style= $('<style>.o {background-image:url("images/java.png")}</style>')
        $('html > head').append(style);
    })

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

