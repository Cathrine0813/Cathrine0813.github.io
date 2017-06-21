window.onload = function(ev){
	var e = ev || window.event;
	var vw = window.innerWidth;
	var vh = window.innerHeight;
	var timer1 = null;
	//飞船轨道
	function circle(r,a,b){
		//生成飞船
		ship = document.createElement("img");
		ship.setAttribute("src","img/airship.png");
		ship.setAttribute("class","ship");
		document.body.appendChild(ship);
		//飞船轨道
		var pi = Math.PI;
		var i = 0;
		timer1 = setInterval(function(){
			//圆的参数方程
			x = Math.cos(pi/180*i)*r + a;
			y = Math.sin(pi/180*i)*r + b;
//			x = Math.cos(i)*r - a;
//			y = Math.sin(i)*r - b;
			ship.style.left = x + "px";
			ship.style.top = y + "px";
			ship.style.transform = "rotateZ("+i+"deg)"
			i+=2;//180个位置
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
	//human.offsetTop：-190~70；speed差：20
	//human.offsetTop的min：-190
	//ship.offsetTop：31~831；i差：2
	//ship.offsetTop的min：31
	//相遇概率3*3*2
	//human.offsetTop：170,190,170
	//ship.offsetTop：33,31,33
	//当飞船和马里奥相遇时的函数
	function stop(){
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
	//飞向宇宙的函数
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
	//小恐龙
	var game = document.querySelector("#game");
	var timer5 = null;
	var timer6 = null;
	var timer7 = null;
	var timer8 = null;
	var timer9 = null;
	var speed3 = 4;
	timer5 = setTimeout(monster1,300);
	function monster1(){
		dinosaur = document.createElement("img");
		dinosaur.setAttribute("src","img/dinosaur.png");
		dinosaur.setAttribute("class","dinosaur");
		document.body.appendChild(dinosaur);
		timer6 = setInterval(monster2,30)
	}
	//下降
	function monster2(){
		dinosaur.style.top = dinosaur.offsetTop + speed3 +"px";
		if(dinosaur.offsetTop>=270){
			clearInterval(timer6);
			timer7 = setInterval(monster3,30);
		}
	}
	//上升
	function monster3(){
		dinosaur.style.top = dinosaur.offsetTop - speed3 +"px";
		if(dinosaur.offsetTop<=60){
			clearInterval(timer7);
			timer6 = setInterval(monster2,30);
		}
	}
	timer8 = setInterval(boom1,1500);
	function boom1(){
		turtle = document.createElement("img");
		turtle.setAttribute("src","img/turtle.png");
		turtle.setAttribute("class","turtle");
		document.body.appendChild(turtle);
		turtle.style.top = dinosaur.offsetTop + "px";
		turtle = document.querySelectorAll(".turtle");
		clearInterval(timer9);
		for(var i=0;i<turtle.length;i++){
			if(turtle[i].offsetLeft <= 0){
				clearInterval(timer9);
				document.body.removeChild(turtle[i]);
			}else{
				timer9= setInterval(boom2(i),30);
			}
		}
	}
	function boom2(i){
		return function(){
			turtle[i].style.left = turtle[i].offsetLeft - speed3 + "px";
		}
	}
}
