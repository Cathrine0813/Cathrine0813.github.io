(function(){
	//product list
	createProduct();
	function createProduct(){
		var obj = {
			uls1: [{
				lis1: {
					urls1: 'img/aliyun/icon7-1.png',
					urls2: 'img/aliyun/icon7-2.png',
					txt: '弹性计算'
				},
				lis2: {
					urls1: 'img/aliyun/icon8-1.png',
					urls2: 'img/aliyun/icon8-2.png',
					txt: '存储和CDN'
				},
				lis3: {
					urls1: 'img/aliyun/icon9-1.png',
					urls2: 'img/aliyun/icon9-2.png',
					txt: '数据库'
				},
				lis4: {
					urls1: 'img/aliyun/icon10-1.png',
					urls2: 'img/aliyun/icon10-2.png',
					txt: '网络'
				},
				lis5: {
					urls1: 'img/aliyun/icon11-1.png',
					urls2: 'img/aliyun/icon11-2.png',
					txt: '域名与网站'
				}
			}],
				
			uls2:[{
				lis1:{
					urls1: 'img/aliyun/icon12-1.png',
					urls2: 'img/aliyun/icon12-2.png',
					txt: '安全（云盾）'
				},
				lis2:{
					urls1: 'img/aliyun/icon13-1.png',
					urls2: 'img/aliyun/icon13-2.png',
					txt: '人工智能 ET'
				},
				lis3:{
					urls1: 'img/aliyun/icon14-1.png',
					urls2: 'img/aliyun/icon14-2.png',
					txt: '大数据基础服务'
				},
				lis4:{
					urls1: 'img/aliyun/icon15-1.png',
					urls2: 'img/aliyun/icon15-2.png',
					txt: '大数据应用'
				},
				lis5:{
					urls1: 'img/aliyun/icon16-1.png',
					urls2: 'img/aliyun/icon16-2.png',
					txt: '大数据分析及展现'
				}
			}],
			
			uls3:[{
				lis1:{
					urls1: 'img/aliyun/icon17-1.png',
					urls2: 'img/aliyun/icon17-2.png',
					txt: '分析和搜索'
				},
				lis2:{
					urls1: 'img/aliyun/icon18-1.png',
					urls2: 'img/aliyun/icon18-2.png',
					txt: '云通信'
				},
				lis3:{
					urls1: 'img/aliyun/icon19-1.png',
					urls2: 'img/aliyun/icon19-2.png',
					txt: '应用服务'
				},
				lis4:{
					urls1: 'img/aliyun/icon20-1.png',
					urls2: 'img/aliyun/icon20-2.png',
					txt: '移动服务'
				},
				lis5:{
					urls1: 'img/aliyun/icon21-1.png',
					urls2: 'img/aliyun/icon21-2.png',
					txt: '视频服务'
				}
			}],
				
			uls4:[{
				lis1:{
					urls1: 'img/aliyun/icon22-1.png',
					urls2: 'img/aliyun/icon22-2.png',
					txt: '管理与监控'
				},
				lis2:{
					urls1: 'img/aliyun/icon23-1.png',
					urls2: 'img/aliyun/icon23-2.png',
					txt: '中间件'
				},
				lis3:{
					urls1: 'img/aliyun/icon24-1.png',
					urls2: 'img/aliyun/icon24-2.png',
					txt: '专有云'
				}
			}]
		}
		
		var part1 = $('section>.part1>.ali-product-show-more');
		
		createLi(obj);
		//生成包ul的div
		function createLi(obj){
			var str = '';
			var arr = [];//每个ul下的li个数
			fn(obj);
			//生成ul下li
			function fn(obj){
				var num = 0;
				for (var i=0;i<4;i++) {
					str = '';//清空
					for(var attr1 in obj['uls'+(i+1)]){
						for (var attr2 in obj['uls'+(i+1)][attr1]) {
							num+=1;//给a链接加锚点，1-18
							str += '<li class="ali-product-tab"><a href="#aa'+num+'">';
							for(var attr3 in obj['uls'+(i+1)][attr1][attr2]){
								if(attr3 == 'urls1'){
									str += '<i class="ali-product-icon" style="background-image:url('+obj['uls'+(i+1)][attr1][attr2][attr3]+');"></i>';
								}
								if(attr3 == 'txt'){
									str += '<p class="ali-product-name" style="color:#373d41;">'+obj['uls'+(i+1)][attr1][attr2][attr3]+'</p>';
								}
							}
							str += '</a></li>';
						}
					}
					arr[i] = str;
				}
				return arr;
			}
			for (var i=0;i<4;i++) {
				var divs = $('<div class="ali-product-layer"><ul class="ali-product-tabs">'+arr[i]+'<div class="indicator-triangle"></div></ul><div class="ali-product-content-container"></div></div>')
				part1.before(divs);
			}
		}
		
		//点击事件
		var oLi = $('section>.part1>.ali-product-layer>.ali-product-tabs>.ali-product-tab>a');
		//初设
		var first = $('section>.part1>.ali-product-layer>.ali-product-tabs>.ali-product-tab>a').first();
		liClick(first);
		
		//悬浮
		oLi.hover(function(){
			$(this).find('.ali-product-name').css('color','#00c1de');
		},function(){
			if(!$(this).find('.ali-product-name').hasClass('.name-active')){
				$(this).find('.ali-product-name').css('color','#373d41');
			}
		})
		//点击
		oLi.click(function(){
			var that = $(this);
			liClick(that);
		})
		
		function liClick(that){
			//其他还原
			styleBack();
			//图片改变路径
			var oldSrc = that.find('.ali-product-icon').css('background-image');
			var num = oldSrc.slice(-7);//1.png")
			var newSrc = oldSrc.replace(num,'2.png")');
			that.find('.ali-product-icon').css('background-image',newSrc);
			//字体改变颜色
			that.find('.ali-product-name').addClass('.name-active');
			that.find('.ali-product-name').css('color','#00c1de');
		}
		
		function styleBack(){
			oLi.each(function(i){
				//路径
				var oldSrc = oLi.eq(i).find('.ali-product-icon').css('background-image');
				var num = oldSrc.slice(-7);//1.png")
				var newSrc = oldSrc.replace(num,'1.png")');
				oLi.eq(i).find('.ali-product-icon').css('background-image',newSrc);
				//字体
				oLi.find('.ali-product-name').removeClass('.name-active');
				oLi.find('.ali-product-name').css('color','#373d41');
			})
		}
	}
	
	hideShow();
	function hideShow(){
		var btn = $('section>.part1>.ali-product-show-more');
		var oDiv = $('section>.part1>.ali-product-layer').last();
		oDiv.css({'height':'0px','transition':'0.3s','overflow':'hidden'});
		btn.click(function(){
			if(oDiv.css('height')=='0px'){
				oDiv.css('height','131px');
				btn.html('收起');
			}else{
				oDiv.css('height','0px');
				btn.html('查看更多');
			}
		})
	}
	
	
	
})()
