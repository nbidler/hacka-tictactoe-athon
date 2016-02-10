$(document).ready(function () {
    $(".square").click(function () {
        console.log(this);
        $(this).addClass(player);
        square_clicked(player);
        console.log("player:"+player);

        if ((player == 'o' || player == 'x')){


        }
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