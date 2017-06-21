(function(){
	creatPart4();
	function creatPart4(){
		var obj = {
			pro1:{
				imgs:'img/aliyun/photo2-3.jpg',
				header:'【深度】阿里云VPC最佳实践',
				lis1:'【回顾】云栖大会·南京峰会精彩视频',
				lis2:'【精选】人工“碳”索意犹尽，智能“硅”来未可知'
			},
			pro2:{
				imgs:'img/aliyun/photo2-2.jpg',
				header:'【聚能聊】阿里云发布了AI全景图你点亮了多少？',
				lis1:'【聚能聊】你真的会用云计算吗？',
				lis2:'【聚能聊】“速8”美女黑客控制的僵尸车与IOT安全'
			},
			pro3:{
				imgs:'img/aliyun/photo2-1.jpg',
				header:'【深度】专家解读DockerCon2017',
				lis1:'【分享】云栖大会成都峰会干货荟萃',
				lis2:'【专访】谈认知智能的现状与趋势'
			}
		}
		
		var oDiv = $('section>.part4>.part4-content');
		var str = createCon(obj);
		oDiv.append(str);
		
		function createCon(obj){
			var str = '';
			for (var attr1 in obj) {
				str += '<div class="part4-content-item">';
				for (var attr2 in obj[attr1]) {
					if(attr2 == 'imgs'){
						str += '<a href="" class="part4-title">'+
				          			'<div class="item-box">'+
				            			'<div class="img-area">'+
				              				'<img src="'+obj[attr1][attr2]+'">'+
				            			'</div>';
					}
					if(attr2 == 'header'){
						str += '<div class="box-header">'+
					              	'<p>'+obj[attr1][attr2]+'</p>'+
					            '</div>'+
				          	'</div>'+
				        '</a>';
					}
					if(attr2 == 'lis1'){
						str += '<div class="item-appendix">'+
				          			'<ul>'+
					            		'<li> <a href="">'+obj[attr1][attr2]+'</a> </li>';
					}
					if(attr2 == 'lis2'){
						str += '<li> <a href="">'+obj[attr1][attr2]+'</a> </li>'+
					        '</ul>'+
				        '</div>';
					}
				}
				str += '</div>';
			}
			return str;
		}
		
		
		
	}
	
})()
