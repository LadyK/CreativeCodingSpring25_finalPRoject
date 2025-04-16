
let bananas = 12;
let apples = 13;

function preload(){
  for(let i = 0; i < 15 ; i++){
    let numStr = nf(i, 2); // change a number to a string; 2 places to the left of decimel
    let img = loadImage('data/frame_' + numStr + '.png');
   // print(img);
    frames.push(img); // push into the end of the array this item

  }
  currentFrame = 0;

}

function setup() {
 createCanvas(windowWidth, windowHeight);

 frameRate(12);
}

function draw() {
  background(0, 0, 0);
  image(frames[currentFrame], 0, 100);

  if(currentFrame < frames.length - 1){
    currentFrame++;
  } else {
    currentFrame = 0;
  }




}
