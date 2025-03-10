
var projectName = '小工程预算系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '装修材料',
	url: './pages/zhuangxiucailiao/list.jsp'
}, 
{
	name: '工程信息',
	url: './pages/gongchengxinxi/list.jsp'
}, 

{
	name: '公告资讯',
	url: './pages/news/list.jsp'
},
]

var adminurl =  "http://localhost:8080/jspm6bj04/index.jsp";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除"],"menu":"材料分类","menuJump":"列表","tableName":"cailiaofenlei"}],"menu":"材料分类管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除","查看评论"],"menu":"装修材料","menuJump":"列表","tableName":"zhuangxiucailiao"}],"menu":"装修材料管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","删除","修改"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除","查看评论","新增"],"menu":"工程信息","menuJump":"列表","tableName":"gongchengxinxi"}],"menu":"工程信息管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除"],"menu":"工程订单","menuJump":"列表","tableName":"gongchengdingdan"}],"menu":"工程订单管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","购买"],"menu":"装修材料列表","menuJump":"列表","tableName":"zhuangxiucailiao"}],"menu":"装修材料模块"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","下单"],"menu":"工程信息列表","menuJump":"列表","tableName":"gongchengxinxi"}],"menu":"工程信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","删除","支付"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除","审核","支付"],"menu":"工程订单","menuJump":"列表","tableName":"gongchengdingdan"}],"menu":"工程订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","购买"],"menu":"装修材料列表","menuJump":"列表","tableName":"zhuangxiucailiao"}],"menu":"装修材料模块"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","下单"],"menu":"工程信息列表","menuJump":"列表","tableName":"gongchengxinxi"}],"menu":"工程信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
