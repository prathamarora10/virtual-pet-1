//Create variables here

var Dog,happyDog,database,foodS,foodStock
var DogImage1,DogImage2
var food = 20

var feedpet,addfood
var feedTime,lastFed
var foodObj

function preload()
{
  //load images here
  DogImage1 = loadImage("images/dogImg.png")
  DogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1000,500);
  
  database = firebase.database()

  foodStock = database.ref("Food")
  foodStock.on('value',readStock,showError)

  Dog = createSprite(750,325)
  Dog.addImage('Dog',DogImage2)
  Dog.scale = 0.2
  
}


function draw() {  

  background(46,139,87)

 
  fill('black')
  textSize(20)
  stroke(20)
  text("Food : "+food,200,200)

  drawSprites();

  fill('black')
  textSize(20)
  stroke(20)
  text("Note : Press Up Arrow Key To Feed Milk ",70,50)
  //add styles here

}

function readStock(data){
    food = data.val();
}

function writeStock(x){
  database.ref('/').set({
    Food : x
  })
}

function showError(){
  console.log('Error!!')
}

function keyPressed(){
  if(keyCode === 32){
    writeStock(food)
    food = food - 1
    Dog.addImage("dog1",DogImage2)
    console.log("Working!!")
  }

}