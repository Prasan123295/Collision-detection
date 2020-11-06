var fixedRect,movingRect;
 function setup() {
 createCanvas(1200,800);
 fixedRect=createSprite(200, 200, 50, 80);
 movingRect=createSprite(400, 200, 80, 30);
 movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
movingRect.debug = true;
fixedRect.debug= true;
}
function draw() {
background(0)
movingRect.y = mouseY;
movingRect.x= mouseX;
console.log(movingRect.x-fixedRect.x)
if(movingRect.x-fixedRect.x< movingRect.width/2+fixedRect.width/2 && 
fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && 
movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) 
{
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red"; 
}
else { movingRect.shapeColor = "green"; 
fixedRect.shapeColor = "green";
}
drawSprites(); 
}
