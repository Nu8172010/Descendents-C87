canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";


function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function (Img){
        block_image_object = Img;
        block_image_object.scaletoWidth(block_image_width);
        block_image_object.scaletoHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
         }); 
canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '77') 
	{
		new_image('Mal_Descendants.png');
		console.log("m");
	}
	if(keyPressed == '69')
	{
		block_x = 200;
		new_image('Evie.png');
		console.log("e");
		
	}
	
	if(keyPressed == '74')
	{
		block_x =350;
		new_image('Jay.png');
		console.log("j");
	}
	if(keyPressed == '67')
	{
		block_x = 600;
		new_image('carlos.png');
		console.log("c");
	}
	if(keyPressed == '85')
	{
		block_x = 700;
		new_image('uma.png');
		console.log("u");
	}
	
}

