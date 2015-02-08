	var mousedown = false;
var isCounting = false;
var resultInt = 0;
var timer;
var counter=0;
var countup=true;
var endtime=false;
var hiend=false;
var helloend=false;
var thisisstupid=false;
var butheycats=false;
var catfingers=false;
var plottwist=false;
var sparkles=false;
 function start()
                {
					if(countup)
                    timer = setTimeout("update()", 1000);
                }

 function reset() {
					if(countup){
                    resultInt=0;
					}
                }
				
 function update(){
            resultInt++;
}


function hoverselect(element){



var cats = {};

	$(element).css('top', '250px');;
	$(element).css('left', '750px');;
		var pos=$(element).position();

document.onmousedown = function() {
    mousedown = true;   
}

document.onmouseup = function() {
    mousedown = false;
}


				
var zz=Leap.loop(function(frame) {

  if(resultInt>60){
  
  if (!hiend){
	hiend=true;
	$(".funtext").slideUp(function(){
	$( ".funtext" ).text("well hello there")
	$(".funtext" ).css(	{'top': '50%', 'left': '50%'});
	}).fadeIn( 400 );
	}else if (!helloend){
   	helloend=true;
	$(".funtext").slideUp(function(){
	$(".funtext" ).css(	{'top': '40%', 'left': '60%'});

	$( ".funtext" ).text(("i was going to have this whole interactive story that would have looked super cool")
	).fadeIn( 400 );
	})
   }else if (!thisisstupid){
   	thisisstupid=true;
	$(".funtext").slideUp(function(){
	$( ".funtext" ).text("but then it was five am so. welp. ._.")
		$(".funtext" ).css(	{'top': '70%', 'left': '40%'});

	}).fadeIn( 400 );
   }else if (!butheycats){
   	butheycats=true;
	$(".funtext").slideUp(function(){
	$( ".funtext" ).text("on the plus side...")
		$(".funtext" ).css(	{'top': '20%', 'left': '50%'});

	}).fadeIn( 400 );
   }else if (!catfingers){
   catfingers=true;
   	$(".funtext").slideUp(function(){
	$( ".funtext" ).text("CAT FINGERS")
			$(".funtext" ).css(	{'top': '50%', 'left': '50%','font-size':'300px','text-align': 'center'});

	}).fadeIn( 400 );
   cats[0] = new Cat();
   }else if (!plottwist){
   	plottwist=true;
	$(".funtext").slideUp(function(){
	$( ".funtext" ).text("okay that's it")
		$(".funtext" ).css(	{'top': '40%', 'left': '50%','font-size':'100px'});

	}).fadeIn( 400 );
   cats[0] = new Cat();
   }
   
   
   resultInt=0;
  }

  frame.pointables.forEach(function(pointable, index) {
  if (index==1||catfingers){
  

    var cat = ( cats[index] || (cats[index] = new Cat()) );    
    cat.setTransform(pointable.screenPosition(),index);
   }
  });
  
}).use('screenPosition', {scale: 0.25});


var Cat = function() {
  var cat = this;
  var img = document.createElement('img');
  var img2 = document.createElement('img2');
  img.height=50;
  img.width=50;
  img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png';
  img2.height=50;
  img2.width=50;
  img2.src = '//sparkle-tile-gif.gif';
    
  img.style.position = 'absolute';
  img2.style.position = 'absolute';

	img.onload = function () {
    cat.setTransform([window.innerWidth/2,window.innerHeight/2], 0);
    document.body.appendChild(img);
	}
	console.log("heeeeeeeee");
  	img2.onload = function () {
    cat.setTransform([window.innerWidth/2,window.innerHeight/2], 0);
    document.body.appendChild(img2);
	s
}

  cat.setTransform = function(position,index) {
  if(index==1||catfingers){
  
     if (resultInt>100){
		countup=false;
   }
   counter++;
if(countup){
   if(Math.abs(position[1]+50/2-($(element).position().top+$(element).height()/2))<75
			&&Math.abs(position[0]+50/2-($(element).position().left+$(element).width()/2))<100)
			{	
			if(!isCounting){
				isCounting=true;
				start();
			}
			else{
				start();
			}
    }else{
		reset();
	}
	}else{
	}

   
   }
   if (index==1&&counter==100){
	counter=0;
	}
    img.style.left = position[0] - img.width  / 2 + 'px';
    img.style.top  = position[1] - img.height / 2 + 'px';
	
	
    img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
    img.style.OTransform = img.style.transform;
	
	if(sparkles){
    img2.style.left = position[0] - img2.width  / 2 + 'px';
    img2.style.top  = position[1] - img2.height / 2 + 'px';
	
	
    img2.style.webkitTransform = img2.style.MozTransform = img2.style.msTransform =
    img2.style.OTransform = img2.style.transform;
	}
  };


  
};

cats[1] = new Cat();

// This allows us to move the cat even whilst in an iFrame.
Leap.loopController.setBackground(true)

}