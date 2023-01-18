//alert("hello");


//Main Code working related setup //

/*function setup()
{
    createCanvas(800,500);
}


//Main Code working related draw //

function draw()
{
    //1.draw images //
    //2.play videoes //
    //1st learn how create shapes/poins //
    background(200);

    //a. for points//
    /*point(200,200);
    //for points//

    //b. for lines//
    line(200,200, 300,300);
    
    
    //c.for  triangle//
    triangle(100,200,300,400,150,450);
    //for  triangle//

    
    //d. for  rectangle//
        rect(500,200,200,100);
    //for  rectangle//

    
    //e. for  Circle//
    ellipse(600,300, 100, 100);
    //for  circle//*/

    /*2nd learn how create stokes/outline and colour //

    stroke(255, 0, 0,255);//for red 255,green 0,blue 0, [a=opacity]  0-255 opacity when value increase comes near 255 so stroke opicity increase near 0 increase transparent , for line thickness use  strokeWeight(weight) colour fil pain use fill method it contains 3 colour value and one opacity value //
    ellipse(100,300, 100, 100);
    stroke(0, 255, 0,);
    strokeWeight(3);
    ellipse(250,300, 100, 100);
    stroke(0,0,255,0 );
    ellipse(400,300, 100, 100);

    ellipse(500,300, 100, 100);
    ellipse(600,300, 100, 100);
    

}*/





/*features and Important Notes 

1. setup funtion under code run once and draw function under code runs multitimes.
2. how create colourful circles using  function getRandomArbitary(min,max) and draw rgb
3 Now we learn how acess images and webcam in javascript.
4 Now we learn ml5.js
*/



/*function setup()
{
    createCanvas(800,500);
    console.log('Setup Fuction');
}

function getRandomArbitary(min,max)
{
    return Math.random() * (max - min) + min;
}


function draw()
{
    r = getRandomArbitary(0,255);
    g = getRandomArbitary(0,255);
    b = getRandomArbitary(0,255);
    //background(200);
    //console.log('Draw function');
    fill(r,g,b);
    ellipse(mouseX, mouseY, 50, 50);

}*/





/*3 Now we learn how acess images and webcam

// use global vaiable 1st/then use path in load image method in setup function 

let capture;

function setup()
{
    createCanvas(800,500);
    capture = createCapture(VIDEO);
    capture.hide()
}


function draw()
{
    image(capture, 0, 0, 800,600);
}*/



//Main Code Of programme //



let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose ,skeleton;
//we learn how acess images
let img1;
function setup()
{
    createCanvas(1500,500);
    capture = createCapture(VIDEO)
    capture.hide();
    posenet = ml5.poseNet(capture, modelLoaded);
    //create event listner for use callback function main things when lower line execute that time execute recieved function collect the data .when human being comes infront of camera recived posture data. this model detect body 17 points 5 facing point 12 body parts  overall if input  skelton it gives 17 points as output   
    posenet.on('pose', receivedPoses);
    //load images on face
    //loadImage('images/img1.jpg');

}

function receivedPoses(poses)
{
    console.log(poses);

    if(poses.length > 0)
    {
       singlePose = poses[0].pose;
       skeleton = poses[0].skeleton;
    }
}

function modelLoaded()
{
    console.log('Model has loaded');
}


function draw()
{
    image(capture, 0, 0);
    fill(255,0,0);

    if(singlePose)
    {
        for(let i=0; i<singlePose.keypoints.length; i++)
        {
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++)
        {
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
    }

   
}

