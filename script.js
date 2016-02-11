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

