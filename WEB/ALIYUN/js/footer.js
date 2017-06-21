(function(){
	//footer top right
	createFTR();
	function createFTR(){
		var obj = {
			uls1:{
				tit:'服务与支持',
				con:[{
					det1:'售前咨询',
					det2:'阿里云授权服务中心',
					det3:'联系客服',
					det4:'新手学堂',
					det5:'开发者交流',
					det6:'上云培训',
					det7:'服务公告',
					det8:'信任中心',
					det9:'举报中心'
				}]
			},
			uls2:{
				tit:'账号与支持',
				con:[{
					det1:'登录常见问题',
					det2:'充值付款',
					det3:'线下汇款 / 电汇',
					det4:'合同申请',
					det5:'索取发票'
				}]
			},
			uls3:{
				tit:'快速入口',
				con:[{
					det1:'管理控制台',
					det2:'备案管理',
					det3:'账号管理',
					det4:'域名信息查询（WHOIS）',
					det5:'域名控制台',
					det6:'万网主机控制面板',
					det7:'产品图标'
				}]
			},
			uls4:{
				tit:'其他',
				con:[{
					det1:'定价',
					det2:'客户案例',
					det3:'新产品发布台',
					det4:'海外上云',
					det5:'博客',
					det6:'社区话题',
					det7:'云教程',
					det8:'提交建议'
				}]
			},
			uls5:{
				tit:'关注阿里云',
				con:[{
					det1:'企业决策必读',
					det2:'阿里云APP',
					det3:'阿里云微信',
					det4:'阿里云微博',
					det5:'阿里云服务中心'
				}]
			}
		}
		//数据渲染
		var ftrCont = $('footer>.footer-top>.footer-top-right>.footer-know-content');
		var str = createstr(obj);
		ftrCont.append(str);
		//最后添加二维码
		var lastDD = ftrCont.find('li').eq(4).find('dd');
		var oImg = $('<img src="img/aliyun/alyewm.png"/>');
		lastDD.append(oImg);
		var fristddImg = lastDD.eq(0).find('img');
		fristddImg.addClass('ewmActive');
		var allImg = lastDD.find('img');
		//悬浮出现二维码
		lastDD.mouseover(function(){
			allImg.removeClass('ewmActive');
			$(this).find('img').addClass('ewmActive');
		})
		
		function createstr(obj){
			var str = '';
			for(var attr1 in obj){
				str += '<li>';
				for (var attr2 in obj[attr1]) {
					if(attr2=='tit'){
						str += '<h3 class="footer-know-title">'+obj[attr1][attr2]+'</h3>';
					}
					if(attr2=='con'){
						str += '<dl class="footer-know-subcontent">';
						for (var attr3 in obj[attr1][attr2]) {
							for (var attr4 in obj[attr1][attr2][attr3]) {
								str += '<dd><a title="'+obj[attr1][attr2][attr3][attr4]+'" href="">'+obj[attr1][attr2][attr3][attr4]+'</a></dd>';
							}
						}
						str += '</dl>';
					}
				}
				str += '</li>';
			}
			return str;
		}
		
		
	}
	
	//footer middle
	createFM();
	function createFM(){
		var obj = {
			uls1:{
				tit:'热门产品',
				con:[{
					det1:'云服务器ECS',
					det2:'云数据库RDS',
					det3:'云存储OSS',
					det4:'NAT网关',
					det5:'负载均衡',
					det6:'域名注册',
					det7:'网站建设',
					det8:'大数据',
					det9:'云计算'
				}]
			},
			uls2:{
				tit:'用户热搜',
				con:[{
					det1:'网站备案',
					det2:'网安法',
					det3:'CDN加速',
					det4:'API网关',
					det5:'企业邮箱',
					det6:'whois查询',
					det7:'视频直播',
					det8:'视频转码',
					det9:'云安全'
				}]
			},
			uls3:{
				tit:'更多推荐',
				con:[{
					det1:'全民云计算',
					det2:'免费套餐',
					det3:'学生机',
					det4:'IT论坛',
					det5:'阿里云客服',
					det6:'云虚机',
					det7:'com域名',
					det8:'cn域名',
					det9:'VPN网关'
				}]
			}
		}
		//数据渲染
		var fmCon = $('footer>.footer-middle>.footer-middle-content');
		var str = createstr(obj);
		fmCon.append(str);
		function createstr(obj){
			var str = '';
			for(var attr1 in obj){
				str += '<li>';
				for (var attr2 in obj[attr1]) {
					if(attr2=='tit'){
						str += '<h3 class="footer-middle-title">'+obj[attr1][attr2]+'</h3>';
					}
					if(attr2=='con'){
						str += '<dl class="footer-middle-subcontent">';
						for (var attr3 in obj[attr1][attr2]) {
							for (var attr4 in obj[attr1][attr2][attr3]) {
								str += '<dd><a title="'+obj[attr1][attr2][attr3][attr4]+'" href="">'+obj[attr1][attr2][attr3][attr4]+'</a></dd>';
							}
						}
						str += '</dl>';
					}
				}
				str += '</li>';
			}
			return str;
		}

		
	}
	
	//footer bottom
	createFB();
	function createFB(){
		var arr1 = ['关于我们','法律声明','廉正举报','友情链接'];
		var arr2 = ['阿里巴巴集团','淘宝网','天猫','聚划算','全球速卖通','阿里巴巴国际交易市场','1688','阿里妈妈','飞猪','阿里云计算','YunOS','阿里通讯','万网','高德','UC','友盟','虾米','阿里星球','来往','钉钉','支付宝'];
		var about = $('footer>.footer-bottom>.about');
		for (var i=0;i<arr1.length;i++) {
			about.html( about.html() + '<a href="">'+arr1[i]+'</a>');
		}
		var links = $('footer>.footer-bottom>.link');
		for (var i=0;i<arr2.length;i++) {
			links.html( links.html() + '<li><a href="">'+arr2[i]+'</a></li>');
		}
		
	}
	
	
})()
