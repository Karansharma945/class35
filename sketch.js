var ball;
var database;
var dbRef, pos;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    //create a refrence to db
    dbRef = database.ref("position");
    // to read from database 
    //create a listener 
    dbRef.on("value",readPos);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dbRef = database.ref("position");
    dbRef.set({
        "x": pos.x + x ,
        "y": pos.y + y 

    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPos(data){
 pos = data.val();
 ball.x = pos.x;
 ball.y = pos.y;

}
