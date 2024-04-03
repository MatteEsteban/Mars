canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Crea el array "nasa_mars_images_array" y almacena todos los archivos de imágenes.


//Genera un número aleatorio y almacénalo en la varible "random_number"



rover_width = 100;
rover_height = 90;

/*Pasa este número aleatorio como índice al array y actualiza la variable background_image 
con lo siguiente*/

//console.log(random_number);
//nasa = ["mars.png","mars.gif"]
//random_number = Math.floor(Math.random()*2)
//background_image = nasa[random_number];
background_image = "mars.jpg"
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //define una variable con una nueva imagen
	background_imgTag.onload = uploadBackground; // establece una función para cargar esta variable
	background_imgTag.src = background_image;   // carga la imagen

	rover_imgTag = new Image(); //define una variable con una nueva imagen
	rover_imgTag.onload = uploadrover; // establece una función para cargar esta variable
	rover_imgTag.src = rover_image;   // carga la imagen
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("arriba");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("abajo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("izquierda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("derecha");
		}
}

//Agrega el código para la función up():
function up(){
	if(rover_y >= 0){
		rover_y = rover_y - 10;
		uploadBackground();
		uploadrover();
	}
}
function down(){
	if(rover_y <= 500){
		rover_y = rover_y + 10;
		uploadBackground();
		uploadrover();
	}
}
function right(){
	if(rover_x <= 700){
		rover_x = rover_y + 10;
		uploadBackground();
		uploadrover();
	}
}
function left(){
	if(rover_x >= 0){
		rover_x = rover_y - 10;
		uploadBackground();
		uploadrover();
	}
}
//Actividad adicional
//Agrega el código para la función left()::








	