var canvas;
var contestantCount;
var gameState=0;
var database;
var quiz;
var question;
var contestant;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);

  database=firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
}
