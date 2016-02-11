$(document).ready(function () {
    $(".square").click(function () {
        if ($(this).hasClass('x') || $(this).hasClass('o')){
            return;
        }
        console.log(this);
        $(this).addClass(player);
        square_clicked(player);
        addToIndex($(this).attr('id'), player);
        console.log("player:"+player);


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