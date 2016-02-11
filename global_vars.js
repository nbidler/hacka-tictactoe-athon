/**
 * Created by Nick on 2/10/2016.
 */

//create default game area
var gameArea = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
];
var gameAreaSize= 3;

//set starting player default
var player = 'x';

//default to normal rules, anarchy mode off
var anarchyMode = 0;

//set game-ending states off
var player1wins = 0;
var player2wins = 0;
var tiewins = 0;
var won = 0;
