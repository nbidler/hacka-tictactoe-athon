/**
 * Created by Nick on 2/10/2016.
 */


/*
* checkWin
* 0 params, 1 return - player who just moved won, false - continue playing
* reads from global array gameArea
*
* WIN CONDITIONS -
* 1. HORIZONTAL - all entries in an array are the same
* 2. VERTICAL - all entries in the same index of different arrays are the same
* 3. DIAGONAL - 0,0 + 1,1 + 2,2 OR 2,0 + 1,1 + 0,2 are the same - not sure about detecting dynamically
* */
function checkWin () {
    //var matchFound = false;
    var lineCheck = false;
    //  these assume gama area is square
    var rows = gameArea.length;
    var cols = gameArea[0].length;
    //

    //HORIZONTAL CHECK
    //  go through the array line by line
    for (var i =0; i < rows; i++)
    {
        /*if (gameArea[i][0] == gameArea[i][1] == gameArea[i][2])
        {
            return gameArea[i][0];
        }*/

        //the line matches unless two items aren't the same
        lineCheck = true;
        //  go through each row item by item
        for (var j =1; j < cols; j++)
        {
            //loop through until something does not match
            if (gameArea[i][j-1] != gameArea[i][j])
            {
                // mismatch found, line does not match, try next line
                lineCheck = false;
                break;
            }
        }
        //if no mismatches found, whole line matches, match found, return to
        if (lineCheck) {
            return true;
        }
    }

    //VERTICAL CHECK
    //  go through the array column by column
    for (var i = 0; i < rows; i++) {
        /*if (gameArea[0][i] == gameArea[1][i] == gameArea[2][i]) {
            return gameArea[0][i];
        }*/
        //the line matches unless two items aren't the same
        lineCheck = true;
        //  go through each row item by item
        for (var j =1; j < cols; j++)
        {
            //loop through until something does not match
            if (gameArea[j-1][i] != gameArea[j][i])
            {
                // mismatch found, line does not match, try next line
                lineCheck = false;
                break;
            }
        }
        //if no mismatches found, whole line matches, match found, return to
        if (lineCheck) {
            return true;
        }
    }

    //DIAGONAL CHECK
    //DIAGONAL - TOP LEFT TO BOTTOM RIGHT
    for (var i = 1; i < rows; i++) {
        lineCheck = true;
        if (gameArea[i-1][i-1] != gameArea[i][i])
        {
            // mismatch found, line does not match, try next line
            lineCheck = false;
            break;
        }
        if (lineCheck) {
            return true;
        }
    }

    //DIAGONAL - TOP LEFT TO BOTTOM RIGHT
    for (var i = 0; i < rows-1 ; i++) {
        //the line matches unless two items aren't the same
        lineCheck = true;
        //  go through each row item by item
        for (var j = cols-1; j >= 1; j--) {
            if ((i + j + 1) == rows) {
                //loop through until something does not match
                if (gameArea[i][j] != gameArea[i+1][j-1]) {
                    // mismatch found, line does not match, try next line
                    lineCheck = false;
                    break;
                }
            }
        }
        //if no mismatches found, whole line matches, match found, return to
        if (lineCheck) {
            return true;
        }
    }

    /*
    * SOMEHOW
    * USE isNaN TO DETERMINE IF ANY NUMBERS LEFT
    * IF ANY NUMBERS LEFT, NOT END OF GAME
    * IF NO NUMBERS LEFT, END OF GAME WITH TIE
    * RETURNS TRUE IF PREVIOUS MOVE WON THE GAME
    * RETURNS FALSE IF GAME CONTINUES
    * RETURNS NULL IF TIE? MAYBE?
    * */

    //if no player has made winning move, continue
    return false;
    //if all possibilities checked and no match, game was tie
}