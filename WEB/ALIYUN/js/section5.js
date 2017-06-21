(function(){
	createMain()
	function createMain(){
		var obj = {
			dd1:{
				src:'img/aliyun/iconOther1.png',
				txt:'全球首张云安全国际认证'
			},
			dd2:{
				src:'img/aliyun/iconOther2.png',
				txt:'信息安全管理体系国际认证'
			},
			dd3:{
				src:'img/aliyun/iconOther3.png',
				txt:'通过公安部等级保护评测'
			},
			dd4:{
				src:'img/aliyun/iconOther4.png',
				txt:'首批可信云服务认证'
			}
		}
		var str = '';
		var mainBar = $('section>.part5>.part5-content1>.main-bar');
		createStr(obj);
		mainBar.append(str);
		function createStr(obj){
			for (var attr1 in obj) {
				str += '<dd><a href="">';
				for (var attr2 in obj[attr1]) {
					if(attr2=='src'){
						str += '<img src="'+obj[attr1][attr2]+'">';
					}
					if(attr2=='txt'){
						str += '<p>'+obj[attr1][attr2]+'</p>';
					}
				}
				str += '</a></dd>'
			}
			return str;
		}
		
	}
	
	createPartner();
	function createPartner(){
		var arrUrl = ['img/aliyun/partner1.png','img/aliyun/partner2.png','img/aliyun/partner3.png','img/aliyun/partner4.png','img/aliyun/partner5.png'];
		var par = $('section>.part5>.part5-content2>.part5-content2-partner');
		var str = '';
		for (var i=0;i<arrUrl.length;i++) {
			str+='<dd> <img src="'+arrUrl[i]+'"/> </dd>';
		}
		par.append(str);
	}
	
	creatPoint();
	function creatPoint(){
		var obj = {
			place1:{name:'美西', x:'140', y:'120',d:'80'},
			place2:{name:'美东', x:'220', y:'140',d:'100'},
			place3:{name:'欧洲', x:'542', y:'85',d:'80'},
			place4:{name:'中东', x:'661', y:'158',d:'110'},
			place5:{name:'华南', x:'820', y:'125',d:'200'},
			place6:{name:'华北', x:'860', y:'140',d:'110'},
			place7:{name:'华东', x:'900', y:'165',d:'80'},
			place8:{name:'香港', x:'900', y:'195',d:'80'},
			place9:{name:'日本', x:'973', y:'140',d:'80'},
			place10:{name:'新加坡', x:'878', y:'275',d:'110'},
			place11:{name:'澳大利亚', x:'958', y:'355',d:'150'}
		}
		//生成point
		var mapImg = $('section>.part5>.part5-content1>.map-img');
		var str3 = createStr2(obj);
		mapImg.append(str3);
		//圈圈扩散
//		var point = mapImg.find('.point');
//		var circle = mapImg.find('.point-circle');
		var circle1 = mapImg.find('.point-circle1');
		var circle2 = mapImg.find('.point-circle2');
		var circle3 = mapImg.find('.point-circle3');
		
		circle1.each(function(i){
			var w = circle1.eq(i).parent().css("width");
			anima(circle1.eq(i),w,0.5);
		})
		circle2.each(function(i){
			var w = circle2.eq(i).parent().css("width");
			anima(circle2.eq(i),w,1);
		})
		circle3.each(function(i){
			var w = circle3.eq(i).parent().css("width");
			anima(circle3.eq(i),w,1.5);
		})	
		
		var place = mapImg.find('.point-name');
		place.each(function(i){
			if(place.eq(i).html()=='华南'||place.eq(i).html()=='华北'){
				place.eq(i).css('right','-10px')
			}
		})
		
		
		
		
		function anima(obj,w,late){
			if(w=='80px'){
				obj.css({'animation':'move1 3s '+late+'s linear infinite'})
			}
			if(w=='100px'){
				obj.css({'animation':'move2 3s  '+late+'s linear infinite'})
			}
			if(w=='110px'){
				obj.css({'animation':'move3 3s  '+late+'s linear infinite'})
			}
			if(w=='150px'){
				obj.css({'animation':'move4 3s  '+late+'s linear infinite'})
			}
			if(w=='200px'){
				obj.css({'animation':'move5 3s  '+late+'s linear infinite'})
		
			}
		}
		
		
		function createStr2(obj){
			var str2 = '';
			for(var attr1 in obj){
				var arr = [];
				for(var attr2 in obj[attr1]){
					arr.push(obj[attr1][attr2]);
				}
				str2 += createStr1(arr[0],arr[1],arr[2],arr[3]);
			}
			return str2;
		}
		
		function createStr1(name,x,y,d){
			var str1 = '';
			str1 = '<div class="point" style="width:'+d+'px;height:'+d+'px;top:'+y+'px;left:'+x+'px;">'+
							'<a href="" class="point-center">'+
								'<p class="point-name">'+name+'</p>'+
							'</a>'+
							'<i class="point-circle point-circle1"></i>'+
							'<i class="point-circle point-circle2"></i>'+
							'<i class="point-circle point-circle3"></i>'+
						'</div>'	
			return str1;
		}
		
	}
	
	
	
})()
