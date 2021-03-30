var canvas;
var music;

var block1,block2,block3,block4
var ball,edge

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1=createSprite(0,580,360,30)
    block1.shapeColor="blue"
    
    block2=createSprite(300,580,200,30)
    block2.shapeColor="green"

    block3=createSprite(515,580,200,30)
    block3.shapeColor="orange"

    block4=createSprite(740,580,220,30)
    block4.shapeColor="purple"

    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="yellow"

    ball.velocityX=4
    ball.velocityY=6




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edge=createEdgeSprites()
    ball.bounceOff(edge)
    

    if(block1.isTouching(ball) && ball.bounceOff(block1)){

        ball.shapeColor="blue"
        music.play()
    }

    if(block2.isTouching(ball) ){

        ball.shapeColor="green"
        music.stop()
        ball.velocityX=0
        ball.velocityY=0
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){

        ball.shapeColor="orange"
       
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){

        ball.shapeColor="purple"
    }





    //add condition to check if box touching surface and make it box
    drawSprites()
}
