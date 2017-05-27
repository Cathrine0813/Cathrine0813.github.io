$(function(){
	var link = $('<link rel="stylesheet" type="text/css" href="css/time.css"/>')
	$('head').append(link);
	
	var num = 0;//控制月份
	var arrWeek = ["日","一","二","三","四","五","六"]
	setTime();
	nowTime();
	setInterval(nowTime,1000);
	change();
	
	function nowTime(){
		var tim = new Date();
		
		var year = tim.getFullYear();			//年
		var mon = ws( tim.getMonth()+1 );		//月,0~11
		var d = ws( tim.getDate() );			//日
		
		var h = ws( tim.getHours() );			//小时
		var min = ws( tim.getMinutes() );		//分钟
		var sec = ws( tim.getSeconds() );		//秒
		
		
		var week = tim.getDay();		//周几，0-6
//		console.log(year,mon,d,h,min,sec,arrWeek[week]);
		
		$('.timehead1').text(h+':'+min+':'+sec);
		$('.timehead2').html(year+'-'+mon+'-'+d+'&nbsp;星期'+arrWeek[week]);
//		$('.date').text(year+'年'+mon+'月')
		
	}
	function ws(data){
//		console.log(data.toString().length)	//data是数字类型
//		return data.toString().length==1?'0'+data:data;
		return data<10?'0'+data:data;
	}
	function setTime(){
		var oUl = $('#one');
		oUl.html('');
		//设置当前月
		var tim = new Date();
//		tim.setMonth(tim.getMonth()+1);	//设置下一个月
		tim.setMonth(tim.getMonth()+(num+1));	//设置下一个月
		tim.setDate(0);					//设置月的上一月底最后一天，这里是指这个月的最后一天
//			console.log(tim.setDate(0))
		var nowMon = tim.getDate();		//最后一天
//			console.log(nowMon)
		
		//设置当前月的第一天（星期几）
		var tim = new Date();
		tim.setMonth(tim.getMonth()+num);	
		tim.setDate(1);					//这个月的第一天
//			console.log(tim.setDate(1))
		var nowWeek = tim.getDay();		//周几
//			console.log(oldMon)
		
		//2017年05月
		var str = tim.getFullYear()+'年'+ws( tim.getMonth()+1 )+'月';
		$('.date').html(str)
		
		//获取上个月
		var tim = new Date();
		tim.setMonth(tim.getMonth()+num);
		tim.setDate(0);					//上个月的最后一天
		var oldMon = tim.getDate();
//			console.log(oldMon)
		
		var w = $('.weeks')
		w.html('')
		for(var i=0;i<arrWeek.length;i++){
			var oDd = $('<dd>'+arrWeek[i]+'</dd>');
			w.append(oDd);
		}
		
		//上个月
		for(var i=(oldMon-nowWeek);i<oldMon;i++){
			var oLi = $('<li>'+(i+1)+'</li>');
			oLi.addClass('notNow');
			oUl.append(oLi);
			
		}
		//这个月
		var tim = new Date();
		var nowDay = tim.getDate();
		for(var i=0;i<nowMon;i++){
			var oLi = $('<li>'+(i+1)+'</li>');
			if((i+1) == nowDay && num == 0){
				oLi.addClass('select')
			}
			oUl.append(oLi);
		}
		//下个月
		var all = 42;
		var yet = oUl.find('li').length;
//		var n = 0;
//		for(var i=yet;i<all;i++){
		for(var i=0;i<(all-yet);i++){
//			var oLi = $('<li>'+(++n)+'</li>');
			var oLi = $('<li>'+(i+1)+'</li>');
			oLi.addClass('notNow');
			oUl.append(oLi);
		}
		
	}
	
	function change(){
		var prev = $('.switch .left');
		var next = $('.switch .right');
		prev.click(function(){
			num--;
			setTime();
		})
		next.click(function(){
			num++;
			setTime();
		})
	}
	
})
