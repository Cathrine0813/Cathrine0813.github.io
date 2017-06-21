(function(){
	//生成logo
	createLogo();
	function createLogo(){
		var oLogo = $('header>.top-bar>.top-bar-content>.logo');
		var arrLogo = ['img/aliyun/logo1.png','img/aliyun/logo1.gif'];
		for (var i=0;i<arrLogo.length;i++) {
			var oImg = $('<img src="'+arrLogo[i]+'"/>');
			oLogo.append(oImg);
		}
	}
	//生成nav
	createNav();
	function createNav(){
		var oNav = $('header>.top-bar>.top-bar-content>nav>ul');
		var arrNav = ['最新活动','产品','解决方案','云市场','大数据','社区','支持','合作伙伴','更多'];
		for (var i=0;i<arrNav.length;i++) {
			var oLi = $('<li><a href="">'+arrNav[i]+'</a></li>');
			oNav.append(oLi);
		}
		//下划线
		var oLi = oNav.find('li');
		var oSpan = $('<span class="nav-underline"></span>');
		oNav.append(oSpan);
		
		oLi.hover(function(){
			that = $(this);
			navUnderline();
		},function(){
			oSpan.css('width',0);
		});
		
		function navUnderline(){
			var w = that.innerWidth();
			var l = that.position().left;
			oSpan.css({'width':w,'left':l})
		}
	}
	
	//生成登录条
	createLogin();
	function createLogin(){
		var oLogin = $('header>.top-bar>.top-bar-content>.login-bar>.tips-box');
		var arrLogin = ['登录','备案','控制台'];
		for (var i=0;i<arrLogin.length;i++) {
			if(i==0){
				var oLi = $('<li class="tips-item"><a href="" class="login">'+arrLogin[i]+'</a></li>');
			}else{
				var oLi = $('<li class="tips-item"><a href="">'+arrLogin[i]+'</a></li>');
			}
			oLogin.append(oLi);
		}
	}
	
	//轮播图运动
	bannerMove();
	function bannerMove(){
		//
		var oBanner = $('header>.banner-bar>.banner-bar-content>.banner-image>li');
		var oStyle1 = $('header>.banner-bar>.banner-bar-content>.banner-image>.banner-style1');
		var oStyle2 = $('header>.banner-bar>.banner-bar-content>.banner-image>.banner-style2');
		var oStyle3 = $('header>.banner-bar>.banner-bar-content>.banner-image>.banner-style3');
		var arr = [oStyle1,oStyle2,oStyle3];
		var num1=0;
//		var num2=0;
//		var index = num1;//定义一个index给canvas画布使用，直接用num1会导致获取数据延迟
//		var bannertimer = null;
//		var circletimer = null;
//		
//		addCanvas();
//		canMove(index);
		move();
		bannertimer = setInterval(move,5000);
		pointstop();
				
		//点击canvas停止banner和canvas定时器
		function pointstop(){
			var oDd = $('header>.banner-bar>.banner-bar-content>.banner-point>dd');
			
			oDd.click(function(){
				clearInterval(bannertimer);
//				clearInterval(circletimer);
				var num3 = $(this).index();
				//改banner 
				oBanner.css({'opacity':0,'transform':'translateY(50px)','z-index':'1'})
				arr[num3].css({'opacity':1,'transform':'translateY(0px)','z-index':'2'});
				//改加载圈
//				removeCanvas();
//				addCanvas();
//				let hb = $('canvas');		//用var时会导致定时器不停，有可能是触发了画布开启路径，用let就不怕了
//				let cvs = hb[num3].getContext("2d");
//				cvs.beginPath();//开启路径
//				cvs.lineWidth = 1;
//				cvs.strokeStyle = "rgba(255,255,255,1)";
//				cvs.arc(7,7,6,2*Math.PI,false);
//				cvs.closePath();
//				cvs.stroke();
				//直接控制dd
				var oDd = $('header>.banner-bar>.banner-bar-content>.banner-point>dd');
				oDd.css('border',' 1px solid rgba(255,255,255,0.2)');
				oDd.eq(num3).css('border',' 1px solid rgba(255,255,255,1)');
			})
		}
		
		//banner动画
		function move(){
			oBanner.css({'opacity':0,'transform':'translateY(50px)','z-index':'1'})
			arr[num1].css({'opacity':1,'transform':'translateY(0px)','z-index':'2'});
			//执行canvas画布运动
//			index = num1;
//			var num2=0;
//			circletimer = setInterval(function(){
//				canMove(index);
//			},25)
			//直接控制dd
			var oDd = $('header>.banner-bar>.banner-bar-content>.banner-point>dd');
			oDd.css('border',' 1px solid rgba(255,255,255,0.4)');
			oDd.eq(num1).css('border',' 1px solid rgba(255,255,255,1)');
			
			num1++;
			num1 = num1%arr.length;
		}
		
		//canvas画布动画
		function canMove(index){
			var hb = $('canvas')[index];
			var cvs = hb.getContext("2d");
			num2 += 0.01;
			var a = parseFloat(num2).toFixed(2)-0;
			cvs.beginPath();//开启路径
			cvs.lineWidth = 1;
			cvs.strokeStyle = "rgba(255,255,255,1)";
			cvs.arc(7,7,6,(2-a)*Math.PI,false);
			cvs.stroke();
			if(a>=2){
				clearInterval(circletimer);
				removeCanvas();
				addCanvas();
				num2 = 0;
			}
		}
		
		//移除画布
		function removeCanvas(){
			var oDd = $('header>.banner-bar>.banner-bar-content>.banner-point>dd');
			oDd.each(function(i){
				oDd.eq(i).find('canvas').remove();
			})
		}
		
		//原始样式
		function addCanvas(){
			var oDd = $('header>.banner-bar>.banner-bar-content>.banner-point>dd');
			oDd.each(function(i){
				oDd.eq(i).html('<canvas id="hb'+(i+1)+'" width="16" height="16" ></canvas>');
			})
			var hb = oDd.find('canvas');
			hb.each(function(i){
				var cvs = hb[i].getContext("2d");
				cvs.beginPath();
				cvs.lineWidth = 1;
				cvs.strokeStyle = "rgba(255,255,255,0.5)";
				cvs.arc(7,7,6,2*Math.PI,false);
				cvs.closePath();//封闭路径
				cvs.stroke();//执行上面的路径
			})
		}
	}
	
	//banner图悬浮效果
	banMove();
	function banMove(){
		var oStyle2 = $('header>.banner-bar>.banner-bar-content>.banner-image>.banner-style2');
		var oStyle3 = $('header>.banner-bar>.banner-bar-content>.banner-image>.banner-style3');
		
		fnMove(oStyle3);
		function fnMove(obj){
			var w = window.innerWidth;
			var h = window.innerHeight;
			obj.mousemove(function(ev){
				var ev = ev || window.event;
				var x = ev.pageX;
				var y = ev.pageY;
				if(obj.css('opacity')!=0){
					if( x > (w/2) ){
						obj.find('img').css({'left':'500px'});
					}
					if( x < (w/2) ){
						obj.find('img').css({'left':'600px'});
					}
					if( y > (h/2) ){
						obj.find('img').css({'top':'50px'});
					}
					if( y < (h/2) ){
						obj.find('img').css({'top':'70px'});
					}
				}
			})
			obj.mouseout(function(){
				obj.find('img').css({'left':'550px','top':'61px'});
			})
		}
		
	}
	
	//生成点击列表
	createBottom();
	function createBottom(){
		var obj1 = {
				meg1:{
					src: 'img/aliyun/icon1.png',
					h2: '全民云计算',
					p: '低门槛上云捷径'
				},
				meg2:{
					src: 'img/aliyun/icon2.png',
					h2: '校园扶持',
					p: '玩转云计算校园'
				},
				meg3:{
					src: 'img/aliyun/icon3.png',
					h2: '10分钟入门',
					p: '快速玩转网站搭建'
				},
				meg4:{
					src: 'img/aliyun/icon4.png',
					h2: '人工智能',
					p: '大数据黑科技'
				},
				meg5:{
					src: 'img/aliyun/icon5.png',
					h2: '云上浙江',
					p: '助力浙江十万企业上云'
				}
		};
		
		var oBottom = $('header>.bottom-bar>.bottom-bar-content>ul');
		var con = createLi(obj1);
		oBottom.append(con);
		function createLi(obj){
			var str = '';
			for(var i=0;i<5;i++){
				str += '<li><a href="">';
				for(var attr in obj['meg'+(i+1)]){
					if(attr == 'src'){
						var O = '<img src="'+obj['meg'+(i+1)][attr]+'"/>';
					}
					if(attr == 'h2'){
						var O = '<h2>'+obj['meg'+(i+1)][attr]+'</h2>';
					}
					if(attr == 'p'){
						var O = '<p>'+obj['meg'+(i+1)][attr]+'</p>';
					}
					str += O ;
				}
				str += '</li></a>';
			}
			return str;
		}
	}
	
	
	
	
	
	
})()	
	
	

