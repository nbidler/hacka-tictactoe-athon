/**
 * Created by Nick on 2/10/2016.
 */


/*
* checkWin
* 0 params, 1 return - 'x' X wins, 'o' O wins, ' ' tie
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
            return gameArea[i][j-1];
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
            return gameArea[i][j-1];
        }
    }

    //DIAGONAL CHECK
    //  will come back to making this more adaptable later
    //  right now just check the two diagonals
    if (gameArea[0][0] == gameArea[1][1] == gameArea[2][2]) {
        return gameArea[0][0];
    }
    else if (gameArea[2][0] == gameArea[1][1] == gameArea[0][2]) {
        return gameArea[0][0];
    }


    //if all possibilities checked and no match, game was tie
    return ' ';
}