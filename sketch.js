const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var slingshot;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var gamestate="onsling";
var backgrounding;
var score=0;

function preload() {
    getbackgrounding();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingshot=new SlingShot(bird.body,{x:200,y:50})
    
   //string
  var string="this is my coding class"
  console.log(string);

  //number
  var num=100+100;
  console.log(num);

  //boolean
  var bool=true;
  console.log(bool);

  //undefined
  var object;
  console.log(object);

  //reassigine the same undefined object to null
 //null
 object=null;
 console.log(object);

 //examples of an array
 //an array holding same data types
 var array1=[1,2,3,4,5];
 console.log(array1);

 
//an array holding different data types
var array2=["ashlesha",26,true];
console.log(array2);

//an array stroing a list of arrays
var array3=[[26,25,19],[24,23],[4,22]]
console.log(array3);
console.log(array3[1]);
console.log(array3[1][0])

//add new value to the previous array
array3.push("history");
console.log(array3);

//remove value
array3.pop();
console.log(array3);


}

function draw(){
    if(backgrounding)
    background(backgrounding);
    Engine.update(engine);

    noStroke();
    textSize(35);
    fill("white");
    text("score "+score,width-300,50);

   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    pig1.score();
    pig3.score();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    slingshot.display();

   
    
}
function mouseDragged(){
if(gamestate!=="launched"){

  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
}
function mouseReleased(){
slingshot.fly();
gamestate="launched"
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
    }

}
async function getbackgrounding(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON);

    var datetime=responseJSON.datetime;
    console.log(datetime);
    
    var hour=datetime.slice(11,13);
    console.log(hour);
    
    if (hour>=06&&hour<=19){
        bg="Sprites/bg.png";
    }
    else{
        bg="Sprites/bg2.jpg";
    }
    backgrounding=loadImage(bg)
}
