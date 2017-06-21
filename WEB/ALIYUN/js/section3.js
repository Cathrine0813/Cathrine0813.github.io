(function(){
	createPro();
	function createPro(){
		var obj = {
			pro1:{
				img:'img/aliyun/iconLong1.jpg',
				tit:'基础软件',
				con:[{
					lis1:{
						licon1:'预装PHP',
						licon2:'预装JAVA',
						licon3:'预装ASP/.NET'
					},
					lis2:{
						licon1:'预装建站系统',
						licon2:'服务器软件',
						licon3:'应用开发工具'
					}
				}]
			},
			pro2:{
				img:'img/aliyun/iconLong2.jpg',
				tit:'网站建设',
				con:[{
					lis1:{
						licon1:'网站模板',
						licon2:'企业官网',
						licon3:'电子商务'
					},
					lis2:{
						licon1:'定制化服务',
						licon2:'推广与营销',
						licon3:'手机网站'
					}
				}]
			},
			pro3:{
				img:'img/aliyun/iconLong3.jpg',
				tit:'服务与培训',
				con:[{
					lis1:{
						licon1:'故障排查',
						licon2:'数据迁移',
						licon3:'环境配置'
					},
					lis2:{
						licon1:'云培训与认证'
					}
				}]
			},
			pro4:{
				img:'img/aliyun/iconLong4.jpg',
				tit:'企业应用',
				con:[{
					lis1:{
						licon1:'阿里云办公',
						licon2:'销售管理',
						licon3:'企业服务'
					},
					lis2:{
						licon1:'人事管理',
						licon2:'财务管理'
					}
				}]
			},
			pro5:{
				img:'img/aliyun/iconLong5.jpg',
				tit:'安全市场',
				con:[{
					lis1:{
						licon1:'网络安全',
						licon2:'主机安全',
						licon3:'应用安全'
					},
					lis2:{
						licon1:'数据安全',
						licon2:'安全管理',
						licon3:'安全服务'
					}
				}]
			},
			pro6:{
				img:'img/aliyun/iconLong6.jpg',
				tit:'API市场',
				con:[{
					lis1:{
						licon1:'API服务',
						licon2:'电子商务',
						licon3:'金融理财'
					},
					lis2:{
						licon1:'企业管理',
						licon2:'交通地理',
						licon3:'气象水利'
					}
				}]
			}
		}
		
		var oCon = $('section>.part3>.part3-content'); 
		var str = createDiv(obj);
		oCon.append(str);
		function createDiv(obj){
			var str = '';
			
			for (var attr1 in obj) {
				str += '<div class="part3-product">';
				for (var attr2 in obj[attr1]) {
					if(attr2=='img'){
						str += '<a href="" class="part3-title"><div class="part3-product-img" style="background-image:url('+obj[attr1][attr2]+');"></div>'
					}
					if(attr2=='tit'){
						str += '<h2 class="part3-product-title">'+obj[attr1][attr2]+'</h2></a>'
					}
					if(attr2=='con'){
						str += '<ul class="part3-product-detail">';
						for (var attr3 in obj[attr1][attr2]) {
							for (var attr4 in obj[attr1][attr2][attr3]) {
								if(attr4 == 'lis1'){
									for (var attr5 in obj[attr1][attr2][attr3][attr4]) {
										if(attr5=='licon1'){
											str += '<li class="appendix-list"><a href="" >'+obj[attr1][attr2][attr3][attr4][attr5]+'</a></li><span style="font-size: 14px;color:#dcddde">&nbsp;|&nbsp;</span>';
										}
										if(attr5=='licon2'){
											str += '<li class="appendix-list"><a href="" >'+obj[attr1][attr2][attr3][attr4][attr5]+'</a></li><span style="font-size: 14px;color:#dcddde">&nbsp;|&nbsp;</span>';
										}
										if(attr5=='licon3'){
											str += '<li class="appendix-list"><a href="" >'+obj[attr1][attr2][attr3][attr4][attr5]+'</a></li><br/>';
										}
									}
									
								}
								if(attr4 == 'lis2'){
									for (var attr5 in obj[attr1][attr2][attr3][attr4]) {
										if(attr5=='licon1'){
											str += '<li class="appendix-list"><a href="" >'+obj[attr1][attr2][attr3][attr4][attr5]+'</a></li>';
										}
										if(attr5=='licon2'){
											str += '<span style="font-size: 14px;color:#dcddde">&nbsp;|&nbsp;</span><li class="appendix-list"><a href="" >'+obj[attr1][attr2][attr3][attr4][attr5]+'</a></li>';
										}
										if(attr5=='licon3'){
											str += '<span style="font-size: 14px;color:#dcddde">&nbsp;|&nbsp;</span><li class="appendix-list"><a href="" >'+obj[attr1][attr2][attr3][attr4][attr5]+'</a></li>';
										}
									}
								}		
							}
						}
						str += '</ul>';
					}
				}
				str += '</div>'
			}
			return str;
		}
		
		
		//鼠标悬浮效果(每个60个定位,150px)
		imgMove()
		function imgMove(){
			var oCon = $('section>.part3>.part3-content');
			var oConDel = $('section>.part3>.part3-content>.part3-product');
			var oA = $('section>.part3>.part3-content>.part3-product>.part3-title');
			oA.attr('num','0');//自定义函数
			oA.attr('timerIn',null);
			oA.attr('timerOut',null);
			
			oA.hover(function(){
				var that = $(this);
				var oImg = that.find('.part3-product-img');
//				var ind = that.parent().index();//寻找第几个div,0-5
				
				clearInterval(that.attr('timerOut'))
				
				that.attr('timerIn', 
					setInterval(function(){
						
						if(that.attr('num')>=29){
							that.attr('num',29);
							clearInterval(that.attr('timerIn'));
						}else{
							that.attr('num',+that.attr('num')+1);
						}
						var num = that.attr('num');
						oImg.css('background-position','0px '+ num*(-150) +'px');
//						moveIn(num,that,oImg,that.attr('timerIn'))
					},30)
				)
			},function(){
				var that = $(this);
				var oImg = that.find('.part3-product-img');
				
				clearInterval(that.attr('timerIn'));
				
				that.attr('timerOut',
					setInterval(function(){
						if(that.attr('num')<=0){
							that.attr('num',0);
							clearInterval(that.attr('timerOut'));
						}else{
							that.attr('num',that.attr('num')-1);
						}
						var num = that.attr('num');
						oImg.css('background-position','0px '+ num*(-150) +'px');
//						moveOut(num,that,oImg,that.attr('timerOut'))
					},30)
				)
			})
			
//			function moveIn(num,that,oImg,timer){
//				if(num>=29){
//					clearInterval(timer);
//				}
//				oImg.css('background-position','0px '+ num*(-150) +'px');
//			}
//			function moveOut(num,that,oImg,timer){
//				if(num<=0){
//					clearInterval(timer);
//				}
//				oImg.css('background-position','0px '+ num*(-150) +'px');
//			}
			
			
			
		}
		
		
		
		
		
	}
	
	
	
	
})()
