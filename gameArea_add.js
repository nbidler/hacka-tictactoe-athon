/**
 * Created by Nick on 2/10/2016.
 */

/*addToIndex
    takes 2 vars, returns 0, interacts with global array gameArea
        position determines which index of gameArea is targeted
        player determines which player claims targeted index

*/
function addToIndex (position, player)
{
    console.log('addToIndex start');
    switch (position) {
        case 'square1':
            gameArea[0][0] = player;
            break;
        case 'square2':
            gameArea[0][1] = player;
            break;
        case 'square3':
            gameArea[0][2] = player;
            break;
        case 'square4':
            gameArea[1][0] = player;
            break;
        case 'square5':
            gameArea[1][1] = player;
            break;
        case 'square6':
            gameArea[1][2] = player;
            break;
        case 'square7':
            gameArea[2][0] = player;
            break;
        case 'square8':
            gameArea[2][1] = player;
            break;
        case 'square9':
            gameArea[2][2] = player;
            break;
        default:
            console.log('addToIndex unable to add entry to index');
    }
    console.log('addToIndex end');
}