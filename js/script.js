//菜单栏
var menuObj={
	menu1Lis:$('#menu1>li'),
	menu2:$('.menu2'),
	menu2Lis:$('.menu2>li'),
	menuLis:$('#menu1 li'),
	init:function(){
		var _this=this;
		_this.menuLis.mouseenter(function(){
			if($(this).children('ul').has('ul')){
			$(this).children('.menu2,.menu3').slideDown();
			}
		});
		_this.menuLis.mouseleave(function(){
			$(this).children('.menu2,.menu3').stop().slideUp();
		});
	}
};

//幻灯片
var flashObj={
	flashNode:$('#flash'),
	btnNumNodes:$('.btn-num span'),
	leftNode:$('.btn-left'),
	rightNode:$('.btn-right'),
	flashLiNodes:$('#flash li'),
	moveFun:function(oldPos,prePos){
		var _this=this;
		if(oldPos!=prePos)
		_this.btnNumNodes.eq(oldPos).removeClass('current');
		_this.btnNumNodes.eq(prePos).addClass('current');
		_this.flashLiNodes.eq(oldPos).stop(true,true).fadeOut();
		_this.flashLiNodes.eq(prePos).stop(true,true).fadeIn();
	},
	init:function(){
		var _this=this;
		_this.flashNode.mouseover(function(){
			_this.leftNode.show();
			_this.rightNode.show();
		});
		_this.flashNode.mouseout(function(){
			_this.leftNode.hide();
			_this.rightNode.hide();
		});
		_this.btnNumNodes.mouseover(function(){
			var oldPos=$('.btn-num .current').index();
//			var lastPos=$('.btn-num span:last').index();
			var prePos=$(this).index();
			_this.moveFun(oldPos,prePos);
		});
		_this.rightNode.click(function(){
			var oldPos=$('.btn-num .current').index();
			var lastPos=$('.btn-num span:last').index();
			var prePos=oldPos==lastPos?0:oldPos+1;
			_this.moveFun(oldPos,prePos);
		});
		_this.leftNode.click(function(){
			var oldPos=$('.btn-num .current').index();
			var lastPos=$('.btn-num span:first').index();
			var prePos=oldPos==lastPos?_this.flashLiNodes.length-1:oldPos-1;
			_this.moveFun(oldPos,prePos);
		});
	}
};
var main1Obj={
	LiNodes:$('.main1 li'),
	iNodes:$('.main1 i'),
	moveFun:function(oldPos,curPos){
		var _this=this;
			console.log(oldPos,curPos);
			if(oldPos!=curPos){
			_this.LiNodes.eq(curPos).stop(true,false).animate({width:'480px'},500);
			_this.LiNodes.eq(curPos).addClass('current');
			_this.LiNodes.eq(oldPos).stop(true,false).animate({width:'160px'},500);
			_this.LiNodes.eq(oldPos).removeClass('current');
			}
	},
	init:function(){
		var _this=this;
		_this.LiNodes.mouseenter(function(){
			var oldPos=$('.main1 .current').index();
			var curPos=$(this).index();
			console.log(oldPos,curPos+'---');
			_this.moveFun(oldPos,curPos);
		});
	}
};
var main2Obj={
	spanNode1:$('.main2 .about'),
    leftNode:$('.main2 .value-left'),
    rightNode:$('.main2 .value-right'),
    pNode:$('.main2 p'),
    emNode:$('.main2 em'),
    imgNode:$('.main2 img'),
    changeFun:function(oldPos,curPos){
    	var _this=this;
    	_this.pNode.eq(curPos).addClass('current').show();
    	_this.pNode.eq(oldPos).removeClass('current').hide();
    },
    appearFun:function(){
    	var _this=this;
    	_this.emNode.css('top',0);
    	_this.imgNode.css({'width':parseInt(_this.imgNode.css('width'))*1.1+'px'})
    	_this.imgNode.css({'height':parseInt(_this.imgNode.css('height'))*1.1+'px'})
    },
    disappearFun:function(){
    	var _this=this;
    	_this.emNode.css('top',_this.spanNode1.css('height'));
    	_this.imgNode.css({'width':parseInt(_this.spanNode1.css('width'))+'px'})
    	_this.imgNode.css({'height':parseInt(_this.spanNode1.css('height'))+'px'})
    },
	init:function(){
		var _this=this;
		_this.rightNode.click(function(){
			var oldPos=$('.main2 .current').index();
			var lastPos=$('.main2 p:last').index();
			var curPos=oldPos==lastPos?0:oldPos+1;
			_this.changeFun(oldPos,curPos);
		});
		_this.leftNode.click(function(){
			var oldPos=$('.main2 .current').index();
			var lastPos=$('.main2 p:first').index();
			var curPos=oldPos==lastPos?_this.pNode.length-1:oldPos-1;
			_this.changeFun(oldPos,curPos);
		});
		_this.spanNode1.mouseover(function(){
			_this.appearFun();
		});
		
		_this.spanNode1.mouseout(function(){
			_this.disappearFun();
		});
	}
};
var main3Obj={
	leftNode:$('.main3 .value-left'),
    rightNode:$('.main3 .value-right'),
    liNodes:$('.main3 li'),
    ulNode:$('.main3 ul'),
    flag:false,
    moverightFun:function(){
    	var _this=this;
		if(_this.flag==false){
    	_this.flag=true;
    	var liNodes=$('.main3 li');
    	var firstPos=$('.main3 li:first').index();
		var lastPos=$('.main3 li:last').index();
    	_this.ulNode.prepend(liNodes.eq(lastPos));
    	var width=parseInt(liNodes.css('width'))+parseInt(liNodes.css('marginRight'));
    	liNodes=$('.main3 li');
    	liNodes.eq(0).css('marginLeft',-width+'px');
    	liNodes.eq(0).stop().animate({'marginLeft':0},1000,function(){_this.flag=false;});
    	
    }
    },
    moveleftFun:function(){
    	var _this=this;
		if(_this.flag==false){
    	_this.flag=true;
    	var liNodes=$('.main3 li');
    	var firstPos=$('.main3 li:first').index();
		var lastPos=$('.main3 li:last').index();
    	var width=parseInt(liNodes.css('width'))+parseInt(liNodes.css('marginRight'));
    	liNodes=$('.main3 li');
		liNodes.eq(0).stop().animate({'marginLeft':-width+'px'},1000,function(){
			_this.flag=false;
			_this.ulNode.append(liNodes.eq(0));
			liNodes.eq(0).css('marginLeft',0);
		});
    	
    }
    },
	init:function(){
		var _this=this;
		_this.rightNode.click(function(){
			_this.moverightFun();
		});
		_this.leftNode.click(function(){
			_this.moveleftFun();
		});
	}
};
var inpageObj={
	menuNodes:$('.inpage-menu-main li'),
	mainNodes:$('.inpage-main-main li'),
	ulNode:$('.inpage-main-main ul'),
	changeFun:function(oldPos,curPos){
		var _this=this;
		_this.menuNodes.eq(curPos).addClass('current').siblings('.current').removeClass('current');
		var className=_this.menuNodes.eq(curPos).attr('data');
		if(className=='*')
		_this.ulNode.children().show();
		else
		_this.ulNode.children(className).show().siblings('li:not('+className+')').hide();
		
	},
	init:function(){
		var _this=this;
		_this.menuNodes.click(function(){
			var oldPos=$('.inpage-menu-main .current').index();
			var curPos=$(this).index();
			_this.changeFun(oldPos,curPos);
		});
	}
};
flashObj.init();
menuObj.init();
main1Obj.init();
main2Obj.init();
main3Obj.init();
inpageObj.init();
