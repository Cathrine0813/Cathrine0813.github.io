window.onload = function(ev){
	var e = ev || window.event;
	var vw = window.innerWidth;
	var vh = window.innerHeight;
//	var vw = window.screen.availWidth;
//	var vw = window.screen.availHeight;
	var timer1 = null;
//	//生成飞船
//	var ship = document.createElement("img");
//	ship.setAttribute("src","img/airship.png");
//	ship.setAttribute("class","ship");
//	document.body.appendChild(ship);
	//飞船轨道
	function circle(r,a,b){
		//生成飞船
		ship = document.createElement("img");
		ship.setAttribute("src","img/airship.png");
		ship.setAttribute("class","ship");
		document.body.appendChild(ship);
		//飞船轨道
		var PI = Math.PI;
		var i = 0;
		timer1 = setInterval(function(){
			console.log(ship.offsetLeft)
			console.log(ship.offsetTop)
			x = Math.cos(PI/180*i)*r + a;
			y = Math.sin(PI/180*i)*r + b;
//			x = Math.cos(i)*r - a;
//			y = Math.sin(i)*r - b;
			ship.style.left = x + "px";
			ship.style.top = y + "px";
			ship.style.transform = "rotateZ("+i+"deg)"
			i+=2;
			if(i==362){//360度
				i=0;
			}
		},30);
	}
	circle(400,vw/2,vh/2+100);
	
	var human = document.querySelector(".human");
	var speed = 20;
	var timer2 = null;
	var timer3 = null;
	var timer4 = null;
	//human.offsetTop：-190~70；speed差：20
	//human.offsetTop的min：-190
	//ship.offsetTop：31~831；i差：2
	//ship.offsetTop的min：31
	function move1(){
		human.style.top = human.offsetTop - speed + "px";
		stop();
		if(human.offsetTop <= -180){
			clearInterval(timer2)
			timer3 = setInterval(move2,30)
		}
	}
	function move2(){
		human.style.top = human.offsetTop + speed + "px";
		stop();
		if(human.offsetTop >=70){
			clearInterval(timer3);
		}
	}
	function stop(){
		//human.offsetTop：170,190,170
		//ship.offsetTop：33,31,33
		if(human.offsetTop <= -170 && ship.offsetTop <= 33){
			clearInterval(timer1);
			clearInterval(timer2);
			clearInterval(timer3);
			//样式统一
			human.style.top = -190 +"px";
			human.style.animation = "move3 1s 0s linear infinite";
			ship.style.left = 673 +"px";
			ship.style.top = 31 +"px";
			timer4 = setInterval(move3,30)//飞船飞出去
		}
	}
	var speed2 = 2;
	function move3(ev){
		var e = ev || window.event;
		speed2 += 2;
		ship.style.left = ship.offsetLeft + speed2 +"px";
		human.style.left = human.offsetLeft + speed2 +"px";
		if(ship.offsetLeft >= e.clientX){
			clearInterval(timer4);
		}
	}
	document.onkeydown = function(ev){
		var e = ev || window.event;
		if(e.keyCode == 38 ||e.keyCode == 87){
			timer2 = setInterval(move1,30);
		}
	}

}
