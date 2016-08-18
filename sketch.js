var x=[]
var y=[]
var lineColor=[]
var colors=[]

function preload() {
  photo=loadImage("photos/2016-08-17 at 7.31.14 AM.jpg")
}
function setup() {
  createCanvas (500,800)
  strokeWeight (1)
  frameRate(10)
  
  image(photo,0,0,width,height)
  colors=[
    color (255,51,153,5),
    color (255,179,218,5),
    color (255,102,0,5),
    color (255,10)
]
//where the circles are drawn on the page
for (var i=0;i<100;i=i+1) {
  x[i]=random(0,windowWidth)
  y[i]=random(0,windowHeight)
  lineColor[i]=random (colors)

}  
  
}

function draw() {
  //create a for loop and array to draw the circle
  for (var i=0;i<100;i=i+1) {
    //move circles in different directions
    x[i]=x[i]+random(-10,10)
    y[i]=y[i]+random(-10,10)
    
    
    //create a loop and array for distance between
  for (var j=0;j<100;j=j+1) {
    var distance = dist(x[i],y[i],x[j],y[j])
    if (distance<80) {
      stroke (lineColor [i])
      line(x[i],y[i],x[j],y[j])

    
    
    }
  
  
}

}

}