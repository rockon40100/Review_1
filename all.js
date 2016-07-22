
//--------------設定每一頁的高，讓每一頁的高都和視窗高度一樣

var pageHeight = window.innerHeight;
var count_id = $(".wrap > div").size()*-1;
var count_num = $(".wrap > div").size()*-1;

function getHeight(){
	var pageNum = '#'+$('.wrap > div')[count_id-count_num].id;
	$(pageNum).height(pageHeight+300);
	//console.log($("#first").height(pageHeight));
	//console.log($("pageNum").height(pageHeight));
	//console.log($(pageNum));
	//console.log('#'+$(".wrap > div")[count_id-count_num].id);
	

}

while(count_id<0){
	getHeight();
	count_id++;
	//console.log(count_id);
}

//---------------讓TAG可以滑鼠滑過去變色+跑出標籤

function OpenTag(){
	$(".opentag>li").mouseover(function(){
		var countTag = 0;
		while(countTag<=4){
			if(this == $(".opentag>li")[countTag]){ //亮
				var targetdot = $(".opentag>li>div")[countTag];
				$(targetdot).addClass("divdothover");//點亮
				//$(targetdot).animate({"background-color ": "#FFFF00"},"5000");//為啥不行QQ
				//var tag = '#'+'tag'+countTag;
				var tag = $(".tag>a>li")[countTag];//黃標籤
				var taghover = {
					width : "100",
					opacity : "1",
					cursor : "pointer"
				}
				var tagout = {
					width : "0",
					opacity : "-=1",
					cursor : "default"
				}
				$(tag).css(taghover);//標籤亮
				
				$(".opentag>li").mouseout(function(){ //消失
					$(targetdot).removeClass("divdothover");
					//$(targetdot).animate({"background-color": "#666"},"5000");
					$(tag).css(tagout);
				});

				$(tag).mouseover(function(){ //滑鼠移到黃標籤上仍會打開//小BUG，因為黃標籤是opacity=1看不到，滑鼠滑過去仍會出現cursor並開啟標籤
					$(tag).css(taghover);
					$(targetdot).addClass("divdothover");
				});
				$(tag).mouseout(function(){
					$(tag).css(tagout);
					$(targetdot).removeClass("divdothover");
				});



				break;
			}
			countTag++;
		}

		//console.log(countTag);
	});
	//----------------移到某頁該TAG就會自己打開(暫時停止製作)
	$(document).ready(function(){
		var targetscroll = document.getElementById("wrap");
		var countTag = 0;//換函數了再抓一次目標
		var tag = $(".tag>a>li")[countTag];//黃標籤
		var taghover = {
			width : "100",
			opacity : "1",
			cursor : "pointer"
		}
		var tagout = {
			width : "0",
			opacity : "-=1",
			cursor : "default"
		}
		$(tag).css(taghover);
		$(this).scroll(function(){
			var allscroll = targetscroll.scrollHeight;
			var nowscroll = $(this).scrollTop();//不知道為什麼nowscroll<allscroll....
			console.log(nowscroll);
			if(nowscroll<pageHeight){
				var countTag = 0;
				var targetdot = $(".opentag>li>div")[countTag];//每次都要再丟一個也太蠢...
				var tag = $(".tag>a>li")[countTag];
				$($(".opentag>li>div")[countTag+1]).removeClass("divdothover");//都已經用了變數還要再把原本的拿出來會不會很混亂= =?而且每個都要放會很蠢嗎...?
				$($(".tag>a>li")[countTag+1]).css(tagout);
				$(targetdot).addClass("divdothover");
				$(tag).css(taghover);
			}
			if(nowscroll>=pageHeight/1.3){
				countTag = 1;
				var targetdot = $(".opentag>li>div")[countTag];
				var tag = $(".tag>a>li")[countTag];
				$($(".opentag>li>div")[countTag-1]).removeClass("divdothover");
				$($(".tag>a>li")[countTag-1]).css(tagout);
				$($(".opentag>li>div")[countTag+1]).removeClass("divdothover");
				$($(".tag>a>li")[countTag+1]).css(tagout);				
				$(targetdot).addClass("divdothover");
				$(tag).css(taghover);

			}
			if(nowscroll>=pageHeight*2/1.3){
				countTag = 2;
				var targetdot = $(".opentag>li>div")[countTag];
				var tag = $(".tag>a>li")[countTag];
				$($(".opentag>li>div")[countTag-1]).removeClass("divdothover");
				$($(".tag>a>li")[countTag-1]).css(tagout);
				$(targetdot).addClass("divdothover");
				$(tag).css(taghover);
			}
			console.log(countTag);
		});
	});
}

OpenTag();

//-------------


//scrollget();