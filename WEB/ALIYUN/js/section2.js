(function(){
	createPart2();
	dir();
	function createPart2(){
		var obj = {
			lis1:{
				bgImg:'img/aliyun/photo1-1.jpg',
				icon1:'img/aliyun/icon26-1.png',
				icon2:'img/aliyun/icon26-2.png',
				tit:'电商解决方案',
				con:'结合大数据能力帮助电商企业快速搭建平台、应对业务高并发，剖析秒杀、视频直播等场景',
				det:'查看详情'
			},
			lis2:{
				bgImg:'img/aliyun/photo1-2.jpg',
				icon1:'img/aliyun/icon27-1.png',
				icon2:'img/aliyun/icon27-2.png',
				tit:'APP解决方案',
				con:'助移动开发者轻松应对用户数爆发式增长,实现基于大数据的精细化运营、增强用户黏性',
				det:'查看详情'
			},
			lis3:{
				bgImg:'img/aliyun/photo1-3.jpg',
				icon1:'img/aliyun/icon28-1.png',
				icon2:'img/aliyun/icon28-2.png',
				tit:'金融解决方案',
				con:'为金融行业提供量身定制的云计算服务，具备低成本、高弹性、高可用、安全合规的特性',
				det:'查看详情'
			},
			lis4:{
				bgImg:'img/aliyun/photo1-4.jpg',
				icon1:'img/aliyun/icon29-1.png',
				icon2:'img/aliyun/icon29-2.png',
				tit:'游戏解决方案',
				con:'为游戏开发者提供专属集群、尊享VIP服务、专项扶持基金、多场景游戏部署解决方案',
				det:'查看详情'
			},
			lis5:{
				bgImg:'img/aliyun/photo1-5.jpg',
				icon1:'img/aliyun/icon30-1.png',
				icon2:'img/aliyun/icon30-2.png',
				tit:'医疗解决方案',
				con:'融合云计算大数据，连接用户、医疗设备、医疗机构和医疗ISV，构建医疗行业云生态',
				det:'查看详情'
			},
			lis6:{
				bgImg:'img/aliyun/photo1-6.jpg',
				icon1:'img/aliyun/icon31-1.png',
				icon2:'img/aliyun/icon31-2.png',
				tit:'网站解决方案',
				con:'依据网站不同发展阶段，为网站类用户提供最佳上云方案，有效降低运维难度和整体IT成本',
				det:'查看详情'
			},
			lis7:{
				bgImg:'img/aliyun/photo1-7.jpg',
				icon1:'img/aliyun/icon32-1.png',
				icon2:'img/aliyun/icon32-2.png',
				tit:'音视频解决方案',
				con:'一站式提供“海量存储、高效分发、极速网络”等服务， 轻松坐享CCTV-5、微博的传播能力',
				det:'查看详情'
			},
			lis8:{
				bgImg:'img/aliyun/photo1-8.jpg',
				icon1:'img/aliyun/icon33-1.png',
				icon2:'img/aliyun/icon33-2.png',
				tit:'渲染解决方案',
				con:'基于超强计算和存储能力，面对影视广告、游戏等行业的染需求，提供多层次渲染解决方案',
				det:'查看详情'
			},
			lis9:{
				bgImg:'img/aliyun/photo1-9.jpg',
				icon1:'img/aliyun/icon34-1.png',
				icon2:'img/aliyun/icon34-2.png',
				tit:'O2O解决方案',
				con:'帮助客户快速拓展O2O业务，提升用户使用体验，助力O2O客户走进互联网的“场景时代”',
				det:'查看详情'
			},
			lis10:{
				bgImg:'img/aliyun/photo1-10.jpg',
				icon1:'img/aliyun/icon35-1.png',
				icon2:'img/aliyun/icon35-2.png',
				tit:'政务解决方案',
				con:'立足于对政务信息化的深刻理解，构筑开放共享、敏捷高效、安全可信的政务云基础架构',
				det:'查看详情'
			},
			lis11:{
				bgImg:'img/aliyun/photo1-11.jpg',
				icon1:'img/aliyun/icon36-1.png',
				icon2:'img/aliyun/icon36-2.png',
				tit:'物联网解决方案',
				con:'定制化方案助力传统硬件厂商和中小平台服务商快速搭建稳定可靠、安全可控的物联网平台',
				det:'查看详情'
			}
		}
		
		var oUl = $('section>.part2>.part2-content');
		var str = '';
		var arr1 = [];//存url
		var arr2 = [];//存url
		creatLi(obj);
		oUl.append(str);//生成li
		
		var oA = $('section>.part2>.part2-content>.part2-det>li>a');
		var w = oA.innerWidth();
		oUl.css('width',w*oA.length);//重置宽度
		
		function creatLi(obj){
			str += '<ul	class="part2-det">';
			for (var attr1 in obj) {
				for (var attr2 in obj[attr1]) {
					if(attr2 == 'bgImg'){
						str += '<li style="background-image:url('+obj[attr1][attr2]+');"><a href="">';
					}
					if(attr2 == 'icon1'){
						str += '<i class="part2-icon" style="background-image:url('+obj[attr1][attr2]+');"></i><br /><span class="part2-line"></span>';
						arr1.push(obj[attr1][attr2]);
					}
					if(attr2 == 'icon2'){
						arr2.push(obj[attr1][attr2]);
					}
					if(attr2 == 'tit'){
						str += '<h3 class="part2-title">'+obj[attr1][attr2]+'</h3>';
					}
					if(attr2 == 'con'){
						str += '<p class="part2-con">'+obj[attr1][attr2]+'</p>';
					}
				}
				str += '<p class="part2-btn">查看详情</p></a></li>';
			}
			str += '</ul>';
			return str,arr1,arr2;
		}
		//悬浮效果
		var oLi = $('section>.part2>.part2-content>.part2-det>li');
		oLi.hover(function(){
			var that = $(this);
			var num = $(this).index();
			liIn(that,arr2[num]);
		},function(){
			var that = $(this);
			var num = $(this).index();
			liOut(that,arr1[num])
		});
		
		function liIn(that,url2){
			var oA = that.find('a');
			var oIcon = that.find('.part2-icon');
			var oLine= that.find('.part2-line');
			var oTit= that.find('.part2-title');
			var oCon= that.find('.part2-con');
			var oBtn= that.find('.part2-btn');
			oA.css({'background-color':'rgba(0,194,222,0.7)','padding-top':'50px'});
			oIcon.css('background-image','url('+url2+')'); 
			oLine.css('opacity','0');
			oTit.css('margin-top','0px')
			oCon.css('opacity','1');
			oBtn.css('opacity','1');
			
			oBtn.hover(function(){
				oBtn.css({'background-color':'#fff','color':'rgba(0,194,222,1)'})
			},function(){
				oBtn.css({'background-color':'transparent','color':'#fff'})
			})
		}
		function liOut(that,url1){
			var oA = that.find('a');
			var oIcon = that.find('.part2-icon');
			var oLine= that.find('.part2-line');
			var oTit= that.find('.part2-title');
			var oCon= that.find('.part2-con');
			var oBtn= that.find('.part2-btn');
			oA.css({'background-color':'rgba(0,0,0,0.5)','padding-top':'100px'});
			oIcon.css('background-image','url('+url1+')'); 
			oLine.css('opacity','1');
			oTit.css('margin-top','24px');
			oCon.css('opacity','0');
			oBtn.css('opacity','0');
		}
		
	}
		
	function dir(){
		var oUl = $('section>.part2>.part2-content>.part2-det');
		var btnLeft = $('section>.part2>.part2-left');
		var btnRight = $('section>.part2>.part2-right');
		var num = 1350;//一屏的宽度
		btnLeft.click(function(){
			toLeft();
		})
		btnRight.click(function(){
			toRight();
		})
		function toRight(){
			var oUlpo = oUl.position().left;
			if(oUlpo==0){
				oUl.css('left',(oUlpo-num));
			}
			if(oUlpo==-1350){
				oUl.css('left',(oUlpo-270));
			}
			if(oUlpo==-270){
				oUl.css('left',(oUlpo-num));
			}
		}
		function toLeft(){
			var oUlpo = oUl.position().left;
			if(oUlpo==-1350){
				oUl.css('left',(oUlpo+num));
			}
			if(oUlpo==-1620){
				oUl.css('left',(oUlpo+num));
			}
			if(oUlpo==-270){
				oUl.css('left',(oUlpo+270));
			}
		}
		
	}
	
	
	
	
	
	
	
	
})()
