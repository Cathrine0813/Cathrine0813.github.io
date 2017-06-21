window.onload = function(){
	//购物车
	var topBar_car = document.getElementsByClassName("topBar-car")[0];
	var topBar_carContent = document.getElementsByClassName("topBar-carContent")[0];
	topBar_car.onmousemove = function(){
		topBar_car.style.backgroundColor = "#fff";
		topBar_carContent.style.height = "98px";
	}
	topBar_car.onmouseout = function(){
		topBar_car.style.backgroundColor = "#424242";
		topBar_carContent.style.height = "0";
	}
	//二级导航
	var logoBar_navDD = document.querySelectorAll(".logoBar-nav>dd");
	var logoBar_subNav = document.getElementsByClassName("logoBar-subNav")[0];
	var timer1 = null;
	var timer2 = null;
	function subNav(h,t,s){
		logoBar_subNav.style.height = h;
		logoBar_subNav.style.opacity = t;
		logoBar_subNav.style.boxShadow = s;
	}
	for(var a=0;a<logoBar_navDD.length;a++){
		logoBar_navDD[a].querySelector("a").onmousemove = function(){
			clearTimeout(timer1);
			clearTimeout(timer2);
			subNav("229px",1,"0px 3px 3px #ccc");
		}
		logoBar_navDD[a].querySelector("a").onmouseout = function(){
			timer1 = setTimeout(subNav("0",0,""),1000);
		}
	}
	logoBar_subNav.onmousemove = function(){
		clearTimeout(timer1);
		clearTimeout(timer2);
		subNav("229px",1,"0px 3px 3px #ccc");
	}
	logoBar_subNav.onmouseout = function(){
		timer2 = setTimeout(subNav("0",0,""),500);
	}
	//侧栏导航
	var home_navDD = document.querySelectorAll(".home-nav>dd");
	var home_subNav = document.getElementsByClassName("home-subNav")[0];
	var timer3 = null;
	var timer4 = null;
	for(var b=0;b<home_navDD.length;b++){
		home_navDD[b].onmousemove = function(){
			clearTimeout(timer3);
			clearTimeout(timer4);
			home_subNav.style.width = "245px";
		}
		home_navDD[b].onmouseout = function(){
			timer3 = setTimeout(function(){
				home_subNav.style.width = "0";
			},1000)
		}
	}
	home_subNav.onmousemove = function(){
		clearTimeout(timer3);
		clearTimeout(timer4);
		home_subNav.style.width = "245px";
	}
	home_subNav.onmouseout = function(){
		timer4 = setTimeout(function(){
			home_subNav.style.width = "0";
		},30)
	}
	//轮播图
	var banner = document.querySelectorAll(".banner");
	var banPoint = document.querySelectorAll(".home-banner-point>dd");
	var ban_btnLeft = document.querySelector(".btnLeft");
	var ban_btnRight = document.querySelector(".btnRight");
	var i = 0;
	timer = setInterval(ban1,2000);
	function ban1(){
		banner[i].style.opacity = "0";
		banPoint[i].style.borderColor = "#a59d97";
		banPoint[i].style.backgroundColor = "#7f746b";
		i++;
		if(i==banner.length){
			i=0;
		}
		banner[i].style.opacity = "1";
		banPoint[i].style.borderColor = "#7f746b";
		banPoint[i].style.backgroundColor = "rgba(255,255,255,0.5)";
	}
	function ban2(){
		i--;
		banner[i+1].style.opacity = "0";
		banPoint[i+1].style.borderColor = "#a59d97";
		banPoint[i+1].style.backgroundColor = "#7f746b";
		if(i == -1){
			i = 4;
		}
		banner[i].style.opacity = "1";
		banPoint[i].style.borderColor = "#7f746b";
		banPoint[i].style.backgroundColor = "rgba(255,255,255,0.5)";
	}
	ban_btnLeft.onclick = function(){
		clearInterval(timer);
		ban2();
	}
	ban_btnRight.onclick = function(){
		clearInterval(timer);
		ban1();
	}
	//明星产品
	var proShow = document.querySelector(".home-starProduct-show>ul");
	var showBtn_left = document.querySelector(".home-starProduct-right");
	var showBtn_right = document.querySelector(".home-starProduct-left");
	function proS(l,lc,rc){
		proShow.style.left = l+"px";
		showBtn_left.style.color = lc;
		showBtn_right.style.color = rc;
	}
	var c=0
	timer5 = setInterval(function(){
		c++;
		if(c%2==0){
			proS(0,"#b0b0b0","#e0e0e0");
		}else if(c%2==1){
			proS(-proShow.offsetWidth/2,"#e0e0e0","#b0b0b0");
		}
	},5000)
	showBtn_left.onclick = function(){
		proS(-proShow.offsetWidth/2,"#e0e0e0","#b0b0b0");
		c=0;
	}
	showBtn_right.onclick = function(){
		proS(0,"#b0b0b0","#e0e0e0");
		c=1;
	}
	
}
