var background, backgroundImage;
var author, authorImage;
var hannah, hannahImage;
var magicalBooks, magicalBooksImage;
var magicalPens, magicalPensImage;
var magicalPages, magicalPagesImage;

function preload(){
  //load backgroundImage here
  //load authorImage here
  //load hannahImage here
}

function setup(){
  //create canvas
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
  console.log(windowHeight);

  //create background
  background = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  background.shapeColor = "lightBlue";

  //create author
  author = createSprite(windowWidth-1000, windowHeight-50, 20, 60);
  author.shapeColor = "yellow";

  //create hannah
  hannah = createSprite(windowWidth-1200, windowHeight-50, 20, 60);
  hannah.shapeColor = "red";
}
 
  
function draw(){
  drawSprites();
}