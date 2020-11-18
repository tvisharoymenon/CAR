canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=100;
car2_width=120;
car2_height=70;
car2_image="car2.jfif";
car2_x=10;
car2_y=100;
function add()  {
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
     background_imgtag.src=background_image;

     car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
     car1_imgtag.src=car1.png;
     car2_imgtag=new Image();
    car2_imgtag.onload=uploadcar2;
     car2_imgtag.src=car2.jfif;
}
background_image="https://i.postimg.cc/bv5d35nK/racing.jpg"
function uploadBackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height)
}
function uploadcar2() {
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)  {
    Keypressed=e.keyCode;
    console.log(Keypressed);
    if(Keypressed=='38') {
        up();
    }
    if(Keypressed=='40') {
        down();
    }
    if(Keypressed=='37') {
        left();
    }
    if(Keypressed=='39') {
        right();
    }
    if(Keypressed=='83') {
        w();
    }
    if(Keypressed=='87') {
        s();
    }
    if(Keypressed=='65') {
        a();
    }
    if(Keypressed=='68') {
        d();
    }
}
function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		
		 uploadBackground();
		 uploadrover();
	}
}
function down() {
	if (rover_y <=500 )
	{
		rover_y = rover_y + 10;
		
		uploadBackground();
		uploadrover();
   }	
	
}
function left() {
	if (rover_x >=0 )
	{
		rover_x = rover_x - 10;
		
		uploadBackground();
		uploadrover();
   }	
	
}
function right() {
	if (rover_x <=700 )
	{
		rover_x = rover_x + 10;
		
		uploadBackground();
		uploadrover();
   }	
	
}
function w()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		
		 uploadBackground();
		 uploadrover();
	}
}
function s() {
	if (rover_y <=500 )
	{
		rover_y = rover_y + 10;
		
		uploadBackground();
		uploadrover();
   }	
	
}
function a() {
	if (rover_x >=0 )
	{
		rover_x = rover_x - 10;
		
		uploadBackground();
		uploadrover();
   }	
	
}
function d() {
	if (rover_x <=700 )
	{
		rover_x = rover_x + 10;
		
		uploadBackground();
		uploadrover();
   }	
	
}