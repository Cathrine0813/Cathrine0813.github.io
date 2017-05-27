(function($){
//引入样式	
	var link = $('<link rel="stylesheet" type="text/css" href="css/time.css"/>')
	$('head').append(link);
//插件形式
	var opation = {//默认样式
		arrWeek : ["日","一","二","三","四","五","六"],
		sym : ['-','-'],
		dir : ['左','右'],
	}

	var setting = {};	//整合一起时调用的对象
	var parent = null;	//获取this指向
	var num = 0;		//设置左右点击的时候使用
	
	function hostTime(obj){
		obj = obj || {};//对象有设置就取设置了的，没有就空
		setting = $.extend(opation,obj);//整合对象
		parent = this;//获取this指向
		
		creatrBox();
		time();
		clickTime();
		pn();
	}
	
	function creatrBox(){
		var shell = '<div id="wrap">'+
						'<div class="top">'+
							'<p class="timehead1"></p>'+
							'<p class="timehead2"></p>'+
						'</div>'+
						'<div class="middle">'+
							'<p class="days">'+
								'<span class="date"></span>'+
								'<span class="switch">'+
									'<span class="left"><a href="javascript:;"></a></span>&nbsp;<span class="right"><a href="javascript:;"></a></span>'+
								'</span>'+
							'</p>'+
							'<dl class="weeks"></dl>'+
						'</div>'+
						'<div class="bottom">'+
							'<ul id="one"></ul>'+
						'</div>'+
					'</div>';
		parent.html(shell);	//先插入才对里面的元素进行操作		
		for(var i=0;i<setting.arrWeek.length;i++){
			var oDd = $('<dd>'+setting.arrWeek[i]+'</dd>');
			$('.weeks').append(oDd);
		}
		
	}
	function time(){
		changeTime();
		setInterval(changeTime,1000);//时间更新
		
		function changeTime(){
			var tim = new Date();
			var y = tim.getFullYear();
			var mon = tim.getMonth()+1;//0-11
			var d = tim.getDate();
			var week = tim.getDay();//0-6
			var h = tim.getHours();
			var min = tim.getMinutes();
			var sec = tim.getSeconds();
			
			var str1 = toTwo(h) + ':' + toTwo(min) + ':' + toTwo(sec);
			$('.timehead1').html(str1);
			
			var str2 = y+setting.sym[0]+toTwo(mon)+setting.sym[1]+toTwo(d)+'&nbsp;星期'+setting.arrWeek[week];
			$('.timehead2').html(str2);
		}
		
	}
	function clickTime(){
		$('#one').html('')
		//上个月
		var tim = new Date();
		tim.setMonth(tim.getMonth()+num);	//当月
		tim.setDate(0);					//当月的上一月的最后一天
			//prev month all day
		var pmad = tim.getDate();
		
		var tim = new Date();
		tim.setMonth(tim.getMonth()+num);
		tim.setDate(1);
			//now month frist day 
		var nmfd = tim.getDay();		//当前月的第一天是周几，进而获取下标
		
		for(var i=(pmad-nmfd);i<pmad;i++){
			var oLi = $('<li>'+(pmad+1)+'</li>');
			oLi.addClass('notNow');
			$('#one').append(oLi);
		}
		
		//当月
		var tim = new Date();
		tim.setMonth(tim.getMonth()+(num+1));	//下一个月
		tim.setDate(0);					//下个月的上个月的最后一天，这里即当月的最后一天
			//now month all day
		var nmad = tim.getDate();		//获取设定日期【即当月的最后一天】的日期
		
			//设置跟随时间
			var y = tim.getFullYear();
			var mon = tim.getMonth()+1;//0-11
			
			var str1 = y + '年' + toTwo(mon) + '月';
			$('.date').html(str1);
		
		var tim = new Date();
			//now day
		var nD= tim.getDate();			//获取当天日期
		
		
		
		for(var i=0;i<nmad;i++){
			var oLi = $('<li>'+(i+1)+'</li>');
			$('#one').append(oLi);
			if(i == (nD-1)&&num==0){
				oLi.addClass('select');
			}
		}
		
		//下个月
		var totle = 42;
		var yet = $('#one').find('li').length;
		for(var i=0;i<(totle-yet);i++){
			var oLi = $('<li>'+(i+1)+'</li>');
			oLi.addClass('notNow');
			$('#one').append(oLi);
		}
		
	}
	
	function toTwo(data){
		return data<10?'0'+data:data;
	}
	
	function pn(){
		var prev = $('.switch .left').find('a');
		var next = $('.switch .right').find('a');
		prev.html(setting.dir[0]);
		next.html(setting.dir[1]);
		prev.click(function(){
			num--;
			clickTime();
		})
		next.click(function(){
			num++;
			clickTime();
		})
	}
	
	
//在jq的原型链中添加插件
	$.fn.extend({
		cT:hostTime,
	})

})(jQuery)
