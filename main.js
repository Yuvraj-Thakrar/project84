canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d")



car1_width=120;
car1_height=70;
car1_img="car1.jfif"
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_img="car2.jfif"
car2_x=10;
car2_y=100;

bg_img="car(bg).jfif";

function add(){
    bg_imgTag= new Image();
    bg_imgTag.onload=uploadbg;
    bg_imgTag.src=bg_img;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_img;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_img;
}
 function uploadbg(){
     ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height)
 }


 function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(){
    keypress=e.keycode;
    console.log(keypress);

    if (keypress=="37") {
        car1_left();
        console.log("Left key is pressed")
    }
    if (keypress=="38") {
        car1_up();
        console.log("Up key is pressed")
    
    if (keypress=="39") {
        car1_right();
        console.log("Right key is pressed")
    }
    if (keypress=="40") {
        car1_left();
        console.log("Down key is pressed")
    }
    if (keypress=="87") {
        car2_w();
        console.log("W key is pressed")
    }
    if (keypress=="65") {
        car2_a();
        console.log("A key is pressed")
    }
    if (keypress=="83") {
        car2_s();
        console.log("S key is pressed")
    }
    if (keypress=="68") {
        car2_d();
        console.log("D key is pressed")
    }
}
}
